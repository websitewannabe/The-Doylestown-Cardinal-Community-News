
import React from "react";
import { useParams, Link } from "react-router-dom";
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

// Mock article data - In production, this would come from your API/database
const article = {
  id: 1,
  title: "How Our Emotions Contribute to Heart Disease",
  subtitle:
    "We all are familiar with the common risk factors of heart disease – high blood pressure, high cholesterol, being overweight, smoking, poor diet, and of course, not keeping up with with daily exercise. But did you know that our emotions can also contribute to risks of heart attack and stroke?",
  author: "Jill Sonlin",
  authorRole: "Senior Reporter",
  authorImage: "/images/natalya-Bucuy.jpg",
  date: "February 1, 2025",
  readingTime: "6 min read",
  category: "Live",
  mainImage: "/images/Fonthill.png",
  content: `
    <h2 class="text-3xl mb-3">Persuasive emotions that harm</h2>
    <p class="mb-8">Negative states of mind, including emotions of anger, bitterness, depression, loneliness, and anxiety, can each carry risks of doing a lot of damage to the heart and the body. To lower potential health risks, we must account for and nurish the mind-body connection.</p>

    <p class="mb-8">When we are upset, have a problem, or put unrealistic pressure on ourselves with perfectionism, these persuasive emotions can go on to cause powerful chemical responses in the body. They trigger stress hormones release, including cortisol and adrenaline, which are meant to protect us from immediate danger.</p>

    <h2 class="text-3xl mb-3">A Way Out</h2>
    <p class="mb-8">If you are experiencing emotional pain, know that you are not alone.</p>

    <p class="mb-8">Seek help to talk about your feelings with a trusted friend, family member, pastor, or therapist. Talking openly about negative feelings can be the start of dealing effectively with and healing emotional burdens of the heart that can affect physical heart health.</p>
  `,
  tags: ["Health", "Wellness", "Mental Health"],
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Local Artists to Create Murals for Theater's Construction Barriers",
    excerpt: "Community artists will transform construction barriers into public art displays during renovation.",
    image: "/images/Fonthill.png",
    date: "March 14, 2024",
    readingTime: "4 min read",
  },
  {
    id: 3,
    title: "Remembering the County Theater: Community Shares Stories",
    excerpt: "Residents share their cherished memories of the historic venue ahead of renovation.",
    image: "/images/Fonthill.png",
    date: "March 13, 2024",
    readingTime: "5 min read",
  }
];

const ArticlePage = () => {
  const { id } = useParams();
  const writerSlug = "sarah-mitchell"; // This would come from article data in production

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/articles" className="hover:text-gray-700">
            Articles
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{article.category}</span>
        </nav>

        {/* Main Article Content */}
        <article className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <header className="p-8">
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
                to={`/writer/${writerSlug}`}
                className="flex items-center gap-1 hover:text-gray-700"
              >
                <User2 className="w-4 h-4" />
                {article.author}
              </Link>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-charcoal-gray/80">{article.subtitle}</p>
          </header>

          <img
            src={article.mainImage}
            alt={article.title}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          <div className="p-8">
            <div
              className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-charcoal-gray prose-p:text-charcoal-gray/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4 mb-8">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 bg-cardinal-red/10 text-cardinal-red rounded-full hover:bg-cardinal-red hover:text-white transition-colors text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <Link
                      to={`/writer/${writerSlug}`}
                      className="font-medium text-charcoal-gray hover:text-cardinal-red transition-colors"
                    >
                      {article.author}
                    </Link>
                    <p className="text-sm text-cardinal-red">{article.authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="p-2 text-gray-500 hover:text-[#1877F2] transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-500 hover:text-[#1DA1F2] transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-500 hover:text-[#0A66C2] transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-500 hover:text-cardinal-red transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="mb-12">
          <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
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
                  <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-gray/70 text-sm mb-4">
                    {article.excerpt}
                  </p>
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

        {/* Back to Articles Link */}
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
};

export default ArticlePage;
