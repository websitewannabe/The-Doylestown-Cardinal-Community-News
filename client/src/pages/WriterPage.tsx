import React from "react";
import { useParams, Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Calendar, ChevronRight } from "lucide-react";

// Import writers data from MeetTheWritersPage
const writers = {
  "natalya-bucuy": {
    id: "natalya-bucuy",
    name: "Natalya Bucuy",
    role: "Managing Editor",
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art.",
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
    bio: "Leia Riggins is a school counselor, therapist, and wellness advocate based in Doylestown, PA. With a deep passion for supporting personal growth, she combines her expertise in mental health with holistic practices to help individuals navigate life’s transitions with clarity and confidence. Leia specializes in integrative approaches that honor the mind-body connection, drawing from her background in counseling, movement, and mindfulness. Whether guiding children, teens or adults, she creates a safe space for healing, self-discovery, and empowerment. She also supports individuals navigating ADHD, anxiety, depression, executive functioning challenges, and neurodiverse experiences. Leia is the founder of Bolder Wellness, where she shares tools for sustainable well-being. Connect with her on Instagram @BolderWellness to learn more.",
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
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art. In her free time, she enjoys long walks on the beach (aka Doylestown in the finger-freezing cold), hoping she hasn’t developed caffeine dependency, and being a can-dropping upstairs neighbor. To be serious, though: her interests include justice, art history, and pure communication. To learn more about my experience, please visit my LinkedIn. To reach out for personal or professional inquiries, please email me at nnika.verma@gmail.com.",
    image: "/images/annikaVerma.jpg",
    email: "annika.verma@gmail.com",
    twitter: "https://twitter.com/annikaverma",
    linkedin: "https://linkedin.com/in/annikaverma",
    expertise: ["Arts", "Culture", "Student Life"],
  },
};

const WriterPage = () => {
  const { writerId } = useParams();
  const writer = writers[writerId as keyof typeof writers];

  if (!writer) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Writer not found</h1>
          <Link
            to="/writers"
            className="text-cardinal-red hover:text-forest-green"
          >
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
