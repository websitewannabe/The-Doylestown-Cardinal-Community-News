
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewsletterPopup from "../ui/NewsletterPopup";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Globe,
  Calendar,
  Heart,
  Award,
  Users,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <footer className="bg-[#F2F0EF]">
      {/* Newsletter Section */}
      <div className="bg-cardinal-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="font-playfair text-2xl font-bold mb-2">
                Stay Connected
              </h3>
              <p className="text-white/90">
                Get the latest news and updates delivered to your inbox weekly.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setShowNewsletter(true)}
                className="px-8 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Subscribe to Newsletter
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* About Section */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/The_Cardinal_Logo-removebg-preview.png"
                alt="The Cardinal"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-charcoal-gray/80 mb-6">
              Your trusted source for local news and stories in Doylestown, PA.
              Bringing our community together through authentic journalism and
              engaging storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/thecardinal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/thecardinal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/thecardinal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links - Articles */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">
              Articles
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/articles"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/current-issue"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Current Issue
                </Link>
              </li>
              <li>
                <a
                  href="https://issuu.com/doylestowncardinal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Past Issues
                </a>
              </li>
              <li>
                <Link
                  to="/articles?category=play"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Things To Do
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=stay"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=taste"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - More Articles */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/articles?category=art-music"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Art/Music
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=style"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Style
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=fit"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Fitness
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=life"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Life
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=business"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=technology"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/articles?category=real-estate"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">
              More
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/writers"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Meet the Writers
                </Link>
              </li>
              <li>
                <Link
                  to="/editorial-submissions"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Editorial Submissions
                </Link>
              </li>
              <li>
                <Link
                  to="/writer-submissions"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Writer Submissions
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Find The Cardinal
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/support-us"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Support Us
                </Link>
              </li>
              <li>
                <Link
                  to="/advertise"
                  className="text-charcoal-gray/80 hover:text-[#8B0000] transition-colors"
                >
                  Advertise With Us
                </Link>
              </li>
              <li>
                <div className="space-y-4 text-charcoal-gray/80 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-cardinal-red flex-shrink-0 mt-1"
                    />
                    <span>
                      123 Main Street
                      <br />
                      Doylestown, PA 18901
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-cardinal-red flex-shrink-0" />
                    <span>(215) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-cardinal-red flex-shrink-0" />
                    <a
                      href="mailto:info@thecardinal.com"
                      className="hover:text-[#8B0000] transition-colors"
                    >
                      info@thecardinal.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-charcoal-gray/60">
              © {currentYear} The Cardinal. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                to="/"
                className="text-charcoal-gray/60 hover:text-[#8B0000] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-charcoal-gray/60 hover:text-[#8B0000] transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-charcoal-gray/60 hover:text-[#8B0000] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NewsletterPopup
        show={showNewsletter}
        onClose={() => setShowNewsletter(false)}
      />
    </footer>
  );
};

export default Footer;
