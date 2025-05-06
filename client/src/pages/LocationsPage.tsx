import React, { useState } from 'react';
import { MapPin, Clock, Phone, Search, Filter, Building2, ChevronRight, Navigation } from 'lucide-react';
import LocationsMap from '../components/ui/LocationsMap';

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
      <div className="relative h-[300px] mb-8">
        <div className="absolute inset-0">
          <img
            src="/images/Fonthill.png"
            alt="Fonthill Castle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:px-6 lg:pl-8 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-off-white mb-4">
              Our Locations
            </h1>
            <p className="hidden md:block text-2xl text-off-white mb-8 font-playfair italic max-w-2xl">
              Discover local businesses in New Hope and Lambertville
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
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
            <LocationsMap locations={locations} searchQuery={searchQuery} selectedType={selectedType} selectedAvailability={selectedAvailability}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;