import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

const monthOptions = [
  ...new Set(
    articles.map(article => {
      const date = new Date(article.date);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    })
  )
].sort((a, b) => b.localeCompare(a));
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/data/articles.json');
        if (!response.ok) throw new Error("Failed to load article list");
        const data = await response.json();
        const sorted = data.sort((a: Article, b: Article) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setArticles(sorted);
      } catch (err) {
        console.error("Failed to load articles:", err);
        setError("Failed to load articles.");
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    if (categoryFromURL) {
      const categoryMap: { [key: string]: string } = {
        'fit': 'Fitness',
        'style': 'Style',
        'business': 'Business',
        'technology': 'Technology',
        'life': 'Life',
        'art-music': 'Art/Music',
        'stay': 'Hotels',
        'taste': 'Restaurants',
        'play': 'Things To Do',
        'real-estate': 'Real Estate'
      };
      setSelectedCategory(categoryMap[categoryFromURL] || categoryFromURL);
    }
  }, [searchParams]);

  const categories = [...new Set(articles.map((article) => article.category))];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;

    const articleMonth = `${new Date(article.date).getFullYear()}-${String(new Date(article.date).getMonth() + 1).padStart(2, '0')}`;
    const matchesMonth = !selectedMonth || articleMonth === selectedMonth;

    return matchesSearch && matchesCategory && matchesMonth;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"/>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"/>
                  <div className="h-6 bg-gray-200 rounded mb-2"/>
                  <div className="h-4 bg-gray-200 rounded mb-4"/>
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-1/4"/>
                    <div className="h-3 bg-gray-200 rounded w-1/4"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      <div className="relative h-[55vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Articles background"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-16 lg:px-8 h-full flex items-center">
          <div>
            <div className="flex items-center gap-2 text-sm text-off-white/90 mb-4">
              <Link to="/" className="hover:text-forest-green transition-colors">Home</Link>
              <span>/</span>
              <span>Articles</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-off-white mb-4">
              Latest Articles
            </h1>
            <p className="text-xl text-off-white/90 max-w-2xl mb-8">
              Stay informed with the latest news, features, and stories from Doylestown and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/subscribe"
                className="hidden md:inline-flex bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors items-center gap-2"
              >
                Subscribe
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-64 shrink-0">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-playfair text-xl font-bold text-charcoal-gray mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    !selectedCategory ? "bg-cardinal-red text-white" : "hover:bg-gray-100"
                  }`}
                >
                  All Categories
                  <span className="float-right">{articles.length}</span>
                </button>
                {categories.sort().map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      selectedCategory === category ? "bg-cardinal-red text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {category}
                    <span className="float-right">
                      {articles.filter(a => a.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm mt-6">
              <label htmlFor="month-select" className="block text-sm font-semibold text-charcoal-gray mb-2">
                Filter by Month
              </label>
              <select
                id="month-select"
                value={selectedMonth || ''}
                onChange={(e) => setSelectedMonth(e.target.value || null)}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">All Dates</option>
                {monthOptions.map((month) => {
                  const [year, rawMonth] = month.split('-');
                  const label = new Date(`${year}-${rawMonth}-01`).toLocaleString('default', {
                    month: 'long',
                    year: 'numeric',
                  });
                  return (
                    <option key={month} value={month}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-cardinal-red mb-2">{article.category}</div>
                    <h2 className="font-playfair text-xl font-bold text-charcoal-gray group-hover:text-cardinal-red transition-colors mb-2">
                      {article.title}
                    </h2>
                    <p className="text-charcoal-gray/80 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-gray/60">{article.author}</span>
                      <span className="text-charcoal-gray/60">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;