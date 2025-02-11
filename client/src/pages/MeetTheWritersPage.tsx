import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, ChevronRight } from 'lucide-react';

// Mock data for writers
const writers = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Senior Reporter",
    bio: "With over a decade of experience covering local news in Doylestown, Sarah specializes in arts, culture, and local government reporting.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    email: "sarah@thecardinal.com",
    twitter: "https://twitter.com/sarahmitchell",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    expertise: ["Local Politics", "Arts & Culture", "Community Development"],
    popularArticles: [
      {
        id: 1,
        title: "Historic Doylestown Theater Announces Major Renovation Plans",
        date: "March 15, 2024"
      },
      {
        id: 2,
        title: "Local Artists Transform Downtown Alleyways",
        date: "March 10, 2024"
      }
    ]
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Managing Editor",
    bio: "Michael brings 15 years of digital media expertise and a deep commitment to investigative journalism that matters to our community.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    email: "michael@thecardinal.com",
    twitter: "https://twitter.com/michaelchen",
    linkedin: "https://linkedin.com/in/michaelchen",
    expertise: ["Investigative Journalism", "Digital Media", "Local Business"],
    popularArticles: [
      {
        id: 3,
        title: "The Future of Small Business in Doylestown",
        date: "March 12, 2024"
      },
      {
        id: 4,
        title: "Investigation: Local Infrastructure Projects",
        date: "March 5, 2024"
      }
    ]
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Community Reporter",
    bio: "Emily's background in community organizing helps forge meaningful connections between The Cardinal and our diverse readership.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    email: "emily@thecardinal.com",
    twitter: "https://twitter.com/emilyrodriguez",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    expertise: ["Community Events", "Education", "Local History"],
    popularArticles: [
      {
        id: 5,
        title: "Doylestown Schools Embrace New Learning Initiative",
        date: "March 8, 2024"
      },
      {
        id: 6,
        title: "Community Gardens Foster Connection",
        date: "March 1, 2024"
      }
    ]
  }
];

const MeetTheWritersPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-charcoal-gray mb-6">
            Meet Our Writers
          </h1>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
            Get to know the talented journalists bringing you Doylestown's stories. 
            Our writers are dedicated to delivering authentic, impactful journalism 
            that matters to our community.
          </p>
        </div>

        {/* Writers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {writers.map((writer) => (
            <div 
              key={writer.id}
              className="border border-[#333333] rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={writer.image}
                  alt={writer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${writer.email}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        title="Email"
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={writer.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        title="Twitter"
                      >
                        <Twitter size={16} />
                      </a>
                      <a
                        href={writer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <Link to={`/writer/${writer.id}`}>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-gray group-hover:text-cardinal-red transition-colors mb-1">
                    {writer.name}
                  </h2>
                </Link>
                <div className="text-cardinal-red font-medium mb-3">{writer.role}</div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {writer.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-charcoal-gray/80 mb-6">{writer.bio}</p>

                <div className="border-t border-[#333333]/10 pt-4">
                  <h3 className="font-medium text-charcoal-gray mb-3">Popular Articles</h3>
                  <div className="space-y-2">
                    {writer.popularArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/articles/${article.id}`}
                        className="block group/article"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-charcoal-gray/80 group-hover/article:text-cardinal-red transition-colors">
                            {article.title}
                          </span>
                          <span className="text-sm text-charcoal-gray/60">
                            {article.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/writer/${writer.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mt-4"
                >
                  View Full Profile
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheWritersPage;