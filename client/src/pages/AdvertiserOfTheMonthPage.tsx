import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Globe, Phone, Star, ChevronRight, Building2, Heart, Users, Mail } from 'lucide-react';

// Mock data for current spotlight
const currentSpotlight = {
  id: 1,
  name: "Main Street Marketplace",
  category: "Shopping District",
  description: "Supporting local businesses and creating a vibrant shopping district in downtown Doylestown.",
  longDescription: `Main Street Marketplace has been instrumental in fostering a thriving local business community in downtown Doylestown. Through their innovative programs and community-focused initiatives, they've helped create a destination shopping experience that draws visitors from across the region.

Key initiatives include:
• Shop Local campaign supporting over 50 businesses
• Monthly First Friday events
• Seasonal street festivals
• Business development workshops
• Community outreach programs

Their commitment to supporting local entrepreneurs while preserving the historic character of our downtown has helped maintain Doylestown's unique charm and economic vitality.`,
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  address: "Main Street, Doylestown, PA 18901",
  phone: "(215) 340-9988",
  website: "https://mainstreetdoylestown.com",
  email: "info@mainstreetdoylestown.com",
  hours: "Individual business hours vary",
  yearEstablished: 1995,
  impact: "Supporting 50+ local businesses",
  features: ["Shop Local Program", "Business Development", "Community Events", "Marketing Support"],
  images: [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519160558534-579f5106e43f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1464869372688-a93d806be852?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?auto=format&fit=crop&q=80"
  ],
  testimonials: [
    {
      quote: "Main Street Marketplace has been essential to our success, providing valuable resources and community connections.",
      author: "Sarah Chen",
      business: "Local Boutique Owner"
    },
    {
      quote: "Their support has helped us grow from a small shop to a thriving business with regional recognition.",
      author: "Michael Park",
      business: "Restaurant Owner"
    }
  ]
};

// Mock data for previous spotlights
const previousSpotlights = [
  {
    id: 2,
    name: "County Theater",
    category: "Entertainment",
    description: "Historic art deco movie theater preserving cinematic heritage.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    address: "20 E State St, Doylestown, PA 18901",
    impact: "50,000+ annual visitors",
    month: "February 2024"
  },
  {
    id: 3,
    name: "Doylestown Bookshop",
    category: "Retail",
    description: "Independent bookstore supporting local authors and literacy.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    address: "16 S Main St, Doylestown, PA 18901",
    impact: "25 years of community service",
    month: "January 2024"
  },
  {
    id: 4,
    name: "Honey Restaurant",
    category: "Dining",
    description: "Farm-to-table restaurant celebrating local ingredients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    address: "42 Shewell Ave, Doylestown, PA 18901",
    impact: "100+ local farm partnerships",
    month: "December 2023"
  }
];

const AdvertiserOfTheMonthPage = () => {
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
              April 2024 Advertiser of the Month
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
                    alt={`${currentSpotlight.name} street view`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[2]}
                    alt={`${currentSpotlight.name} interior`}
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
                    alt={`${currentSpotlight.name} products`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[5]}
                    alt={`${currentSpotlight.name} staff`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-cardinal-red">{currentSpotlight.category}</span>
                  <span className="text-charcoal-gray/40">•</span>
                  <span className="text-sm font-medium">Est. {currentSpotlight.yearEstablished}</span>
                </div>

                <div className="space-y-4 mb-6">
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
                    <Phone className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-charcoal-gray/80">{currentSpotlight.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-cardinal-red" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${currentSpotlight.email}`}
                        className="text-cardinal-red hover:text-forest-green transition-colors"
                      >
                        {currentSpotlight.email}
                      </a>
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

                <div className="space-y-4 mb-6">
                  {currentSpotlight.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-[#F2F0EF] p-4 rounded-lg">
                      <p className="text-charcoal-gray/80 italic mb-2">
                        "{testimonial.quote}"
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">{testimonial.author}</span>
                        <span className="text-charcoal-gray/60 mx-2">•</span>
                        <span className="text-cardinal-red">{testimonial.business}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/business/${currentSpotlight.id}`}
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                >
                  View Business Profile
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
            Previous Advertisers of the Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousSpotlights.map(business => (
              <Link
                key={business.id}
                to={`/business/${business.id}`}
                className="group"
              >
                <div className="bg-[#F2F0EF] rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm">
                        {business.month}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{business.category}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                      {business.name}
                    </h3>
                    <div className="flex items-center gap-2 text-charcoal-gray/60 text-sm mb-2">
                      <MapPin size={14} />
                      <span>{business.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cardinal-red text-sm mb-4">
                      <Heart size={14} />
                      <span>{business.impact}</span>
                    </div>
                    <p className="text-charcoal-gray/80 line-clamp-2 mb-4">
                      {business.description}
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

      {/* Advertise Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Want to Advertise with The Cardinal?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of local businesses and reach engaged readers across Doylestown. 
              Learn about our advertising opportunities and special features.
            </p>
            <Link
              to="/advertise"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Advertise with Us
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertiserOfTheMonthPage;