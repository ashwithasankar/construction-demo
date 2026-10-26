/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { SAMPLE_PROJECTS, ProjectItem } from '../data/companyData.ts';
import { ProjectModal } from '../components/ProjectModal.tsx';

interface ProjectsSectionProps {
  onEnquireAboutProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onEnquireAboutProject
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Residential Architecture', 'Traditional & Modern Fusion', 'Commercial Architecture'];

  const filteredProjects = filterCategory === 'all'
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
              <span className="text-[#4B1428] font-bold">06</span>
              <span>// Architectural Concepts</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Design Prototypes & Conceptual Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Explore sample architectural models exemplifying our approach to climate, spatial flow, and material harmony.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-xs text-[11px] font-mono uppercase tracking-wider transition-all ${
                  filterCategory === cat
                    ? 'bg-[#4B1428] text-[#F5F0E8] font-semibold'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[#4B1428]'
                }`}
              >
                {cat === 'all' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Explicit Sample Concept Banner */}
        <div className="mb-10 p-4 rounded-xs border border-[#4B1428]/30 bg-[#4B1428]/10 text-xs text-[var(--text-secondary)] flex items-center gap-3">
          <Compass className="w-5 h-5 text-[#4B1428] shrink-0" />
          <p>
            <strong className="text-[var(--text-primary)] font-semibold">Note on Project Photography:</strong> The projects displayed below represent sample architectural designs and 3D concepts. Authentic completed project photos from UrbanNest Builders will be updated upon final verification by the client.
          </p>
        </div>

        {/* Projects Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#4B1428] overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Main Image with Zoom on Hover */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#242124]">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xs bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#F5F0E8]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-xs bg-[#4B1428]/80 text-[#F5F0E8] text-[9px] font-mono uppercase tracking-wider">
                    Sample Concept
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F5F0E8] font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E8A5BC]" />
                      <span>{project.location}</span>
                    </div>
                    <span>{project.builtArea}</span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)] group-hover:text-[#4B1428] dark:group-hover:text-[#E8A5BC] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xs border border-[var(--border-color)] hover:border-[#4B1428] bg-[var(--bg-card)] hover:bg-[#4B1428] text-[var(--text-primary)] hover:text-[#F5F0E8] font-display text-xs tracking-widest uppercase transition-all duration-300"
                >
                  <span>Explore Project Blueprint</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquireAboutProject={onEnquireAboutProject}
      />
    </section>
  );
};
