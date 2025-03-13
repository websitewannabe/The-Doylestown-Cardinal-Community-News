import { users, articles, categories, type User, type InsertUser, type Article, type InsertArticle, type Category, type InsertCategory } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Article methods
  createArticle(article: InsertArticle): Promise<Article>;
  getArticle(id: number): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  listArticles(options?: { limit?: number; offset?: number; published?: boolean }): Promise<Article[]>;
  getArticlesByCategory(categoryId: number): Promise<Article[]>;
  getArticlesByAuthor(authorId: number): Promise<Article[]>;

  // Category methods
  createCategory(category: InsertCategory): Promise<Category>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  listCategories(): Promise<Category[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const rows = await db.select().from(users).where(eq(users.id, id)).all();
    return rows[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const rows = await db.select().from(users).where(eq(users.username, username)).all();
    return rows[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const rows = await db.insert(users).values(insertUser).returning().all();
    return rows[0];
  }

  // Article methods
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const rows = await db.insert(articles).values(insertArticle).returning().all();
    return rows[0];
  }

  async getArticle(id: number): Promise<Article | undefined> {
    const rows = await db.select().from(articles).where(eq(articles.id, id)).all();
    return rows[0];
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const rows = await db.select().from(articles).where(eq(articles.slug, slug)).all();
    return rows[0];
  }

  async listArticles(options: { limit?: number; offset?: number; published?: boolean } = {}): Promise<Article[]> {
    let query = db.select().from(articles);

    if (options.published !== undefined) {
      query = query.where(eq(articles.published, options.published));
    }

    query = query.orderBy(desc(articles.createdAt));

    if (options.limit !== undefined) {
      query = query.limit(options.limit);
    }

    if (options.offset !== undefined) {
      query = query.offset(options.offset);
    }

    return await query.all();
  }

  async getArticlesByCategory(categoryId: number): Promise<Article[]> {
    return await db
      .select()
      .from(articles)
      .where(eq(articles.categoryId, categoryId))
      .orderBy(desc(articles.createdAt))
      .all();
  }

  async getArticlesByAuthor(authorId: number): Promise<Article[]> {
    return await db
      .select()
      .from(articles)
      .where(eq(articles.authorId, authorId))
      .orderBy(desc(articles.createdAt))
      .all();
  }

  // Category methods
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const rows = await db.insert(categories).values(insertCategory).returning().all();
    return rows[0];
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const rows = await db.select().from(categories).where(eq(categories.id, id)).all();
    return rows[0];
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const rows = await db.select().from(categories).where(eq(categories.slug, slug)).all();
    return rows[0];
  }

  async listCategories(): Promise<Category[]> {
    return await db.select().from(categories).all();
  }
}

export const storage = new DatabaseStorage();