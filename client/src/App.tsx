import React from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient"; // Assuming this path is correct
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import Home from "@/pages/home";
import CreateArticle from "@/pages/articles/create";
import NotFound from "@/pages/not-found";
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


function Router() {
  const { showPopup, handleClose } = useNewsletterContext();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles/create" component={CreateArticle} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/writers" component={MeetTheWritersPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/events/:category" component={EventsPage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/community/spotlight" component={CommunitySpotlightPage} />
      <Route path="/community/spotlight/business" component={BusinessSpotlightPage} />
      <Route path="/community/spotlight/person" component={PersonSpotlightPage} />
      <Route path="/community/spotlight/event" component={EventSpotlightPage} />
      <Route path="/community/spotlight/building" component={BuildingSpotlightPage} />
      <Route path="/community/spotlight/advertiser" component={AdvertiserOfTheMonthPage} />
      <Route path="/community/directory" component={BusinessDirectoryPage} />
      <Route path="/community/directory/guides" component={TownGuidesPage} />
      <Route path="/community/directory/things-to-do" component={ThingsToDoPage} />
      <Route path="/community/best-of" component={BestOfDoylestownPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/editorial-submissions" component={EditorialSubmissionsPage} />
      <Route path="/current-issue" component={IssuePage} />
      <Route path="/archive" component={ArchivePage} />
      <Route path="/advertise" component={AdvertisePage} />
      <Route path="/print-subscriptions" component={PrintSubscriptionsPage} />
      <Route path="/digital-subscriptions" component={DigitalSubscriptionsPage} />
      <Route path="/donate" component={DonatePage} />
      <Route path="/annual-fundraiser" component={AnnualFundraiserPage} />
      <Route path="/writer/:writerId" component={WriterPage} />
      <Route path="/locations" component={LocationsPage} />
      <Route component={NotFound} /> {/*Catch-all for 404*/}
    </Switch>
  );
}

export default function App() {
  return (
    <NewsletterProvider>
      <QueryClientProvider client={queryClient}>
        <div className="relative flex min-h-screen flex-col">
          <Header /> {/* Needs implementation */}
          <div className="flex-1">
            <Router />
          </div>
          {showPopup && <NewsletterPopup onClose={handleClose} />}
        </div>
        <Toaster />
      </QueryClientProvider>
    </NewsletterProvider>
  );
}