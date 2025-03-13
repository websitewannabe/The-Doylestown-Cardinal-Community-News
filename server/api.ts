import express from "express";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { db } from "./db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add CORS middleware for development
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Health check endpoint
app.get("/health", async (_req, res) => {
  try {
    console.log("Received health check request");
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
app.post("/users/test", async (req, res) => {
  try {
    console.log("Received test user creation request");
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

const PORT = 5001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server is running on http://0.0.0.0:${PORT}`);
  console.log("Available endpoints:");
  console.log("- GET /health");
  console.log("- POST /users/test");
});