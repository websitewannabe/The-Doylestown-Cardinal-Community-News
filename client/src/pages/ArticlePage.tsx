import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User2, Share2, Facebook, Twitter, Linkedin, ChevronRight, ArrowLeft, Mail } from 'lucide-react';

// Mock article data
const article = {
  id: 1,
  title: "Historic Doylestown Theater Announces Major Renovation Plans",
  subtitle: "The beloved County Theater reveals ambitious restoration project aimed at preserving its art deco charm while modernizing facilities",
  author: "Sarah Mitchell",
  authorRole: "Senior Reporter",
  authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  date: "March 15, 2024",
  readingTime: "6 min read",
  category: "Local News",
  mainImage: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
  content: `
    <h2>A New Chapter for a Historic Landmark</h2>
    <p>The County Theater, a cornerstone of Doylestown's cultural landscape since 1938, is embarking on an ambitious $3.5 million renovation project that promises to preserve its iconic art deco architecture while introducing modern amenities for today's moviegoers.</p>
    
    <p>The renovation, scheduled to begin in June 2024, will expand the theater's lobby, upgrade its projection and sound systems, and add a third screening room while carefully maintaining the building's historic character.</p>

    <h2>Community Support and Fundraising</h2>
    <p>Local preservation groups and community members have rallied behind the project, with the "Save Our Theater" campaign already raising $2.1 million through private donations and community events.</p>

    <blockquote>
      "This renovation isn't just about updating a building—it's about preserving a piece of Doylestown's soul while ensuring it continues to serve future generations," says John Anderson, the theater's executive director.
    </blockquote>

    <h2>Modern Amenities, Historic Charm</h2>
    <p>Key features of the renovation include:</p>
    <ul>
      <li>State-of-the-art digital projection systems</li>
      <li>Enhanced sound equipment</li>
      <li>Expanded concession area</li>
      <li>Improved accessibility features</li>
      <li>Restored art deco architectural elements</li>
    </ul>

    <h2>Looking to the Future</h2>
    <p>The renovation project is expected to take approximately 8 months to complete, with the theater remaining partially open during specific phases of construction. A grand reopening celebration is planned for early 2025.</p>
  `,
  tags: ["Arts & Culture", "Community", "Development", "Historic Preservation"]
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Local Artists to Create Murals for Theater's Construction Barriers",
    excerpt: "Community artists will transform construction barriers into public art displays during renovation.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
    date: "March 14, 2024",
    readingTime: "4 min read"
  },
  {
    id: 3,
    title: "Remembering the County Theater: Community Shares Stories",
    excerpt: "Residents share their cherished memories of the historic venue ahead of renovation.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    date: "March 13, 2024",
    readingTime: "5 min read"
  },
  {
    id: 4,
    title: "The Architecture of Memory: Preserving Art Deco in Doylestown",
    excerpt: "A look at the town's efforts to maintain its architectural heritage.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    date: "March 12, 2024",
    readingTime: "7 min read"
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const writerSlug = "sarah-mitchell"; // In a real app, this would come from the article data

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <nav className="flex items-center space-x-2 text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/news" className="hover:text-gray-700">News</Link>
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
              <Link to={`/writer/${writerSlug}`} className="flex items-center gap-1 hover:text-gray-700">
                <User2 className="w-4 h-4" />
                {article.author}
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600">{article.subtitle}</p>
          </header>

          <img
            src={article.mainImage}
            alt="County Theater facade"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 mb-8">
              {article.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
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
                  <Link to={`/writer/${writerSlug}`} className="font-medium text-gray-900 hover:text-gray-700">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <Link
                key={article.id}
                to={`/article/${article.id}`}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readingTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Link
          to="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;