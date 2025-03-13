import { pgTable, text, serial, integer, boolean, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Keep existing users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Add articles table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  status: text("status", { enum: ["draft", "published", "archived"] }).default("draft").notNull(),
  authorId: integer("author_id").references(() => users.id).notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Add categories table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
});

// Add tags table
export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
});

// Add junction table for article tags
export const articleTags = pgTable("article_tags", {
  articleId: integer("article_id").references(() => articles.id).notNull(),
  tagId: integer("tag_id").references(() => tags.id).notNull(),
}, (t) => ({
  pk: primaryKey(t.articleId, t.tagId),
}));

// Define relations
export const articlesRelations = relations(articles, ({ one, many }) => ({
  author: one(users, {
    fields: [articles.authorId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
  tags: many(articleTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  articles: many(articleTags),
}));

// Keep existing user schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Add article schemas
export const insertArticleSchema = createInsertSchema(articles)
  .omit({ id: true, createdAt: true, updatedAt: true });

export const insertCategorySchema = createInsertSchema(categories)
  .omit({ id: true });

export const insertTagSchema = createInsertSchema(tags)
  .omit({ id: true });

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;
export type InsertTag = z.infer<typeof insertTagSchema>;
export type Tag = typeof tags.$inferSelect;