/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { getInitialTheme, applyTheme, Theme } from './utils/theme.ts';
import { Navbar } from './components/Navbar.tsx';
import { NavigationDrawer } from './components/NavigationDrawer.tsx';
import { HeroSection } from './sections/HeroSection.tsx';
import { AboutSection } from './sections/AboutSection.tsx';
import { TrustMetricsSection } from './sections/TrustMetricsSection.tsx';
import { ServicesSection } from './sections/ServicesSection.tsx';
import { StrategySection } from './sections/StrategySection.tsx';
import { ProjectsSection } from './sections/ProjectsSection.tsx';
import { LocationMapSection } from './sections/LocationMapSection.tsx';
import { ContactSection } from './sections/ContactSection.tsx';
import { FooterSection } from './sections/FooterSection.tsx';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from './data/companyData.ts';

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [enquiryProjectType, setEnquiryProjectType] = useState<string>('Residential House Planning');

  // Initialize and persist theme
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setEnquiryProjectType(serviceTitle);
    handleNavigate('#contact');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[#4B1428] selection:text-[#F5F0E8]">
      {/* Top Header Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Left Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
      />

      {/* Main Landmark with 9 Complete Sections */}
      <main id="main-content">
        {/* Section 1: Premium Animated Hero */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Section 2: About the Company */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Section 3: Business Metrics and Trust */}
        <TrustMetricsSection />

        {/* Section 4: Services */}
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Section 5: Construction Strategy */}
        <StrategySection onNavigate={handleNavigate} />

        {/* Section 6: Projects and Project Details */}
        <ProjectsSection onEnquireAboutProject={handleSelectServiceForEnquiry} />

        {/* Section 7: Google Maps and Location */}
        <LocationMapSection />

        {/* Section 8: Contact and Enquiry */}
        <ContactSection initialProjectType={enquiryProjectType} />
      </main>

      {/* Section 9: Final Call to Action and Footer */}
      <FooterSection onNavigate={handleNavigate} />

      {/* Floating Mobile Quick Connect Bar */}
      <aside
        aria-label="Quick Connect Actions"
        className="fixed bottom-4 right-4 z-30 flex items-center gap-2 sm:hidden"
      >
        <a
          href={COMPANY_DETAILS.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Enquiry"
          className="w-12 h-12 rounded-full bg-[#4B1428] text-[#F5F0E8] border border-[#F5F0E8]/20 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          aria-label="Direct Phone Call"
          className="w-12 h-12 rounded-full bg-[#242124] text-[#F5F0E8] border border-[#F5F0E8]/20 flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-[#E8A5BC]" />
        </a>
      </aside>
    </div>
  );
}
