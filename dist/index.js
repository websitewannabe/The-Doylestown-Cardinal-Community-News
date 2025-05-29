var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  articles: () => articles,
  articlesRelations: () => articlesRelations,
  best_of_categories: () => best_of_categories,
  best_of_winners: () => best_of_winners,
  business_directory: () => business_directory,
  categories: () => categories,
  categoriesRelations: () => categoriesRelations,
  community_spotlights: () => community_spotlights,
  events: () => events,
  insertArticleSchema: () => insertArticleSchema,
  insertCategorySchema: () => insertCategorySchema,
  insertEventSchema: () => insertEventSchema,
  insertUserSchema: () => insertUserSchema,
  newsletter_subscribers: () => newsletter_subscribers,
  users: () => users,
  usersRelations: () => usersRelations
});
import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image")
});
var articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  featured_image: text("featured_image"),
  category_id: integer("category_id").references(() => categories.id),
  author_id: integer("author_id").references(() => users.id),
  published: boolean("published").default(false),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow()
});
var events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  location: text("location"),
  address: text("address"),
  start_date: timestamp("start_date").notNull(),
  end_date: timestamp("end_date"),
  image: text("image"),
  website: text("website"),
  is_featured: boolean("is_featured").default(false),
  created_at: timestamp("created_at").defaultNow()
});
var community_spotlights = pgTable("community_spotlights", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  bio: text("bio").notNull(),
  image: text("image"),
  email: text("email"),
  twitter: text("twitter"),
  linkedin: text("linkedin"),
  years_in_community: integer("years_in_community"),
  achievements: jsonb("achievements"),
  initiatives: jsonb("initiatives"),
  testimonials: jsonb("testimonials"),
  images: jsonb("images"),
  created_at: timestamp("created_at").defaultNow()
});
var business_directory = pgTable("business_directory", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category"),
  description: text("description"),
  address: text("address"),
  phone: text("phone"),
  website: text("website"),
  image: text("image"),
  rating: integer("rating"),
  votes: integer("votes").default(0),
  reviews: integer("reviews").default(0),
  hours: text("hours"),
  features: jsonb("features")
});
var best_of_categories = pgTable("best_of_categories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description")
});
var best_of_winners = pgTable("best_of_winners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category_id: integer("category_id").references(() => best_of_categories.id),
  business_id: integer("business_id").references(() => business_directory.id),
  description: text("description"),
  image: text("image"),
  year: integer("year").notNull()
});
var newsletter_subscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  subscribed_at: timestamp("subscribed_at").defaultNow(),
  active: boolean("active").default(true)
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertCategorySchema = createInsertSchema(categories);
var insertArticleSchema = createInsertSchema(articles);
var insertEventSchema = createInsertSchema(events);
var usersRelations = relations(users, ({ many }) => ({
  articles: many(articles)
}));
var categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles)
}));
var articlesRelations = relations(articles, ({ one }) => ({
  category: one(categories, {
    fields: [articles.category_id],
    references: [categories.id]
  }),
  author: one(users, {
    fields: [articles.author_id],
    references: [users.id]
  })
}));

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
import { desc } from "drizzle-orm";
import session from "express-session";
import createMemoryStore from "memorystore";
var MemoryStore = createMemoryStore(session);
var DatabaseStorage = class {
  sessionStore;
  constructor() {
    this.sessionStore = new MemoryStore({
      checkPeriod: 864e5
      // prune expired entries every 24h
    });
  }
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserById(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async getAllArticles() {
    return db.query.articles.findMany({
      orderBy: [desc(articles.created_at)],
      with: {
        category: true,
        author: true
      }
    });
  }
  async getArticleBySlug(slug) {
    return db.query.articles.findFirst({
      where: eq(articles.slug, slug),
      with: {
        category: true,
        author: true
      }
    }) || null;
  }
  async insertArticle(article) {
    const result = await db.insert(articles).values(article).returning();
    return result[0];
  }
  async updateArticle(id, article) {
    const result = await db.update(articles).set({
      ...article,
      updated_at: /* @__PURE__ */ new Date()
    }).where(eq(articles.id, id)).returning();
    return result[0] || null;
  }
  async deleteArticle(id) {
    const result = await db.delete(articles).where(eq(articles.id, id)).returning();
    return result.length > 0;
  }
  async getAllCategories() {
    return db.query.categories.findMany();
  }
  async insertUser(user) {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }
};
var storage = new DatabaseStorage();

// server/auth.ts
import bcrypt from "bcryptjs";
import session2 from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
function setupAuth(app2) {
  app2.use(
    session2({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: false,
      store: storage.sessionStore,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1e3 * 60 * 60 * 24
        // 24 hours
      }
    })
  );
  app2.use(passport.initialize());
  app2.use(passport.session());
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user) {
        console.log("Login failed: User not found -", username);
        return done(null, false, { message: "Incorrect username." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Login failed: Invalid password -", username);
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("Login successful:", username);
      return done(null, user);
    } catch (err) {
      console.error("Login error:", err);
      return done(err);
    }
  }));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await storage.getUserById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  app2.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({ success: true, user: req.user });
  });
  app2.post("/api/logout", (req, res, next) => {
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ success: true });
    });
  });
  app2.get("/api/auth/check", (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });
}
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
}

// server/routes.ts
function registerRoutes(app2) {
  app2.get("/api/articles", async (req, res) => {
    try {
      const articles3 = await storage.getAllArticles();
      res.json(articles3);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });
  app2.get("/api/articles/:slug", async (req, res) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });
  app2.post("/api/articles", isAuthenticated, async (req, res) => {
    try {
      const newArticle = await storage.insertArticle(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      console.error("Error creating article:", error);
      res.status(500).json({ error: "Failed to create article" });
    }
  });
  app2.put("/api/articles/:id", isAuthenticated, async (req, res) => {
    try {
      const articleId = Number(req.params.id);
      if (isNaN(articleId)) {
        return res.status(400).json({ error: "Invalid article ID" });
      }
      const updated = await storage.updateArticle(articleId, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(updated);
    } catch (error) {
      console.error("Error updating article:", error);
      const errorMessage = process.env.NODE_ENV === "production" ? "Failed to update article" : `Failed to update article: ${error.message}`;
      res.status(500).json({ error: errorMessage });
    }
  });
  app2.delete("/api/articles/:id", isAuthenticated, async (req, res) => {
    try {
      const success = await storage.deleteArticle(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting article:", error);
      res.status(500).json({ error: "Failed to delete article" });
    }
  });
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories3 = await storage.getAllCategories();
      res.json(categories3);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });
  app2.get("/api/events", async (req, res) => {
    try {
      const allEvents = await db.select().from(events);
      res.json(allEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });
  app2.post("/api/grammar-check", async (req, res) => {
    try {
      const { articleBody, authorName, articleTitle } = req.body;
      if (!articleBody) {
        return res.status(400).json({ error: "Article body is required" });
      }
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "OpenAI API key not configured" });
      }
      const prompt = `Please check this article for grammar and spelling errors. Suggest corrections and return a side-by-side comparison of the original and edited versions. Also provide a list of specific suggestions for improvement.

Title: ${articleTitle || "Untitled"}
Author: ${authorName || "Anonymous"}

Article Content:
${articleBody}

Please respond with a JSON object containing:
1. "revisedText" - the corrected version of the article
2. "suggestions" - an array of specific improvement suggestions`;
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: "You are a professional editor and grammar checker. Provide detailed, helpful feedback on written content. Always respond with valid JSON format."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          max_tokens: 4e3,
          temperature: 0.3
        })
      });
      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }
      const data = await response.json();
      const content = data.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No response from OpenAI");
      }
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const result = JSON.parse(jsonMatch[0]);
          res.json(result);
        } else {
          res.json({
            revisedText: content,
            suggestions: ["Please review the AI suggestions provided above."]
          });
        }
      } catch (parseError) {
        res.json({
          revisedText: content,
          suggestions: ["Grammar and spelling suggestions provided by AI."]
        });
      }
    } catch (error) {
      console.error("Grammar check error:", error);
      res.status(500).json({
        error: "Failed to process grammar check",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api") || path3 === "/health") {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
log("Setting up authentication...");
setupAuth(app);
log("Authentication setup complete");
(async () => {
  try {
    log("Registering routes...");
    const server = registerRoutes(app);
    log("Routes registered successfully");
    app.use((err, _req, res, _next) => {
      console.error("Error:", err);
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
    });
    if (app.get("env") === "development") {
      log("Setting up Vite middleware...");
      await setupVite(app, server);
      log("Vite middleware setup complete");
    } else {
      log("Setting up static file serving...");
      serveStatic(app);
      log("Static file serving setup complete");
    }
    const PORT = 5e3;
    log(`Starting server on port ${PORT}...`);
    server.listen(PORT, "0.0.0.0", () => {
      log(`Server is running on port ${PORT}`);
    }).on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        log(`Port ${PORT} is already in use. Attempting to kill the process...`);
        process.exit(1);
      } else {
        console.error("Server error:", err);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error("Fatal error during server startup:", error);
    process.exit(1);
  }
})();
