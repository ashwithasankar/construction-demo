/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { STRATEGY_STEPS, StrategyStep } from '../data/companyData.ts';

interface StrategySectionProps {
  onNavigate: (href: string) => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="strategy"
      className="py-20 sm:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-300 relative arch-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
            <span className="text-[#4B1428] font-bold">05</span>
            <span>// Construction Strategy</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
            Our Four-Stage Architectural Methodology
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            A methodical roadmap guiding projects from initial sketch to structural completion. (Proposed execution workflow subject to confirmation with business owner).
          </p>
        </div>

        {/* Desktop Connected Progress Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative mb-12">
          {/* Subtle Horizontal Connecting Axis Line */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[var(--border-color)] -translate-y-12 z-0" />

          {STRATEGY_STEPS.map((step: StrategyStep, index: number) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer relative z-10 p-6 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[var(--bg-surface)] border-[#4B1428] shadow-xl ring-1 ring-[#4B1428]/40 -translate-y-1'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[#4B1428]/50 hover:bg-[var(--bg-surface)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-9 h-9 rounded-xs flex items-center justify-center font-display font-bold text-xs tracking-wider transition-colors ${
                        isSelected
                          ? 'bg-[#4B1428] text-[#F5F0E8]'
                          : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)] block mb-1">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((item, dIndex) => (
                    <div key={dIndex} className="flex items-center gap-1.5 text-[11px] text-[var(--text-secondary)]">
                      <ChevronRight className="w-3 h-3 text-[#4B1428] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Connected Accordion & Cards */}
        <div className="lg:hidden space-y-4 mb-10">
          {STRATEGY_STEPS.map((step: StrategyStep, index: number) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-sm border transition-all ${
                  isSelected
                    ? 'bg-[var(--bg-surface)] border-[#4B1428] shadow-md'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-xs">
                      {step.step}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] block">
                        {step.number}
                      </span>
                      <h3 className="font-display font-semibold text-sm text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-[#4B1428] transition-transform ${
                      isSelected ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-4 mt-3 border-t border-[var(--border-color)] space-y-3"
                  >
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                        Key Deliverables:
                      </p>
                      {step.deliverables.map((item, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3 h-3 text-[#4B1428] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout Action */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('#contact')}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Discuss Your Project Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
