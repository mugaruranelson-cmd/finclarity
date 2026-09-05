import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ServicesSection from './components/ServicesSection';
import OutcomesPillars from './components/OutcomesPillars';
import HowItWorks from './components/HowItWorks';
import PackagesSection from './components/PackagesSection';
import WhyFinclarity from './components/WhyFinclarity';
import WhoWeServe from './components/WhoWeServe';
import SalesIsThisYou from './components/SalesIsThisYou';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Set Document Title & Meta SEO
    document.title = "FINCLARITY | Bookkeeping & Financial Support Services";
  }, []);

  const handleNavigate = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Sticky Header */}
      <Navbar onNavigate={handleNavigate} activeTab={activeTab} />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>

        <PainPoints onNavigate={handleNavigate} />
        
        <ServicesSection onNavigate={handleNavigate} />

        <OutcomesPillars onNavigate={handleNavigate} />

        <HowItWorks onNavigate={handleNavigate} />

        <PackagesSection onNavigate={handleNavigate} />

        <WhyFinclarity onNavigate={handleNavigate} />

        <WhoWeServe onNavigate={handleNavigate} />

        <SalesIsThisYou onNavigate={handleNavigate} />

        <div id="about-section">
          <AboutSection onNavigate={handleNavigate} />
        </div>

        <FaqSection onNavigate={handleNavigate} />

        <ContactSection />
      </main>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
