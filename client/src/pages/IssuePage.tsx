import React from "react";
import { ChevronRight, Calendar, Archive, Info } from "lucide-react";
import { Link } from "react-router-dom";

const IssuePage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative h-[45vh]">
        <div className="absolute inset-0 bottom-24 overflow-hidden rounded-2xl shadow-lg mx-auto w-[95%] mt-2">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Newspaper background"
            className="w-full h-[105%] object-cover blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B]/80 to-charcoal-gray/50" />
        </div>
        <div className="relative max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:px-6 lg:pl-24 xl:pl-32 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-off-white mb-4">
              The Cardinal Digital Edition
            </h1>
            <p className="hidden md:block text-2xl text-off-white mb-8 font-playfair italic max-w-2xl">
              Experience our newspaper in a new way
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Issue Placeholder */}
          <div className="min-h-screen bg-[#F2F0EF] pt-32 px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl font-playfair font-bold text-charcoal-gray mb-8 text-center">
                This Month's Edition
              </h1>

              <div className="w-full aspect-[4/3] md:aspect-[16/9]">
                <iframe
                  src="https://online.fliphtml5.com/onuot/wqtv/"
                  title="The Doylestown Cardinal - Flipbook"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
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
                Access our complete archive of past editions, dating back to our
                first digital issue.
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
              <h3 className="font-playfair text-xl font-bold mb-4">
                Digital Access
              </h3>
              <p className="text-charcoal-gray/70 mb-6">
                Subscribe to get unlimited access to our digital edition and
                archive.
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
