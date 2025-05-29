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

  // Grammar check endpoint
  app.post('/api/grammar-check', async (req, res) => {
    try {
      const { articleBody, authorName, articleTitle } = req.body;

      if (!articleBody) {
        return res.status(400).json({ error: 'Article body is required' });
      }

      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'OpenAI API key not configured' });
      }

      const prompt = `Please check this article for grammar and spelling errors. Suggest corrections and return a side-by-side comparison of the original and edited versions. Also provide a list of specific suggestions for improvement.

Title: ${articleTitle || 'Untitled'}
Author: ${authorName || 'Anonymous'}

Article Content:
${articleBody}

Please respond with a JSON object containing:
1. "revisedText" - the corrected version of the article
2. "suggestions" - an array of specific improvement suggestions`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
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
          max_tokens: 4000,
          temperature: 0.3
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

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
      res.status(500).json({ 
        error: 'Failed to process grammar check',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}