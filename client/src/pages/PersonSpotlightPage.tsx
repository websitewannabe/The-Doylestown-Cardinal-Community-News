import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, ChevronRight, Quote, Heart, Users, Building2 } from 'lucide-react';

// Mock data for current spotlight
const currentSpotlight = {
  id: 1,
  name: "Sarah Thompson",
  role: "Community Organizer",
  organization: "Doylestown Food Pantry",
  impact: "Helped over 1,000 families in 2023",
  description: "Leading local food drive initiatives and community support programs.",
  longDescription: `Sarah Thompson has been a driving force in Doylestown's fight against food insecurity for the past decade. As the lead organizer at the Doylestown Food Pantry, she has transformed the organization from a small volunteer operation into a comprehensive community support system.

Under her leadership, the Food Pantry has:
• Expanded services to reach over 1,000 families annually
• Launched a mobile pantry program serving seniors and disabled residents
• Established partnerships with local farms and grocery stores
• Created educational programs on nutrition and cooking

Beyond her work at the Food Pantry, Sarah serves on several community boards and regularly speaks at schools about food security and community service. Her innovative approaches to community support have become a model for other organizations in Bucks County.`,
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  email: "sarah@doylestownfoodpantry.org",
  twitter: "https://twitter.com/sarahthompson",
  linkedin: "https://linkedin.com/in/sarahthompson",
  yearsInCommunity: 15,
  achievements: [
    "Bucks County Community Service Award 2023",
    "Doylestown Citizen of the Year 2022",
    "Pennsylvania Food Bank Excellence Award"
  ],
  initiatives: [
    "Mobile Food Pantry Program",
    "Youth Nutrition Education",
    "Community Garden Project"
  ],
  testimonials: [
    {
      quote: "Sarah's dedication to our community is truly inspiring. She's created a support system that goes far beyond just providing food.",
      author: "Michael Chen",
      role: "City Council Member"
    },
    {
      quote: "Her innovative approach to community service has transformed how we think about food security in Doylestown.",
      author: "Emily Rodriguez",
      role: "Local Business Owner"
    }
  ],
  images: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80"
  ]
};

// Mock data for previous spotlights
const previousSpotlights = [
  {
    id: 2,
    name: "James Wilson",
    role: "Historic Preservation Advocate",
    organization: "Doylestown Historical Society",
    description: "Champion of Doylestown's architectural heritage and community history.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    impact: "Preserved 12 historic buildings",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Arts Foundation Director",
    organization: "Doylestown Arts Foundation",
    description: "Expanding access to arts education and cultural programs in our community.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    impact: "Created 5 new community art programs",
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Park",
    role: "Youth Sports Coordinator",
    organization: "Doylestown Athletics",
    description: "Building character and community through youth sports programs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    impact: "Mentored 200+ young athletes",
    date: "December 2023"
  }
];

const PersonSpotlightPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src={currentSpotlight.images[0]}
            alt={currentSpotlight.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <span className="inline-block bg-cardinal-red text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              March 2024 Person Spotlight
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              {currentSpotlight.name}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {currentSpotlight.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="relative w-full h-[120px] text-[#F2F0EF] preserve-3d"
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor"
              d="M0,120 C240,100 480,20 720,40 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>

      {/* Current Spotlight Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="space-y-4">
                {/* First large image */}
                <div>
                  <img
                    src={currentSpotlight.images[0]}
                    alt={currentSpotlight.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                
                {/* Two medium images */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={currentSpotlight.images[1]}
                    alt={`${currentSpotlight.name} working with volunteers`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[2]}
                    alt={`${currentSpotlight.name} at food drive`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Second large image */}
                <div>
                  <img
                    src={currentSpotlight.images[3]}
                    alt={`${currentSpotlight.name} at community event`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={currentSpotlight.images[4]}
                    alt={`${currentSpotlight.name} speaking`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[5]}
                    alt={`${currentSpotlight.name} with team`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Person Info */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-charcoal-gray">
                      {currentSpotlight.name}
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <Building2 className="w-5 h-5 text-cardinal-red" />
                      <div>
                        <span className="font-medium">{currentSpotlight.role}</span>
                        <span className="text-charcoal-gray/60 mx-2">•</span>
                        <span>{currentSpotlight.organization}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${currentSpotlight.email}`}
                      className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                      title="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={currentSpotlight.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                      title="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={currentSpotlight.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cardinal-red/10 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-cardinal-red" />
                    <span>{currentSpotlight.impact}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-cardinal-red" />
                    <span>{currentSpotlight.yearsInCommunity} years in Doylestown</span>
                  </div>
                </div>

                <div className="prose prose-lg mb-6">
                  <p className="text-charcoal-gray/80 whitespace-pre-line">
                    {currentSpotlight.longDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-charcoal-gray mb-3">Key Achievements</h3>
                  <div className="space-y-2">
                    {currentSpotlight.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-charcoal-gray/80"
                      >
                        <span className="w-1.5 h-1.5 bg-cardinal-red rounded-full" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-charcoal-gray mb-3">Community Initiatives</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentSpotlight.initiatives.map((initiative, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                      >
                        {initiative}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {currentSpotlight.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-[#F2F0EF] p-4 rounded-lg">
                      <Quote size={24} className="text-cardinal-red mb-2" />
                      <p className="text-charcoal-gray/80 italic mb-2">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">{testimonial.author}</span>
                        <span className="text-charcoal-gray/60 mx-2">•</span>
                        <span className="text-cardinal-red">{testimonial.role}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/community/person/${currentSpotlight.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                >
                  Read Full Story
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Spotlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-12">
            Previous Person Spotlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousSpotlights.map(person => (
              <Link
                key={person.id}
                to={`/community/person/${person.id}`}
                className="group"
              >
                <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm">
                        {person.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                      {person.name}
                    </h3>
                    <div className="flex items-center gap-2 text-charcoal-gray/60 text-sm mb-2">
                      <Building2 size={14} />
                      <span>{person.role}</span>
                      <span className="mx-1">•</span>
                      <span>{person.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cardinal-red text-sm mb-4">
                      <Heart size={14} />
                      {person.impact}
                    </div>
                    <p className="text-charcoal-gray/80 line-clamp-2 mb-4">
                      {person.description}
                    </p>
                    <span className="inline-flex items-center text-cardinal-red group-hover:text-forest-green transition-colors">
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Know Someone Making a Difference?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us celebrate the people who make Doylestown special. Nominate someone 
              who's making a positive impact in our community.
            </p>
            <Link
              to="/community/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Nominate Someone
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonSpotlightPage;