/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Check, Sparkles, MapPin, Maximize2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/companyData.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onEnquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onEnquireAboutProject
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Reset selected image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || project.mainImage;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop (Click to close) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#242124]/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="relative w-full max-w-4xl bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-sm shadow-2xl overflow-hidden text-[var(--text-primary)] my-6"
          >
            {/* Top Navigation Bar with Back & Close Controls */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-color)]">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] hover:bg-[#4B1428]/15 text-xs uppercase tracking-widest font-mono text-[var(--text-secondary)] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Gallery</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
                  Architectural Concept
                </span>
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  aria-label="Close Project Details"
                  className="p-2 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] hover:bg-[#4B1428]/20 text-[var(--text-primary)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
              
              {/* Sample Concept Disclaimer Banner */}
              {project.isSampleConcept && (
                <div className="p-3 rounded-xs bg-[#4B1428]/15 border border-[#4B1428]/30 flex items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#4B1428] shrink-0" />
                    <span>
                      <strong>Sample Architectural Concept:</strong> Illustrative 3D visualization pending final project photography from UrbanNest Builders.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#4B1428] dark:text-[#E8A5BC] font-semibold shrink-0">
                    Concept
                  </span>
                </div>
              )}

              {/* Main Active Project Image */}
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#242124] border border-[var(--border-color)]">
                <img
                  src={currentImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-md rounded-xs text-[10px] font-mono text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>View {activeImageIndex + 1} of {project.gallery.length}</span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {project.gallery.length > 1 && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-2">
                    Gallery Views:
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {project.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-[4/3] rounded-xs overflow-hidden border transition-all ${
                          activeImageIndex === idx
                            ? 'border-[#4B1428] ring-2 ring-[#4B1428]/40 scale-102'
                            : 'border-[var(--border-color)] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Meta & Description */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--border-color)]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#4B1428] dark:text-[#E8A5BC] font-semibold">
                      {project.category}
                    </span>
                    <h2
                      id="modal-project-title"
                      className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)] mt-1"
                    >
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-mono">
                    <MapPin className="w-4 h-4 text-[#4B1428]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                      Built-up Area
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {project.builtArea}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                      Structure Type
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {project.type}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                      Design Discipline
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      CAD & 3D Drafting
                    </span>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="space-y-2 pt-2">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--text-primary)]">
                    Architectural Blueprint & Philosophy
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-2">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--text-primary)]">
                    Key Spatial Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] text-xs uppercase tracking-widest font-mono text-[var(--text-primary)] transition-colors"
                >
                  Close Window
                </button>

                <button
                  onClick={() => {
                    onEnquireAboutProject(project.title);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs shadow-lg transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enquire About Similar Design</span>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
