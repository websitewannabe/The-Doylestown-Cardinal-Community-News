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
  };

  const forceShowPopup = () => {
    const hasSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    if (!hasSubscribed) {
      setShowPopup(true);
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