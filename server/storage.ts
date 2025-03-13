import { users, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { articles, categories, type Article, type InsertArticle } from '../shared/schema';
import { desc } from 'drizzle-orm';
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export class Storage {
  sessionStore = new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  });

  async getUserById(id: number): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.id, id));
      return result[0];
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.username, username));
      return result[0];
    } catch (error) {
      console.error("Error fetching user by username:", error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
}

export const storage = new Storage();

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserById(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | null>;
  insertArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | null>;
  deleteArticle(id: number): Promise<boolean>;
  getAllCategories(): Promise<any[]>;
  insertUser(user: { username: string; password: string }): Promise<User>;
  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserById(id: number): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllArticles() {
    return db.query.articles.findMany({
      orderBy: [desc(articles.created_at)],
      with: {
        category: true,
        author: true
      },
    });
  }

  async getArticleBySlug(slug: string) {
    return db.query.articles.findFirst({
      where: eq(articles.slug, slug),
      with: {
        category: true,
        author: true
      },
    }) || null;
  }

  async insertArticle(article: InsertArticle) {
    const result = await db.insert(articles).values(article).returning();
    return result[0];
  }

  async updateArticle(id: number, article: Partial<InsertArticle>) {
    const result = await db.update(articles)
      .set({
        ...article,
        updated_at: new Date()
      })
      .where(eq(articles.id, id))
      .returning();

    return result[0] || null;
  }

  async deleteArticle(id: number) {
    const result = await db.delete(articles)
      .where(eq(articles.id, id))
      .returning();

    return result.length > 0;
  }

  async getAllCategories() {
    return db.query.categories.findMany();
  }

  async insertUser(user: { username: string; password: string }): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }
}

export const storage = new DatabaseStorage();