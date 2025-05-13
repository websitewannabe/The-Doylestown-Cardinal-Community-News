import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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
  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/data/articles.json');
        if (!response.ok) throw new Error("Failed to load article index");
        const data = await response.json();
        const sorted = data.sort((a: Article, b: Article) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setArticles(sorted);
      } catch (err) {
        console.error('Error loading articles:', err);
        setError("Failed to load articles.");
      } finally {
        setIsLoading(false);
      }
    };
    loadArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(articles.map(a => a.category))];

  if (isLoading) {
    return <div className="text-center pt-32 text-xl">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center pt-32 text-red-600 text-xl">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair mb-8 text-charcoal-gray">Latest Articles</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Categories Sidebar */}
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
          </div>

          {/* Articles Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-cardinal-red mb-1 text-sm">{article.category}</div>
                  <h2 className="font-playfair text-xl font-bold text-charcoal-gray group-hover:text-cardinal-red mb-2">
                    {article.title}
                  </h2>
                  <p className="text-charcoal-gray/80 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="text-sm text-charcoal-gray/60 flex justify-between">
                    <span>{article.author}</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;