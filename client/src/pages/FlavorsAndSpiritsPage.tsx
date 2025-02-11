import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Wine, Beer, Cake, ChevronRight } from 'lucide-react';

// Mock data for categories
const categories = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Discover local dining establishments, from casual eateries to fine dining experiences.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    count: 45,
    featured: [
      "The Doylestown Inn",
      "Honey",
      "Villa Capri"
    ]
  },
  {
    id: 'wineries',
    title: 'Wineries',
    description: 'Explore local vineyards and wine-tasting rooms in Bucks County.',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80',
    count: 12,
    featured: [
      "Sand Castle Winery",
      "Peace Valley Winery",
      "Buckingham Valley Vineyards"
    ]
  },
  {
    id: 'distilleries',
    title: 'Distilleries',
    description: 'Sample craft spirits and learn about local distilling traditions.',
    icon: Beer,
    image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80',
    count: 8,
    featured: [
      "Hewn Spirits",
      "Clear Springs Distilling",
      "Eight Oaks Farm Distillery"
    ]
  },
  {
    id: 'bakeries',
    title: 'Bakeries',
    description: 'Find fresh-baked goods and artisanal treats from local bakeries.',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80',
    count: 15,
    featured: [
      "Crossroads Bake Shop",
      "Factory Donuts",
      "Sweet Celebrations"
    ]
  }
];

const FlavorsAndSpiritsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Flavors and Spirits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Flavors & Spirits of Doylestown
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Explore the rich culinary landscape of our community, from fine dining establishments 
              to craft beverage makers and artisanal bakeries.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    {category.count} Locations
                  </span>
                  <Link
                    to={`/flavors-and-spirits/${category.id}`}
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

export default FlavorsAndSpiritsPage;