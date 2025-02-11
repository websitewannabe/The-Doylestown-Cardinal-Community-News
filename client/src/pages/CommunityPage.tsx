import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  Calendar, 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  ChevronRight, 
  Star,
  Award,
  Heart,
  Search,
  Filter,
  Share2,
  Clock,
  ChevronLeft,
  ArrowRight,
  Tag,
  ExternalLink,
  Music,
  Palette,
  Tent,
  Utensils,
  Theater,
  Bike
} from 'lucide-react';

// Mock data for spotlights
const spotlights = [
  {
    id: 1,
    title: "Advertiser of the Month",
    subtitle: "Doylestown Bookshop",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    description: "Celebrating 25 years of serving our community with curated books and engaging events.",
    category: "Business",
    link: "/business/doylestown-bookshop",
    contact: {
      address: "16 S Main St, Doylestown, PA 18901",
      phone: "(215) 230-7610",
      website: "doylestownbookshop.com"
    }
  },
  {
    id: 2,
    title: "Community Hero",
    subtitle: "Sarah Thompson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Leading local food drive initiatives that have helped over 1,000 families this year.",
    category: "Individual",
    link: "/community/heroes/sarah-thompson",
    affiliation: "Doylestown Food Pantry"
  },
  {
    id: 3,
    title: "Local Initiative",
    subtitle: "Green Doylestown Project",
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&q=80",
    description: "Community-led sustainability program transforming public spaces with native plants.",
    category: "Project",
    link: "/initiatives/green-doylestown",
    progress: "75% complete"
  },
  {
    id: 4,
    title: "Featured Event",
    subtitle: "Arts Festival 2024",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    description: "Annual celebration of local artists featuring live performances and exhibitions.",
    category: "Event",
    link: "/events/arts-festival-2024",
    date: "April 15-16, 2024"
  },
  {
    id: 5,
    title: "Featured Business",
    subtitle: "County Theater",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    description: "Historic art deco movie theater preserving cinematic heritage while showcasing independent films.",
    category: "Business",
    link: "/business/county-theater",
    contact: {
      address: "20 E State St, Doylestown, PA 18901",
      phone: "(215) 345-6789",
      website: "countytheater.org"
    }
  }
];

// Add town guides data from previous update
const townGuides = [
  {
    id: 1,
    title: "Historic District Walking Tour",
    category: "Historical Sites",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    description: "Explore Doylestown's rich architectural heritage through this self-guided walking tour of the historic district.",
    rating: 4.8,
    reviews: 156,
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
  }
];

// Add new data for Things to Do section
const thingsToDoCategories = [
  "All Categories",
  "Outdoor Activities",
  "Art Exhibitions",
  "Live Performances",
  "Community Gatherings",
  "Family Fun",
  "Food & Drink"
];

const activities = [
  {
    id: 1,
    title: "Fonthill Castle Tour",
    category: "Art Exhibitions",
    date: "Daily Tours Available",
    time: "10:00 AM - 4:00 PM",
    location: "525 E Court St, Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    description: "Explore Henry Mercer's concrete castle and its unique architecture.",
    rating: 4.8,
    reviews: 156,
    price: "$15 - $20",
    coordinates: { lat: 40.3123, lng: -75.1198 },
    features: ["Guided Tours", "Museum Shop", "Photography Allowed"],
    upcomingEvents: [
      {
        name: "Evening Castle Tour",
        date: "April 20, 2024",
        time: "6:00 PM"
      }
    ]
  },
  {
    id: 2,
    title: "Peace Valley Park",
    category: "Outdoor Activities",
    date: "Open Daily",
    time: "Dawn to Dusk",
    location: "230 Creek Rd, Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
    description: "Scenic lake with hiking trails, boat rentals, and bird watching.",
    rating: 4.7,
    reviews: 203,
    price: "Free",
    coordinates: { lat: 40.3342, lng: -75.1612 },
    features: ["Hiking Trails", "Boat Rentals", "Picnic Areas", "Bird Watching"],
    upcomingEvents: [
      {
        name: "Bird Watching Walk",
        date: "April 22, 2024",
        time: "7:00 AM"
      }
    ]
  },
  {
    id: 3,
    title: "County Theater Film Screening",
    category: "Live Performances",
    date: "Daily Screenings",
    time: "Various Times",
    location: "20 E State St, Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    description: "Historic art deco theater showing independent and art films.",
    rating: 4.9,
    reviews: 178,
    price: "$8 - $12",
    coordinates: { lat: 40.3094, lng: -75.1289 },
    features: ["Art Films", "Historic Venue", "Concessions"],
    upcomingEvents: [
      {
        name: "Film Festival Opening Night",
        date: "April 25, 2024",
        time: "7:00 PM"
      }
    ]
  },
  {
    id: 4,
    title: "Farmers Market",
    category: "Food & Drink",
    date: "Saturdays",
    time: "8:00 AM - 1:00 PM",
    location: "W State St & Hamilton St, Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    description: "Local vendors offering fresh produce, artisanal foods, and crafts.",
    rating: 4.8,
    reviews: 245,
    price: "Free admission",
    coordinates: { lat: 40.3097, lng: -75.1307 },
    features: ["Fresh Produce", "Local Vendors", "Live Music"],
    upcomingEvents: [
      {
        name: "Spring Market Opening",
        date: "April 15, 2024",
        time: "8:00 AM"
      }
    ]
  }
];

