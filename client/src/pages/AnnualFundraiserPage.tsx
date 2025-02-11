import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Award,
  Star,
  Gift,
  Ticket,
  DollarSign,
  Mail
} from 'lucide-react';

// Mock data for the fundraiser event
const fundraiserDetails = {
  date: "September 15, 2024",
  time: "6:00 PM - 10:00 PM",
  location: "Fonthill Castle",
  address: "525 E Court St, Doylestown, PA 18901",
  ticketPrice: "$150",
  earlyBirdPrice: "$125",
  earlyBirdDeadline: "July 15, 2024",
  sponsorshipLevels: [
    {
      name: "Platinum",
      price: "$5,000",
      benefits: [
        "Premier table for 10 guests",
        "Recognition in event program",
        "Featured in The Cardinal",
        "VIP reception access",
        "Commemorative gift",
        "1-year digital subscription for all guests"
      ]
    },
    {
      name: "Gold",
      price: "$2,500",
      benefits: [
        "Table for 8 guests",
        "Recognition in event program",
        "Featured in The Cardinal",
        "VIP reception access",
        "6-month digital subscription for all guests"
      ]
    },
    {
      name: "Silver",
      price: "$1,000",
      benefits: [
        "4 event tickets",
        "Recognition in event program",
        "VIP reception access",
        "3-month digital subscription"
      ]
    }
  ],
  schedule: [
    {
      time: "6:00 PM",
      event: "VIP Reception & Castle Tours"
    },
    {
      time: "7:00 PM",
      event: "Welcome & Cocktail Hour"
    },
    {
      time: "7:45 PM",
      event: "Dinner Service"
    },
    {
      time: "8:30 PM",
      event: "Program & Awards"
    },
    {
      time: "9:00 PM",
      event: "Live Auction"
    },
    {
      time: "9:45 PM",
      event: "Dessert & Dancing"
    }
  ],
  features: [
    "Gourmet dinner by local chefs",
    "Live entertainment",
    "Silent and live auctions",
    "Exclusive castle tours",
    "Community awards ceremony",
    "Local wine and spirits tasting"
  ]
};

const AnnualFundraiserPage = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80"
            alt="Fonthill Castle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <span className="inline-block bg-cardinal-red text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Annual Fundraiser
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              An Evening at Fonthill Castle
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Join us for an elegant evening of dining, entertainment, and community celebration 
              as we support local journalism in Doylestown.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#tickets"
                className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors inline-flex items-center gap-2"
              >
                Purchase Tickets
                <ChevronRight size={20} />
              </a>
              <a
                href="#sponsorship"
                className="bg-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
              >
                Become a Sponsor
              </a>
            </div>
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

      {/* Event Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Calendar className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Date & Time</h3>
              <p className="text-charcoal-gray/70">{fundraiserDetails.date}</p>
              <p className="text-charcoal-gray/70">{fundraiserDetails.time}</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Location</h3>
              <p className="text-charcoal-gray/70">{fundraiserDetails.location}</p>
              <p className="text-charcoal-gray/70">{fundraiserDetails.address}</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Ticket className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Ticket Price</h3>
              <p className="text-charcoal-gray/70">{fundraiserDetails.ticketPrice} per person</p>
              <p className="text-sm text-cardinal-red">Early Bird: {fundraiserDetails.earlyBirdPrice}</p>
              <p className="text-xs text-charcoal-gray/60">until {fundraiserDetails.earlyBirdDeadline}</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-4">
                <Gift className="w-8 h-8 text-cardinal-red" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Features</h3>
              <p className="text-charcoal-gray/70">Dinner, Entertainment & Auctions</p>
              <p className="text-charcoal-gray/70">Castle Tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Evening Schedule
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {fundraiserDetails.schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <Clock className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <div className="font-playfair text-xl font-bold">{item.time}</div>
                    <p className="text-charcoal-gray/70">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-12">
            Event Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundraiserDetails.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cardinal-red/10 rounded-lg">
                    <Star className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section id="sponsorship" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-6">
            Sponsorship Opportunities
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center max-w-2xl mx-auto mb-12">
            Support local journalism while gaining visibility for your organization 
            through our sponsorship packages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundraiserDetails.sponsorshipLevels.map((level, index) => (
              <div
                key={index}
                className="bg-[#F2F0EF] rounded-lg p-8"
              >
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{level.name}</h3>
                  <div className="font-playfair text-3xl font-bold text-cardinal-red">
                    {level.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {level.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-forest-green flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                  Become a Sponsor
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray text-center mb-6">
            Purchase Tickets
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center mb-12">
            Join us for an unforgettable evening in support of local journalism.
          </p>
          <div className="bg-white rounded-lg p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-playfair text-xl font-bold">Individual Tickets</h3>
                  <p className="text-charcoal-gray/70">
                    Early Bird Price: {fundraiserDetails.earlyBirdPrice} (until {fundraiserDetails.earlyBirdDeadline})
                  </p>
                </div>
                <div className="font-playfair text-2xl font-bold text-cardinal-red">
                  {fundraiserDetails.ticketPrice}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <label className="font-medium">Quantity:</label>
                <select
                  value={ticketQuantity}
                  onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
                  className="px-4 py-2 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20 bg-[#F2F0EF]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#F2F0EF] rounded-lg mb-6">
                <span className="font-medium">Total:</span>
                <span className="font-playfair text-xl font-bold text-cardinal-red">
                  ${(parseInt(fundraiserDetails.ticketPrice.replace('$', '')) * ticketQuantity).toLocaleString()}
                </span>
              </div>
              <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                Purchase Tickets
              </button>
            </div>
            <div className="text-sm text-charcoal-gray/60">
              <p>* Tickets are non-refundable but are transferable.</p>
              <p>* All proceeds support The Cardinal's local journalism initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-cardinal-red/10 rounded-lg mb-6">
            <Mail className="w-8 h-8 text-cardinal-red" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-charcoal-gray mb-4">
            Questions About the Event?
          </h2>
          <p className="text-lg text-charcoal-gray/70 mb-8">
            Contact our events team for more information about tickets, sponsorships, 
            or other ways to support the fundraiser.
          </p>
          <a
            href="mailto:events@thecardinal.com"
            className="inline-flex items-center px-8 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
          >
            Contact Events Team
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AnnualFundraiserPage;