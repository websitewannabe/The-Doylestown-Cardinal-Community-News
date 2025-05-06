import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const MobileNavLink = ({
    to,
    children,
    onClick,
  }: {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <Link
      to={to}
      className={`text-xl font-serif italic transition-colors ${
        isCurrentPage(to)
          ? "text-[#8B0000] font-bold"
          : "text-[#333333] hover:text-[#8B0000]"
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
    { name: "Home", path: "/" },
    {
      name: "Articles",
      path: "/articles",
      hasDropdown: true,
      dropdownItems: [
        { name: "Current Issue", path: "/current-issue" },
        { name: "Past Issues", path: "https://issuu.com/doylestowncardinal", isExternal: true },
        { name: "Things To Do", path: "/articles?category=play" },
        { name: "Hotels", path: "/articles?category=stay" },
        { name: "Restaurants", path: "/articles?category=taste" },
        { name: "Art/Music", path: "/articles?category=art-music" },
        { name: "Style", path: "/articles?category=style" },
        { name: "Fitness", path: "/articles?category=fit" },
        { name: "Life", path: "/articles?category=life" },
        { name: "Business", path: "/articles?category=business" },
        { name: "Technology", path: "/articles?category=technology" },
        { name: "Real Estate", path: "/articles?category=real-estate" },
      ],
    },
    {
      name: "Support Us",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Advertise with Us", path: "/advertise" },
        { name: "Print Subscriptions", path: "/print-subscriptions" },
        { name: "Digital Subscriptions", path: "/digital-subscriptions" },
        { name: "Donate", path: "/donate" },
      ],
    },
    {
      name: "More",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Meet the Writers", path: "/writers" },
        { name: "Editorial Submissions", path: "/editorial-submissions" },
        { name: "Past Issues", path: "https://issuu.com/doylestowncardinal", isExternal: true },
        { name: "Find The Cardinal", path: "/locations" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
  ];

  const handleNavigation = (path: string) => {
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");
      if (location.pathname !== basePath) {
        localStorage.setItem("scrollToSection", hash);
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    const scrollToSection = localStorage.getItem("scrollToSection");
    if (scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToSection");
      }
    }
  }, [location]);

  return (
    <div className="fixed w-full z-50">
      <div className="pt-4 px-2 pb-2">
        <nav
          className={`
            w-[calc(95%-4px)] mx-auto
            rounded-2xl
            transition-all duration-300
            bg-[#F2F0EF]
            ${isScrolled ? "shadow-lg" : ""}
          `}
        >
          <div className="px-8 py-2 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/images/The_Cardinal_Logo-removebg-preview.png"
                  alt="The Cardinal"
                  className="h-14 w-auto"
                />
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
                    onMouseEnter={() =>
                      link.hasDropdown && handleDropdownEnter(link.name)
                    }
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleNavigation(link.path)}
                      className={`relative font-serif italic text-base transition-colors py-2 group ${
                        isCurrentPage(link.path)
                          ? "text-[#8B0000] font-semibold"
                          : "text-[#333333] hover:text-[#8B0000]"
                      }`}
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <div className="absolute left-0 mt-1 w-48 pt-2">
                        <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                          {link.dropdownItems.map((item) => (
                            <div key={item.path}>
                              {item.isExternal ? (
                                <a
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block px-4 py-2 text-sm transition-colors text-[#333333] hover:text-[#8B0000] hover:bg-[#8B0000]/5"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  to={item.path}
                                  onClick={() => handleNavigation(item.path)}
                                  className={`block px-4 py-2 text-sm transition-colors ${
                                    isCurrentPage(item.path)
                                      ? "text-[#8B0000] font-semibold bg-[#8B0000]/5"
                                      : "text-[#333333] hover:text-[#8B0000] hover:bg-[#8B0000]/5"
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              )}
                              {item.subItems && (
                                <div className="pl-4">
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      onClick={() =>
                                        handleNavigation(subItem.path)
                                      }
                                      className={`block px-4 py-2 text-sm transition-colors ${
                                        isCurrentPage(subItem.path)
                                          ? "text-[#8B0000] font-semibold bg-[#8B0000]/5"
                                          : "text-[#333333] hover:text-[#8B0000] hover:bg-[#8B0000]/5"
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
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
              ${isMobileMenuOpen ? "max-h-[80vh] border-t border-gray-100" : "max-h-0"}
            `}
          >
            <div className="px-8 py-6 space-y-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <div className="flex flex-col space-y-4">
                {navLinks.map((item) => (
                  <div key={item.name}>
                    {item.name === "More" ? (
                      <>
                        <button
                          className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex justify-between items-center"
                          onClick={() => toggleSection(item.name)}
                          aria-expanded={openSection === item.name}
                          aria-controls={`section-${item.name}`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openSection === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            openSection === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenSection(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : item.path === "#" ? (
                      <>
                        <button
                          className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex justify-between items-center"
                          onClick={() => toggleSection(item.name)}
                          aria-expanded={openSection === item.name}
                          aria-controls={`section-${item.name}`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openSection === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            openSection === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : item.name === "Articles" ? (
                      <>
                        <button
                          className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex justify-between items-center"
                          onClick={() => toggleSection(item.name)}
                          aria-expanded={openSection === item.name}
                          aria-controls={`section-${item.name}`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              openSection === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            openSection === item.name ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="pl-4 py-2 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenSection(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
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