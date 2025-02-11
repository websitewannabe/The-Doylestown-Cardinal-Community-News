import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  History,
  Landmark,
  Utensils,
  Music,
  Palette,
  Building2,
  Heart,
  Users,
  X,
  Info,
  Map,
  Navigation
} from 'lucide-react';

// Mock data for town guides
const townGuides = [
  {
    id: 1,
    title: "Historic District Walking Tour",
    category: "Historical Sites",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    description: "Explore Doylestown's rich architectural heritage through this self-guided walking tour of the historic district.",
    rating: 4.8,
    reviews: 156,
    duration: "2-3 hours",
    distance: "1.5 miles",
    locations: [
      {
        name: "Mercer Museum",
        description: "Gothic castle museum featuring early American tools and artifacts",
        address: "84 S Pine St",
        coordinates: { lat: 40.3086, lng: -75.1297 }
      },
      {
        name: "Fonthill Castle",
        description: "Former home of Henry Mercer with unique concrete architecture",
        address: "525 E Court St",
        coordinates: { lat: 40.3123, lng: -75.1198 }
      },
      {
        name: "County Theater",
        description: "Historic art deco movie theater from 1938",
        address: "20 E State St",
        coordinates: { lat: 40.3094, lng: -75.1289 }
      }
    ]
  },
  {
    id: 2,
    title: "Arts & Culture Trail",
    category: "Arts and Culture",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80",
    description: "Discover Doylestown's vibrant arts scene through galleries, museums, and cultural venues.",
    rating: 4.7,
    reviews: 98,
    duration: "3-4 hours",
    distance: "2 miles",
    locations: [
      {
        name: "James A. Michener Art Museum",
        description: "Regional art museum in historic prison building",
        address: "138 S Pine St",
        coordinates: { lat: 40.3075, lng: -75.1297 }
      },
      {
        name: "Bucks County Center for the Performing Arts",
        description: "Live theater and performance venue",
        address: "122 S Main St",
        coordinates: { lat: 40.3086, lng: -75.1289 }
      }
    ]
  },
  {
    id: 3,
    title: "Local Food & Drink",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    description: "Sample the best of Doylestown's culinary scene with this curated guide to local restaurants and bars.",
    rating: 4.9,
    reviews: 234,
    duration: "Flexible",
    distance: "1 mile",
    locations: [
      {
        name: "Honey Restaurant",
        description: "Farm-to-table American cuisine",
        address: "42 Shewell Ave",
        coordinates: { lat: 40.3094, lng: -75.1306 }
      },
      {
        name: "Villa Capri",
        description: "Family-owned Italian restaurant",
        address: "13 W Court St",
        coordinates: { lat: 40.3103, lng: -75.1297 }
      }
    ]
  },
  {
    id: 4,
    title: "Music & Entertainment",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    description: "Experience live music, performances, and entertainment venues throughout Doylestown.",
    rating: 4.6,
    reviews: 167,
    duration: "Evening",
    distance: "0.8 miles",
    locations: [
      {
        name: "County Theater",
        description: "Independent and art house cinema",
        address: "20 E State St",
        coordinates: { lat: 40.3094, lng: -75.1289 }
      }
    ]
  },
  {
    id: 5,
    title: "Shopping District",
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    description: "Explore boutique shops, antique stores, and local retailers in downtown Doylestown.",
    rating: 4.8,
    reviews: 189,
    duration: "2-3 hours",
    distance: "1.2 miles",
    locations: [
      {
        name: "Main Street Marketplace",
        description: "Collection of local shops and boutiques",
        address: "Main Street",
        coordinates: { lat: 40.3097, lng: -75.1289 }
      }
    ]
  },
  {
    id: 6,
    title: "Parks & Recreation",
    category: "Outdoor Activities",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    description: "Discover Doylestown's parks, trails, and outdoor recreational spaces.",
    rating: 4.7,
    reviews: 145,
    duration: "Flexible",
    distance: "Various",
    locations: [
      {
        name: "Central Park",
        description: "Community park with walking trails",
        address: "425 Wells Rd",
        coordinates: { lat: 40.3156, lng: -75.1289 }
      }
    ]
  }
];

interface GuidePopupProps {
  guide: typeof townGuides[0];
  onClose: () => void;
}

