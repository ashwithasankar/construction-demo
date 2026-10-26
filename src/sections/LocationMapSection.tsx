/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, ExternalLink, Clock, Building2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData.ts';

export const LocationMapSection: React.FC = () => {
  const [mapError, setMapError] = useState(false);

  const embedUrl = `https://maps.google.com/maps?q=UrbanNest%20Builders%2C%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=UrbanNest%20Builders%2C%20Chennai`;

  return (
    <section
      id="location"
      className="py-20 sm:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300 relative arch-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
            <span className="text-[#4B1428] font-bold">07</span>
            <span>// Office Location & Maps</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
            Visit Our Studio in Chennai
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Located in T. Nagar, Chennai (demo address). Schedule an in-person blueprint consultation or drop by during regular office hours.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="border-b border-[var(--border-color)] pb-5">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#4B1428] dark:text-[#E8A5BC] font-semibold mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Planning & Design Practice</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                  UrbanNest Builders
                </h3>
                <p className="text-xs font-mono text-[var(--text-tertiary)] mt-0.5">
                  UrbanNest Team • Building Designer
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs text-[var(--text-secondary)]">
                <div className="w-9 h-9 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wide text-[11px] mb-0.5">
                    Studio Address
                  </h4>
                  <p className="leading-relaxed">
                    {COMPANY_DETAILS.address}
                  </p>
                  <span className="text-[10px] font-mono text-[var(--text-tertiary)] block mt-1">
                    Landmark: T. Nagar
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 text-xs text-[var(--text-secondary)]">
                <div className="w-9 h-9 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wide text-[11px] mb-0.5">
                    Direct Telephone
                  </h4>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="font-mono text-[var(--text-primary)] hover:text-[#4B1428] dark:hover:text-[#E8A5BC] transition-colors block text-sm"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">
                    Available for consultations & site queries
                  </span>
                </div>
              </div>

              {/* Consulting Hours */}
              <div className="flex items-start gap-3.5 text-xs text-[var(--text-secondary)]">
                <div className="w-9 h-9 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] uppercase tracking-wide text-[11px] mb-0.5">
                    Consultation Hours
                  </h4>
                  <p className="font-mono">Monday – Saturday: 9:00 AM – 7:30 PM</p>
                  <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">
                    Sunday by appointment
                  </span>
                </div>
              </div>
            </div>

            {/* Links and Directions CTA */}
            <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs transition-colors shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={COMPANY_DETAILS.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-card)] text-[var(--text-primary)] font-display text-xs tracking-widest uppercase rounded-xs transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Map Container (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-sm overflow-hidden border border-[var(--border-color)] shadow-xl relative min-h-[360px] sm:min-h-[440px] bg-[var(--bg-surface)] flex flex-col"
          >
            {!mapError ? (
              <iframe
                title="UrbanNest Builders Chennai Location Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px', flex: 1 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapError(true)}
                className="filter contrast-[1.05] grayscale-[0.25]"
              />
            ) : (
              /* Fallback if iframe fails to load */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4 bg-[var(--bg-secondary)]">
                <MapPin className="w-12 h-12 text-[#4B1428]" />
                <h4 className="font-display font-semibold text-lg text-[var(--text-primary)]">
                  Map View Available on Google Maps
                </h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm">
                  The embedded preview could not be displayed in your browser. Click below to open UrbanNest Team UrbanNest Builders on Google Maps.
                </p>
                <a
                  href={COMPANY_DETAILS.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B1428] text-[#F5F0E8] font-display text-xs uppercase tracking-widest rounded-xs"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Bottom Map Bar */}
            <div className="p-3 bg-[var(--bg-primary)] border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
              <span>UrbanNest Builders UrbanNest Builders, Chennai</span>
              <a
                href={COMPANY_DETAILS.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B1428] dark:text-[#E8A5BC] hover:underline"
              >
                View Larger Map
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
