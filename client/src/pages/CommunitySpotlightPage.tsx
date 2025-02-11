import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Calendar, MapPin, ChevronRight, Star } from 'lucide-react';

// Mock data for spotlights
const spotlights = [
  {
    id: 1,
    title: "Business Spotlight",
    description: "Discover local businesses making an impact in our community.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    link: "/community/spotlight/business",
    featured: {
      name: "Doylestown Bookshop",
      description: "A cornerstone of downtown Doylestown's cultural scene, offering an expertly curated selection of books and hosting community events.",
      address: "16 S Main St, Doylestown, PA 18901",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 2,
    title: "Person Spotlight",
    description: "Meet the individuals who make our community special.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    link: "/community/spotlight/person",
    featured: {
      name: "Sarah Thompson",
      description: "Local food drive organizer who has helped over 1,000 families this year.",
      role: "Community Organizer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 3,
    title: "Event Spotlight",
    description: "Highlighting significant events and gatherings in Doylestown.",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    link: "/community/spotlight/event",
    featured: {
      name: "Doylestown Arts Festival",
      description: "Annual celebration of local artists featuring live performances and exhibitions.",
      date: "April 15-16, 2024",
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 4,
    title: "Building Spotlight",
    description: "Explore the architectural heritage and stories behind local landmarks.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    link: "/community/spotlight/building",
    featured: {
      name: "County Theater",
      description: "Historic art deco movie theater preserving cinematic heritage while showcasing independent films.",
      address: "20 E State St, Doylestown, PA 18901",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80"
    }
  },
  {
    id: 5,
    title: "Advertiser of the Month",
    description: "Recognizing businesses that support local journalism.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    link: "/community/spotlight/advertiser",
    featured: {
      name: "Main Street Marketplace",
      description: "Supporting local businesses and creating a vibrant shopping district in downtown Doylestown.",
      address: "Main Street, Doylestown, PA 18901",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
    }
  }
];

const CommunitySpotlightPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
            alt="Doylestown Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Community Spotlight
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Celebrating the people, places, and events that make Doylestown special. 
              Discover inspiring stories from our community.
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

      {/* Spotlights Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spotlights.map(spotlight => (
              <div
                key={spotlight.id}
                className="group relative overflow-hidden border border-[#333333] rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={spotlight.featured.image}
                    alt={spotlight.featured.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm font-medium text-white/90 bg-cardinal-red px-3 py-1 rounded-full">
                      {spotlight.title}
                    </span>
                    <h3 className="font-playfair text-2xl font-bold text-white mt-2 mb-2">
                      {spotlight.featured.name}
                    </h3>
                    {spotlight.featured.address && (
                      <div className="flex items-center text-white/80 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {spotlight.featured.address}
                      </div>
                    )}
                    {spotlight.featured.date && (
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {spotlight.featured.date}
                      </div>
                    )}
                    {spotlight.featured.role && (
                      <div className="flex items-center text-white/80 text-sm">
                        <Users size={14} className="mr-1" />
                        {spotlight.featured.role}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-charcoal-gray/80 mb-4">
                    {spotlight.featured.description}
                  </p>
                  <Link
                    to={spotlight.link}
                    className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                  >
                    View All {spotlight.title}s
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Know Someone or Something Worth Spotlighting?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us celebrate the people, businesses, and places that make our community special. 
              Nominate them for a spotlight feature.
            </p>
            <Link
              to="/community/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Submit a Nomination
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySpotlightPage;