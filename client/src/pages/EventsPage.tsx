import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Clock, Search, Filter, X, Plus, Share2, CalendarCheck, Globe, Phone, Mail, User2, DollarSign, Users, Info } from 'lucide-react';

// Constants for filtering
const categories = [
  "All Categories",
  "Arts & Culture",
  "Community",
  "Music",
  "Food & Drink",
  "Sports",
  "Education",
  "Business",
  "Family",
  "Charity"
];

const locations = [
  "All Locations",
  "Downtown Doylestown",
  "Buckingham Green",
  "Central Park",
  "County Theater",
  "Mercer Museum",
  "Fonthill Castle"
];

// Mock data for events
const mockEvents = [
  {
    id: 1,
    name: "Doylestown Arts Festival",
    date: "2024-04-15",
    time: "10:00 AM - 6:00 PM",
    location: "Downtown Doylestown",
    address: "Main Street & Court Street, Doylestown, PA 18901",
    category: "Arts & Culture",
    description: "Annual arts festival featuring local artists, live music, and food vendors.",
    fullDescription: `Join us for the 32nd Annual Doylestown Arts Festival, a celebration of creativity and community spirit in the heart of historic Doylestown.

This year's festival features:
• Over 160 juried artists and craftspeople
• Live music performances on two stages
• Gourmet food court with local restaurants
• Interactive art demonstrations
• Children's art activities
• Plein air painting competition

Free admission for all ages. Rain or shine event.`,
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    organizer: "Doylestown Arts Council",
    website: "https://doylestownartsfestival.com",
    phone: "(215) 555-0123",
    email: "info@doylestownarts.org",
    price: "Free",
    capacity: "10,000+ attendees expected"
  },
  {
    id: 2,
    name: "Spring Jazz Concert Series",
    date: "2024-04-22",
    time: "7:30 PM - 10:00 PM",
    location: "County Theater",
    address: "20 East State Street, Doylestown, PA 18901",
    category: "Music",
    description: "An evening of jazz featuring local and national artists in the historic County Theater.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    organizer: "Doylestown Jazz Collective",
    price: "$25 - $45",
    capacity: "300 seats"
  },
  {
    id: 3,
    name: "Farmers Market Opening Day",
    date: "2024-04-20",
    time: "8:00 AM - 1:00 PM",
    location: "Buckingham Green",
    category: "Food & Drink",
    description: "Season opening of the Doylestown Farmers Market with fresh produce and artisanal goods.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    organizer: "Doylestown Farmers Market Association",
    price: "Free admission"
  },
  {
    id: 4,
    name: "History Walking Tour",
    date: "2024-04-25",
    time: "10:00 AM - 12:00 PM",
    location: "Mercer Museum",
    category: "Education",
    description: "Guided walking tour exploring Doylestown's rich history and architectural heritage.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    organizer: "Doylestown Historical Society",
    price: "$15 per person"
  },
  {
    id: 5,
    name: "Spring Garden Workshop",
    date: "2024-04-27",
    time: "9:00 AM - 12:00 PM",
    location: "Central Park",
    category: "Education",
    description: "Learn spring gardening techniques and sustainable practices from local experts.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80",
    organizer: "Bucks County Master Gardeners",
    price: "$30"
  },
  {
    id: 6,
    name: "Youth Sports Clinic",
    date: "2024-04-28",
    time: "1:00 PM - 4:00 PM",
    location: "Central Park",
    category: "Sports",
    description: "Free sports clinic for youth ages 8-14, featuring multiple sports and professional coaches.",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80",
    organizer: "Doylestown Athletics Association",
    price: "Free"
  }
];

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  address?: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  organizer?: string;
  website?: string;
  phone?: string;
  email?: string;
  price?: string;
  capacity?: string;
}

