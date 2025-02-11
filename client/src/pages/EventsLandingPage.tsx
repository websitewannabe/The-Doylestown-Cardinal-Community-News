import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'annual-events',
    title: 'Annual Events',
    description: 'Discover Doylestown\'s signature celebrations and festivals throughout the year.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80',
    count: 12,
    featured: [
      "Doylestown Arts Festival",
      "Memorial Day Parade",
      "Holiday Tree Lighting"
    ]
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Events',
    description: 'Stay up-to-date with the latest happenings in and around Doylestown.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80',
    count: 45,
    featured: [
      "Farmers Market",
      "Jazz Concert Series",
      "Food Truck Festival"
    ]
  },
  {
    id: 'all-events',
    title: 'All Events',
    description: 'Browse our complete calendar of events happening in the Doylestown area.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    count: 150,
    featured: [
      "Community Events",
      "Cultural Activities",
      "Local Gatherings"
    ]
  }
];

const EventsLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80"
            alt="Events and Entertainment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Events & Entertainment
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Experience the vibrant culture of Doylestown through our diverse calendar of events, 
              from annual festivals to community gatherings.
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

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <div
              key={category.id}
              className="group relative overflow-hidden border border-[#333333] rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-lg mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h2>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  <div className="text-white/80 mb-6">
                    <p className="font-medium mb-2">Featured {category.title}:</p>
                    <ul className="space-y-1">
                      {category.featured.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-cardinal-red rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/90">
                    {category.count} Events
                  </span>
                  <Link
                    to={`/events/${category.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-forest-green transition-colors"
                  >
                    Explore
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsLandingPage;