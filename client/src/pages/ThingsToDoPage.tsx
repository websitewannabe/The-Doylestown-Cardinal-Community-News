import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Search, 
  Filter, 
  ChevronRight, 
  Star,
  Music,
  Palette,
  Tent,
  Utensils,
  Theater,
  Bike
} from 'lucide-react';

// Constants for filtering
const categories = [
  "All Categories",
  "Outdoor Activities",
  "Art Exhibitions",
  "Live Performances",
  "Community Gatherings",
  "Family Fun",
  "Food & Drink"
];

// Mock data for activities
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
    icon: Palette,
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
    icon: Tent,
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
    icon: Theater,
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
    icon: Utensils,
    features: ["Fresh Produce", "Local Vendors", "Live Music"],
    upcomingEvents: [
      {
        name: "Spring Market Opening",
        date: "April 15, 2024",
        time: "8:00 AM"
      }
    ]
  },
  {
    id: 5,
    title: "Live Jazz at Chambers",
    category: "Live Performances",
    date: "Friday & Saturday",
    time: "8:00 PM - 11:00 PM",
    location: "18 W State St, Doylestown, PA 18901",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    description: "Weekly jazz performances featuring local and regional artists.",
    rating: 4.6,
    reviews: 167,
    price: "No cover charge",
    icon: Music,
    features: ["Live Music", "Full Bar", "Dinner Service"],
    upcomingEvents: [
      {
        name: "Jazz Quartet Performance",
        date: "April 21, 2024",
        time: "8:00 PM"
      }
    ]
  },
  {
    id: 6,
    title: "Bike the Borough",
    category: "Outdoor Activities",
    date: "Daily",
    time: "Flexible",
    location: "Various Locations",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80",
    description: "Self-guided bike tours through historic Doylestown neighborhoods.",
    rating: 4.7,
    reviews: 89,
    price: "Free",
    icon: Bike,
    features: ["Bike Rentals Available", "Guided Maps", "Family-Friendly"],
    upcomingEvents: [
      {
        name: "Group Ride",
        date: "April 23, 2024",
        time: "9:00 AM"
      }
    ]
  }
];

const ThingsToDoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80"
            alt="Things to Do in Doylestown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Things to Do
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover exciting activities and events in Doylestown. From outdoor adventures 
              to cultural experiences, there's something for everyone.
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
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6 bg-white rounded-lg p-6 shadow-sm">
              <div>
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
              </div>

              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
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
            </div>
          </div>

          {/* Activities Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map(activity => (
                <div
                  key={activity.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-cardinal-red transition-colors">
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
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
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
                    <Link
                      to={`/activities/${activity.id}`}
                      className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors mt-4"
                    >
                      Learn More
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
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

export default ThingsToDoPage;