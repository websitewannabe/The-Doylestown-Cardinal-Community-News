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
    const users = await db.select().from(users).where(eq(users.id, id));
    return users[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await db.select().from(users).where(eq(users.username, username));
    return users[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const users = await db.insert(users).values(insertUser).returning();
    return users[0];
  }

  // Article methods
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const articles = await db.insert(articles).values(insertArticle).returning();
    return articles[0];
  }

  async getArticle(id: number): Promise<Article | undefined> {
    const articles = await db.select().from(articles).where(eq(articles.id, id));
    return articles[0];
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const articles = await db.select().from(articles).where(eq(articles.slug, slug));
    return articles[0];
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

    return await query;
  }

  async getArticlesByCategory(categoryId: number): Promise<Article[]> {
    return await db
      .select()
      .from(articles)
      .where(eq(articles.categoryId, categoryId))
      .orderBy(desc(articles.createdAt));
  }

  async getArticlesByAuthor(authorId: number): Promise<Article[]> {
    return await db
      .select()
      .from(articles)
      .where(eq(articles.authorId, authorId))
      .orderBy(desc(articles.createdAt));
  }

  // Category methods
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const categories = await db.insert(categories).values(insertCategory).returning();
    return categories[0];
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const categories = await db.select().from(categories).where(eq(categories.id, id));
    return categories[0];
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const categories = await db.select().from(categories).where(eq(categories.slug, slug));
    return categories[0];
  }

  async listCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }
}

export const storage = new DatabaseStorage();