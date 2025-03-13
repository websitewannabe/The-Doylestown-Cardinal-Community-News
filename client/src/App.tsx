import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
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
import CommunityPage from './pages/CommunityPage';
import CommunitySpotlightPage from './pages/CommunitySpotlightPage';
import BusinessSpotlightPage from './pages/BusinessSpotlightPage';
import PersonSpotlightPage from './pages/PersonSpotlightPage';
import EventSpotlightPage from './pages/EventSpotlightPage';
import BuildingSpotlightPage from './pages/BuildingSpotlightPage';
import AdvertiserOfTheMonthPage from './pages/AdvertiserOfTheMonthPage';
import BusinessDirectoryPage from './pages/BusinessDirectoryPage';
import TownGuidesPage from './pages/TownGuidesPage';
import ThingsToDoPage from './pages/ThingsToDoPage';
import BestOfDoylestownPage from './pages/BestOfDoylestownPage';
import PrintSubscriptionsPage from './pages/PrintSubscriptionsPage';
import DigitalSubscriptionsPage from './pages/DigitalSubscriptionsPage';
import DonatePage from './pages/DonatePage';
import LocationsPage from './pages/LocationsPage';
import AnnualFundraiserPage from './pages/AnnualFundraiserPage';
import ContactPage from './pages/ContactPage';
import EditorialSubmissionsPage from './pages/EditorialSubmissionsPage';
import { NewsletterProvider, useNewsletterContext } from './context/NewsletterContext';
import NewsletterPopup from './components/ui/NewsletterPopup';
import AdminPage from "./pages/AdminPage"; // Added
import ArticleEditorPage from "./pages/ArticleEditorPage"; // Added
import LoginPage from "./pages/LoginPage"; // Added


const AppContent = () => {
  const { showPopup, handleClose } = useNewsletterContext();

  return (
    <Router>
      <div className="min-h-screen bg-[#F2F0EF]">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/writers" element={<MeetTheWritersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:category" element={<EventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/spotlight" element={<CommunitySpotlightPage />} />
          <Route path="/community/spotlight/business" element={<BusinessSpotlightPage />} />
          <Route path="/community/spotlight/person" element={<PersonSpotlightPage />} />
          <Route path="/community/spotlight/event" element={<EventSpotlightPage />} />
          <Route path="/community/spotlight/building" element={<BuildingSpotlightPage />} />
          <Route path="/community/spotlight/advertiser" element={<AdvertiserOfTheMonthPage />} />
          <Route path="/community/directory" element={<BusinessDirectoryPage />} />
          <Route path="/community/directory/guides" element={<TownGuidesPage />} />
          <Route path="/community/directory/things-to-do" element={<ThingsToDoPage />} />
          <Route path="/community/best-of" element={<BestOfDoylestownPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/editorial-submissions" element={<EditorialSubmissionsPage />} />
          <Route path="/current-issue" element={<IssuePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/print-subscriptions" element={<PrintSubscriptionsPage />} />
          <Route path="/digital-subscriptions" element={<DigitalSubscriptionsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/annual-fundraiser" element={<AnnualFundraiserPage />} />
          <Route path="/writer/:writerId" element={<WriterPage />} />
          <Route path="/locations" element={<LocationsPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/articles/new" element={<ArticleEditorPage />} />
          <Route path="/admin/articles/:id/edit" element={<ArticleEditorPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Added login route */}
        </Routes>
        <Footer />
        {showPopup && <NewsletterPopup onClose={handleClose} />}
      </div>
    </Router>
  );
};

function App() {
  return (
    <NewsletterProvider>
      <AppContent />
    </NewsletterProvider>
  );
}

export default App;