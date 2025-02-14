import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Calendar, MapPin, ChevronRight, Star } from 'lucide-react';
import NominationForm from '../components/ui/NominationForm';

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
  const [showNominationForm, setShowNominationForm] = useState(false);
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
            alt="Doylestown Community"
            className="w-full h-full object-cover blur-[3px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
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

      {/* Individual Spotlight Sections */}
      {spotlights.map((spotlight, index) => (
        <section key={spotlight.id} className={`py-16 relative ${index % 2 === 0 ? 'bg-white' : 'bg-[#F2F0EF]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-8 text-center">
              {spotlight.title}
            </h2>
            <div className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'}`}>
              <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 relative h-[500px] rounded-lg overflow-hidden transform lg:hover:-translate-y-2 transition-all duration-300">
                  <div className={`absolute inset-0 ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'} scale-105`}>
                    <img
                      src={spotlight.featured.image}
                      alt={spotlight.featured.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-sm font-medium text-white bg-cardinal-red px-4 py-2 rounded-full shadow-lg">
                      {spotlight.title}
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6 p-8 bg-white rounded-lg shadow-sm">
                  <h3 className="font-playfair text-4xl font-bold text-charcoal-gray relative">
                    <span className="relative z-10">{spotlight.featured.name}</span>
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-12 bg-cardinal-red/20 rounded-r-full -z-1"></span>
                  </h3>
                  {spotlight.featured.address && (
                    <div className="flex items-center text-charcoal-gray/80 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {spotlight.featured.address}
                    </div>
                  )}
                  {spotlight.featured.date && (
                    <div className="flex items-center text-charcoal-gray/80 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {spotlight.featured.date}
                    </div>
                  )}
                  {spotlight.featured.role && (
                    <div className="flex items-center text-charcoal-gray/80 text-sm">
                      <Users size={14} className="mr-1" />
                      {spotlight.featured.role}
                    </div>
                  )}
                  <p className="text-charcoal-gray/80 text-lg leading-relaxed">
                    {spotlight.featured.description}
                  </p>
                  <div className="!mt-8">
                    <Link
                      to={spotlight.link}
                      className="inline-flex items-center px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      View All {spotlight.title}s
                      <ChevronRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-1/2 -translate-y-1/2 w-8 h-32 bg-cardinal-red/10 rounded-full -z-1`}></div>
              <div className={`absolute ${index % 2 === 0 ? 'right-8' : 'left-8'} -bottom-4 w-24 h-24 bg-forest-green/5 rounded-full -z-1`}></div>
            </div>
          </div>
        </section>
      ))}

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
            <button
              onClick={() => setShowNominationForm(true)}
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Submit a Nomination
              <ChevronRight size={20} className="ml-2" />
            </button>
            {showNominationForm && (
              <NominationForm onClose={() => setShowNominationForm(false)} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySpotlightPage;