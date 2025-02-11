import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Award, Users, Heart, BookOpen, ChevronRight, Clock, Info } from 'lucide-react';

// Mock data for team members
const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Editor-in-Chief",
    bio: "With over 20 years of journalism experience, Sarah leads our newsroom with a passion for local storytelling and community engagement.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    email: "sarah@thecardinal.com",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Managing Editor",
    bio: "Michael brings 15 years of digital media expertise and a deep commitment to investigative journalism that matters to our community.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    email: "michael@thecardinal.com",
    linkedin: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Community Outreach Director",
    bio: "Emily's background in community organizing helps forge meaningful connections between The Cardinal and our diverse readership.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    email: "emily@thecardinal.com",
    linkedin: "#"
  },
  {
    name: "James Wilson",
    role: "Senior Reporter",
    bio: "A Doylestown native, James covers local politics and community development with insight and dedication.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    email: "james@thecardinal.com",
    linkedin: "#"
  }
];

// Mock data for awards and recognition
const awards = [
  {
    year: "2023",
    title: "Excellence in Community Journalism",
    organization: "Pennsylvania Press Association"
  },
  {
    year: "2022",
    title: "Best Digital News Platform",
    organization: "Local Media Association"
  },
  {
    year: "2021",
    title: "Community Service Award",
    organization: "Bucks County Chamber of Commerce"
  }
];

