
import React from "react";
import { Link } from "react-router-dom";
import { Users, HeartHandshake, Newspaper, Building } from "lucide-react";

const SupportUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="/images/paper-overlay.jpg"
            alt="Support The Cardinal"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-24 xl:pl-32 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-off-white mb-4">
              Support The Cardinal
            </h1>
            <p className="text-xl text-off-white mb-8 max-w-2xl">
              Help us continue delivering meaningful, independent journalism to the Doylestown community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/donate-options"
                className="px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#660000] transition-colors"
              >
                Donate Now
              </Link>
              <Link
                to="/digital-subscriptions"
                className="px-6 py-3 bg-white text-[#8B0000] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Support Options Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-[#8B0000]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Digital Access</h3>
            <p className="text-gray-600 mb-6">
              Unlimited articles, mobile access, digital archive
            </p>
            <Link
              to="/subscriptions"
              className="inline-block px-6 py-2 border border-[#8B0000] text-[#8B0000] rounded-lg hover:bg-[#8B0000] hover:text-white transition-colors"
            >
              View Plans
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-6">
              <Newspaper className="h-6 w-6 text-[#8B0000]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Print Subscription</h3>
            <p className="text-gray-600 mb-6">
              Weekly print delivery with full digital access
            </p>
            <Link
              to="/subscriptions"
              className="inline-block px-6 py-2 border border-[#8B0000] text-[#8B0000] rounded-lg hover:bg-[#8B0000] hover:text-white transition-colors"
            >
              Subscribe
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="h-12 w-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-6">
              <HeartHandshake className="h-6 w-6 text-[#8B0000]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
            <p className="text-gray-600 mb-6">
              One-time or monthly gifts to support our mission
            </p>
            <Link
              to="/donate-options"
              className="inline-block px-6 py-2 border border-[#8B0000] text-[#8B0000] rounded-lg hover:bg-[#8B0000] hover:text-white transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      {/* Corporate Sponsorship Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F8F8F8] rounded-lg my-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-16 w-16 mx-auto bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-6">
            <Building className="h-8 w-8 text-[#8B0000]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Corporate Sponsorship</h2>
          <p className="text-gray-600 mb-6">
            Are you a local business looking to support independent journalism while connecting with our readers? Explore corporate sponsorship opportunities.
          </p>
          <Link
            to="/donate-options#corporate"
            className="inline-block px-8 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#660000] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#8B0000] mb-2">50K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8B0000] mb-2">1000+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8B0000] mb-2">5+</div>
            <div className="text-gray-600">Years in Operation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8B0000] mb-2">25+</div>
            <div className="text-gray-600">Community Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportUsPage;
