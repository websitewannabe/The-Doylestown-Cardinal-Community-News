
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Plus, ArrowLeft, LogOut, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface Article {
  id: number;
  title: string;
  slug: string;
  published: boolean;
  category_id?: number;
  created_at: string;
}

interface ErrorState {
  message: string;
}

const AdminPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);
  const { user, logout } = useAuth();

  useEffect(() => {
    // Fetch articles and categories on component mount
    Promise.all([
      fetch("/api/articles").then((res) => res.json()),
      fetch("/api/categories").then((res) => res.json()),
    ])
      .then(([articlesData, categoriesData]) => {
        setArticles(articlesData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError({ message: "Failed to load data. Please try again." });
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this article?")) {
      return;
    }

    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setArticles(articles.filter((article) => article.id !== id));
      } else {
        setError({ message: "Failed to delete article" });
      }
    } catch (err) {
      console.error("Error deleting article:", err);
      setError({ message: "An error occurred while deleting the article" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-24 flex justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Link
              to="/"
              className="text-cardinal-red flex items-center gap-1 mt-2"
            >
              <ArrowLeft size={16} />
              Back to site
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              to="/admin/articles/new"
              className="bg-cardinal-red hover:bg-cardinal-red/90 text-white py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <Plus size={18} />
              New Article
            </Link>
            <button
              onClick={() => logout()}
              className="bg-charcoal-gray hover:bg-charcoal-gray/90 text-white py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error.message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Articles</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {articles.length > 0 ? (
                  articles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {article.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          /articles/{article.slug}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            article.published
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {article.published ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(article.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Link
                            to={`/admin/articles/${article.id}/edit`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No articles found. Create your first article!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
