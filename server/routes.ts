import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { isAuthenticated } from "./auth";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { db } from './db';
import { users, articles, events } from '../shared/schema';
import { eq } from 'drizzle-orm';
import { authenticateToken } from './auth';
import OpenAI from 'openai';
export function registerRoutes(app: Express): Server {
  // Article routes
  app.get('/api/articles', async (req: Request, res: Response) => {
    try {
      const articles = await storage.getAllArticles();
      res.json(articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  app.get('/api/articles/:slug', async (req: Request, res: Response) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(article);
    } catch (error) {
      console.error('Error fetching article:', error);
      res.status(500).json({ error: 'Failed to fetch article' });
    }
  });

  app.post('/api/articles', isAuthenticated, async (req: Request, res: Response) => {
    try {
      const newArticle = await storage.insertArticle(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      console.error('Error creating article:', error);
      res.status(500).json({ error: 'Failed to create article' });
    }
  });

  app.put('/api/articles/:id', isAuthenticated, async (req: Request, res: Response) => {
    try {
      const articleId = Number(req.params.id);
      if (isNaN(articleId)) {
        return res.status(400).json({ error: 'Invalid article ID' });
      }

      const updated = await storage.updateArticle(articleId, req.body);
      if (!updated) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(updated);
    } catch (error) {
      console.error('Error updating article:', error);
      // Include more details about the error in development
      const errorMessage = process.env.NODE_ENV === 'production' 
        ? 'Failed to update article' 
        : `Failed to update article: ${error.message}`;
      res.status(500).json({ error: errorMessage });
    }
  });

  app.delete('/api/articles/:id', isAuthenticated, async (req: Request, res: Response) => {
    try {
      const success = await storage.deleteArticle(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting article:', error);
      res.status(500).json({ error: 'Failed to delete article' });
    }
  });

  // Categories API
  app.get('/api/categories', async (req: Request, res: Response) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  });

  // Events routes
  app.get('/api/events', async (req, res) => {
    try {
      const allEvents = await db.select().from(events);
      res.json(allEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

  // Rate limiting for grammar check
  const grammarCheckQueue = new Map();
  const RATE_LIMIT_DELAY = 60000; // 1 minute delay between requests

  // Grammar check endpoint
  app.post('/api/grammar-check', async (req, res) => {
    try {
      const { articleBody, authorName, articleTitle } = req.body;

      if (!articleBody) {
        return res.status(400).json({ error: 'Article body is required' });
      }

      // Rate limiting check
      const clientIP = req.ip || req.connection.remoteAddress;
      const now = Date.now();
      const lastRequest = grammarCheckQueue.get(clientIP);
      
      if (lastRequest && (now - lastRequest) < RATE_LIMIT_DELAY) {
        const waitTime = Math.ceil((RATE_LIMIT_DELAY - (now - lastRequest)) / 1000);
        return res.status(429).json({ 
          error: `Please wait ${waitTime} seconds before making another grammar check request`,
          waitTime: waitTime
        });
      }

      grammarCheckQueue.set(clientIP, now);

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'OpenAI API key not configured' });
      }

      // Truncate content if too long to reduce token usage
      const maxContentLength = 8000; // Limit content to reduce token usage
      const truncatedBody = articleBody.length > maxContentLength 
        ? articleBody.substring(0, maxContentLength) + '...[content truncated]'
        : articleBody;

      const prompt = `Please check this article for grammar and spelling errors. Suggest corrections and return a side-by-side comparison of the original and edited versions. Also provide a list of specific suggestions for improvement.

Title: ${articleTitle || 'Untitled'}
Author: ${authorName || 'Anonymous'}

Article Content:
${truncatedBody}

Please respond with a JSON object containing:
1. "revisedText" - the corrected version of the article
2. "suggestions" - an array of specific improvement suggestions`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Use cheaper model to reduce costs/quota usage
        messages: [
          {
            role: 'system',
            content: 'You are a professional editor and grammar checker. Provide detailed, helpful feedback on written content. Always respond with valid JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000, // Reduced token limit
        temperature: 0.3
      });

      const content = completion.choices[0]?.message?.content;

      if (!content) {
        throw new Error('No response from OpenAI');
      }

      try {
        // Try to parse as JSON first
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const result = JSON.parse(jsonMatch[0]);
          res.json(result);
        } else {
          // Fallback: treat the entire response as revised text
          res.json({
            revisedText: content,
            suggestions: ['Please review the AI suggestions provided above.']
          });
        }
      } catch (parseError) {
        // If JSON parsing fails, return the content as revised text
        res.json({
          revisedText: content,
          suggestions: ['Grammar and spelling suggestions provided by AI.']
        });
      }

    } catch (error) {
      console.error('Grammar check error:', error);
      
      // Handle specific OpenAI errors
      if (error.status === 429) {
        return res.status(429).json({ 
          error: 'OpenAI API rate limit exceeded. Please try again in a few minutes.',
          details: 'Too many requests - please wait before making another grammar check request'
        });
      } else if (error.status === 401) {
        return res.status(500).json({ 
          error: 'OpenAI API authentication failed. Please check your API key.',
          details: 'Invalid API key or insufficient permissions'
        });
      } else if (error.code === 'insufficient_quota') {
        return res.status(429).json({ 
          error: 'OpenAI API quota exceeded. Please check your billing details.',
          details: 'Your OpenAI account has exceeded its usage quota'
        });
      }
      
      res.status(500).json({ 
        error: 'Failed to process grammar check',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}