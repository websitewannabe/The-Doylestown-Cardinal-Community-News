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
    // Test database connection
    await db.execute("SELECT 1");
    res.json({ status: "healthy", database: "connected" });
  } catch (error) {
    console.error("Database health check failed:", error);
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
    const testUser = {
      username: "test_user",
      password: "test_password"
    };

    // Validate input
    const parsed = insertUserSchema.safeParse(testUser);
    if (!parsed.success) {
      console.error("Validation failed:", parsed.error);
      return res.status(400).json({ error: "Invalid input", details: parsed.error.errors });
    }

    // Create user
    const user = await storage.createUser(parsed.data);
    console.log("User created successfully:", user);
    res.json(user);
  } catch (error) {
    console.error("Database test failed:", error);
    res.status(500).json({ error: "Database test failed", details: error instanceof Error ? error.message : String(error) });
  }
});

const PORT = 5001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${PORT}`);
});
