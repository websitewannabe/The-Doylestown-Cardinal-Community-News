import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminPage from "./pages/AdminPage";
import ArticleEditorPage from "./pages/ArticleEditorPage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import EventsLandingPage from './pages/EventsLandingPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import IssuePage from './pages/IssuePage';
import ArchivePage from './pages/ArchivePage';
import AdvertisePage from './pages/AdvertisePage';
import WriterPage from './pages/WriterPage';
import MeetTheWritersPage from './pages/MeetTheWritersPage';
import PrintSubscriptionsPage from './pages/PrintSubscriptionsPage';
import DigitalSubscriptionsPage from './pages/DigitalSubscriptionsPage';
import DonatePage from './pages/DonatePage';
import SupportUsPage from "./pages/SupportUsPage";
import LocationsPage from './pages/LocationsPage';
import AnnualFundraiserPage from './pages/AnnualFundraiserPage';
import ContactPage from './pages/ContactPage';
import EditorialSubmissionsPage from './pages/EditorialSubmissionsPage';
import WriterSubmissionsPage from './pages/WriterSubmissionsPage';
import { NewsletterProvider, useNewsletterContext } from './context/NewsletterContext';
import NewsletterPopup from './components/ui/NewsletterPopup';
import ScrollToTop from './components/ScrollToTop';


const queryClient = new QueryClient();

const AppContent = () => {
  const { showPopup, handleClose } = useNewsletterContext();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F2F0EF]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/writers" element={<MeetTheWritersPage />} />
          <Route path="/writer/:writerId" element={<WriterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/editorial-submissions" element={<EditorialSubmissionsPage />} />
          <Route path="/writer-submissions" element={<WriterSubmissionsPage />} />
          <Route path="/current-issue" element={<IssuePage />} />
          <Route path="/support-us" element={<SupportUsPage />} />
          <Route path="/digital-subscriptions" element={<DigitalSubscriptionsPage />} />
          <Route path="/print-subscriptions" element={<PrintSubscriptionsPage />} />
          <Route path="/donate-options" element={<DonatePage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
        <Footer />
        {showPopup && <NewsletterPopup show={showPopup} onClose={handleClose} />}
      </div>
    </Router>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsletterProvider>
       <HelmetProvider>
        <AppContent />
        </HelmetProvider>
      </NewsletterProvider>
    </QueryClientProvider>
  );
}

export default App;