const CommunityPage = () => {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(townGuides[0]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedActivity, setSelectedActivity] = useState(activities[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const nextSpotlight = () => {
    setCurrentSpotlight((prev) => (prev + 1) % spotlights.length);
    setIsExpanded(false);
  };

  const prevSpotlight = () => {
    setCurrentSpotlight((prev) => (prev - 1 + spotlights.length) % spotlights.length);
    setIsExpanded(false);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
            alt="Doylestown Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Our Community
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover the people, places, and stories that make Doylestown special. 
              From local heroes to community initiatives, explore what brings our town together.
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

      {/* Community Spotlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray">
              Community Spotlights
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevSpotlight}
                className="p-2 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSpotlight}
                className="p-2 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Spotlight */}
            <div className="relative overflow-hidden border border-[#333333] rounded-lg group">
              <div className="relative h-[400px]">
                <img
                  src={spotlights[currentSpotlight].image}
                  alt={spotlights[currentSpotlight].subtitle}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white/80 mb-2">{spotlights[currentSpotlight].title}</div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">
                    {spotlights[currentSpotlight].subtitle}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {spotlights[currentSpotlight].description}
                  </p>
                  <Link
                    to={spotlights[currentSpotlight].link}
                    className="inline-flex items-center text-white hover:text-warm-gold transition-colors"
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Spotlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {spotlights.filter((_, index) => index !== currentSpotlight).map((spotlight) => (
                <div
                  key={spotlight.id}
                  className="border border-[#333333] rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => setCurrentSpotlight(spotlights.findIndex(s => s.id === spotlight.id))}
                >
                  <div className="relative h-48">
                    <img
                      src={spotlight.image}
                      alt={spotlight.subtitle}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white/80 text-sm mb-1">{spotlight.title}</div>
                      <h4 className="font-playfair text-lg font-bold text-white">
                        {spotlight.subtitle}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Town Guides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
                Town Guides
              </h2>
              <p className="text-lg text-charcoal-gray/70 max-w-2xl">
                Discover the best of Doylestown with our curated local guides. From historic walks to dining destinations, explore what makes our town special.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All Categories">All Categories</option>
                <option value="Historical Sites">Historical Sites</option>
                <option value="Arts and Culture">Arts & Culture</option>
                <option value="Dining">Dining</option>
                <option value="Outdoor Activities">Outdoor Activities</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Guide List */}
            <div className="lg:col-span-1 space-y-4">
              {townGuides.map(guide => (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuide(guide)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedGuide.id === guide.id
                      ? 'border-cardinal-red bg-cardinal-red/5'
                      : 'border-[#333333] hover:border-cardinal-red'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <span className="text-sm font-medium text-cardinal-red">
                        {guide.category}
                      </span>
                      <h3 className="font-playfair text-lg font-bold mb-1">
                        {guide.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-charcoal-gray/60">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span>{guide.rating}</span>
                        <span>•</span>
                        <span>{guide.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Guide Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-[#333333] overflow-hidden">
                <div className="relative h-[300px]">
                  <img
                    src={selectedGuide.image}
                    alt={selectedGuide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm font-medium text-white/90 bg-cardinal-red px-3 py-1 rounded-full">
                      {selectedGuide.category}
                    </span>
                    <h3 className="font-playfair text-3xl font-bold text-white mt-2">
                      {selectedGuide.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <Star size={20} className="text-yellow-400 fill-current" />
                      <span className="font-bold text-lg">{selectedGuide.rating}</span>
                    </div>
                    <span className="text-charcoal-gray/60">
                      ({selectedGuide.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-charcoal-gray/80 mb-8">
                    {selectedGuide.description}
                  </p>

                  <h4 className="font-medium mb-4">Featured Locations</h4>
                  <div className="space-y-4">
                    {selectedGuide.locations.map((location, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-[#F2F0EF] rounded-lg hover:bg-cardinal-red/5 transition-colors"
                      >
                        <MapPin size={20} className="text-cardinal-red flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-medium mb-1">{location.name}</h5>
                          <p className="text-sm text-charcoal-gray/70 mb-2">
                            {location.description}
                          </p>
                          <div className="text-sm text-charcoal-gray/60">
                            {location.address}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                      Download Guide
                      <ChevronRight size={16} />
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 border border-[#333333] rounded-lg hover:bg-gray-50 transition-colors">
                      View on Map
                      <MapPin size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
                Things to Do
              </h2>
              <p className="text-lg text-charcoal-gray/70 max-w-2xl">
                Discover exciting activities and events happening around Doylestown. From outdoor adventures to cultural experiences, there's something for everyone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Filters and Search */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search activities..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {thingsToDoCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-cardinal-red text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Date</h3>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </div>

                {/* Interactive Map */}
                <div className="bg-[#F2F0EF] rounded-lg p-4">
                  <h3 className="font-medium mb-3">Location Map</h3>
                  <div className="aspect-[4/3] bg-[#F2F0EF] rounded-lg border-2 border-dashed border-[#333333]/20 flex items-center justify-center">
                    <p className="text-center text-charcoal-gray/60">
                      Interactive map will be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activities.map(activity => (
                  <div
                    key={activity.id}
                    className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedActivity(activity)}
                  >
                    <div className="relative h-48">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{activity.rating}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-cardinal-red text-white text-sm rounded-full">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-playfair text-lg font-bold mb-2 group-hover:text-cardinal-red transition-colors">
                        {activity.title}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-charcoal-gray/70 line-clamp-2">
                        {activity.description}
                      </p>
                      {activity.upcomingEvents.length > 0 && (
                        <div className="mt-4 p-3 bg-cardinal-red/5 rounded-lg">
                          <p className="text-sm font-medium text-cardinal-red">
                            Upcoming: {activity.upcomingEvents[0].name}
                          </p>
                          <p className="text-xs text-charcoal-gray/60">
                            {activity.upcomingEvents[0].date} at {activity.upcomingEvents[0].time}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;