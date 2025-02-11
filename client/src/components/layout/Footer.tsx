import React from 'react';
import { Link } from 'react-router-dom';
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
  Users
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F0EF]">
      {/* Newsletter Section */}
      <div className="bg-cardinal-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="font-playfair text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-white/90">
                Get the latest news and updates delivered to your inbox weekly.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('show-newsletter'))}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-serif italic font-bold text-cardinal-red">
                The Cardinal
              </span>
            </Link>
            <p className="text-charcoal-gray/80 mb-6">
              Your trusted source for local news and stories in Doylestown, PA. 
              Bringing our community together through authentic journalism and 
              engaging storytelling since 1970.
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

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/current-issue" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Current Issue
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link to="/digital-subscriptions" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Digital Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/print-subscriptions" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Print Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors">
                  Find The Cardinal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-cardinal-red flex-shrink-0 mt-1" />
                <span className="text-charcoal-gray/80">
                  123 Main Street<br />
                  Doylestown, PA 18901
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-cardinal-red flex-shrink-0" />
                <span className="text-charcoal-gray/80">(215) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-cardinal-red flex-shrink-0" />
                <a 
                  href="mailto:info@thecardinal.com" 
                  className="text-charcoal-gray/80 hover:text-cardinal-red transition-colors"
                >
                  info@thecardinal.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={20} className="text-cardinal-red flex-shrink-0" />
                <span className="text-charcoal-gray/80">Mon-Fri: 9am-5pm</span>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-6">Support Local Journalism</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/donate"
                  className="flex items-center gap-3 text-charcoal-gray/80 hover:text-cardinal-red transition-colors"
                >
                  <Heart size={20} className="text-cardinal-red" />
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link 
                  to="/annual-fundraiser"
                  className="flex items-center gap-3 text-charcoal-gray/80 hover:text-cardinal-red transition-colors"
                >
                  <Calendar size={20} className="text-cardinal-red" />
                  Annual Fundraiser
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="flex items-center gap-3 text-charcoal-gray/80 hover:text-cardinal-red transition-colors"
                >
                  <Award size={20} className="text-cardinal-red" />
                  Our Mission
                </Link>
              </li>
              <li>
                <Link 
                  to="/writers"
                  className="flex items-center gap-3 text-charcoal-gray/80 hover:text-cardinal-red transition-colors"
                >
                  <Users size={20} className="text-cardinal-red" />
                  Meet Our Team
                </Link>
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
              <Link to="/privacy-policy" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                Accessibility
              </Link>
              <Link to="/editorial-submissions" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                Submit Content
              </Link>
              <Link to="/contact" className="text-charcoal-gray/60 hover:text-cardinal-red transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;