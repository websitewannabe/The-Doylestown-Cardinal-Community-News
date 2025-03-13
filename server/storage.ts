import { users, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { db as db2 } from './db';
import { articles, categories, type Article, type InsertArticle } from '../shared/schema';
import { eq, desc } from 'drizzle-orm';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | null>;
  insertArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | null>;
  deleteArticle(id: number): Promise<boolean>;
  getAllCategories():Promise<any[]>;
  insertUser(user: { username: string; password: string }): Promise<any>;


}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllArticles() {
    return db2.query.articles.findMany({
      orderBy: [desc(articles.created_at)],
      with: {
        category: true,
        author: true
      },
    });
  }

  async getArticleBySlug(slug: string) {
    return db2.query.articles.findFirst({
      where: eq(articles.slug, slug),
      with: {
        category: true,
        author: true
      },
    });
  }

  async insertArticle(article: InsertArticle) {
    const result = await db2.insert(articles).values(article).returning();
    return result[0];
  }

  async updateArticle(id: number, article: Partial<InsertArticle>) {
    const result = await db2.update(articles)
      .set({
        ...article,
        updated_at: new Date()
      })
      .where(eq(articles.id, id))
      .returning();

    return result[0] || null;
  }

  async deleteArticle(id: number) {
    const result = await db2.delete(articles)
      .where(eq(articles.id, id))
      .returning();

    return result.length > 0;
  }

  async getAllCategories() {
    return db2.query.categories.findMany();
  }

  async insertUser(user: { username: string; password: string }) {
    const result = await db2.insert(users).values(user).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();