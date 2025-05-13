import React from "react";
import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, ChevronRight } from "lucide-react";

const writers = [
  {
    id: "natalya-bucuy",
    name: "Natalya Bucuy",
    role: "Managing Editor",
    bio: "Natalya Bucuy is a journalist, fiction and non-fiction writer, and the managing editor of the Cardinal. She believes that if a story doesn't come to you, you just have to go find it and live it. That's pretty much why she usually ends up in some kind of shenanigans. You can often find her roaming the streets of her beloved Doylestown in search of writing material, adventure, or both.",
    image: "/images/natalya-Bucuy.jpg",
    email: "natalya@thecardinal.com",
    twitter: "https://twitter.com/natalyabucuy",
    linkedin: "https://linkedin.com/in/natalyabucuy",
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
    bio: "Leia Riggins is a school counselor, therapist, and wellness advocate based in Doylestown, PA. With a deep passion for supporting personal growth, she combines her expertise in mental health with holistic practices to help individuals navigate life's transitions with clarity and confidence.",
    image: "/images/leiaRiggins.jpg",
    email: "leia@thecardinal.com",
    twitter: "https://twitter.com/leiariggins",
    linkedin: "https://linkedin.com/in/leiariggins",
    expertise: ["Mental Health", "Wellness", "Community Support"],
    popularArticles: [
      {
        id: 3,
        title: "Understanding Mindfulness in Daily Life",
        date: "March 12, 2024",
      },
      {
        id: 4,
        title: "Building Resilience in Our Community",
        date: "March 5, 2024",
      },
    ],
  },
  {
    id: "annika-verma",
    name: "Annika Verma",
    role: "Writer",
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art.",
    image: "/images/annikaVerma.jpg",
    email: "annika@thecardinal.com",
    twitter: "https://twitter.com/annikaverma",
    linkedin: "https://linkedin.com/in/annikaverma",
    expertise: ["Arts", "Culture", "Student Life"],
    popularArticles: [
      {
        id: 5,
        title: "Local Artist Spotlight: Sarah Chen",
        date: "March 8, 2024",
      },
      {
        id: 6,
        title: "Art in Public Spaces",
        date: "March 1, 2024",
      },
    ],
  },
  {
    id: "dakoda",
    name: "Dakoda",
    role: "Social Media Manager",
    bio: "As The Cardinal's Social Media Manager, Dakoda brings our stories to life across digital platforms. With a keen eye for engaging content and community building, she ensures our local journalism reaches and resonates with readers wherever they are.",
    image: "/images/Staff/Dakoda.jpeg",
    email: "dakoda@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Social Media", "Digital Strategy", "Community Engagement"],
    popularArticles: [],
  },
  {
    id: "servis-events",
    name: "Servis Events",
    role: "Writers",
    bio: "Servis Events is a hyper-local, seasonal fine dining private chef business. Writing for The Cardinal for over a year and a half, they share articles about seasonal ingredients, health benefits, and local food education.",
    image: "/images/Staff/Nick-and-Stephen.jpeg",
    email: "servis@thecardinal.com",
    twitter: "https://twitter.com/servisevents",
    linkedin: "https://linkedin.com/company/servisevents",
    expertise: ["Food & Dining", "Local Cuisine", "Health & Wellness"],
    popularArticles: [],
  },
  {
    id: "brian",
    name: "Brian",
    role: "Writer",
    bio: "Brian is a Naval Academy graduate, Navy veteran, and current financial planner at Pultro Financial Management. He holds multiple certifications, including AIF, BFA, RFC, and Ethics Certified, and enjoys time with his fiancée, three sons, and two golden retrievers.",
    image: "/images/Staff/Brian.jpeg",
    email: "brian@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Finance", "Veterans Affairs", "Local Business"],
    popularArticles: [],
  },
  {
    id: "edie-weinstein",
    name: "Edie Weinstein",
    role: "Writer",
    bio: "Edie Weinstein, MSW, LSW, is a psychotherapist, journalist, author, speaker, and founder of Hugmobsters Armed with Love. She began writing for The Cardinal in 2022 with her column \"The Kindness Korner.\"",
    image: "/images/Staff/Eddie-Weinstein.jpeg",
    email: "edie@thecardinal.com",
    twitter: "https://twitter.com/edieweinstein",
    linkedin: "https://linkedin.com/in/edieweinstein",
    expertise: ["Mental Health", "Community Service", "Wellness"],
    popularArticles: [],
  },
  {
    id: "paula-carsello-mason",
    name: "Paula Carsello-Mason",
    role: "Writer",
    bio: "Paula is a dedicated esthetician passionate about skincare and confidence building. She created a teen skincare course and writes for The Cardinal while enjoying family time and kayaking.",
    image: "/images/Staff/Paula-Carsello-Mason.jpeg",
    email: "paula@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Beauty & Wellness", "Skincare", "Teen Health"],
    popularArticles: [],
  },
  {
    id: "ryan-greiser",
    name: "Ryan Greiser",
    role: "Writer",
    bio: "Ryan Greiser brings his expertise in local business and community development to The Cardinal's pages. Through his writing, he explores the dynamic landscape of Doylestown's business community and economic growth.",
    image: "/images/Staff/Ryan-Greiser.png",
    email: "ryan@thecardinal.com",
    twitter: "https://twitter.com/ryangreiser",
    linkedin: "https://linkedin.com/in/ryangreiser",
    expertise: ["Business", "Local Economy", "Community Development"],
    popularArticles: [],
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
              className="flex flex-col h-full border border-[#333333] rounded-lg overflow-hidden bg-white"
            >
              <div className="flex-grow">
                <div className="relative">
                  <img
                    src={writer.image}
                    alt={writer.name}
                    className="w-full h-96 object-cover object-top"
                  />
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

                <div className="p-6">
                  <Link to={`/writer/${writer.id}`}>
                    <h2 className="font-playfair text-2xl font-bold text-charcoal-gray hover:text-cardinal-red transition-colors mb-1 cursor-pointer">
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

                  <p className="text-charcoal-gray/80 mb-6 line-clamp-4">
                    {writer.bio}
                  </p>
                </div>
              </div>

              <div className="mt-auto p-6 border-t border-[#333333]/10 bg-[#F8F8F8]">
                <Link
                  to={`/writer/${writer.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
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