import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // put application routes here
  // prefix all routes with /api
  
  // Define a route for the admin interface home
  app.get('/admin', (req, res) => {
    res.redirect('/admin/dashboard');
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
