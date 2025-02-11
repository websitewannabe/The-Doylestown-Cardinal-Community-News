import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Briefcase, Utensils, Theater, Heart, Building2, MapPin, ChevronRight } from 'lucide-react';

// Mock data for spotlight features
const spotlightBusinesses = [
  {
    id: 1,
    name: "Doylestown Bookshop",
    description: "A cornerstone of downtown Doylestown's cultural scene, offering an expertly curated selection of books and hosting community events.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    category: "Shopping",
    address: "16 S Main St, Doylestown, PA 18901",
    story: "For over 25 years, the Doylestown Bookshop has been more than just a bookstore - it's a community hub where literary minds meet..."
  },
  {
    id: 2,
    name: "County Theater",
    description: "Historic art deco movie theater showcasing independent and art films while preserving cinematic heritage.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    category: "Entertainment",
    address: "20 E State St, Doylestown, PA 18901",
    story: "Since 1938, the County Theater has been entertaining audiences with carefully selected films in a beautifully preserved art deco setting..."
  },
  {
    id: 3,
    name: "Honey Restaurant",
    description: "Farm-to-table restaurant offering seasonal American cuisine in an intimate setting.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    category: "Dining",
    address: "42 Shewell Ave, Doylestown, PA 18901",
    story: "Honey has established itself as a culinary destination, where local ingredients meet creative preparation..."
  }
];

// Mock data for business directory
const businessCategories = [
  {
    name: "Shopping",
    icon: ShoppingBag,
    businesses: [
      { name: "Doylestown Bookshop", address: "16 S Main St" },
      { name: "Monkey's Uncle", address: "47 E State St" },
      { name: "Bucks County Running Company", address: "52 E State St" }
    ]
  },
  {
    name: "Services",
    icon: Briefcase,
    businesses: [
      { name: "Doylestown Hair Studio", address: "132 N Main St" },
      { name: "Central Bucks Printing", address: "21 E Oakland Ave" },
      { name: "Bucks Digital", address: "18 W State St" }
    ]
  },
  {
    name: "Dining",
    icon: Utensils,
    businesses: [
      { name: "Honey", address: "42 Shewell Ave" },
      { name: "Villa Capri", address: "13 W Court St" },
      { name: "Domani Star", address: "57 W State St" }
    ]
  },
  {
    name: "Entertainment",
    icon: Theater,
    businesses: [
      { name: "County Theater", address: "20 E State St" },
      { name: "Fonthill Castle", address: "525 E Court St" },
      { name: "Mercer Museum", address: "84 S Pine St" }
    ]
  },
  {
    name: "Health & Wellness",
    icon: Heart,
    businesses: [
      { name: "Doylestown Health", address: "595 W State St" },
      { name: "Core Fitness", address: "22 S Main St" },
      { name: "Roots Yoga", address: "8 W Oakland Ave" }
    ]
  },
  {
    name: "Lodging",
    icon: Building2,
    businesses: [
      { name: "Doylestown Inn", address: "18 W State St" },
      { name: "Hargrave House B&B", address: "50 S Main St" },
      { name: "Colonial Village Suites", address: "400 N Main St" }
    ]
  }
];

const FeaturedBusinessesPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80"
            alt="Doylestown Business District"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Discover Local Businesses
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Explore the diverse businesses that make Doylestown a vibrant community, 
              from historic establishments to innovative newcomers.
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

      {/* Spotlight Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-12">
            Business Spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spotlightBusinesses.map(business => (
              <div 
                key={business.id}
                className="group relative overflow-hidden border border-[#333333] rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-cardinal-red">{business.category}</span>
                  <h3 className="font-playfair text-xl font-bold mt-2 mb-3 group-hover:text-cardinal-red transition-colors">
                    {business.name}
                  </h3>
                  <div className="flex items-center text-charcoal-gray/60 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {business.address}
                  </div>
                  <p className="text-charcoal-gray/80 mb-4">
                    {business.description}
                  </p>
                  <button className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors">
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-12">
            Business Directory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCategories.map(category => (
              <div 
                key={category.name}
                className="border border-[#333333] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">{category.name}</h3>
                </div>
                <ul className="space-y-4">
                  {category.businesses.map(business => (
                    <li key={business.name} className="flex items-start gap-2">
                      <MapPin size={16} className="text-cardinal-red flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">{business.name}</p>
                        <p className="text-sm text-charcoal-gray/60">{business.address}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBusinessesPage;