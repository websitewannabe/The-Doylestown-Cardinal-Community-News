import React from "react";
import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, ChevronRight } from "lucide-react";

// Mock data for writers
const writers = [
  {
    id: "natalya-bucuy",
    name: "Natalya Bucuy",
    role: "Managing Editor",
    bio: "Natalya Bucuy is a journalist, fiction and non-fiction writer, and the managing editor of the Cardinal. She believes that if a story doesn’t come to you, you just have to go find it and live it. That’s pretty much why she usually ends up in some kind of shenanigans. You can often find her roaming the streets of her beloved Doylestown in search of writing material, adventure, or both. Connections within the community are her driving force in journalism and in life. To view more of her work, visit her website, nowwehaveastory.com and nowwehaveastory.substack.com",
    image: "/images/natalya-Bucuy.jpg",
    email: "sarah@thecardinal.com",
    twitter: "https://twitter.com/sarahmitchell",
    linkedin: "https://linkedin.com/in/sarahmitchell",
    expertise: ["Local Politics", "Arts & Culture", "Community Development"],
    popularArticles: [
      {
        id: 1,
        title: "Historic Doylestown Theater Announces Major Renovation Plans",
        date: "March 15, 2024",
      },
      {
        id: 2,
        title: "Local Artists Transform Downtown Alleyways",
        date: "March 10, 2024",
      },
    ],
  },
  {
    id: "leia-riggins",
    name: "Leia Riggins",
    role: "Writer",
    bio: "Leia Riggins is a school counselor, therapist, and wellness advocate based in Doylestown, PA. With a deep passion for supporting personal growth, she combines her expertise in mental health with holistic practices to help individuals navigate life’s transitions with clarity and confidence. Leia specializes in integrative approaches that honor the mind-body connection, drawing from her background in counseling, movement, and mindfulness. Whether guiding children, teens or adults, she creates a safe space for healing, self-discovery, and empowerment. She also supports individuals navigating ADHD, anxiety, depression, executive functioning challenges, and neurodiverse experiences. Leia is the founder of Bolder Wellness, where she shares tools for sustainable well-being. Connect with her on Instagram @BolderWellness to learn more.",
    image: "/images/leiaRiggins.jpg",
    email: "michael@thecardinal.com",
    twitter: "https://twitter.com/michaelchen",
    linkedin: "https://linkedin.com/in/michaelchen",
    expertise: ["Investigative Journalism", "Digital Media", "Local Business"],
    popularArticles: [
      {
        id: 3,
        title: "The Future of Small Business in Doylestown",
        date: "March 12, 2024",
      },
      {
        id: 4,
        title: "Investigation: Local Infrastructure Projects",
        date: "March 5, 2024",
      },
    ],
  },
  {
    id: "annika-verma",
    name: "Annika Verma",
    role: "Writer",
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art. In her free time, she enjoys long walks on the beach (aka Doylestown in the finger-freezing cold), hoping she hasn’t developed caffeine dependency, and being a can-dropping upstairs neighbor. To be serious, though: her interests include justice, art history, and pure communication. To learn more about my experience, please visit my LinkedIn. To reach out for personal or professional inquiries, please email me at nnika.verma@gmail.com.",
    image: "/images/annikaVerma.jpg",
    email: "emily@thecardinal.com",
    twitter: "https://twitter.com/emilyrodriguez",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    expertise: ["Community Events", "Education", "Local History"],
    popularArticles: [
      {
        id: 5,
        title: "Doylestown Schools Embrace New Learning Initiative",
        date: "March 8, 2024",
      },
      {
        id: 6,
        title: "Community Gardens Foster Connection",
        date: "March 1, 2024",
      },
    ],
  },
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
            Get to know the talented journalists bringing you Doylestown's
            stories. Our writers are dedicated to delivering authentic,
            impactful journalism that matters to our community.
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
                  className="w-full h-96 object-cover object-top"
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
                <div className="text-cardinal-red font-medium mb-3">
                  {writer.role}
                </div>

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
                  <h3 className="font-medium text-charcoal-gray mb-3">
                    Popular Articles
                  </h3>
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
