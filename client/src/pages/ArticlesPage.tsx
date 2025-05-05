import React from "react";
import { useParams } from "react-router-dom";

const mockArticles = [
  {
    id: 1,
    slug: "how-our-emotions-contribute-to-heart-disease",
    title: "How Our Emotions Contribute to Heart Disease",
    excerpt:
      "Did you know that our emotions can also contribute to risks of heart attack and stroke?",
    category: "Live",
    author: "Jill Sonlin",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/02/HeartHealthy-990x660.jpg",
    tags: ["Live"],
  },
  {
    id: 2,
    slug: "cozy-cupid-valentines-day-dates",
    title: "Cozy Cupid: Valentine’s Day Dates",
    excerpt:
      "Are you looking for a cozy night with your love? Here’s your guide.",
    category: "Community",
    author: "Lauren Heine",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/02/WeissEngBlog25-768x514.jpg",
    tags: ["Uncategorized"],
  },
  {
    id: 3,
    slug: "life-is-for-living-organizational-wisdoms-from-wingmoms",
    title: "“Life is for Living:” Organizational Wisdoms from Wingmoms",
    excerpt:
      "Nothing is for certain except death and taxes. And laundry. A loyal friend through life’s trials, Laundry will always be there for us. ",
    category: "Live",
    author: "Natalya Bucuy",
    date: "2025-02-01",
    image:
      "https://doylestowncardinal.com/wp-content/uploads/2025/01/458305498_392015483999134_6822641435809695635_n-990x707.png",
    tags: ["Live"],
  },
];


const ArticlePage = () => {
  const { slug } = useParams();
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    return <h1>404: Article not found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      {/* Rest of the article details */}
    </div>
  );
};

export default ArticlePage;

// Example of updated link in ArticlesPage.tsx
// ... other code ...

<div className="grid grid-cols-1 gap-8 mb-12">
              {mockArticles.slice(0, visibleArticles).map((article) => (
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
                        <span className="text-sm font-medium text-cardinal-red">
                          {article.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h2 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                        <Link to={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
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
                            to={`/articles/${article.slug}`}
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

// ... rest of ArticlesPage.tsx ...

// App.tsx (Illustrative Router Setup)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlesPage from "./ArticlesPage";
import ArticlePage from "./ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;