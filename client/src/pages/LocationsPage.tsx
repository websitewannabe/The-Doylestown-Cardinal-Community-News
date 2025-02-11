import React, { useState } from 'react';
import { MapPin, Clock, Phone, Search, Filter, Building2, ChevronRight, Navigation } from 'lucide-react';

// Mock data for distribution locations
const locations = [
  {
    id: 1,
    name: "Doylestown Bookshop",
    type: "Bookstore",
    address: "16 S Main St, Doylestown, PA 18901",
    coordinates: { lat: 40.3094, lng: -75.1289 },
    hours: "Mon-Sat: 9am-8pm, Sun: 11am-6pm",
    phone: "(215) 230-7610",
    availability: "Daily",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Nonno's Italian Coffee Parlor",
    type: "Coffee Shop",
    address: "6 W State St, Doylestown, PA 18901",
    coordinates: { lat: 40.3097, lng: -75.1307 },
    hours: "Daily: 7am-6pm",
    phone: "(215) 489-9000",
    availability: "Daily",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Wawa Food Market",
    type: "Convenience Store",
    address: "440 S Main St, Doylestown, PA 18901",
    coordinates: { lat: 40.3075, lng: -75.1289 },
    hours: "24/7",
    phone: "(215) 345-7784",
    availability: "Daily",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Doylestown Food Market",
    type: "Grocery Store",
    address: "29 W State St, Doylestown, PA 18901",
    coordinates: { lat: 40.3094, lng: -75.1306 },
    hours: "Mon-Sat: 8am-8pm, Sun: 9am-6pm",
    phone: "(215) 348-4548",
    availability: "Daily",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Central News",
    type: "Newsstand",
    address: "52 E State St, Doylestown, PA 18901",
    coordinates: { lat: 40.3094, lng: -75.1275 },
    hours: "Mon-Sat: 6am-7pm, Sun: 7am-3pm",
    phone: "(215) 348-2789",
    availability: "Daily",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Doylestown Library",
    type: "Library",
    address: "150 S Pine St, Doylestown, PA 18901",
    coordinates: { lat: 40.3075, lng: -75.1297 },
    hours: "Mon-Thu: 9am-9pm, Fri-Sat: 9am-5pm",
    phone: "(215) 348-9081",
    availability: "Weekly",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80"
  }
];

// Filter categories
const locationTypes = [
  "All Types",
  "Bookstore",
  "Coffee Shop",
  "Convenience Store",
  "Grocery Store",
  "Newsstand",
  "Library"
];

const availabilityOptions = [
  "All",
  "Daily",
  "Weekly"
];

const LocationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80"
            alt="Doylestown streets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Find The Cardinal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Locate the nearest distribution point for The Cardinal. Our newspaper is available 
              at various locations throughout Doylestown and surrounding areas.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search locations..."
                      className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Location Type</h3>
                  <div className="space-y-2">
                    {locationTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedType === type
                            ? 'bg-cardinal-red text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="space-y-2">
                    {availabilityOptions.map(option => (
                      <button
                        key={option}
                        onClick={() => setSelectedAvailability(option)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedAvailability === option
                            ? 'bg-cardinal-red text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Distribution Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold">Become a Distribution Location</h3>
                </div>
                <p className="text-charcoal-gray/70 mb-4">
                  Interested in carrying The Cardinal at your business? Contact our distribution team 
                  to learn more about becoming a distribution partner.
                </p>
                <a
                  href="mailto:distribution@thecardinal.com"
                  className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                >
                  Contact Distribution Team
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Map Container */}
            <div className="bg-white rounded-lg p-4 mb-8 h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-[#F2F0EF] rounded-lg border-2 border-dashed border-[#333333]/20">
                <div className="text-center">
                  <p className="text-charcoal-gray/70 mb-2">Google Maps will be integrated here</p>
                  <p className="text-sm text-charcoal-gray/60">
                    Showing all distribution locations with interactive markers
                  </p>
                </div>
              </div>
            </div>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map(location => (
                <div
                  key={location.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm">
                        {location.availability}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-cardinal-red">{location.type}</span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-4">
                      {location.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} />
                        <span>{location.phone}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        // Handle navigation to location on map
                        setSelectedLocation(location);
                      }}
                      className="mt-4 inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      <Navigation size={16} className="mr-1" />
                      View on Map
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;