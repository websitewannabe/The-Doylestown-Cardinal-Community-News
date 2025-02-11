import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronRight, Star, Users, Building2, Ticket } from 'lucide-react';

// Mock data for current spotlight
const currentSpotlight = {
  id: 1,
  name: "Doylestown Arts Festival",
  category: "Arts & Culture",
  date: "April 15-16, 2024",
  time: "10:00 AM - 6:00 PM",
  location: "Downtown Doylestown",
  address: "Main Street & Court Street, Doylestown, PA 18901",
  description: "Annual celebration of local artists featuring live performances and exhibitions.",
  longDescription: `The Doylestown Arts Festival is a cornerstone event celebrating our community's vibrant arts scene. This two-day festival transforms downtown Doylestown into an outdoor gallery and performance space, featuring:

• Over 160 juried artists and craftspeople
• Live music performances on multiple stages
• Interactive art demonstrations
• Children's art activities
• Local food vendors and restaurants
• Plein air painting competition

The festival draws thousands of visitors from across the region, showcasing the best of our local creative community while supporting downtown businesses.`,
  organizer: "Doylestown Arts Council",
  website: "https://doylestownartsfestival.com",
  phone: "(215) 340-9988",
  email: "info@doylestownartsfestival.com",
  attendance: "10,000+ expected",
  features: ["160+ Artists", "Live Music", "Food Court", "Family Activities", "Free Admission"],
  images: [
    "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
  ]
};

// Mock data for previous spotlights
const previousSpotlights = [
  {
    id: 2,
    name: "Spring Jazz Concert Series",
    category: "Music",
    date: "April 22, 2024",
    time: "7:30 PM - 10:00 PM",
    location: "County Theater",
    description: "An evening of jazz featuring local and national artists.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    attendance: "300 seats",
    month: "February 2024"
  },
  {
    id: 3,
    name: "Farmers Market Opening Day",
    category: "Community",
    date: "April 20, 2024",
    time: "8:00 AM - 1:00 PM",
    location: "Buckingham Green",
    description: "Season opening of the Doylestown Farmers Market.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    attendance: "1,000+ expected",
    month: "January 2024"
  },
  {
    id: 4,
    name: "Holiday Tree Lighting",
    category: "Community",
    date: "December 1, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Hamilton Street",
    description: "Annual community celebration to start the holiday season.",
    image: "https://images.unsplash.com/photo-1545622783-b3e021430fee?auto=format&fit=crop&q=80",
    attendance: "2,000+ attended",
    month: "December 2023"
  }
];

const EventSpotlightPage = () => {
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
              April 2024 Event Spotlight
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
            Current Event Spotlight
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
                    alt={`${currentSpotlight.name} crowd`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[2]}
                    alt={`${currentSpotlight.name} performance`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Second large image */}
                <div>
                  <img
                    src={currentSpotlight.images[3]}
                    alt={`${currentSpotlight.name} evening view`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={currentSpotlight.images[4]}
                    alt={`${currentSpotlight.name} art display`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[5]}
                    alt={`${currentSpotlight.name} people mingling`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Event Info */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-cardinal-red">{currentSpotlight.category}</span>
                  <span className="text-charcoal-gray/40">•</span>
                  <span className="text-sm font-medium">{currentSpotlight.attendance}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Date & Time</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.date}</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.location}</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Organizer</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.organizer}</p>
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

                <Link
                  to={`/events/${currentSpotlight.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                >
                  View Event Details
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
            Previous Event Spotlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousSpotlights.map(event => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="group"
              >
                <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm">
                        {event.month}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{event.category}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                      {event.name}
                    </h3>
                    <div className="space-y-2 text-sm text-charcoal-gray/60">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>{event.attendance}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-charcoal-gray/80 line-clamp-2">
                      {event.description}
                    </p>
                    <span className="inline-flex items-center text-cardinal-red group-hover:text-forest-green transition-colors mt-4">
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
              Have an Event to Share?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us showcase the exciting events happening in Doylestown. Submit your event 
              for consideration as our next spotlight feature.
            </p>
            <Link
              to="/community/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Submit an Event
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventSpotlightPage;