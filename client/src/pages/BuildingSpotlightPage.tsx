import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Globe, Phone, Star, ChevronRight, Building2, History, Calendar } from 'lucide-react';

// Mock data for current spotlight
const currentSpotlight = {
  id: 1,
  name: "County Theater",
  category: "Entertainment Venue",
  yearBuilt: 1938,
  description: "Historic art deco movie theater preserving cinematic heritage while showcasing independent films.",
  longDescription: `The County Theater stands as a testament to Doylestown's commitment to preserving its architectural and cultural heritage. Built in 1938, this art deco gem has been carefully maintained and restored to continue serving as a vibrant cultural center.

The theater features:
• Original art deco architectural details
• State-of-the-art digital projection
• Two screening rooms
• Historic marquee and facade
• Community gathering space

Through the support of the community and careful stewardship, the County Theater continues to bring independent and art house films to Doylestown while maintaining its historic charm.`,
  image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
  address: "20 E State St, Doylestown, PA 18901",
  phone: "(215) 345-6789",
  website: "https://countytheater.org",
  hours: "Daily: 10:00 AM - 11:00 PM",
  architecturalStyle: "Art Deco",
  historicalDesignation: "National Register of Historic Places",
  features: ["Original Facade", "Digital Projection", "Member-Supported", "Educational Programs"],
  images: [
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
  ],
  upcomingEvents: [
    {
      name: "Film Festival Opening Night",
      date: "April 25, 2024"
    },
    {
      name: "Architecture Tour",
      date: "May 1, 2024"
    }
  ]
};

// Mock data for previous spotlights
const previousSpotlights = [
  {
    id: 2,
    name: "Mercer Museum",
    category: "Museum",
    yearBuilt: 1916,
    description: "Gothic castle museum featuring early American tools and artifacts.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    address: "84 S Pine St, Doylestown, PA 18901",
    architecturalStyle: "Gothic Revival",
    month: "February 2024"
  },
  {
    id: 3,
    name: "Fonthill Castle",
    category: "Historic House Museum",
    yearBuilt: 1912,
    description: "Former home of Henry Mercer featuring unique concrete architecture.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&q=80",
    address: "525 E Court St, Doylestown, PA 18901",
    architecturalStyle: "Medieval Revival",
    month: "January 2024"
  },
  {
    id: 4,
    name: "James-Lorah Memorial Home",
    category: "Historic House",
    yearBuilt: 1844,
    description: "Greek Revival mansion preserving 19th-century domestic life.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80",
    address: "132 N Main St, Doylestown, PA 18901",
    architecturalStyle: "Greek Revival",
    month: "December 2023"
  }
];

const BuildingSpotlightPage = () => {
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
              April 2024 Building Spotlight
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
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-8">
            Current Building Spotlight
          </h2>
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
                    alt={`${currentSpotlight.name} interior`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[2]}
                    alt={`${currentSpotlight.name} theater`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Second large image */}
                <div>
                  <img
                    src={currentSpotlight.images[3]}
                    alt={`${currentSpotlight.name} evening`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={currentSpotlight.images[4]}
                    alt={`${currentSpotlight.name} details`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[5]}
                    alt={`${currentSpotlight.name} marquee`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Building Info */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-cardinal-red">{currentSpotlight.category}</span>
                  <span className="text-charcoal-gray/40">•</span>
                  <span className="text-sm font-medium">{currentSpotlight.architecturalStyle}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <History className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Year Built</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.yearBuilt}</p>
                      <p className="text-sm text-cardinal-red">{currentSpotlight.historicalDesignation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Website</p>
                      <a 
                        href={currentSpotlight.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cardinal-red hover:text-forest-green transition-colors"
                      >
                        {currentSpotlight.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg mb-6">
                  <p className="text-charcoal-gray/80 whitespace-pre-line">
                    {currentSpotlight.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentSpotlight.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {currentSpotlight.upcomingEvents.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium text-charcoal-gray mb-3">Upcoming Events</h3>
                    <div className="space-y-2">
                      {currentSpotlight.upcomingEvents.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-charcoal-gray/80"
                        >
                          <Calendar size={14} className="text-cardinal-red" />
                          <span>{event.name}</span>
                          <span className="text-charcoal-gray/60">•</span>
                          <span>{event.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to={`/buildings/${currentSpotlight.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                >
                  Learn More
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
            Previous Building Spotlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousSpotlights.map(building => (
              <Link
                key={building.id}
                to={`/buildings/${building.id}`}
                className="group"
              >
                <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={building.image}
                      alt={building.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm">
                        {building.month}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{building.category}</span>
                      <span className="text-charcoal-gray/40">•</span>
                      <span className="text-sm">{building.architecturalStyle}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                      {building.name}
                    </h3>
                    <div className="flex items-center gap-2 text-charcoal-gray/60 text-sm mb-2">
                      <History size={14} />
                      <span>Built {building.yearBuilt}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal-gray/60 text-sm mb-4">
                      <MapPin size={14} />
                      <span>{building.address}</span>
                    </div>
                    <p className="text-charcoal-gray/80 line-clamp-2 mb-4">
                      {building.description}
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
              Know a Building Worth Spotlighting?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us showcase Doylestown's architectural heritage. Nominate a building 
              with historical significance or unique character.
            </p>
            <Link
              to="/community/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Nominate a Building
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingSpotlightPage;