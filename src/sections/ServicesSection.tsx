/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData.ts';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry
}) => {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
              <span className="text-[#4B1428] font-bold">04</span>
              <span>// Architectural Services</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Comprehensive Architectural & Building Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Every home starts with an exact blueprint. Explore our proposed service categories, designed to bring methodical clarity to every construction stage in Chennai.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[var(--bg-card)] border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-tertiary)] self-start md:self-end">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4B1428]" />
            <span>Draft Offerings — Subject to Client Review</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Architectural Service Image with Subtle Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#242124]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160F13] via-transparent to-black/30 opacity-70" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xs bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#F5F0E8]">
                    {service.category}
                  </div>

                  {/* Step Identifier */}
                  <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-[#F5F0E8]/70">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] group-hover:text-[#4B1428] dark:group-hover:text-[#E8A5BC] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <ul className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                    {service.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 text-[#4B1428] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Enquire Action */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => onSelectServiceForEnquiry(service.title)}
                  className="w-full group/btn inline-flex items-center justify-between px-4 py-2.5 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-card)] hover:bg-[#4B1428] text-[var(--text-primary)] hover:text-[#F5F0E8] font-display text-[11px] tracking-widest uppercase transition-all duration-300"
                >
                  <span>Enquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality & Transparency Guarantee Statement */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-display font-semibold text-sm sm:text-base text-[var(--text-primary)] uppercase tracking-wide">
                Our Commitment to Architectural Precision & Transparency
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We believe exceptional construction rests on meticulous drafting, structural honesty, and realistic material estimates — avoiding misleading promises and ensuring every rupee invested in your home is accounted for.
              </p>
            </div>
            <button
              onClick={() => onSelectServiceForEnquiry("General Building Consultation")}
              className="shrink-0 px-5 py-2.5 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs transition-colors shadow-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
