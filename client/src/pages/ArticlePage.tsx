import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  ArrowLeft,
  Mail,
} from "lucide-react";
import articlesData from "../data/articles.json";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the current article by slug
  const article = articlesData.articles.find(a => a.slug === slug);

  // Get related articles (exclude current article, limit to 3)
  const relatedArticles = articlesData.articles
    .filter(a => a.id !== article?.id)
    .slice(0, 3);

  // If no article found, show 404
  if (!article) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/articles"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
      <div className="container mx-auto px-4 max-w-5xl">
        <nav className="flex items-center space-x-2 text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/news" className="hover:text-gray-700">
            News
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{article.category}</span>
        </nav>

        <article className="bg-white rounded-xl shadow-md p-8 mb-12">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readingTime}
              </span>
              <Link
                to={`/writer/${article.author.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-1 hover:text-gray-700"
              >
                <User2 className="w-4 h-4" />
                {article.author}
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600">{article.subtitle}</p>
          </header>

          <img
            src={article.mainImage}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 mb-8">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 text-sm"
                >
                  {tag}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <Link
                    to={`/writer/${article.author.toLowerCase().replace(/\s+/g, "-")}`}
                    className="font-medium text-gray-900 hover:text-gray-700"
                  >
                    {article.author}
                  </Link>
                  <p className="text-sm text-gray-500">{article.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <div className="flex items-center gap-2">
                  <a href="#" className="p-2 text-gray-500 hover:text-blue-600">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 text-gray-500 hover:text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 text-gray-500 hover:text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 text-gray-500 hover:text-red-500">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </article>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                to={`/articles/${relatedArticle.slug}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={relatedArticle.mainImage}
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {relatedArticle.date}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    {relatedArticle.readingTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Link
          to="/articles"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;