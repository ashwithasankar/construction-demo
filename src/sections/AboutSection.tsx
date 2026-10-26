/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Building, FileText, Ruler } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData.ts';

interface AboutSectionProps {
  onNavigate: (href: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 relative bg-[var(--bg-secondary)] border-t border-b border-[var(--border-color)] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center sm:text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono mb-3">
            <span className="text-[#4B1428] font-bold">02</span>
            <span>// About UrbanNest Builders</span>
          </div>
        </div>

        {/* Two-Column Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Logo + Architectural Blueprint Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Frame */}
            <div className="relative rounded-sm p-4 bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl">
              
              {/* Construction Company Monogram / Emblem */}
              <div className="mb-4 pb-4 border-b border-[var(--border-color)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-xl rounded-xs shadow-md">
                    AC
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[var(--text-primary)]">
                      UrbanNest Builders
                    </h3>
                    <p className="text-[10px] tracking-widest uppercase font-mono text-[var(--text-tertiary)]">
                      UrbanNest Team • Chennai
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#4B1428] dark:text-[#E8A5BC] font-semibold block">
                    Verified
                  </span>
                  <span className="text-[9px] text-[var(--text-tertiary)] block">
                    Building Designer
                  </span>
                </div>
              </div>

              {/* Architectural Elevation Image */}
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden bg-[#242124]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                  alt="Architectural Blueprint and Elevation Planning - UrbanNest Builders"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Image caption badge */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#F5F0E8] bg-black/60 backdrop-blur-md px-3 py-2 rounded-xs border border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider">Chennai Planning Studio</span>
                  <span className="text-[9px] font-mono uppercase text-[#F5F0E8]/70">CAD & Blueprints</span>
                </div>
              </div>

              {/* Verified Location Bar */}
              <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-secondary)] font-mono">
                <span>24 Architecture Avenue, T. Nagar</span>
                <span className="text-[#4B1428] dark:text-[#E8A5BC]">PIN: 600017</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#4B1428] dark:text-[#E8A5BC] font-medium mb-2">
                Engineering Integrity & Spatial Clarity
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] leading-tight">
                Designing Homes That Stand the Test of Time in Chennai.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Based in T. Nagar, <strong className="text-[var(--text-primary)] font-semibold">UrbanNest Builders</strong> is a dedicated building design and construction practice headed by <strong className="text-[var(--text-primary)] font-semibold">UrbanNest Team</strong>. We specialize in transforming individual client requirements into technically rigorous, aesthetically elevated architectural blueprints.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Whether conceptualizing a multi-generational residential home, planning a modern commercial storefront, or seeking engineering consultation on structural durability, our approach prioritizes climate-responsive layouts, natural daylighting, and straightforward communication.
            </p>

            {/* Offerings To Confirm With Business Owner */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
                  Primary Offerings (Draft Services for Client Confirmation)
                </span>
                <span className="text-[10px] font-mono text-[#4B1428] dark:text-[#E8A5BC] bg-[#4B1428]/10 px-2 py-0.5 rounded-xs">
                  Editable Draft
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide">
                      House Planning & Layouts
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Vastu-compliant, custom 2D floor plans and 3D elevations.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-3">
                  <Ruler className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide">
                      Architectural Consultation
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Plot feasibility, soil review, and structural guidance.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide">
                      Construction Planning & BOQ
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Transparent material estimates and execution schedules.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide">
                      Site Quality Coordination
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Critical stage inspection from foundation to slab completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('#contact')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Speak with UrbanNest Team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-card)] text-[var(--text-primary)] font-display text-xs tracking-widest uppercase rounded-xs transition-colors"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
