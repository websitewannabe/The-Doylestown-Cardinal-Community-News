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
    try {
      const userResult = await db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .execute();
      return userResult[0];
    } catch (error) {
      console.error('Error in getUser:', error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const userResult = await db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .execute();
      return userResult[0];
    } catch (error) {
      console.error('Error in getUserByUsername:', error);
      throw error;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const userResult = await db
        .insert(users)
        .values(insertUser)
        .returning()
        .execute();
      return userResult[0];
    } catch (error) {
      console.error('Error in createUser:', error);
      throw error;
    }
  }

  // Article methods
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    try {
      const articleResult = await db
        .insert(articles)
        .values(insertArticle)
        .returning()
        .execute();
      return articleResult[0];
    } catch (error) {
      console.error('Error in createArticle:', error);
      throw error;
    }
  }

  async getArticle(id: number): Promise<Article | undefined> {
    try {
      const articleResult = await db
        .select()
        .from(articles)
        .where(eq(articles.id, id))
        .execute();
      return articleResult[0];
    } catch (error) {
      console.error('Error in getArticle:', error);
      throw error;
    }
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    try {
      const articleResult = await db
        .select()
        .from(articles)
        .where(eq(articles.slug, slug))
        .execute();
      return articleResult[0];
    } catch (error) {
      console.error('Error in getArticleBySlug:', error);
      throw error;
    }
  }

  async listArticles(options: { limit?: number; offset?: number; published?: boolean } = {}): Promise<Article[]> {
    try {
      let query = db
        .select()
        .from(articles)
        .orderBy(desc(articles.createdAt));

      if (options.published !== undefined) {
        query = query.where(eq(articles.published, options.published));
      }

      if (options.limit !== undefined) {
        query = query.limit(options.limit);
      }

      if (options.offset !== undefined) {
        query = query.offset(options.offset);
      }

      return await query.execute();
    } catch (error) {
      console.error('Error in listArticles:', error);
      throw error;
    }
  }

  async getArticlesByCategory(categoryId: number): Promise<Article[]> {
    try {
      return await db
        .select()
        .from(articles)
        .where(eq(articles.categoryId, categoryId))
        .orderBy(desc(articles.createdAt))
        .execute();
    } catch (error) {
      console.error('Error in getArticlesByCategory:', error);
      throw error;
    }
  }

  async getArticlesByAuthor(authorId: number): Promise<Article[]> {
    try {
      return await db
        .select()
        .from(articles)
        .where(eq(articles.authorId, authorId))
        .orderBy(desc(articles.createdAt))
        .execute();
    } catch (error) {
      console.error('Error in getArticlesByAuthor:', error);
      throw error;
    }
  }

  // Category methods
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    try {
      const categoryResult = await db
        .insert(categories)
        .values(insertCategory)
        .returning()
        .execute();
      return categoryResult[0];
    } catch (error) {
      console.error('Error in createCategory:', error);
      throw error;
    }
  }

  async getCategory(id: number): Promise<Category | undefined> {
    try {
      const categoryResult = await db
        .select()
        .from(categories)
        .where(eq(categories.id, id))
        .execute();
      return categoryResult[0];
    } catch (error) {
      console.error('Error in getCategory:', error);
      throw error;
    }
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    try {
      const categoryResult = await db
        .select()
        .from(categories)
        .where(eq(categories.slug, slug))
        .execute();
      return categoryResult[0];
    } catch (error) {
      console.error('Error in getCategoryBySlug:', error);
      throw error;
    }
  }

  async listCategories(): Promise<Category[]> {
    try {
      return await db
        .select()
        .from(categories)
        .execute();
    } catch (error) {
      console.error('Error in listCategories:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();