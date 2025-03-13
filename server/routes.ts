import type { Express, Router } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { db } from "./db";

export function registerRoutes(app: Express): Server {
  // Create a dedicated router for API routes
  const apiRouter = Router();

  // Health check endpoint
  apiRouter.get("/health", async (_req, res) => {
    try {
      // Test database connection
      await db.execute("SELECT 1");
      res.setHeader('Content-Type', 'application/json');
      res.json({ status: "healthy", database: "connected" });
    } catch (error) {
      console.error("Database health check failed:", error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ 
        status: "unhealthy", 
        database: "disconnected",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // Test endpoint for database connectivity
  apiRouter.post("/users/test", async (req, res) => {
    try {
      const testUser = {
        username: "test_user",
        password: "test_password"
      };

      // Validate input
      const parsed = insertUserSchema.safeParse(testUser);
      if (!parsed.success) {
        console.error("Validation failed:", parsed.error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: "Invalid input", details: parsed.error.errors });
      }

      // Create user
      const user = await storage.createUser(parsed.data);
      console.log("User created successfully:", user);
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    } catch (error) {
      console.error("Database test failed:", error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ error: "Database test failed", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Mount the API router with prefix
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}