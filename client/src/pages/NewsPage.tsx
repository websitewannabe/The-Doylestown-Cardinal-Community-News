import React, { useState } from 'react';
import { Search, Share2, ChevronRight, Calendar, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for demonstration
const mockArticles = [
  {
    id: 1,
    title: "Historic Doylestown Theater Announces Major Renovation Plans",
    excerpt: "The beloved County Theater reveals ambitious restoration project aimed at preserving its art deco charm while modernizing facilities.",
    category: "Local News",
    author: "Sarah Mitchell",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    tags: ["Arts", "Community", "Development"]
  },
  {
    id: 2,
    title: "Farmers Market Expands with New Artisanal Vendors",
    excerpt: "Local market welcomes five new vendors, bringing unique crafts and organic produce to the community.",
    category: "Community",
    author: "Michael Chen",
    date: "2024-03-14",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    tags: ["Food", "Local Business", "Events"]
  },
  {
    id: 3,
    title: "Town Council Unveils New Green Initiative",
    excerpt: "Comprehensive sustainability plan includes solar panel installations and expanded recycling programs.",
    category: "Politics",
    author: "James Wilson",
    date: "2024-03-13",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
    tags: ["Environment", "Government", "Development"]
  }
];

const categories = [
  "All Categories",
  "Local News",
  "Politics",
  "Community",
  "Arts & Culture",
  "Business",
  "Education"
];

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleLoadMore = () => {
    setVisibleArticles(prev => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col mb-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Journalism background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Stories That Matter, Articles That Connect
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover the latest articles and in-depth coverage of Doylestown and Bucks County. From local politics to community events, we bring you the stories that shape our community.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="relative w-full h-[120px] text-[#F2F0EF] preserve-3d"
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor"
              d="M0,120 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter Bar */}
            <div className="border border-[#333333] rounded-lg p-4 mb-8 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-gray/60" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-8 mb-12">
              {mockArticles.slice(0, visibleArticles).map(article => (
                <article 
                  key={article.id} 
                  className="border border-[#333333] rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="relative h-full">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-cardinal-red">{article.category}</span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h2 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User2 size={14} className="mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-4">
                          <button className="text-gray-500 hover:text-cardinal-red transition-colors">
                            <Share2 size={18} />
                          </button>
                          <Link
                            to={`/articles/${article.id}`}
                            className="flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                          >
                            Read More
                            <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleArticles < mockArticles.length && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-cardinal-red text-white rounded-full font-semibold hover:bg-cardinal-red/90 transition-colors shadow-sm hover:shadow-md"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8 sticky top-32">
              {/* Popular Articles */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-6">Popular Articles</h3>
                <div className="space-y-6">
                  {mockArticles.slice(0, 3).map(article => (
                    <Link
                      key={article.id}
                      to={`/articles/${article.id}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium group-hover:text-cardinal-red transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar size={14} className="mr-1 flex-shrink-0" />
                          {article.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="border border-[#333333] rounded-lg p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(mockArticles.flatMap(article => article.tags))).map(tag => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-cardinal-red hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;