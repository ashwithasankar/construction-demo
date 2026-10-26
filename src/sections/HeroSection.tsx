/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Star, Layers, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData.ts';
import CircularCarousel from '../components/CircularCarousel.jsx';

interface HeroSectionProps {
  onNavigate: (href: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt coordinates on mousemove for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:py-28 arch-grid-pattern transition-colors duration-300 bg-[var(--bg-primary)]"
      style={{ perspective: '1200px' }}
    >
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/75 to-[var(--bg-primary)]/35" aria-hidden="true" />
      {/* Deep Maroon & Charcoal Ambient Lighting Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full pointer-events-none blur-[140px] opacity-25 dark:opacity-40 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, #4B1428 0%, rgba(36, 33, 36, 0.4) 60%, transparent 100%)',
          transform: `translate(-50%, -50%) translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 0)`
        }}
        aria-hidden="true"
      />

      {/* Subtle Architectural Corner Coordinates / Blueprint Accents */}
      <div className="absolute top-24 left-6 sm:left-12 pointer-events-none hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono text-[var(--text-tertiary)] opacity-60">
        <Compass className="w-3.5 h-3.5 text-[#4B1428]" />
        <span>CHENNAI // 13.0418° N, 80.2341° E</span>
      </div>
      <div className="absolute bottom-8 right-6 sm:right-12 pointer-events-none hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] font-mono text-[var(--text-tertiary)] opacity-60">
        <Layers className="w-3.5 h-3.5 text-[#4B1428]" />
        <span>STRUCTURAL DRAFTING // ELEVATION 1:100</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-3 xl:gap-6 items-center">
          
          {/* Left Column: Brand & Editorial Headline (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 text-left space-y-5 sm:space-y-7"
          >
            {/* Demo Brand Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs border border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-sm text-[var(--text-secondary)] shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#4B1428] animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[var(--text-primary)]">
                UrbanNest Team
              </span>
              <span className="text-[11px] text-[var(--text-tertiary)]">•</span>
              <span className="text-[11px] tracking-wide uppercase text-[var(--text-tertiary)]">
                Building Designer
              </span>
            </motion.div>

            {/* Main Brand Title & Headline */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-[#4B1428] dark:text-[#E8A5BC] font-semibold"
              >
                UrbanNest Builders
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[var(--text-primary)]"
              >
                Crafting Enduring Spaces with{' '}
                <span className="italic font-serif-luxury text-[#4B1428] dark:text-[#F5F0E8] underline decoration-[#4B1428]/40 decoration-1 underline-offset-8">
                  Architectural
                </span>{' '}
                Precision.
              </motion.h1>
            </div>

            {/* Subtitle Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-normal"
            >
              Thoughtful residential planning, structural design, and construction consultation rooted in Chennai, Tamil Nadu. Translating your family vision into durable, climate-responsive structures.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('#contact')}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs shadow-lg transition-all duration-300 hover:shadow-[#4B1428]/40 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('#projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-secondary)] hover:bg-[#4B1428]/15 text-[var(--text-primary)] font-display text-xs tracking-widest uppercase rounded-xs transition-all duration-300"
              >
                <span>Explore Our Work</span>
              </button>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[var(--text-secondary)]"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[var(--text-primary)]">5.0 Star Rating</span>
                <span className="text-[var(--text-tertiary)]">({COMPANY_DETAILS.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4B1428]" />
                <span>Chennai Central</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4B1428]" />
                <span>Verified Business</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D architectural carousel, placed beside the hero copy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 relative min-w-0 w-full lg:-mr-8 xl:-mr-12"
          >
            <div className="relative h-[360px] sm:h-[470px] lg:h-[590px] w-full overflow-visible bg-[radial-gradient(ellipse_at_center,rgba(91,35,54,0.30),transparent_68%)]">
              <div className="absolute inset-x-[3%] top-[10%] bottom-[12%] rounded-full border border-[#C88A66]/10 pointer-events-none" />
              <div className="absolute inset-x-[2%] bottom-[12%] h-[27%] rounded-[50%] border border-[#D99A70]/70 shadow-[0_0_28px_rgba(217,154,112,0.28)] pointer-events-none" />
              <CircularCarousel
                items={[
                  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1100&q=82&auto=format&fit=crop', alt: 'Modern luxury home exterior', title: 'Modern Homes', subtitle: 'Residential' },
                  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=82&auto=format&fit=crop', alt: 'Premium villa architecture', title: 'Premium Villas', subtitle: 'Architecture' },
                  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1100&q=82&auto=format&fit=crop', alt: 'Contemporary living space', title: 'Interiors', subtitle: 'Design' },
                  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1100&q=82&auto=format&fit=crop', alt: 'Contemporary residential building', title: 'Apartments', subtitle: 'Residential' },
                  { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1100&q=82&auto=format&fit=crop', alt: 'Architectural details of a modern home', title: 'Design Details', subtitle: 'Craft' }
                ]}
                preset="cylinder"
                intro="rise"
                cardWidth={360}
                aspectRatio={1.12}
                speed={7}
                captions={true}
                gap={20}
                tilt={-4}
                curve={0.9}
                perspective={2400}
                autoplay="drift"
                direction="left"
                momentum={0.45}
                snap
                pauseOnHover
                focusOnClick
                draggable
                parallax={0.18}
                stretch={0.25}
                fadeColor="#160F13"
                depthFade={0.58}
                innerShade={0.42}
                cornerRadius={12}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#6E3B4B]/60 bg-[var(--bg-primary)]/90 px-4 py-2 text-[9px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--text-tertiary)] backdrop-blur-md">
                Architecture · Chennai · Built to Last
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