const EventsPage = () => {
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    image: null as File | null
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedEvent && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedEvent(null);
      }
      if (isSubmitFormOpen && formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsSubmitFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent, isSubmitFormOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitFormOpen(false);
    alert("Thank you! Your event has been submitted for review.");
  };

  const EventDetailModal = ({ event, onClose }: { event: Event; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={event.image}
            alt={event.name}
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
            <span className="text-sm font-medium text-cardinal-red">{event.category}</span>
            <h2 className="font-playfair text-3xl font-bold mt-2 mb-4">{event.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-gray-600">{event.date}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                    {event.address && <p className="text-gray-600">{event.address}</p>}
                  </div>
                </div>

                {event.price && (
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-1 text-gray-500" />
                    <div>
                      <p className="font-medium">Price</p>
                      <p className="text-gray-600">{event.price}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {event.organizer && (
                  <div className="flex items-start gap-3">
                    <User2 className="w-5 h-5 mt-1 text-gray-500" />
                    <div>
                      <p className="font-medium">Organizer</p>
                      <p className="text-gray-600">{event.organizer}</p>
                    </div>
                  </div>
                )}

                {event.capacity && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 text-gray-500" />
                    <div>
                      <p className="font-medium">Capacity</p>
                      <p className="text-gray-600">{event.capacity}</p>
                    </div>
                  </div>
                )}

                {event.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 mt-1 text-gray-500" />
                    <div>
                      <p className="font-medium">Website</p>
                      <a 
                        href={event.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cardinal-red hover:text-forest-green transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-playfair text-xl font-bold mb-4">About This Event</h3>
              <div className="prose max-w-none">
                {event.fullDescription ? (
                  <p className="whitespace-pre-line text-gray-600">{event.fullDescription}</p>
                ) : (
                  <p className="text-gray-600">{event.description}</p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                onClick={() => {/* Add to calendar logic */}}
              >
                <CalendarCheck size={20} />
                Add to Calendar
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {/* Share logic */}}
              >
                <Share2 size={20} />
                Share Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col mb-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80"
            alt="Events background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Discover What's Happening
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Stay connected with the vibrant community of Doylestown. Find local events, gatherings, and celebrations that bring us together.
            </p>
            <button
              onClick={() => setIsSubmitFormOpen(true)}
              className="bg-forest-green text-white px-8 py-3 rounded-full font-semibold hover:bg-cardinal-red transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Submit Your Event
            </button>
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
              d="M0,120 
                 C320,120 480,60 720,90 
                 C960,120 1120,30 1440,90 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
            <path 
              fill="currentColor"
              fillOpacity="0.2"
              d="M0,120 
                 C240,100 480,95 720,110 
                 C960,95 1200,105 1440,95 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
            <path 
              fill="currentColor"
              fillOpacity="0.1"
              d="M0,120 
                 C360,110 720,80 1080,100 
                 C1260,110 1350,115 1440,110 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
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
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Date Range</h3>
                <div className="space-y-2">
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={dateRange.start}
                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  />
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                    value={dateRange.end}
                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-playfair text-lg font-bold mb-3">Categories</h3>
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
                <h3 className="font-playfair text-lg font-bold mb-3">Locations</h3>
                <div className="space-y-2">
                  {locations.map(location => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedLocation === location
                          ? 'bg-cardinal-red text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Events Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockEvents.map(event => (
                <div
                  key={event.id}
                  className="border border-[#333333] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        title="Add to Calendar"
                        onClick={(e) => {
                          e.stopPropagation();
                          /* Add to calendar logic */
                        }}
                      >
                        <CalendarCheck size={18} />
                      </button>
                      <button
                        className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        title="Share Event"
                        onClick={(e) => {
                          e.stopPropagation();
                          /* Share logic */
                        }}
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-sm font-medium text-cardinal-red">{event.category}</span>
                    <h3 
                      className="font-playfair text-lg font-bold mt-1 mb-2 hover:text-cardinal-red transition-colors cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Event Submission Form Modal */}
      {isSubmitFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div ref={formRef} className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-playfair text-2xl font-bold">Submit Your Event</h2>
                <button
                  onClick={() => setIsSubmitFormOpen(false)}
                  className="text-gray-500 hover:text-cardinal-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  >
                    <option value="">Select a category</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Recommended size: 1200x800 pixels. Maximum file size: 5MB
                  </p>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitFormOpen(false)}
                    className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
                  >
                    Submit Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;