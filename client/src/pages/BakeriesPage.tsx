import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Clock, Cake, Phone, Globe, ChevronRight, Star, X, Filter, Cookie } from 'lucide-react';

// Constants for filtering
const bakeryTypes = [
  "All Types",
  "Full-Service Bakery",
  "Patisserie",
  "Bread Bakery",
  "Cupcake Shop",
  "Gluten-Free",
  "Vegan"
];

const neighborhoods = [
  "All Neighborhoods",
  "Downtown",
  "State Street",
  "Main Street",
  "Buckingham Green",
  "South Main",
  "North Main"
];

const specialties = [
  "All Specialties",
  "Wedding Cakes",
  "Artisan Bread",
  "French Pastries",
  "Cupcakes",
  "Cookies",
  "Gluten-Free",
  "Vegan Options"
];

// Mock data for bakeries
const mockBakeries = [
  {
    id: 1,
    name: "Crossroads Bake Shop",
    type: "Full-Service Bakery",
    rating: 4.8,
    neighborhood: "Downtown",
    address: "812 N Easton Rd, Doylestown, PA 18901",
    phone: "(215) 345-5157",
    website: "https://crossroadsbakeshop.com",
    hours: "Tue-Sat: 7am-6pm, Sun: 7am-2pm",
    description: "Family-owned bakery since 1991, specializing in artisan breads, European-style pastries, and custom cakes. Known for using traditional baking methods and high-quality ingredients.",
    specialties: ["Artisan Bread", "Wedding Cakes", "French Pastries"],
    features: ["Custom Orders", "Wedding Cakes", "Catering", "Breakfast"],
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80",
    featuredItems: [
      "Sourdough Bread",
      "French Baguettes",
      "Custom Wedding Cakes"
    ]
  },
  {
    id: 2,
    name: "Le Macaron Doylestown",
    type: "Patisserie",
    rating: 4.7,
    neighborhood: "State Street",
    address: "22 S Main St, Doylestown, PA 18901",
    phone: "(215) 230-3633",
    website: "https://lemacarondoylestown.com",
    hours: "Mon-Sat: 10am-7pm, Sun: 11am-5pm",
    description: "Authentic French patisserie offering handcrafted macarons, pastries, and European-style desserts. Features a charming café atmosphere with coffee and tea service.",
    specialties: ["French Pastries", "Macarons", "Specialty Cakes"],
    features: ["Café Seating", "Coffee & Tea", "Gift Boxes", "Special Orders"],
    image: "https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&q=80",
    featuredItems: [
      "Assorted Macarons",
      "Opera Cake",
      "French Croissants"
    ]
  },
  {
    id: 3,
    name: "Sweetah's Gluten Free Bake Shop",
    type: "Gluten-Free",
    rating: 4.6,
    neighborhood: "Main Street",
    address: "22 S Main St, Doylestown, PA 18901",
    phone: "(215) 489-2092",
    website: "https://sweetahs.com",
    hours: "Wed-Sat: 9am-5pm, Sun: 9am-3pm",
    description: "Dedicated gluten-free bakery offering a wide variety of treats, breads, and custom cakes. Also features vegan and dairy-free options in a dedicated allergen-free facility.",
    specialties: ["Gluten-Free", "Vegan Options", "Custom Cakes"],
    features: ["Allergen-Free", "Custom Orders", "Catering", "Breakfast Items"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    featuredItems: [
      "Gluten-Free Bread",
      "Vegan Cupcakes",
      "Allergen-Free Cookies"
    ]
  }
];

interface Bakery {
  id: number;
  name: string;
  type: string;
  rating: number;
  neighborhood: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  description: string;
  specialties: string[];
  features: string[];
  image: string;
  featuredItems: string[];
}

const BakeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBakeryType, setSelectedBakeryType] = useState("All Types");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("All Neighborhoods");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedBakery, setSelectedBakery] = useState<Bakery | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedBakery && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedBakery(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedBakery]);

  const BakeryDetailModal = ({ bakery, onClose }: { bakery: Bakery; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={bakery.image}
            alt={bakery.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-cardinal-red">{bakery.type}</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{bakery.rating}</span>
              </div>
            </div>
            
            <h2 className="font-playfair text-3xl font-bold mb-4">{bakery.name}</h2>
            <p className="text-gray-600 mb-6">{bakery.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{bakery.address}</p>
                    <p className="text-gray-600">{bakery.neighborhood}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">{bakery.hours}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{bakery.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a 
                      href={bakery.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Featured Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {bakery.featuredItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-cardinal-red/5 rounded-lg flex items-center gap-2"
                  >
                    <Cookie size={16} className="text-cardinal-red" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Features & Services</h3>
              <div className="flex flex-wrap gap-2">
                {bakery.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col mb-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
            alt="Bakery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Local Artisan Bakeries
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover Doylestown's finest bakeries, featuring freshly baked breads, 
              exquisite pastries, and custom cakes crafted with care and tradition.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="border border-[#333333] rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search bakeries..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Bakery Type</h3>
                <div className="space-y-2">
                  {bakeryTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedBakeryType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedBakeryType === type
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Neighborhood</h3>
                <div className="space-y-2">
                  {neighborhoods.map(neighborhood => (
                    <button
                      key={neighborhood}
                      onClick={() => setSelectedNeighborhood(neighborhood)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedNeighborhood === neighborhood
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {neighborhood}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-bold mb-3">Specialties</h3>
                <div className="space-y-2">
                  {specialties.map(specialty => (
                    <button
                      key={specialty}
                      onClick={() => setSelectedSpecialty(specialty)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedSpecialty === specialty
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Bakery Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBakeries.map(bakery => (
                <div
                  key={bakery.id}
                  className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  onClick={() => setSelectedBakery(bakery)}
                >
                  <div className="relative h-48">
                    <img
                      src={bakery.image}
                      alt={bakery.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{bakery.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{bakery.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{bakery.specialties.join(", ")}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold mb-2 hover:text-cardinal-red transition-colors">
                      {bakery.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{bakery.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{bakery.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cake size={14} />
                        <span className="line-clamp-1">{bakery.features.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bakery Detail Modal */}
      {selectedBakery && (
        <BakeryDetailModal
          bakery={selectedBakery}
          onClose={() => setSelectedBakery(null)}
        />
      )}
    </div>
  );
};

export default BakeriesPage;