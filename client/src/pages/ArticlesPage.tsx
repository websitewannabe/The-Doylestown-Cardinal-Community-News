import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { writerDirectory } from "../data/writerDirectory";
import { Calendar, ChevronRight } from "lucide-react";

interface Article {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    author?: Array<{ name: string }>;
  };
}

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(2); // Start at 2 since we load pages 1 & 2 initially
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        const [page1, page2] = await Promise.all([
          fetch("https://doylestowncardinal.com/wp-json/wp/v2/posts?per_page=100&_embed=true&page=1").then(res => res.json()),
          fetch("https://doylestowncardinal.com/wp-json/wp/v2/posts?per_page=100&_embed=true&page=2").then(res => res.json())
        ]);

        const initialArticles = [...page1, ...page2];
        const sorted = initialArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setArticles(sorted);
        setHasMore(page1.length === 100 && page2.length === 100);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialArticles();
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const [next1, next2] = await Promise.all([
        fetch(`https://doylestowncardinal.com/wp-json/wp/v2/posts?per_page=100&_embed=true&page=${page + 1}`).then(res => res.json()),
        fetch(`https://doylestowncardinal.com/wp-json/wp/v2/posts?per_page=100&_embed=true&page=${page + 2}`).then(res => res.json())
      ]);

      const nextBatch = [...next1, ...next2];
      const updated = [...articles, ...nextBatch].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setArticles(updated);
      setPage(page + 2);
      setHasMore(next1.length === 100 && next2.length === 100);
    } catch (error) {
      console.error("Failed to load more articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-gray mb-6">
            Articles
          </h1>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
            Explore our collection of stories that matter to the Doylestown
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => {
            const authorName = article._embedded?.author?.[0]?.name || "Staff";
            const writerId = writerDirectory[authorName];

            return (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#333333]/10"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-cardinal-red mb-4">
                    <Calendar size={16} />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <h2
                    className="font-playfair text-2xl font-bold text-charcoal-gray hover:text-cardinal-red transition-colors mb-4"
                    dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                  />
                  <div
                    className="text-charcoal-gray/80 line-clamp-3 mb-4"
                    dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
                  />
                  {writerId && (
                    <Link
                      to={`/writer/${writerId}`}
                      className="text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      By {authorName}
                    </Link>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {hasMore && (
          <div className="flex justify-center mb-16">
            <button
              onClick={loadMore}
              disabled={loading}
              className={`px-6 py-2 bg-cardinal-red text-white rounded hover:bg-forest-green transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Loading...' : 'Load More Articles'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;