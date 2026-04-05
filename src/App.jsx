import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import KeyFeaturesPage from '@/pages/KeyFeaturesPage';
import ForOrganizationsPage from '@/pages/ForOrganizationsPage';
import WhyMentamindPage from '@/pages/WhyMentamindPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import BlogPage from '@/pages/BlogPage';
import BlogDetailPage from '@/pages/BlogDetailPage';
import TeamPage from '@/pages/TeamPage';
import GetStartedPage from '@/pages/GetStartedPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import MentalHealthArticlePage from '@/pages/MentalHealthArticlePage';
import ShopPage from '@/pages/ShopPage';
import AboutUsPage from '@/pages/AboutUsPage';
import LifestyleProgramPage from '@/pages/LifestyleProgramPage';
import MentalHealthPage from '@/pages/MentalHealthPage';
import MentalHealthSolutionsPage from '@/pages/MentalHealthSolutionsPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- Add this line */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/features" element={<KeyFeaturesPage />} />
          <Route path="/for-organizations" element={<ForOrganizationsPage />} />
          <Route path="/why-mentamind" element={<WhyMentamindPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/why-taking-care-of-your-mental-health-is-essential" element={<MentalHealthArticlePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/lifestyle-program" element={<LifestyleProgramPage />} />
          <Route path="/mental-health" element={<MentalHealthPage />} />
          <Route path="/mental-health-solutions" element={<MentalHealthSolutionsPage />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;