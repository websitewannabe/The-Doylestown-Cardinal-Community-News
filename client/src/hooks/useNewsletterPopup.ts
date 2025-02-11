import { useState } from 'react';

export const useNewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('newsletter_closed_at', new Date().toISOString());
  };

  const forceShowPopup = () => {
    const hasSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    if (!hasSubscribed) {
      setShowPopup(true);
      localStorage.removeItem('newsletter_closed_at');
    }
  };

  return { showPopup, handleClose, forceShowPopup };
};