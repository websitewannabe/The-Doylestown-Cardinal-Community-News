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

// Mock article data
const article = {
  id: 1,
  title: "How Our Emotions Contribute to Heart Disease",
  subtitle:
    "We all are familiar with the common risk factors of heart disease – high blood pressure, high cholesterol, being overweight, smoking, poor diet, and of course, not keeping up with with daily exercise.But did you know that our emotions can also contribute to risks of heart attack and stroke?",
  author: "Jill Sonlin",
  authorRole: "Senior Reporter",
  authorImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  date: "February 1, 2025",
  readingTime: "6 min read",
  category: "Live",
  mainImage:
    "https://doylestowncardinal.com/wp-content/uploads/2025/02/HeartHealthy-990x660.jpg",
  content: `
    <h2>Persuasive emotions that harm</h2>
    <p>Negative states of mind, including emotions of anger, bitterness, depression, loneliness, and anxiety, can each carry risks of doing a lot of damage to the heart and the body. To lower potential health risks, we must account for and nurish the mind-body connection. </p>
    
    <p>When we are upset, have a problem, or put unrealistic pressure on ourselves with perfectionism, these persuasive emotions can go on to cause powerful chemical responses in the body. They trigger stress hormones release, including cortisol and adrenaline, which are meant to protect us from immediate danger. Our body doesn’t know if we are in the wild being chased by a lion, or if we are arguing with our neighbor. But when stressful situations happen one after the other or are chronic and long-lasting, the body remains in a perpetual state of fight or flight. This leads to high levels of inflammation, elevated blood pressure, increased heart rate, and sleepless nights.</p>

    <p>The chemical communication between the brain and the body puts extra stress on the heart muscle to work harder and faster. This added demand increases the risks of heart attack and stroke.</p>

  <p>Chronic stress often leads to many unhealthy lifestyle habits too. This can be seen as withdrawal from others, emotional outbursts, lack of appetite, smoking, excessive alcohol use, poor diet, overeating, lack of energy, and a sedentary lifestyle.</p>

  <p>The truth is, that life is stressful for all of us. It has a way of ebbing and flowing, in both amazing times and those really difficult ones. Adopting new ways of handling negative emotions is vital to our long-term heart health.</p>

  <h2>A Way Out</h2>
  
  <p>If you are experiencing emotional pain,  know that you are not alone.</p>

    <p>Seek help to talk about your feelings with a trusted friend, family member, pastor, or therapist. Talking openly about negative feelings can be the start of dealing effectively with and healing emotional burdens of the heart that can affect physical heart health.</p>

    <p>Positive coping mechanisms can lower stress and ease emotional distress. Try taking a walk, bike riding, or getting outside for some fresh air in the sunshine. Take a yoga class, meditate, or learn deep breathing exercises that are calming. The 4-7-8 deep breathing technique is my go-to breathing exercise in times of stress. It  involves breathing in for 4 seconds, holding the breath for 7 seconds, and exhaling for 8 seconds.</p>

    <p>Get connected in your community. Volunteer or help someone in need. Giving to others is emotionally uplifting. Also, keep close to your faith. Having a spiritual belief system gives comfort, hope, and spiritual guidance through troubling times.</p>

    <p>Lastly, start a gratitude journal even – and especially so –  in the face of a present struggle. According to research, those who practice daily gratitude show improvements in their health – lower inflammation and better health outcomes with physical diseases. Gratitude is a powerful medicine for the heart and is linked to a longer healthier life.</p>
  `,
  tags: ["Live"],
};

// Mock related articles
const relatedArticles = [
  {
    id: 2,
    title: "Local Artists to Create Murals for Theater's Construction Barriers",
    excerpt:
      "Community artists will transform construction barriers into public art displays during renovation.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
    date: "March 14, 2024",
    readingTime: "4 min read",
  },
  {
    id: 3,
    title: "Remembering the County Theater: Community Shares Stories",
    excerpt:
      "Residents share their cherished memories of the historic venue ahead of renovation.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    date: "March 13, 2024",
    readingTime: "5 min read",
  },
  {
    id: 4,
    title: "The Architecture of Memory: Preserving Art Deco in Doylestown",
    excerpt:
      "A look at the town's efforts to maintain its architectural heritage.",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    date: "March 12, 2024",
    readingTime: "7 min read",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const writerSlug = "sarah-mitchell"; // In a real app, this would come from the article data

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
                to={`/writer/${writerSlug}`}
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
            alt="County Theater facade"
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
                    to={`/writer/${writerSlug}`}
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
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
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