// Mock data for print edition locations
const printLocations = [
  {
    name: "Doylestown Bookshop",
    address: "16 S Main St, Doylestown, PA 18901",
    type: "Bookstore",
    hours: "Mon-Sat: 9am-8pm, Sun: 11am-6pm"
  },
  {
    name: "Nonno's Italian Coffee Parlor",
    address: "6 W State St, Doylestown, PA 18901",
    type: "Coffee Shop",
    hours: "Daily: 7am-6pm"
  },
  {
    name: "Wawa Food Market",
    address: "440 S Main St, Doylestown, PA 18901",
    type: "Convenience Store",
    hours: "24/7"
  },
  {
    name: "Doylestown Food Market",
    address: "29 W State St, Doylestown, PA 18901",
    type: "Grocery Store",
    hours: "Mon-Sat: 8am-8pm, Sun: 9am-6pm"
  },
  {
    name: "Central News",
    address: "52 E State St, Doylestown, PA 18901",
    type: "Newsstand",
    hours: "Mon-Sat: 6am-7pm, Sun: 7am-3pm"
  },
  {
    name: "Doylestown Library",
    address: "150 S Pine St, Doylestown, PA 18901",
    type: "Library",
    hours: "Mon-Thu: 9am-9pm, Fri-Sat: 9am-5pm"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F0EF]">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80"
            alt="The Cardinal newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cardinal-red/90 to-charcoal-gray/90" />
        </div>
        <div className="relative flex-grow flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Since 1970, The Cardinal has been the trusted voice of Doylestown, 
              delivering authentic journalism that matters to our community.
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
              d="M0,120 
                 C180,90 360,120 540,100 
                 C720,80 900,110 1080,105 
                 C1260,100 1350,85 1440,95 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
            <path 
              fill="currentColor"
              fillOpacity="0.4"
              d="M0,120 
                 C160,110 320,85 480,95 
                 C640,105 800,90 960,100 
                 C1120,110 1280,95 1440,105 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
            <path 
              fill="currentColor"
              fillOpacity="0.2"
              d="M0,120 
                 C240,115 480,90 720,100 
                 C960,110 1200,90 1440,100 
                 L1440,120 L0,120 Z"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </div>

      {/* Mission and Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-charcoal-gray/80 mb-8">
                The Cardinal exists to serve the greater Doylestown community through 
                authentic, impactful journalism that informs, connects, and empowers 
                our readers. We believe in the power of local news to strengthen 
                community bonds and foster positive change.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Truth & Accuracy</h3>
                    <p className="text-charcoal-gray/70">
                      We uphold the highest standards of journalistic integrity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <Users className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Community First</h3>
                    <p className="text-charcoal-gray/70">
                      Local perspectives and needs guide our coverage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <Heart className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Inclusive Voice</h3>
                    <p className="text-charcoal-gray/70">
                      We represent and amplify diverse community voices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cardinal-red/10 rounded-lg">
                    <Award className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Excellence</h3>
                    <p className="text-charcoal-gray/70">
                      We strive for excellence in every story we tell.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
                alt="The Cardinal newsroom in action"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="font-playfair text-3xl font-bold text-cardinal-red">50+</p>
                <p className="text-charcoal-gray">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        >
                          <Mail size={16} />
                        </a>
                        <a
                          href={member.linkedin}
                          className="p-2 bg-white/90 rounded-full hover:bg-cardinal-red hover:text-white transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cardinal-red font-medium mb-2">{member.role}</p>
                <p className="text-sm text-charcoal-gray/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/3">
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
                Recognition & Awards
              </h2>
              <p className="text-charcoal-gray/80">
                Our commitment to excellence in journalism and community service has been recognized by leading industry organizations.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg text-center group hover:bg-cardinal-red/5 transition-colors">
                <div className="font-playfair text-4xl font-bold text-cardinal-red mb-2">15+</div>
                <div className="text-charcoal-gray">Industry Awards</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center group hover:bg-cardinal-red/5 transition-colors">
                <div className="font-playfair text-4xl font-bold text-cardinal-red mb-2">50+</div>
                <div className="text-charcoal-gray">Years of Excellence</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center group hover:bg-cardinal-red/5 transition-colors">
                <div className="font-playfair text-4xl font-bold text-cardinal-red mb-2">100K+</div>
                <div className="text-charcoal-gray">Readers Served</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div 
                key={award.title}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-cardinal-red text-white px-4 py-1 rounded-full text-sm font-medium">
                      {award.year}
                    </span>
                    <div className="p-2 bg-cardinal-red/10 rounded-lg group-hover:bg-cardinal-red/20 transition-colors">
                      <Award className="w-6 h-6 text-cardinal-red" />
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-lg font-bold text-charcoal-gray group-hover:text-cardinal-red transition-colors mb-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-sm text-charcoal-gray/70">
                    {award.organization}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-charcoal-gray/80">
                      {award.title.toLowerCase().includes('community') ? 
                        'Recognized for outstanding community engagement and local impact.' :
                      award.title.toLowerCase().includes('digital') ?
                        'Honored for excellence in digital innovation and user experience.' :
                        'Awarded for exceptional journalistic standards and editorial integrity.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Print Edition Section */}
      <section className="py-20 bg-[#F2F0EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-6">
                Where to Find Our Print Edition
              </h2>
              <p className="text-lg text-charcoal-gray/80 mb-8">
                The Cardinal's print edition is available every Wednesday at these trusted local establishments throughout Doylestown. Pick up your copy and support local journalism.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {printLocations.map((location, index) => (
                  <div 
                    key={index}
                    className="bg-[#F2F0EF] p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-2">
                      {location.name}
                    </h3>
                    <span className="inline-block bg-cardinal-red/10 text-cardinal-red text-sm px-3 py-1 rounded-full mb-3">
                      {location.type}
                    </span>
                    <div className="space-y-2 text-charcoal-gray/80">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1 flex-shrink-0 text-cardinal-red" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-1 flex-shrink-0 text-cardinal-red" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-cardinal-red/10 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info size={24} className="text-cardinal-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-charcoal-gray mb-2">
                      Want to become a distribution location?
                    </h4>
                    <p className="text-charcoal-gray/80 mb-4">
                      If you're interested in carrying The Cardinal at your business, we'd love to hear from you. Contact our distribution team to learn more about becoming a partner.
                    </p>
                    <a
                      href="mailto:distribution@thecardinal.com"
                      className="inline-flex items-center gap-2 text-cardinal-red hover:text-forest-green transition-colors"
                    >
                      Contact Distribution Team
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cardinal-red rounded-lg p-12 text-center">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our story. Subscribe to our newsletter, contribute to our community section, 
              or reach out to learn more about partnership opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/subscribe"
                className="inline-flex items-center px-6 py-3 bg-white text-cardinal-red rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors"
              >
                Subscribe Now
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cardinal-red transition-colors"
              >
                Contact Us
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;