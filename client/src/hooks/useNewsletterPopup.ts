import { useState, useEffect } from 'react';

export const useNewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    const hasClosedRecently = localStorage.getItem('newsletter_closed_at');
    
    if (hasSubscribed || hasClosedRecently) {
      return;
    }

    // Show popup after 30 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    // Setup exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Store the time when the user closed the popup
    localStorage.setItem('newsletter_closed_at', new Date().toISOString());
    // Remove the stored time after 7 days
    setTimeout(() => {
      localStorage.removeItem('newsletter_closed_at');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  return { showPopup, handleClose };
};