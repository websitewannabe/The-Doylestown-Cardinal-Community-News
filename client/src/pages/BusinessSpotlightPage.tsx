import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Globe, Phone, Star, ChevronRight, Building2, Heart, Users, Mail } from 'lucide-react';

const currentSpotlight = {
  id: 1,
  name: "Doylestown Bookshop",
  category: "Retail",
  description: "A cornerstone of downtown Doylestown's cultural scene, offering an expertly curated selection of books and hosting community events.",
  longDescription: `For over 25 years, the Doylestown Bookshop has been more than just a bookstore - it's a community hub where literary minds meet and ideas flourish.

Our commitment to the community includes:
• Regular author events and book signings
• Children's story time programs
• Local author showcase
• Book clubs and discussion groups
• Educational workshops

Through careful curation and passionate booksellers, we've created a space that celebrates literature while fostering community connections.`,
  image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
  address: "16 S Main St, Doylestown, PA 18901",
  phone: "(215) 230-7610",
  website: "https://doylestownbookshop.com",
  email: "info@doylestownbookshop.com",
  hours: "Mon-Sat: 9am-9pm, Sun: 11am-6pm",
  yearEstablished: 1998,
  impact: "25+ years serving the community",
  features: ["Author Events", "Children's Programs", "Local Author Support", "Book Clubs"],
  images: [
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80"
  ],
  testimonials: [
    {
      quote: "The Bookshop has been an invaluable partner in promoting literacy and fostering a love of reading in our community.",
      author: "Emily Chen",
      role: "Local Teacher"
    },
    {
      quote: "Their support of local authors and commitment to community events makes them more than just a bookstore.",
      author: "James Wilson",
      role: "Local Author"
    }
  ]
};

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
    name: "Honey Restaurant",
    category: "Dining",
    description: "Farm-to-table restaurant celebrating local ingredients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    address: "42 Shewell Ave, Doylestown, PA 18901",
    impact: "100+ local farm partnerships",
    month: "January 2024"
  },
  {
    id: 4,
    name: "Main Street Marketplace",
    category: "Shopping",
    description: "Supporting local businesses and creating a vibrant shopping district.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    address: "Main Street, Doylestown, PA 18901",
    impact: "50+ local businesses supported",
    month: "December 2023"
  }
];

const BusinessSpotlightPage = () => {
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
              March 2024 Business Spotlight
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
            {/* Image Gallery - Updated with new layout */}
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
                    alt={`${currentSpotlight.name} display`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Second large image */}
                <div>
                  <img
                    src={currentSpotlight.images[3]}
                    alt={`${currentSpotlight.name} reading area`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                {/* Two small images */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={currentSpotlight.images[4]}
                    alt={`${currentSpotlight.name} event space`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <img
                    src={currentSpotlight.images[5]}
                    alt={`${currentSpotlight.name} children's section`}
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
                        <span className="text-cardinal-red">{testimonial.role}</span>
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
            Previous Business Spotlights
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

      {/* Nominate Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Know a Business Worth Spotlighting?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us showcase the businesses that make Doylestown special. Nominate a local 
              business that's making a difference in our community.
            </p>
            <Link
              to="/community/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Nominate a Business
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSpotlightPage;