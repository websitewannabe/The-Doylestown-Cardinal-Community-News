import React from 'react';
import { ChevronRight, Calendar, Archive, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const IssuePage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Newspaper background"
            className="w-full h-full object-cover blur-[5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/20 to-charcoal-gray/20" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
              The Cardinal Digital Edition
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Experience our newspaper in a new way with our digital edition. 
              Flip through pages, zoom in on articles, and access our complete archive.
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
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Issue Placeholder */}
          <div className="lg:col-span-2">
            <div className="border border-[#333333] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-2">
                    Current Edition
                  </h2>
                  <div className="flex items-center text-charcoal-gray/60">
                    <Calendar size={16} className="mr-2" />
                    March 20, 2024
                  </div>
                </div>
                <a 
                  href="https://online.fliphtml5.com/onuot/wqtv/#p=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center gap-2"
                >
                  View Full Screen
                  <ChevronRight size={16} />
                </a>
              </div>

              {/* Current Issue Preview */}
              <div className="aspect-[4/3] bg-[#F2F0EF] rounded-lg overflow-hidden">
                <img 
                  src="/images/The_Cardinal_Paper.png" 
                  alt="Current Issue - The Cardinal" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Past Issues */}
            <div className="border border-[#333333] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cardinal-red/10 rounded-lg">
                  <Archive className="w-6 h-6 text-cardinal-red" />
                </div>
                <h3 className="font-playfair text-xl font-bold">Past Issues</h3>
              </div>
              <p className="text-charcoal-gray/70 mb-6">
                Access our complete archive of past editions, dating back to our first digital issue.
              </p>
              <Link 
                to="/archive"
                className="w-full px-6 py-3 bg-[#F2F0EF] border border-[#333333] rounded-lg hover:bg-cardinal-red hover:text-white hover:border-cardinal-red transition-colors flex items-center justify-center gap-2"
              >
                Browse Archive
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Subscription Info */}
            <div className="border border-[#333333] rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-4">Digital Access</h3>
              <p className="text-charcoal-gray/70 mb-6">
                Subscribe to get unlimited access to our digital edition and archive.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-charcoal-gray/70">
                  <span className="w-1.5 h-1.5 bg-cardinal-red rounded-full" />
                  Unlimited access to digital editions
                </li>
                <li className="flex items-center gap-2 text-charcoal-gray/70">
                  <span className="w-1.5 h-1.5 bg-cardinal-red rounded-full" />
                  Full archive access
                </li>
                <li className="flex items-center gap-2 text-charcoal-gray/70">
                  <span className="w-1.5 h-1.5 bg-cardinal-red rounded-full" />
                  Mobile and tablet friendly
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuePage;