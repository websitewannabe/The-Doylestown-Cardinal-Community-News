import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Clock, Beer, Phone, Globe, ChevronRight, Star, X, Filter, Beaker } from 'lucide-react';

// Constants for filtering
const spiritTypes = [
  "All Types",
  "Whiskey",
  "Bourbon",
  "Vodka",
  "Gin",
  "Rum",
  "Specialty Spirits"
];

const regions = [
  "All Regions",
  "Bucks County",
  "Lehigh Valley",
  "Delaware Valley",
  "Central PA"
];

const amenities = [
  "All Amenities",
  "Tasting Room",
  "Tours",
  "Events Space",
  "Cocktail Bar",
  "Food Service",
  "Private Tastings"
];

// Mock data for distilleries
const mockDistilleries = [
  {
    id: 1,
    name: "Hewn Spirits",
    specialties: ["Whiskey", "Bourbon", "Gin"],
    rating: 4.7,
    region: "Bucks County",
    address: "31 Appletree Lane, Pipersville, PA 18947",
    phone: "(215) 766-7711",
    website: "https://hewnspirits.com",
    hours: "Thu-Sun: 12pm-6pm",
    description: "Craft distillery specializing in small-batch spirits using locally sourced grains. Known for their unique barrel-aging program and historic setting in a restored barn.",
    amenities: ["Tasting Room", "Tours", "Events Space", "Private Tastings"],
    image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80",
    featuredSpirits: [
      "Reclamation American Single Malt",
      "Red Barn Rye",
      "Dark Hollow Bourbon"
    ]
  },
  {
    id: 2,
    name: "Doan Distillery",
    specialties: ["Vodka", "Gin", "Ready-to-Drink"],
    rating: 4.5,
    region: "Bucks County",
    address: "534 Swamp Road, Quakertown, PA 18951",
    phone: "(267) 424-4315",
    website: "https://doandistillery.com",
    hours: "Wed-Sun: 1pm-7pm",
    description: "Family-owned distillery crafting premium spirits and ready-to-drink cocktails using traditional methods and local ingredients.",
    amenities: ["Tasting Room", "Cocktail Bar", "Food Service"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    featuredSpirits: [
      "Small Batch Vodka",
      "Botanical Gin",
      "Canned Cocktail Collection"
    ]
  },
  {
    id: 3,
    name: "Triple Sun Spirits",
    specialties: ["Whiskey", "Rum", "Specialty Spirits"],
    rating: 4.6,
    region: "Bucks County",
    address: "126 South State Street, Newtown, PA 18940",
    phone: "(215) 944-3057",
    website: "https://triplesunspirits.com",
    hours: "Tue-Sun: 12pm-8pm",
    description: "Artisanal distillery creating unique spirits with a focus on local ingredients and innovative flavor profiles. Features a cocktail bar and tasting room.",
    amenities: ["Tasting Room", "Cocktail Bar", "Events Space", "Tours"],
    image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80",
    featuredSpirits: [
      "Pennsylvania Straight Bourbon",
      "Spiced Rum",
      "Coffee Liqueur"
    ]
  }
];

interface Distillery {
  id: number;
  name: string;
  specialties: string[];
  rating: number;
  region: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  description: string;
  amenities: string[];
  image: string;
  featuredSpirits: string[];
}

const DistilleriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpiritType, setSelectedSpiritType] = useState("All Types");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedAmenity, setSelectedAmenity] = useState("All Amenities");
  const [selectedDistillery, setSelectedDistillery] = useState<Distillery | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedDistillery && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedDistillery(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedDistillery]);

  const DistilleryDetailModal = ({ distillery, onClose }: { distillery: Distillery; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={distillery.image}
            alt={distillery.name}
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
              <span className="text-sm font-medium text-cardinal-red">{distillery.region}</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{distillery.rating}</span>
              </div>
            </div>
            
            <h2 className="font-playfair text-3xl font-bold mb-4">{distillery.name}</h2>
            <p className="text-gray-600 mb-6">{distillery.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{distillery.address}</p>
                    <p className="text-gray-600">{distillery.region}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">{distillery.hours}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{distillery.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a 
                      href={distillery.website}
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
              <h3 className="font-medium mb-4">Featured Spirits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {distillery.featuredSpirits.map((spirit, index) => (
                  <div
                    key={index}
                    className="p-4 bg-cardinal-red/5 rounded-lg flex items-center gap-2"
                  >
                    <Beaker size={16} className="text-cardinal-red" />
                    <span>{spirit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {distillery.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-sm"
                  >
                    {amenity}
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
            src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80"
            alt="Distillery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Local Craft Spirits
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover Bucks County's artisanal distilleries, featuring handcrafted spirits, 
              unique tasting experiences, and the revival of local distilling traditions.
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
                    placeholder="Search distilleries..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Spirit Types</h3>
                <div className="space-y-2">
                  {spiritTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedSpiritType(type)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedSpiritType === type
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
                <h3 className="font-playfair text-lg font-bold mb-3">Region</h3>
                <div className="space-y-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedRegion === region
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-bold mb-3">Amenities</h3>
                <div className="space-y-2">
                  {amenities.map(amenity => (
                    <button
                      key={amenity}
                      onClick={() => setSelectedAmenity(amenity)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedAmenity === amenity
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Distillery Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDistilleries.map(distillery => (
                <div
                  key={distillery.id}
                  className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  onClick={() => setSelectedDistillery(distillery)}
                >
                  <div className="relative h-48">
                    <img
                      src={distillery.image}
                      alt={distillery.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{distillery.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{distillery.region}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{distillery.specialties.join(", ")}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold mb-2 hover:text-cardinal-red transition-colors">
                      {distillery.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{distillery.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{distillery.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Beer size={14} />
                        <span className="line-clamp-1">{distillery.amenities.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Distillery Detail Modal */}
      {selectedDistillery && (
        <DistilleryDetailModal
          distillery={selectedDistillery}
          onClose={() => setSelectedDistillery(null)}
        />
      )}
    </div>
  );
};

export default DistilleriesPage;