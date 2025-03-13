import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { isAuthenticated } from "./auth";

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
      const updated = await storage.updateArticle(Number(req.params.id), req.body);
      if (!updated) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(updated);
    } catch (error) {
      console.error('Error updating article:', error);
      res.status(500).json({ error: 'Failed to update article' });
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

  const httpServer = createServer(app);

  return httpServer;
}
