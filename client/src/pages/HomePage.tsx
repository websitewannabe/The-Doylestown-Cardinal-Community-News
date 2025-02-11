import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  Quote, 
  Calendar, 
  MapPin, 
  Clock, 
  Info,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { useNewsletterContext } from '../context/NewsletterContext';

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Doylestown Arts Festival",
    date: "April 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Downtown Doylestown",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    category: "Arts & Culture"
  },
  {
    id: 2,
    title: "Spring Jazz Concert Series",
    date: "April 22, 2024",
    time: "7:30 PM - 10:00 PM",
    location: "County Theater",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80",
    category: "Music"
  },
  {
    id: 3,
    title: "Farmers Market Opening Day",
    date: "April 20, 2024",
    time: "8:00 AM - 1:00 PM",
    location: "Buckingham Green",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80",
    category: "Community"
  }
];

// Existing testimonials data
const testimonials = [
  {
    id: 1,
    quote: "The Cardinal has been my trusted source for local news for over a decade. Their in-depth coverage of community issues is unmatched.",
    author: "Sarah Thompson",
    role: "Local Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "As a community leader, I appreciate The Cardinal's commitment to balanced reporting and their dedication to highlighting local voices.",
    author: "Michael Chen",
    role: "City Council Member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "The Cardinal's coverage of our local arts scene has helped bring our community together and showcase the incredible talent in Doylestown.",
    author: "Emily Rodriguez",
    role: "Arts Foundation Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

// Mock data for Instagram feed
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80",
    caption: "Downtown Doylestown looking beautiful this spring! 🌸 #DoylestownPA",
    likes: 245,
    comments: 18,
    date: "2 days ago"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    caption: "Historic Fonthill Castle lit up for the evening tour. ✨ #BucksCounty",
    likes: 189,
    comments: 12,
    date: "3 days ago"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80",
    caption: "The Doylestown Arts Festival was a huge success! Thank you to all who attended. 🎨",
    likes: 312,
    comments: 24,
    date: "4 days ago"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80",
    caption: "Movie night at the County Theater. 🎬 #DoylestownNights",
    likes: 278,
    comments: 15,
    date: "5 days ago"
  }
];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { forceShowPopup } = useNewsletterContext();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80"
            alt="Historic Doylestown"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-gray/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-7xl md:text-[8.75rem] font-bold text-off-white mb-4">
              Doylestown
            </h1>
            <p className="text-2xl text-off-white mb-8 font-playfair italic">
              Experience the heart of Bucks County
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/articles"
                className="inline-flex items-center bg-cardinal-red text-off-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition-colors"
              >
                Read Latest Stories
              </Link>
              <Link 
                to="/current-issue"
                className="inline-flex items-center gap-2 bg-off-white text-cardinal-red px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-off-white transition-colors"
              >
                Latest Issue
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative">
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
      </section>

      {/* Featured Stories Section */}
      <section className="py-20 bg-[#F2F0EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-12 text-center">
            Featured Stories
          </h2>
          <div className="flex gap-8">
            {/* Featured Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group cursor-pointer p-4 border border-[#333333] rounded-lg">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1523580846011-d3a5bc25702b' : 
                           item === 2 ? '1531829039722-d3fb3e705a4b' : 
                           item === 3 ? '1522158637959-30385a09e0da' :
                           '1504711434969-e33886168f5c'}?auto=format&fit=crop&q=80`}
                      alt="Story thumbnail"
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-2">
                    Local Story Title Here
                  </h3>
                  <p className="text-charcoal-gray/80">
                    A brief preview of the story goes here, giving readers a glimpse into what they can expect...
                  </p>
                </div>
              ))}
            </div>

            {/* Current Edition Box */}
            <div className="hidden lg:block w-1/3">
              <div className="border border-[#333333] rounded-lg p-8 sticky top-24 h-[calc(100vh-6rem)] max-h-[800px]">
                <div className="mb-6">
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-2">
                    Current Edition
                  </h2>
                  <div className="flex items-center text-charcoal-gray/60">
                    <Calendar size={16} className="mr-2" />
                    March 20, 2024
                  </div>
                </div>

                {/* Issuu API Placeholder */}
                <div className="h-[calc(100%-12rem)] bg-[#F2F0EF] rounded-lg border-2 border-dashed border-[#333333]/20 flex flex-col items-center justify-center p-8 text-center mb-6">
                  <div className="bg-cardinal-red/10 p-4 rounded-full mb-4">
                    <Info size={32} className="text-cardinal-red" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal-gray mb-2">
                    Digital Edition Coming Soon
                  </h3>
                  <p className="text-charcoal-gray/70 max-w-md">
                    Our digital edition viewer is being integrated. Soon you'll be able to flip through 
                    The Cardinal just like the print edition, with enhanced digital features.
                  </p>
                </div>

                <Link
                  to="/current-issue"
                  className="w-full px-6 py-2 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors flex items-center justify-center gap-2"
                >
                  View Full Screen
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal-gray">
              Upcoming Events
            </h2>
            <Link
              to="/events"
              className="inline-flex items-center text-cardinal-red hover:text-forest-green transition-colors"
            >
              View All Events
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <Link
                key={event.id}
                to={`/events#${event.id}`}
                className="group"
              >
                <div className="border border-[#333333] rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cardinal-red text-white text-sm rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-4 group-hover:text-cardinal-red transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-charcoal-gray/70">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cardinal-red" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-cardinal-red" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-cardinal-red" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F2F0EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4 text-center">
            Community Voices
          </h2>
          <p className="text-lg text-charcoal-gray/70 text-center mb-12 max-w-2xl mx-auto">
            Hear from our readers about the impact of local journalism in Doylestown
          </p>
          
          <div 
            className="relative bg-white rounded-lg p-8 md:p-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Large quote mark */}
            <div className="absolute top-8 left-8 text-cardinal-red/10">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden md:block">
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
                  <button
                    onClick={handlePrevious}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-cardinal-red hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
                  <button
                    onClick={handleNext}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-cardinal-red hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="max-w-3xl mx-auto">
                <blockquote className="text-xl md:text-2xl text-charcoal-gray text-center mb-8 font-playfair">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="ml-4 text-left">
                    <div className="font-bold text-charcoal-gray">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-cardinal-red">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? 'w-6 bg-cardinal-red'
                        : 'bg-charcoal-gray/20 hover:bg-cardinal-red/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-4">
                Follow Us on Instagram
              </h2>
              <p className="text-lg text-charcoal-gray/70">
                Stay connected with The Cardinal through our social media updates.
              </p>
            </div>
            <a
              href="https://instagram.com/thecardinal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cardinal-red text-white rounded-lg hover:bg-cardinal-red/90 transition-colors"
            >
              <Instagram size={20} />
              @thecardinal
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map(post => (
              <div
                key={post.id}
                className="group relative bg-white rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square">
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="text-white text-sm">
                      <p className="line-clamp-3">{post.caption}</p>
                    </div>
                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <div className="flex items-center gap-4">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* API Integration Note */}
          <div className="mt-8 p-6 bg-[#F2F0EF] rounded-lg">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cardinal-red/10 rounded-lg">
                <Info className="w-6 h-6 text-cardinal-red" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Instagram Integration Coming Soon</h3>
                <p className="text-charcoal-gray/70">
                  We're working on integrating our live Instagram feed. Soon you'll be able to see our 
                  latest posts directly on this page. Follow us on Instagram to stay updated in the meantime.
                </p>
                <a
                  href="https://instagram.com/thecardinal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cardinal-red hover:text-forest-green transition-colors mt-4"
                >
                  Visit our Instagram
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-[#F2F0EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charcoal-gray mb-6">
                Our Community, Our Stories
              </h2>
              <p className="text-lg text-charcoal-gray/80 mb-8">
                For over 50 years, The Cardinal has been at the heart of Doylestown's 
                community, sharing the stories that shape our town and bringing people together.
              </p>
              <button 
                onClick={forceShowPopup}
                className="bg-forest-green text-off-white px-8 py-3 rounded-lg font-semibold hover:bg-cardinal-red transition-colors"
              >
                Join Our Newsletter
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                alt="Doylestown Community"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;