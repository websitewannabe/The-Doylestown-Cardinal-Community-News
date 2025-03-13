
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save, Eye, Upload } from "lucide-react";

const ArticleEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNewArticle = id === "new";
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    category_id: "",
    published: false,
  });
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(!isNewArticle);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    // Fetch categories immediately
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // Set default category if creating a new article
        if (isNewArticle && data.length > 0) {
          setFormData(prev => ({
            ...prev,
            category_id: data[0].id
          }));
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      });

    // If editing an existing article, fetch its data
    if (!isNewArticle) {
      fetch(`/api/articles/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Article not found");
          }
          return res.json();
        })
        .then((data) => {
          setFormData({
            title: data.title,
            slug: data.slug,
            content: data.content,
            excerpt: data.excerpt || "",
            featured_image: data.featured_image || "",
            category_id: data.category_id,
            published: data.published,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching article:", err);
          setError("Failed to load article");
          setLoading(false);
        });
    }
  }, [id, isNewArticle]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Special handling for slug generation based on title
    if (name === "title" && (!formData.slug || formData.slug === slugify(formData.title))) {
      setFormData({
        ...formData,
        title: value,
        slug: slugify(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const method = isNewArticle ? "POST" : "PUT";
      const url = isNewArticle ? "/api/articles" : `/api/articles/${id}`;
      
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isNewArticle ? "create" : "update"} article`);
      }

      const savedArticle = await response.json();
      navigate("/admin");
    } catch (err) {
      console.error("Error saving article:", err);
      setError(err.message);
      setSaving(false);
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
            <h1 className="text-3xl font-bold">
              {isNewArticle ? "Create New Article" : "Edit Article"}
            </h1>
            <Link
              to="/admin"
              className="text-cardinal-red flex items-center gap-1 mt-2"
            >
              <ArrowLeft size={16} />
              Back to Admin
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="bg-charcoal-gray hover:bg-charcoal-gray/90 text-white py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <Eye size={18} />
              {previewMode ? "Edit" : "Preview"}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="bg-cardinal-red hover:bg-cardinal-red/90 text-white py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <Save size={18} />
              {saving ? "Saving..." : "Save Article"}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {previewMode ? (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-4xl font-bold mb-4">{formData.title}</h1>
            {formData.excerpt && (
              <p className="text-xl text-gray-600 mb-6">{formData.excerpt}</p>
            )}
            {formData.featured_image && (
              <img
                src={formData.featured_image}
                alt={formData.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
            )}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Article Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                />
              </div>

              <div>
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  URL Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This will be used in the URL: /articles/{formData.slug}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label
                  htmlFor="category_id"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="featured_image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Featured Image URL
                </label>
                <input
                  type="text"
                  id="featured_image"
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                />
              </div>

              <div className="flex items-center h-full pt-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-cardinal-red focus:ring-cardinal-red h-5 w-5"
                  />
                  <span className="ml-2 text-gray-700">Publish article</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                A short summary of the article for preview cards and SEO.
              </p>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Article Content (HTML)
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={15}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 font-mono text-sm"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                You can use HTML for formatting. For images, use standard &lt;img&gt; tags.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ArticleEditorPage;
