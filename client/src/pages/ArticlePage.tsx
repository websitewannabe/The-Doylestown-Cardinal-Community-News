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
  slug: string;
}

const ArticlePage = () => {
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        });

        // Load recent articles
        const allRes = await fetch('/data/articles.json');
        const allArticles = await allRes.json();

        const recent = allArticles
          .filter((a: Article) => a.slug !== slug)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);

        setRecentArticles(recent);
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

        <div className="w-full flex justify-center mb-8">
          <img
            src={article.image || '/images/article-placeholder.jpg'}
            alt={article.title}
            className="max-w-4xl w-full h-auto rounded-lg"
          />
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-charcoal-gray prose-p:text-charcoal-gray/80 prose-img:mx-auto prose-img:rounded-lg prose-img:my-6 prose-img:max-w-full prose-img:h-auto prose-img:w-auto prose-img:object-contain"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {recentArticles.length > 0 && (
          <div className="mt-16 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-playfair font-bold text-charcoal-gray mb-6">Recent Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recentArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/articles/${a.slug}`}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-cardinal-red text-sm mb-1">{new Date(a.date).toLocaleDateString()}</div>
                    <h3 className="font-semibold text-charcoal-gray text-lg mb-1">{a.title}</h3>
                    <p className="text-sm text-charcoal-gray/70 line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;