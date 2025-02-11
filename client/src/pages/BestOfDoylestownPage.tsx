import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  ChevronRight, 
  MapPin, 
  Globe, 
  Phone,
  Clock,
  Award,
  Heart,
  Users,
  Filter
} from 'lucide-react';

// Mock data for best of categories
const categories = [
  {
    id: 'dining',
    title: 'Dining',
    description: 'The most beloved restaurants and eateries in Doylestown',
    winners: [
      {
        id: 1,
        name: "Honey Restaurant",
        category: "Fine Dining",
        description: "Farm-to-table American cuisine in an intimate setting",
        address: "42 Shewell Ave, Doylestown, PA 18901",
        phone: "(215) 489-4200",
        website: "https://honeyrestaurant.com",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
        rating: 4.8,
        votes: 342,
        reviews: 156,
        hours: "Tue-Sun: 5pm-10pm",
        features: ["BYOB", "Outdoor Seating", "Reservations Required"]
      },
      {
        id: 2,
        name: "Villa Capri",
        category: "Italian",
        description: "Family-owned Italian restaurant serving traditional dishes",
        address: "13 W Court St, Doylestown, PA 18901",
        phone: "(215) 348-5674",
        website: "https://villacapri.com",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
        rating: 4.7,
        votes: 287,
        reviews: 134,
        hours: "Mon-Sun: 11am-10pm",
        features: ["Family-Friendly", "Takeout", "Full Bar"]
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping',
    description: 'Top-rated retail destinations and local shops',
    winners: [
      {
        id: 3,
        name: "Doylestown Bookshop",
        category: "Books & Gifts",
        description: "Independent bookstore with curated selection and events",
        address: "16 S Main St, Doylestown, PA 18901",
        phone: "(215) 230-7610",
        website: "https://doylestownbookshop.com",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
        rating: 4.9,
        votes: 423,
        reviews: 198,
        hours: "Mon-Sat: 9am-9pm, Sun: 11am-6pm",
        features: ["Events Space", "Children's Section", "Local Authors"]
      }
    ]
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Must-visit entertainment venues and attractions',
    winners: [
      {
        id: 4,
        name: "County Theater",
        category: "Cinema",
        description: "Historic art deco theater showing independent films",
        address: "20 E State St, Doylestown, PA 18901",
        phone: "(215) 345-6789",
        website: "https://countytheater.org",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
        rating: 4.8,
        votes: 512,
        reviews: 245,
        hours: "Daily: Shows from 12pm-10pm",
        features: ["Historic Venue", "Art Films", "Member Discounts"]
      }
    ]
  }
];

interface Business {
  id: number;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  image: string;
  rating: number;
  votes: number;
  reviews: number;
  hours: string;
  features: string[];
}

const BestOfDoylestownPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('votes');
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80"
            alt="Downtown Doylestown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Best of Doylestown
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Discover the most beloved businesses, services, and attractions in our community, 
              as voted by our readers and residents.
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filters and Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <select
              className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="votes">Most Votes</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
          <button
            onClick={() => setShowVoteModal(true)}
            className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center gap-2"
          >
            <ThumbsUp size={18} />
            Cast Your Vote
          </button>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map(category => (
            <section key={category.id} className="scroll-mt-24" id={category.id}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-2">
                    {category.title}
                  </h2>
                  <p className="text-charcoal-gray/70">{category.description}</p>
                </div>
                <Link
                  to={`/best-of/${category.id}`}
                  className="text-cardinal-red hover:text-forest-green transition-colors flex items-center gap-1"
                >
                  View All
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.winners.map(business => (
                  <div
                    key={business.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-2 py-1 bg-white/90 rounded-full">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{business.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-cardinal-red">{business.category}</span>
                        <span className="text-charcoal-gray/40">•</span>
                        <div className="flex items-center text-sm text-charcoal-gray/60">
                          <ThumbsUp size={14} className="mr-1" />
                          {business.votes} votes
                        </div>
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2 hover:text-cardinal-red transition-colors">
                        {business.name}
                      </h3>
                      <p className="text-charcoal-gray/70 mb-4">{business.description}</p>
                      <div className="space-y-2 text-sm text-charcoal-gray/60">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{business.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{business.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          <span>{business.phone}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {business.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-cardinal-red/10 text-cardinal-red rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-charcoal-gray/10">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setSelectedBusiness(business)}
                            className="text-cardinal-red hover:text-forest-green transition-colors flex items-center gap-1"
                          >
                            <MessageSquare size={16} />
                            {business.reviews} Reviews
                          </button>
                          <a
                            href={business.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cardinal-red hover:text-forest-green transition-colors flex items-center gap-1"
                          >
                            <Globe size={16} />
                            Website
                          </a>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedBusiness(business);
                            setShowVoteModal(true);
                          }}
                          className="flex items-center gap-1 text-cardinal-red hover:text-forest-green transition-colors"
                        >
                          <ThumbsUp size={16} />
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Nominate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Know a Local Favorite?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help us celebrate the best of Doylestown. Nominate your favorite local 
              businesses, services, and attractions for our annual "Best Of" awards.
            </p>
            <Link
              to="/best-of/nominate"
              className="inline-flex items-center px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
            >
              Submit a Nomination
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestOfDoylestownPage;