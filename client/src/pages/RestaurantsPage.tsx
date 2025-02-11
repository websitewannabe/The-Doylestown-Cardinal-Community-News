import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Clock, DollarSign, Phone, Globe, ChevronRight, Star, X, Filter, Menu } from 'lucide-react';

// Constants for filtering
const cuisineTypes = [
  "All Cuisines",
  "American",
  "Italian",
  "Asian Fusion",
  "Mediterranean",
  "Mexican",
  "Farm-to-Table",
  "French",
  "Pub Food",
  "Vegetarian"
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

const priceRanges = [
  "All Prices",
  "$",
  "$$",
  "$$$",
  "$$$$"
];

// Mock data for restaurants
const mockRestaurants = [
  {
    id: 1,
    name: "The Doylestown Inn",
    cuisine: "American",
    priceRange: "$$$",
    rating: 4.5,
    neighborhood: "Downtown",
    address: "18 West State Street, Doylestown, PA 18901",
    phone: "(215) 345-6610",
    website: "https://doylestowninn.com",
    hours: "Mon-Sun: 11:30am-10pm",
    description: "Historic inn featuring refined American cuisine in an elegant setting with a sophisticated bar program.",
    features: ["Full Bar", "Outdoor Seating", "Private Events", "Reservations"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Honey",
    cuisine: "New American",
    priceRange: "$$$",
    rating: 4.7,
    neighborhood: "State Street",
    address: "42 Shewell Avenue, Doylestown, PA 18901",
    phone: "(215) 489-4200",
    website: "https://honeyrestaurant.com",
    hours: "Tue-Sun: 5pm-10pm",
    description: "Contemporary American BYOB featuring seasonal ingredients and creative preparations in an intimate setting.",
    features: ["BYOB", "Outdoor Seating", "Reservations", "Farm-to-Table"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Villa Capri",
    cuisine: "Italian",
    priceRange: "$$",
    rating: 4.4,
    neighborhood: "Main Street",
    address: "13 West Court Street, Doylestown, PA 18901",
    phone: "(215) 348-5674",
    website: "https://villacapridoylestown.com",
    hours: "Mon-Sun: 11am-10pm",
    description: "Family-owned Italian restaurant serving traditional pasta dishes and wood-fired pizzas.",
    features: ["Family-Friendly", "Takeout", "Delivery", "Catering"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
  }
];

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  neighborhood: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  description: string;
  features: string[];
  image: string;
}

const RestaurantsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("All Neighborhoods");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedRestaurant && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedRestaurant(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedRestaurant]);

  const RestaurantDetailModal = ({ restaurant, onClose }: { restaurant: Restaurant; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
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
              <span className="text-sm font-medium text-cardinal-red">{restaurant.cuisine}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm font-medium">{restaurant.priceRange}</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
              </div>
            </div>
            
            <h2 className="font-playfair text-3xl font-bold mb-4">{restaurant.name}</h2>
            <p className="text-gray-600 mb-6">{restaurant.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{restaurant.address}</p>
                    <p className="text-gray-600">{restaurant.neighborhood}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">{restaurant.hours}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a 
                      href={restaurant.website}
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
              <h3 className="font-medium mb-4">Features</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.features.map((feature, index) => (
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
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Discover Local Flavors
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Explore Doylestown's diverse dining scene, from cozy cafes to fine dining establishments. 
              Find your next favorite local restaurant.
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
                    placeholder="Search restaurants..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Cuisine Type</h3>
                <div className="space-y-2">
                  {cuisineTypes.map(cuisine => (
                    <button
                      key={cuisine}
                      onClick={() => setSelectedCuisine(cuisine)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCuisine === cuisine
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {cuisine}
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
                <h3 className="font-playfair text-lg font-bold mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map(price => (
                    <button
                      key={price}
                      onClick={() => setSelectedPriceRange(price)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedPriceRange === price
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Restaurant Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRestaurants.map(restaurant => (
                <div
                  key={restaurant.id}
                  className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  onClick={() => setSelectedRestaurant(restaurant)}
                >
                  <div className="relative h-48">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{restaurant.cuisine}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{restaurant.priceRange}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold mb-2 hover:text-cardinal-red transition-colors">
                      {restaurant.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{restaurant.neighborhood}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Menu size={14} />
                        <span className="line-clamp-1">{restaurant.features.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
};

export default RestaurantsPage;