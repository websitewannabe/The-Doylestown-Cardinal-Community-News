import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (type: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(type);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={to}
      className={`text-xl font-serif italic transition-colors ${
        isCurrentPage(to)
          ? 'text-[#8B0000] font-bold'
          : 'text-[#333333] hover:text-[#8B0000]'
      }`}
      onClick={() => {
        setIsMobileMenuOpen(false);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles', hasDropdown: true, dropdownItems: [
      { name: "Current Issue", path: "/current-issue" },
      { name: "Play", path: "/articles?category=play" },
      { name: "Stay", path: "/articles?category=stay" },
      { name: "Taste", path: "/articles?category=taste" },
      { name: "Art/Music", path: "/articles?category=art-music" },
      { name: "Style", path: "/articles?category=style" },
      { name: "Fit", path: "/articles?category=fit" },
      { name: "Life", path: "/articles?category=life" },
      { name: "Business", path: "/articles?category=business" },
      { name: "Technology", path: "/articles?category=technology" },
      { name: "Real Estate", path: "/articles?category=real-estate" }
    ]},
    { name: 'Events', path: '/events', hasDropdown: true, dropdownItems: [
      { name: "Annual Events", path: "/events/annual-events" },
      { name: "Upcoming Events", path: "/events/upcoming-events" },
      { name: "All Events", path: "/events/all-events" }
    ]},
    { 
      name: 'Community', 
      path: '/community', 
      hasDropdown: true, 
      dropdownItems: [
        {
          name: "Community Spotlight",
          path: "/community/spotlight",
          subItems: [
            { name: "Business Spotlight", path: "/community/spotlight/business" },
            { name: "Person Spotlight", path: "/community/spotlight/person" },
            { name: "Event Spotlight", path: "/community/spotlight/event" },
            { name: "Building Spotlight", path: "/community/spotlight/building" },
            { name: "Advertiser of the Month", path: "/community/spotlight/advertiser" }
          ]
        },
        { name: "Best of Doylestown", path: "/community/best-of" },
        { name: "Business Directory", path: "/community/directory" },
        { name: "Town Guides", path: "/community/directory/guides" },
        { name: "Things to Do", path: "/community/directory/things-to-do" }
      ]
    },
    { 
      name: 'Support Us', 
      path: '/support', 
      hasDropdown: true, 
      dropdownItems: [
        {
          name: "Advertise with Us",
          path: "/advertise",
          subItems: [
            { name: "Pricing", path: "/advertise#pricing" },
            { name: "Benefits", path: "/advertise#benefits" },
            { name: "Digital Ads", path: "/advertise#digital-ads" },
            { name: "Print Ads", path: "/advertise#print-ads" }
          ]
        },
        { name: "Print Subscriptions", path: "/print-subscriptions" },
        { name: "Digital Subscriptions", path: "/digital-subscriptions" },
        { name: "Donate", path: "/donate" },
        { name: "Annual Fundraiser", path: "/annual-fundraiser" },
        { name: "Find The Cardinal", path: "/locations" }
      ]
    },
    { 
      name: 'More', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Meet the Writers", path: "/writers" },
        { name: "Editorial Submissions", path: "/editorial-submissions" },
        { name: "Past Issues", path: "/archive" },
        { name: "Contact Us", path: "/contact" }
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      if (location.pathname !== basePath) {
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="fixed w-full z-50">
      <div className="p-2">
        <nav 
          className={`
            w-[calc(100%-4px)] mx-auto
            rounded-2xl
            transition-all duration-300
            bg-[#FAFAFA]
            ${isScrolled ? 'shadow-lg' : ''}
          `}
        >
          <div className="px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-serif italic font-bold text-[#8B0000]">
                  The Cardinal
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleNavigation(link.path)}
                      className={`relative font-serif italic text-base transition-colors py-2 group ${
                        isCurrentPage(link.path)
                          ? 'text-[#8B0000] font-semibold'
                          : 'text-[#333333] hover:text-[#8B0000]'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown size={16} className="inline-block ml-1" />
                      )}
                      <span
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      />
                    </Link>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className="absolute left-0 mt-1 w-48 pt-2">
                        <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                          {link.dropdownItems.map((item) => (
                            <div key={item.path}>
                              <Link
                                to={item.path}
                                onClick={() => handleNavigation(item.path)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isCurrentPage(item.path)
                                    ? 'text-[#8B0000] font-semibold bg-[#8B0000]/5'
                                    : 'text-[#333333] hover:text-[#8B0000] hover:bg-[#8B0000]/5'
                                }`}
                              >
                                {item.name}
                              </Link>
                              {item.subItems && (
                                <div className="pl-4">
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      onClick={() => handleNavigation(subItem.path)}
                                      className={`block px-4 py-2 text-sm transition-colors ${
                                        isCurrentPage(subItem.path)
                                          ? 'text-[#8B0000] font-semibold bg-[#8B0000]/5'
                                          : 'text-[#333333] hover:text-[#8B0000] hover:bg-[#8B0000]/5'
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search and CTA */}
              <div className="flex items-center space-x-4">
                <button className="text-[#333333] hover:text-[#8B0000] transition-colors p-2">
                  <Search size={20} />
                </button>
                <Link
                  to="/advertise"
                  className="
                    px-6 py-2
                    rounded-2xl
                    font-semibold
                    transition-all duration-300
                    bg-[#8B0000] text-white hover:bg-[#660000]
                  "
                >
                  Advertise with Us
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#333333] hover:text-[#8B0000] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`
              md:hidden 
              overflow-hidden 
              transition-all duration-300 ease-in-out
              ${isMobileMenuOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'}
            `}
          >
            <div className="px-8 py-6 space-y-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <MobileNavLink to={link.path} onClick={() => handleNavigation(link.path)}>
                      {link.name}
                    </MobileNavLink>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.dropdownItems.map((item) => (
                          <div key={item.path}>
                            <MobileNavLink to={item.path} onClick={() => handleNavigation(item.path)}>
                              {item.name}
                            </MobileNavLink>
                            {item.subItems && (
                              <div className="pl-4 mt-2 space-y-2">
                                {item.subItems.map((subItem) => (
                                  <MobileNavLink key={subItem.path} to={subItem.path} onClick={() => handleNavigation(subItem.path)}>
                                    {subItem.name}
                                  </MobileNavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/advertise"
                  className="
                    w-full
                    inline-flex
                    justify-center
                    px-8 py-3
                    rounded-2xl
                    font-semibold
                    transition-all duration-300
                    bg-[#8B0000] text-white hover:bg-[#660000]
                  "
                >
                  Advertise with Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;