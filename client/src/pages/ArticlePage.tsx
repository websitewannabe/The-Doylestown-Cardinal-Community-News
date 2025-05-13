import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { writerDirectory } from "../data/writerDirectory";
import { ArrowLeft } from 'lucide-react';
import he from 'he';

interface Article {
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
}

const ArticlePage = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://doylestowncardinal.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();

        if (data.length > 0) {
          const post = data[0];
          let resolvedAuthor = post._embedded.author[0]?.name || "Staff";

          // If author is Staff, scan content for known writer names
          if (resolvedAuthor === "Staff") {
            const content = post.content.rendered.toLowerCase();
            const foundAuthor = Object.keys(writerDirectory).find(name =>
              content.includes(name.toLowerCase())
            );
            if (foundAuthor) {
              resolvedAuthor = foundAuthor;
            }

            console.log('Resolved author:', resolvedAuthor);

            setArticle({
              title: he.decode(post.title.rendered),
              content: post.content.rendered,
              excerpt: he.decode(post.excerpt.rendered.replace(/<[^>]*>/g, '')),
              date: new Date(post.date).toLocaleDateString(),
              author: resolvedAuthor,
              image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '/images/article-placeholder.jpg',
            });
          } else {
             console.log('Resolved author:', resolvedAuthor);

            setArticle({
              title: he.decode(post.title.rendered),
              content: post.content.rendered,
              excerpt: he.decode(post.excerpt.rendered.replace(/<[^>]*>/g, '')),
              date: new Date(post.date).toLocaleDateString(),
              author: resolvedAuthor,
              image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '/images/article-placeholder.jpg',
            });
          }
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Failed to load article. Please try again later.');
        console.error('Error fetching article:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
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
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;