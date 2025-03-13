import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { db } from "./db";

const app = express();

// Parse JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// API Routes
app.get("/api/health", async (_req, res) => {
  try {
    console.log("Received health check request");
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

app.post("/api/users/test", async (req, res) => {
  try {
    console.log("Received test user creation request");
    const testUser = {
      username: "test_user",
      password: "test_password"
    };

    const parsed = insertUserSchema.safeParse(testUser);
    if (!parsed.success) {
      console.error("Validation failed:", parsed.error);
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).json({ error: "Invalid input", details: parsed.error.errors });
    }

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

// Add error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  console.error("Error:", err);
});

// Register routes and setup Vite/static serving
const mainServer = registerRoutes(app);

if (app.get("env") === "development") {
  setupVite(app, mainServer);
} else {
  serveStatic(app);
}

const PORT = 5000;
mainServer.listen(PORT, "0.0.0.0", () => {
  log(`Server running on http://0.0.0.0:${PORT}`);
  log("Available API endpoints:");
  log("- GET /api/health");
  log("- POST /api/users/test");
});