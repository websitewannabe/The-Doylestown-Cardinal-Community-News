import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Calendar, ChevronRight } from 'lucide-react';

// Mock writer data
const writers = {
  "sarah-mitchell": {
    name: "Sarah Mitchell",
    role: "Senior Reporter",
    bio: `Sarah Mitchell has been covering local news in Doylestown for over a decade. With a background in investigative journalism and a deep connection to the community, she specializes in covering arts, culture, and local government.

Her work has earned multiple Pennsylvania Press Association awards, and she's known for her in-depth coverage of issues that matter most to Doylestown residents.

Sarah holds a degree in Journalism from Temple University and has previously worked with several major publications in Philadelphia before finding her home at The Cardinal.`,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    email: "sarah@thecardinal.com",
    twitter: "https://twitter.com/sarahmitchell",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    expertise: ["Local Politics", "Arts & Culture", "Community Development"],
    articles: [
      {
        id: 1,
        title: "Historic Doylestown Theater Announces Major Renovation Plans",
        excerpt: "The beloved County Theater reveals ambitious restoration project aimed at preserving its art deco charm while modernizing facilities.",
        date: "March 15, 2024",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80"
      },
      {
        id: 2,
        title: "Local Artists Transform Downtown Alleyways",
        excerpt: "New mural project brings vibrant art to unexpected spaces in Doylestown's historic district.",
        date: "March 10, 2024",
        image: "https://images.unsplash.com/photo-1571511303867-43481a0a6a0a?auto=format&fit=crop&q=80"
      },
      {
        id: 3,
        title: "Council Approves New Cultural District Plan",
        excerpt: "Five-year development plan aims to enhance Doylestown's position as a regional arts destination.",
        date: "March 5, 2024",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80"
      }
    ]
  }
  // Add more writers as needed
};

const WriterPage = () => {
  const { writerId } = useParams();
  const writer = writers[writerId as keyof typeof writers];

  if (!writer) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Writer not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Writer Profile Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-48 bg-cardinal-red/10">
            <div className="absolute -bottom-16 left-8">
              <img
                src={writer.image}
                alt={writer.name}
                className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-playfair text-3xl font-bold text-charcoal-gray mb-2">
                  {writer.name}
                </h1>
                <div className="text-cardinal-red font-medium mb-4">{writer.role}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {writer.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${writer.email}`}
                  className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={writer.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                  title="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={writer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="mt-6 prose max-w-none">
              <p className="whitespace-pre-line text-charcoal-gray/80">{writer.bio}</p>
            </div>
          </div>
        </div>

        {/* Recent Articles Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-6">
            Recent Articles by {writer.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writer.articles.map(article => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center text-sm text-charcoal-gray/60 mb-2">
                    <Calendar size={14} className="mr-1" />
                    {article.date}
                  </div>
                  <h3 className="font-medium group-hover:text-cardinal-red transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal-gray/70 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center text-cardinal-red group-hover:text-forest-green transition-colors">
                    Read Article
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterPage;