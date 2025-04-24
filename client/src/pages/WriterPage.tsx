import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Calendar, ChevronRight } from 'lucide-react';

// Import writers data from MeetTheWritersPage
const writers = {
  "natalya-bucuy": {
    id: "natalya-bucuy",
    name: "Natalya Bucuy",
    role: "Managing Editor",
    bio: "Natalya Bucuy is a journalist, fiction and non-fiction writer, and the managing editor of the Cardinal. She believes that if a story doesn't come to you, you just have to go find it and live it. That's pretty much why she usually ends up in some kind of shenanigans. You can often find her roaming the streets of her beloved Doylestown in search of writing material, adventure, or both. Connections within the community are her driving force in journalism and in life.",
    image: "/images/natalya-Bucuy.jpg",
    email: "natalya@thecardinal.com",
    twitter: "https://twitter.com/natalyabucuy",
    linkedin: "https://linkedin.com/in/natalyabucuy",
    expertise: ["Local Politics", "Arts & Culture", "Community Development"],
  },
  "leia-riggins": {
    id: "leia-riggins",
    name: "Leia Riggins",
    role: "Writer",
    bio: "Leia Riggins is a school counselor, therapist, and wellness advocate based in Doylestown, PA. With a deep passion for supporting personal growth, she combines her expertise in mental health with holistic practices to help individuals navigate life's transitions with clarity and confidence.",
    image: "/images/leiaRiggins.jpg",
    email: "leia@thecardinal.com",
    twitter: "https://twitter.com/leiariggins",
    linkedin: "https://linkedin.com/in/leiariggins",
    expertise: ["Mental Health", "Wellness", "Community Support"],
  },
  "annika-verma": {
    id: "annika-verma",
    name: "Annika Verma",
    role: "Writer",
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art.",
    image: "/images/annikaVerma.jpg",
    email: "annika.verma@gmail.com",
    twitter: "https://twitter.com/annikaverma",
    linkedin: "https://linkedin.com/in/annikaverma",
    expertise: ["Arts", "Culture", "Student Life"],
  }
};

const WriterPage = () => {
  const { writerId } = useParams();
  const writer = writers[writerId as keyof typeof writers];

  if (!writer) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Writer not found</h1>
          <Link to="/writers" className="text-cardinal-red hover:text-forest-green">
            Return to Writers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-cardinal-red font-medium mb-4">
                  {writer.role}
                </div>
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
              <p className="whitespace-pre-line text-charcoal-gray/80">
                {writer.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterPage;