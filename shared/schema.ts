
import { pgTable, text, serial, integer, boolean, timestamp, date, jsonb, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image"),
});

export const articles = pgTable("articles", {
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
  updated_at: timestamp("updated_at").defaultNow(),
});

export const events = pgTable("events", {
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
  created_at: timestamp("created_at").defaultNow(),
});

export const community_spotlights = pgTable("community_spotlights", {
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
  created_at: timestamp("created_at").defaultNow(),
});

export const business_directory = pgTable("business_directory", {
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
  features: jsonb("features"),
});

export const best_of_categories = pgTable("best_of_categories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
});

export const best_of_winners = pgTable("best_of_winners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category_id: integer("category_id").references(() => best_of_categories.id),
  business_id: integer("business_id").references(() => business_directory.id),
  description: text("description"),
  image: text("image"),
  year: integer("year").notNull(),
});

export const newsletter_subscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  subscribed_at: timestamp("subscribed_at").defaultNow(),
  active: boolean("active").default(true),
});

// Schema types and export schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCategorySchema = createInsertSchema(categories);
export const insertArticleSchema = createInsertSchema(articles);
export const insertEventSchema = createInsertSchema(events);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;

export type Article = typeof articles.$inferSelect;
export type InsertArticle = typeof articles.$inferInsert;

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

export type CommunitySpotlight = typeof community_spotlights.$inferSelect;
export type BusinessDirectory = typeof business_directory.$inferSelect;
export type BestOfCategory = typeof best_of_categories.$inferSelect;
export type BestOfWinner = typeof best_of_winners.$inferSelect;
export type NewsletterSubscriber = typeof newsletter_subscribers.$inferSelect;

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  articles: many(articles),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
}));

export const articlesRelations = relations(articles, ({ one }) => ({
  category: one(categories, {
    fields: [articles.category_id],
    references: [categories.id],
  }),
  author: one(users, {
    fields: [articles.author_id],
    references: [users.id],
  }),
}));
