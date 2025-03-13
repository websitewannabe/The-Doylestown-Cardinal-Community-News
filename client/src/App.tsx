import React from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import Home from "@/pages/home";
import CreateArticle from "@/pages/articles/create";
import NotFound from "@/pages/not-found";
import ArticlesPage from './pages/ArticlesPage';
import { NewsletterProvider } from './context/NewsletterContext';

// Separate component to use newsletter context
function AppContent() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/articles/create" component={CreateArticle} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/articles/:id" component={() => <div>Article Detail Page</div>} />
          <Route component={NotFound} /> {/*Catch-all for 404*/}
        </Switch>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <NewsletterProvider>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <Toaster />
      </QueryClientProvider>
    </NewsletterProvider>
  );
}