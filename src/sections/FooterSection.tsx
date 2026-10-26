/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Phone, MessageSquare, MapPin, Compass, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS } from '../data/companyData.ts';

interface FooterSectionProps {
  onNavigate: (href: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Upper CTA Banner: Honest & Compelling Invitation */}
      <div className="border-b border-[var(--border-color)] py-16 sm:py-20 arch-grid-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
            <Compass className="w-3.5 h-3.5 text-[#4B1428]" />
            <span>Chennai Architectural Studio</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--text-primary)] leading-tight">
            Ready to Translate Your Building Vision into an Exact Blueprint?
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Constructing a home is one of life’s most significant undertakings. Discuss your site parameters with UrbanNest Team and take the first methodical step toward a durable, well-ventilated, and structurally sound residence.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('#contact')}
              className="px-8 py-3.5 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs shadow-lg transition-all duration-300 hover:shadow-[#4B1428]/40 hover:-translate-y-0.5"
            >
              Start Your Project
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3.5 border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-surface)] text-[var(--text-primary)] font-display text-xs tracking-widest uppercase rounded-xs transition-colors"
            >
              Call {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-lg tracking-widest shadow-md">
                AC
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-widest uppercase block text-[var(--text-primary)]">
                  UrbanNest Builders
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-tertiary)] block">
                  UrbanNest Team • Building Designer
                </span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Providing building design, architectural house planning, 2D working drawings, 3D front elevations, and construction consultation in Chennai and surrounding delta areas.
            </p>

            <div className="pt-2 text-xs font-mono text-[var(--text-tertiary)]">
              <span>Demo business profile // Replace with verified ratings</span>
            </div>
          </div>

          {/* Quick Section Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-[var(--text-primary)]">
              Section Navigation
            </h3>
            <ul className="space-y-2 text-xs font-mono text-[var(--text-secondary)]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="hover:text-[#4B1428] dark:hover:text-[#F5F0E8] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Verified Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-widest text-[var(--text-primary)]">
              Contact & Studio
            </h3>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-mono">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4B1428] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="hover:text-[#4B1428] dark:hover:text-[#E8A5BC] transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#4B1428] shrink-0" />
                <a
                  href={COMPANY_DETAILS.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4B1428] dark:hover:text-[#E8A5BC] transition-colors inline-flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <ExternalLink className="w-4 h-4 text-[#4B1428] shrink-0" />
                <a
                  href={COMPANY_DETAILS.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[11px] text-[#4B1428] dark:text-[#E8A5BC]"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-tertiary)]">
          <p>
            © {currentYear} UrbanNest Builders. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px]">
              24 Architecture Avenue, T. Nagar, Chennai 600017
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] hover:bg-[#4B1428]/20 text-[var(--text-primary)] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
