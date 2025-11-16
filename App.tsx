import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ApproachPage from './pages/ApproachPage';
import ResourcesPage from './pages/ResourcesPage';
import ClientSuccessPage from './pages/ClientSuccessPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-warho-dark-purple text-gray-300 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/clients" element={<ClientSuccessPage />} />
            <Route path="/clients/:id" element={<CaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  );
}