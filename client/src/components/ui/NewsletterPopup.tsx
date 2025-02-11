import React, { useState, useEffect } from 'react';
import { X, Mail, ChevronRight } from 'lucide-react';

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setIsSubmitted(true);
    // Store in localStorage to prevent showing again
    localStorage.setItem('newsletter_subscribed', 'true');
    // Close after 2 seconds of showing success message
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-xl w-full bg-[#F2F0EF] rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-charcoal-gray/60 hover:text-cardinal-red transition-colors"
          aria-label="Close newsletter popup"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80"
              alt="Doylestown Community"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 md:w-1/2">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-block p-3 bg-cardinal-red/10 rounded-lg mb-4">
                    <Mail className="w-6 h-6 text-cardinal-red" />
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-2">
                    Stay Connected with The Cardinal
                  </h2>
                  <p className="text-charcoal-gray/70">
                    Get the latest news, events, and community stories delivered straight to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-charcoal-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cardinal-red/20"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-cardinal-red text-white rounded-lg font-semibold hover:bg-cardinal-red/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Subscribe Now
                    <ChevronRight size={20} />
                  </button>

                  <p className="text-xs text-charcoal-gray/60 text-center">
                    By subscribing, you agree to our{' '}
                    <a href="/privacy" className="text-cardinal-red hover:text-forest-green transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-charcoal-gray/10">
                  <div className="flex items-center gap-2 text-sm text-charcoal-gray/70">
                    <span className="font-medium">✨ Subscriber Benefits:</span>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-charcoal-gray/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-cardinal-red rounded-full" />
                      Weekly curated news digest
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-cardinal-red rounded-full" />
                      Exclusive community event invites
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-cardinal-red rounded-full" />
                      Early access to special features
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="inline-block p-3 bg-forest-green/10 rounded-lg mb-4">
                  <Mail className="w-6 h-6 text-forest-green" />
                </div>
                <h2 className="font-playfair text-2xl font-bold text-charcoal-gray mb-2">
                  Welcome to The Cardinal!
                </h2>
                <p className="text-charcoal-gray/70">
                  Thank you for subscribing. Check your inbox to confirm your subscription.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;