const GuidePopup: React.FC<GuidePopupProps> = ({ guide, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
            aria-label="Close tour details"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-cardinal-red text-white text-sm rounded-full">
              {guide.category}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cardinal-red/10 rounded-lg">
              <Map className="w-6 h-6 text-cardinal-red" />
            </div>
            <div>
              <h2 className="font-playfair text-2xl font-bold text-charcoal-gray">
                {guide.title}
              </h2>
              <div className="flex items-center gap-2 mt-1 text-charcoal-gray/60">
                <Clock size={14} />
                <span>{guide.duration}</span>
                <span className="mx-1">•</span>
                <MapPin size={14} />
                <span>{guide.distance}</span>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-charcoal-gray/80">{guide.description}</p>
          </div>

          <div className="bg-[#F2F0EF] rounded-lg p-6 mb-8">
            <h3 className="font-playfair text-lg font-bold mb-4">Tour Highlights</h3>
            <div className="space-y-4">
              {guide.locations.map((location, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Navigation size={16} className="text-cardinal-red" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-gray">{location.name}</h4>
                    <p className="text-sm text-charcoal-gray/70">{location.description}</p>
                    <p className="text-sm text-charcoal-gray/60 mt-1">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="font-medium">{guide.rating}</span>
              <span className="text-charcoal-gray/60">({guide.reviews} reviews)</span>
            </div>
            <div className="flex gap-4">
              <button 
                className="px-6 py-2 border border-[#333333] rounded-lg hover:bg-cardinal-red hover:text-white hover:border-cardinal-red transition-colors flex items-center gap-2"
              >
                <Map size={16} />
                View Map
              </button>
              <button 
                className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center gap-2"
              >
                <Navigation size={16} />
                Start Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cardinal-red/10 rounded-lg">
                <Info size={24} className="text-cardinal-red" />
              </div>
              <h2 className="font-playfair text-2xl font-bold text-charcoal-gray">
                Welcome to Town Guides
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors"
              aria-label="Close welcome message"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-medium text-charcoal-gray mb-2">Discover Doylestown</h3>
              <p className="text-charcoal-gray/70">
                Explore our curated collection of local guides, designed to help you discover 
                the best of Doylestown. From historic walks to culinary adventures, each guide 
                offers a unique perspective on our town.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-charcoal-gray mb-2">How to Use Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <Map size={16} className="text-cardinal-red" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Interactive Maps</p>
                    <p className="text-charcoal-gray/70">Access detailed route maps and points of interest</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <Navigation size={16} className="text-cardinal-red" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Turn-by-Turn Directions</p>
                    <p className="text-charcoal-gray/70">Follow easy-to-use navigation guides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
            >
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TownGuidesPage = () => {
  const [selectedGuide, setSelectedGuide] = useState<typeof townGuides[0] | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome popup after 2 seconds if it hasn't been shown before
    const hasSeenWelcome = localStorage.getItem('hasSeenTownGuidesWelcome');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleWelcomeClose = () => {
    setShowWelcome(false);
    localStorage.setItem('hasSeenTownGuidesWelcome', 'true');
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80"
            alt="Doylestown Town"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Town Guides
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Explore Doylestown through our curated guides, featuring local landmarks, 
              hidden gems, and the best experiences our town has to offer.
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

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {townGuides.map(guide => (
              <div
                key={guide.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedGuide(guide)}
              >
                <div className="relative h-48">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{guide.rating}</span>
                      <span className="text-sm text-charcoal-gray/60">
                        ({guide.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-cardinal-red">{guide.category}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2 text-charcoal-gray">
                    {guide.title}
                  </h3>
                  <p className="text-charcoal-gray/70 mb-4">
                    {guide.description}
                  </p>
                  <div className="space-y-2 text-sm text-charcoal-gray/70 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-cardinal-red" />
                      <span>Duration: {guide.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-cardinal-red" />
                      <span>Distance: {guide.distance}</span>
                    </div>
                  </div>
                  <div className="border-t border-charcoal-gray/10 pt-4">
                    <h4 className="font-medium text-charcoal-gray mb-2">Featured Locations:</h4>
                    <div className="space-y-2">
                      {guide.locations.map((location, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <MapPin size={14} className="text-cardinal-red flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-charcoal-gray">{location.name}</p>
                            <p className="text-sm text-charcoal-gray/60">{location.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/guides/${guide.id}`}
                    className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mt-4"
                  >
                    View Full Guide
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest Guide Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Know a Great Local Route or Experience?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us showcase the best of Doylestown. Suggest a new guide or share your 
              favorite local spots and experiences.
            </p>
            <Link
              to="/guides/suggest"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Suggest a Guide
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popups */}
      {showWelcome && <WelcomePopup onClose={handleWelcomeClose} />}
      {selectedGuide && (
        <GuidePopup
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
        />
      )}
    </div>
  );
};

export default TownGuidesPage;