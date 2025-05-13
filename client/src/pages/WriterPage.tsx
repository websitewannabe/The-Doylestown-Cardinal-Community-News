import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Mail, Twitter, Linkedin, ChevronRight, Instagram } from "lucide-react";

// Import writers data from MeetTheWritersPage
const writers = [
  {
    id: "natalya-bucuy",
    search: "Natalya Bucuy",
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
    search: "leia",
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
    search: "Annika Verma",
    name: "Annika Verma",
    role: "Writer",
    bio: "Annika Verma is a sophomore at Bucks County Community College who started with The Cardinal in August 2023. She writes the monthly Artist Spotlight column, where she platforms the person behind, or perhaps even before, the art. In her free time, she enjoys long walks on the beach (aka Doylestown in the finger-freezing cold), hoping she hasn’t developed caffeine dependency, and being a can-dropping upstairs neighbor.\nTo be serious, though: her interests include justice, art history, and pure communication. To learn more about my experience, please visit my LinkedIn.\nTo reach out for personal or professional inquiries, please email me at nnika.verma@gmail.com.",
    image: "/images/annikaVerma.jpg",
    email: "nnika.verma@gmail.com",
    twitter: "https://twitter.com/annikaverma",
    linkedin: "https://www.linkedin.com/in/annika-verma-a093b020a",
    expertise: ["Arts", "Culture", "Student Life"],
  },
  {
    id: "dakoda",
    search: "dakoda",
    name: "Dakoda Carlson",
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
    search: "servis-events",
    name: "Servis Events",
    role: "Writers",
    bio: "Servis Events- We are a hyper local and seasonal full service fine dining private chef business. focusing on providing a fine dining restaurant experience in your own home, we provide everything neccesary as well as educating our guests on the importance of supporting local as well as the immense health benefits.\n\nWe have been writing for the cardinal for over a year and a half now in the food and restaurant section. we write about seasonal ingredients highlighting health benefits and showcasing how we would use said ingredients. we hope our articles are found to he helpful and educational. we take immense pride in being apart of this community and this paper.",
    image: "/images/Staff/Nick-and-Stephen.jpeg",
    email: "servis@thecardinal.com",
    twitter: "https://twitter.com/servisevents",
    linkedin: "https://linkedin.com/company/servisevents",
    expertise: ["Food & Dining", "Local Cuisine", "Health & Wellness"],
  },
  {
    id: "brian",
    search: "Brian Pultro",
    name: "Brian Pultro",
    role: "Writer",
    bio: "Brian graduated from Auburn University on May 11,2006 with a degree in Political Science and was commissioned as an Ensign into the United States Navy on the same day.  ring his 10 years on active duty he served on three different classes of ship, deploying twice to the Persian Gulf and once to Southeast Asia.  Brian also served on the faculty of Villanova University as an instructor of Naval Service where he earned a nomination as Naval Science Training Command’s Instructor of the Year.  He also earned his Master of Arts in Political Science from Villanova in 2012.  In 2015 Brian left active duty and joined the Navy Reserve.  He partnered with his uncle at Pultro Financial Management as a Financial Planner and obtained advanced certifications as an Accredited Investment Fiduciary (AIF), Behavior Financial Advisor(BFA), and Registered Financial Consultant(RFC).  Brian Also earned the coveted “Ethics Certified” designation from the International Association of Registered Financial Consultants.  In his free time, he spends as much time as possible with fiancé, three sons and two golden retriever rescues.",
    image: "/images/Staff/Brian.jpeg",
    email: "brian@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Finance", "Veterans Affairs", "Local Business"],
  },
  {
    id: "edie-weinstein",
    search: "Edie Weinstein",
    name: "Edie Weinstein",
    role: "Writer",
    bio: 'Edie Weinstein, MSW, LSW is a licensed social worker, psychotherapist, journalist, book author and editor, ordained interfaith minister, speaker, PR and marketing professional. She is the founder of Hugmobsters Armed with Love which offers FREE HUGS worldwide. She offered her first TEDx Talk in 2022 called Overcoming the Taboo of Touch.\n\nShe began writing for the Cardinal in 2022 after she and Joanne Petrun (co-founders of Bucks County Kind) were interviewed. Her column is called The Kindness Korner in which she highlights local folks who engage in acts of kindness."',
    image: "/images/Staff/Eddie-Weinstein.jpeg",
    email: "edie@thecardinal.com",
    twitter: "https://twitter.com/edieweinstein",
    linkedin: "https://linkedin.com/in/edieweinstein",
    expertise: ["Mental Health", "Community Service", "Wellness"],
  },
  {
    id: "paula-carsello-mason",
    search: "Paula Carsello-Mason",
    name: "Paula Carsello-Mason",
    role: "Writer",
    bio: "Paula Carsello-Mason is a dedicated esthetician and skincare professional with a passion for helping others feel confident in their skin. With years of hands-on experience, Paula has built a reputation for providing personalized care and expert guidance to clients of all ages. A strong believer in education, she created a skincare course specifically designed for teenagers, helping them build healthy habits early on. When she’s not working with clients or writing for the Doylestown Cardinal, Paula enjoys spending time with her family, and kayaking whenever she gets the chance.",
    image: "/images/Staff/Paula-Carsello-Mason.jpeg",
    email: "paula@thecardinal.com",
    twitter: "https://twitter.com/thecardinal",
    linkedin: "https://linkedin.com/company/thecardinal",
    expertise: ["Beauty & Wellness", "Skincare", "Teen Health"],
  },
  {
    id: "ryan-greiser",
    search: "Ryan-Greiser",
    name: "Ryan Greiser",
    role: "Writer",
    bio: "Ryan Greiser, CFP® founded Opulus in Doylestown to help Millennials cut taxes, boost income, and grow lasting wealth. Named to InvestmentNews' Best Wealth Managers Under 40 and Investopedia's Top 100 Financial Advisors, he guides his clients toward financial independence and living life on their own terms.",
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (writer) {
      fetch(
        `https://doylestowncardinal.com/wp-json/wp/v2/posts?search=${encodeURIComponent(writer.search)}&_embed=true&per_page=4`,
      )
        .then((res) => res.json())
        .then((data) => setArticles(data))
        .catch((err) => console.error("Failed to fetch articles:", err));
    }
  }, [writer?.name]);

  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!writer) {
      setIsRedirecting(true);
      navigate("/writers", { replace: true });
    }
  }, [writer, navigate]);

  if (!writer) {
    return (
      <div className="min-h-screen bg-[#F2F0EF] pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-charcoal-gray mb-4">
            {isRedirecting
              ? "Redirecting to Writers page..."
              : "Writer not found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EF] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/writers"
          className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mb-6"
        >
          <ChevronRight size={20} className="mr-1 rotate-180" />
          Back to Writers
        </Link>
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
          {articles.length > 0 && (
            <div className="mt-10 px-8 pb-8">
              <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-6">
                Recent Articles by {writer.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.slug}`}
                    className="block bg-white border border-charcoal-gray/10 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-playfair text-lg font-bold text-charcoal-gray mb-2">
                      {article.title.rendered}
                    </h3>
                    <p className="text-sm text-cardinal-red mb-3">
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                    <div
                      className="text-sm text-charcoal-gray/80 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: article.excerpt.rendered,
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WriterPage;
