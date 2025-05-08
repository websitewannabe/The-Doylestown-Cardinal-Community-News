import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import he from 'he';

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
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    fetch('https://doylestowncardinal.com/wp-json/wp/v2/posts?_embed=true&per_page=100')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        return response.json();
      })
      .then((data) => {
        const mappedArticles = data.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: he.decode(post.title.rendered),
          excerpt: he.decode(post.excerpt.rendered.replace(/<[^>]*>/g, '')),
          category: post._embedded['wp:term'][0][0]?.name || 'Uncategorized',
          author: post._embedded.author[0]?.name || 'Unknown',
          date: new Date(post.date).toLocaleDateString(),
          image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '/images/article-placeholder.jpg',
          tags: post._embedded['wp:term'][1]?.map((tag: any) => tag.name) || [],
        }));
        setArticles(mappedArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading articles:', error);
        setError('Failed to load articles. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  const categories = [...new Set(articles.map((article) => article.category))];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading articles...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-gray mb-6">
            Latest Articles
          </h1>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
            Stay informed with the latest news, features, and stories from Doylestown and beyond.
          </p>
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

          {/* Main Content */}
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
          {filteredArticles.slice(0, displayCount).map((article) => (
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
                  <span className="text-charcoal-gray/60">{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

            {filteredArticles.length > displayCount && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 9)}
              className="inline-flex items-center px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-forest-green transition-colors"
            >
              Load More Articles
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;