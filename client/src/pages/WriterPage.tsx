import React from "react";
import { useParams, Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, ChevronRight, Instagram } from "lucide-react";

// Import writers data from MeetTheWritersPage
const writers = [
  {
    id: "natalya-bucuy",
    name: "Natalya Bucuy",
    role: "Managing Editor",
    bio: "Natalya Bucuy is a journalist, fiction and non-fiction writer, and the managing editor of the Cardinal. She believes that if a story doesn’t come to you, you just have to go find it and live it. That’s pretty much why she usually ends up in some kind of shenanigans. You can often find her roaming the streets of her beloved Doylestown in search of writing material, adventure, or both. Connections within the community are her driving force in journalism and in life.\n\nTo view more of her work, visit her website: nowwehaveastory.com and nowwehaveastory.substack.com",
    image: "/images/natalya-Bucuy.jpg",
    email: "natalya@thecardinal.com",
    twitter: "https://twitter.com/natalyabucuy",
    linkedin: "https://linkedin.com/in/natalyabucuy",
    expertise: ["Local Politics", "Arts & Culture", "Community Development"],
  },
  {
    id: "leia-riggins",
    name: "Leia Riggins",
    role: "Writer",
    bio: "Leia Riggins is a school counselor, therapist, and wellness advocate based in Doylestown, PA. With a deep passion for supporting personal growth, she combines her expertise in mental health with holistic practices to help individuals navigate life’s transitions with clarity and confidence. Leia specializes in integrative approaches that honor the mind-body connection, drawing from her background in counseling, movement, and mindfulness. Whether guiding children, teens or adults, she creates a safe space for healing, self-discovery, and empowerment. She also supports individuals navigating ADHD, anxiety, depression, executive functioning challenges, and neurodiverse experiences. Leia is the founder of Bolder Wellness, where she shares tools for sustainable well-being.",
    image: "/images/leiaRiggins.jpg",
    email: "leia@thecardinal.com",
    twitter: "https://twitter.com/leiariggins",
    linkedin: "https://linkedin.com/in/leiariggins",
    instagram: "https://instagram.com/BolderWellness",
    expertise: ["Mental Health", "Wellness", "Community Support"],
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
  },
  {
    id: "dakoda",
    name: "Dakoda",
    role: "Social Media Manager",
    bio: "Dakoda is a local writer who has lived in Bucks County her entire life. She has been writing for the Cardinal since early 2023, focusing on monthly events and interviews with our team of writers. Dakoda has had a passion for writing since she was a little girl. Writing short stories and book reports in her spare time, hoping to one day become a Journalist. She also became the Cardinal Social Media Manager in January of 2024 and has completely revamped their platforms.  An avid animal lover, reader, and traveler, Dakoda truly loves her Bucks County Community. During her free time, you might just spot her at her favorite café reading, writing, and chatting with the employees. You can read more of her work on her Substack, “scattered journal entries” or occasionally, in the Bucks County Herald newspaper.https://substack.com/@scatteredjournalentries/posts",
    image: "/images/Staff/Dakoda.jpeg",
    email: "dakoda@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Social Media", "Digital Strategy", "Community Engagement"],
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
  },
  {
    id: "edie-weinstein",
    name: "Edie Weinstein",
    role: "Writer",
    bio: 'Edie Weinstein, MSW, LSW, is a psychotherapist, journalist, author, speaker, and founder of Hugmobsters Armed with Love. She began writing for The Cardinal in 2022 with her column "The Kindness Korner."',
    image: "/images/Staff/Eddie-Weinstein.jpeg",
    email: "edie@thecardinal.com",
    twitter: "https://twitter.com/edieweinstein",
    linkedin: "https://linkedin.com/in/edieweinstein",
    expertise: ["Mental Health", "Community Service", "Wellness"],
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
  },
];

const WriterPage = () => {
  const { writerId } = useParams();
  const writer = writers.find((w) => w.id === writerId);

  if (!writer) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-charcoal-gray mb-4">
            Writer not found
          </h1>
          <Link
            to="/writers"
            className="text-cardinal-red hover:text-forest-green transition-colors flex items-center"
          >
            <ChevronRight size={16} className="mr-1 rotate-180" />
            Return to Writers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-8">
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={writer.image}
                  alt={writer.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="flex gap-2">
                  <a
                    href={`mailto:${writer.email}`}
                    className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors shadow-sm"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                  {writer.instagram && (
                    <a
                      href={writer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors shadow-sm"
                      title="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col min-h-[300px]">
              <div className="mb-8">
                <h1 className="font-playfair text-4xl font-bold text-charcoal-gray mb-3">
                  {writer.name}
                </h1>
                <div className="text-cardinal-red font-medium mb-6">
                  {writer.role}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
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
              <div className="prose max-w-none flex-grow">
                <p className="text-charcoal-gray/80 whitespace-pre-line leading-relaxed">
                  {writer.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterPage;