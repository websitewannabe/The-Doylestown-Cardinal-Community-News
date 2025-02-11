import React, { createContext, useContext, useState } from 'react';

interface NewsletterContextType {
  showPopup: boolean;
  handleClose: () => void;
  forceShowPopup: () => void;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const NewsletterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    // Store the time when the user closed the popup
    localStorage.setItem('newsletter_closed_at', new Date().toISOString());
  };

  const forceShowPopup = () => {
    const hasSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    
    // Only show the popup if the user hasn't already subscribed
    if (!hasSubscribed) {
      setShowPopup(true);
      // Clear the closed timestamp to allow the popup to show
      localStorage.removeItem('newsletter_closed_at');
    }
  };

  return (
    <NewsletterContext.Provider value={{ showPopup, handleClose, forceShowPopup }}>
      {children}
    </NewsletterContext.Provider>
  );
};

export const useNewsletterContext = () => {
  const context = useContext(NewsletterContext);
  if (context === undefined) {
    throw new Error('useNewsletterContext must be used within a NewsletterProvider');
  }
  return context;
};