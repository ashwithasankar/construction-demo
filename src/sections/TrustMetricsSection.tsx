/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, MapPin, Compass, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData.ts';

export const TrustMetricsSection: React.FC = () => {
  return (
    <section
      id="metrics"
      className="py-16 sm:py-24 bg-[var(--bg-primary)] transition-colors duration-300 relative arch-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
            <span className="text-[#4B1428] font-bold">03</span>
            <span>// Demo Metrics — Replace Before Launch</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Recognized by the Chennai Community
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Our reputation is built on authentic client feedback and engineering precision. We present only verified public metrics.
          </p>
        </div>

        {/* Demo metric cards — replace with confirmed client data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Metric 1: 5-Star Rating */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC]">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-4xl sm:text-5xl text-[var(--text-primary)] tracking-tight">
                  —<span className="text-xl sm:text-2xl text-[#4B1428] font-sans font-normal"> / 5</span>
                </div>
                <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-[var(--text-primary)] mt-2">
                  Reported Google Rating
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Consistent top-tier client ratings reflecting dedicated building design quality.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] flex items-center justify-between">
              <span>Client rating</span>
              <span className="text-[#4B1428] dark:text-[#E8A5BC]">★★★★★</span>
            </div>
          </motion.div>

          {/* Metric 2: client reviews */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#4B1428]/10 text-[#4B1428] dark:text-[#E8A5BC] font-semibold">
                  PUBLIC
                </span>
              </div>

              <div>
                <div className="font-display font-bold text-4xl sm:text-5xl text-[var(--text-primary)] tracking-tight">
                  —<span className="text-xl text-[#4B1428] font-sans font-normal">+</span>
                </div>
                <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-[var(--text-primary)] mt-2">
                  Reported Client Reviews
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Homeowners and plot developers who have experienced our planning and design guidance.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] flex items-center justify-between">
              <span>Review Count</span>
              <span className="text-[#4B1428] dark:text-[#E8A5BC]">Client reviews</span>
            </div>
          </motion.div>

          {/* Metric 3: Chennai Central Location */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                  PIN 600017
                </span>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                  Chennai
                </div>
                <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-[var(--text-primary)] mt-2">
                  T. Nagar Location
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Demo location: T. Nagar, Chennai. Replace this with the client’s verified location before launch.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] flex items-center justify-between">
              <span>Tamil Nadu, India</span>
              <a
                href={COMPANY_DETAILS.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B1428] dark:text-[#E8A5BC] hover:underline inline-flex items-center gap-1"
              >
                <span>View</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </motion.div>

          {/* Metric 4: Building Designer Category */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xs bg-[#4B1428]/15 flex items-center justify-center text-[#4B1428] dark:text-[#E8A5BC]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                  UrbanNest Team
                </span>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
                  Building Designer
                </div>
                <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-[var(--text-primary)] mt-2">
                  Business category
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Specialized architectural drafting, structural floor planning, and residential engineering advice.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[var(--border-color)] text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] flex items-center justify-between">
              <span>Discipline</span>
              <span className="text-[#4B1428] dark:text-[#E8A5BC]">Architecture & Planning</span>
            </div>
          </motion.div>

        </div>

        {/* Verification Guarantee Disclaimer */}
        <div className="mt-10 p-4 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-mono text-[var(--text-secondary)] leading-normal">
            <span className="font-bold text-[#4B1428] dark:text-[#E8A5BC]">Transparency Guarantee:</span> We do not fabricate years of operation, fictitious completion counts, or unverified awards. All ratings and business details are anchored in publicly verifiable records.
          </p>
        </div>

      </div>
    </section>
  );
};
