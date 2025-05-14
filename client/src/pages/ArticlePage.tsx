import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { writerDirectory } from "../data/writerDirectory";
import { ArrowLeft } from 'lucide-react';

interface Article {
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  category: string;
  slug: string;
}

const ArticlePage = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchLocalArticle = async () => {
      try {
        const response = await fetch(`/data/articles/${slug}.json`);
        if (!response.ok) {
          throw new Error("Article not found");
        }
        const data = await response.json();

        let resolvedAuthor = data.author;

        // If author is "Staff", scan content for known names
        if (resolvedAuthor === "Staff") {
          const lowerContent = data.content.toLowerCase();
          const match = Object.keys(writerDirectory).find(name =>
            lowerContent.includes(name.toLowerCase())
          );
          if (match) {
            resolvedAuthor = match;
          }
        }

        setArticle({
          title: data.title,
          content: data.content,
          excerpt: data.excerpt,
          date: new Date(data.date).toLocaleDateString(),
          author: resolvedAuthor,
          image: data.thumbnail || '/images/article-placeholder.jpg',
          category: data.category,
          slug: data.slug,
        });

        // Load all articles to find related ones
        const allRes = await fetch('/data/articles.json');
        const allArticles = await allRes.json();

        // Get same-category articles excluding current one
        const related = allArticles
          .filter((a: Article) => 
            a.category === data.category && 
            a.slug !== slug
          )
          .slice(0, 3); // Limit to 3

        setRelatedArticles(related);
      } catch (err) {
        setError("Failed to load article. Please try again later.");
        console.error("Error loading local article:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocalArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-2xl text-center">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xl text-red-600 text-center mb-8">{error}</div>
          <Link
            to="/articles"
            className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/articles"
          className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-charcoal-gray/60 mb-8">
              {article.author && writerDirectory[article.author] ? (
                <Link
                  to={`/writer/${writerDirectory[article.author]}`}
                  className="text-cardinal-red hover:text-forest-green font-semibold"
                >
                  {article.author}
                </Link>
              ) : (
                <span>{article.author || "Staff"}</span>
              )}
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
            <div 
              className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-charcoal-gray prose-p:text-charcoal-gray/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-playfair font-bold text-charcoal-gray mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/articles/${article.slug}`}
                    className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="text-cardinal-red text-sm mb-1">{article.category}</div>
                      <h3 className="font-semibold text-charcoal-gray text-lg mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-charcoal-gray/70 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;