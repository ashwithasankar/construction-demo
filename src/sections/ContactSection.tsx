/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ExternalLink,
  Sparkles,
  Building,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_DETAILS } from '../data/companyData.ts';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential House Planning',
    location: 'Chennai',
    requirements: '',
    honeypot: '' // Spam bot trap
  });

  const [formRenderedAt, setFormRenderedAt] = useState<number>(Date.now());
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ id?: string; message: string; whatsappUrl?: string } | null>(null);
  const [databaseOfflineFallback, setDatabaseOfflineFallback] = useState<{ url: string; error: string } | null>(null);

  // Sync initial project type if passed from service/portfolio click
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
    setFormRenderedAt(Date.now());
  }, [initialProjectType]);

  const projectTypeOptions = [
    'Residential House Planning',
    'Architectural Building Design & CAD',
    'Architectural & Technical Consultation',
    'Construction Planning & BOQ Estimation',
    'Commercial Building Design',
    'Renovation & Elevation Modernization'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors on edit
    if (errorMsg) setErrorMsg(null);
    if (databaseOfflineFallback) setDatabaseOfflineFallback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessInfo(null);
    setDatabaseOfflineFallback(null);

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/[\s-]/g, '');
    const phonePattern = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phonePattern.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number (e.g. 90000 00000).');
      return;
    }

    if (formData.email.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        setErrorMsg('Please enter a valid email address, or leave it blank.');
        return;
      }
    }

    if (!formData.requirements.trim() || formData.requirements.trim().length < 5) {
      setErrorMsg('Please provide a brief description of your project (at least 5 characters).');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          phone: cleanPhone,
          renderedAt: formRenderedAt
        })
      });

      const data = await res.json();

      if (res.status === 201 && data.success) {
        // Confetti celebration for successful DB write
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4B1428', '#F5F0E8', '#E8A5BC']
        });

        setSuccessInfo({
          id: data.id,
          message: data.message,
          whatsappUrl: data.whatsappUrl
        });

        // Reset fields
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: 'Residential House Planning',
          location: 'Chennai',
          requirements: '',
          honeypot: ''
        });
      } else if (res.status === 503 || data.databaseOffline) {
        // Database offline or unconfigured
        setDatabaseOfflineFallback({
          url: data.whatsappFallbackUrl || COMPANY_DETAILS.whatsAppLink,
          error: data.error || 'MongoDB storage is currently unconfigured or offline.'
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit enquiry. Please try again or message via WhatsApp.');
      }
    } catch (err: any) {
      // Network/server down fallback
      const waFallback = `https://wa.me/919000000000?text=${encodeURIComponent(
        `Hello UrbanNest Team, I would like to enquire about ${formData.projectType} in ${formData.location}. Name: ${formData.name}, Phone: ${formData.phone}. Requirements: ${formData.requirements}`
      )}`;
      setDatabaseOfflineFallback({
        url: waFallback,
        error: 'Backend API connection failed. You can send this enquiry directly to WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-tertiary)] text-[10px] uppercase tracking-[0.25em] font-mono">
            <span className="text-[#4B1428] font-bold">08</span>
            <span>// Start Your Project</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
            Consultation & Project Enquiry
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Begin the dialogue with UrbanNest Team. Submit your building parameters below or reach out directly over telephone or WhatsApp.
          </p>
        </div>

        {/* Two-Column Grid: Left Contacts, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contacts & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl space-y-6">
              
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] uppercase tracking-wide">
                  Demo Contact Details
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Connect directly with the construction team in Chennai.
                </p>
              </div>

              {/* Direct Telephone */}
              <div className="p-4 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#4B1428] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] block">
                      Direct Phone Call
                    </span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="font-mono font-bold text-sm sm:text-base text-[var(--text-primary)] hover:text-[#4B1428] dark:hover:text-[#E8A5BC] transition-colors"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Call for instant appointment scheduling.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="p-4 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#4B1428] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] block">
                      WhatsApp Messaging
                    </span>
                    <a
                      href={COMPANY_DETAILS.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-display text-xs tracking-wider uppercase text-[#4B1428] dark:text-[#E8A5BC] font-semibold hover:underline mt-0.5"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
                      Share site sketches, plot sizes, and reference photos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-4 rounded-xs border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#4B1428] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] block">
                      Office Address
                    </span>
                    <p className="text-xs text-[var(--text-primary)] mt-0.5 leading-relaxed">
                      {COMPANY_DETAILS.address}
                    </p>
                    <a
                      href={COMPANY_DETAILS.mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#4B1428] dark:text-[#E8A5BC] hover:underline inline-flex items-center gap-1 mt-1 font-mono"
                    >
                      <span>Find on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Note on data security */}
              <div className="pt-2 text-[11px] font-mono text-[var(--text-tertiary)] flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#4B1428] shrink-0" />
                <span>Your contact details are strictly used for project communication.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-sm bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xl relative">
              
              <div className="mb-6 border-b border-[var(--border-color)] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4B1428] dark:text-[#E8A5BC] font-semibold block mb-1">
                  Online Registration
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                  Submit Project Details
                </h3>
              </div>

              {/* Honeypot field (hidden from genuine users, traps spam bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
                aria-hidden="true"
              />

              {/* Success Alert */}
              <AnimatePresence>
                {successInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xs border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 space-y-2 text-xs"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Enquiry Registered Successfully</span>
                    </div>
                    <p className="text-emerald-200/90 leading-relaxed">
                      {successInfo.message}
                    </p>
                    {successInfo.id && (
                      <p className="font-mono text-[10px] text-emerald-400/80">
                        Reference ID: {successInfo.id}
                      </p>
                    )}
                    {successInfo.whatsappUrl && (
                      <a
                        href={successInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white underline pt-1 font-mono"
                      >
                        <span>Also copy message to WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Database Offline Fallback Notice (Strict Requirement) */}
              <AnimatePresence>
                {databaseOfflineFallback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xs border border-amber-600/40 bg-amber-950/25 text-amber-200 space-y-3 text-xs"
                  >
                    <div className="flex items-center gap-2 font-semibold text-amber-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Database Storage Notice & Instant Alternative</span>
                    </div>
                    <p className="leading-relaxed">
                      {databaseOfflineFallback.error}
                    </p>
                    <p className="text-[11px] text-amber-200/80">
                      We never falsely claim an enquiry was saved when the database is unavailable. Your inputs have been pre-formatted for direct transmission:
                    </p>
                    <a
                      href={databaseOfflineFallback.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-wider uppercase rounded-xs transition-colors shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp (+91 90000 00000)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-3 rounded-xs border border-rose-500/40 bg-rose-950/20 text-rose-300 text-xs flex items-center gap-2"
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                    >
                      Your Full Name <span className="text-[#4B1428] dark:text-[#E8A5BC] font-bold">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g., S. Vignesh"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs placeholder:text-[var(--text-tertiary)] transition-colors focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-phone"
                      className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                    >
                      Phone Number <span className="text-[#4B1428] dark:text-[#E8A5BC] font-bold">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g., 90000 00000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs font-mono placeholder:text-[var(--text-tertiary)] transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Email (Optional) & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-email"
                      className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                    >
                      Email Address <span className="text-[10px] text-[var(--text-tertiary)] normal-case">(Optional)</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      placeholder="e.g., client@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs placeholder:text-[var(--text-tertiary)] transition-colors focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="form-location"
                      className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                    >
                      Plot / Project Location <span className="text-[#4B1428] dark:text-[#E8A5BC] font-bold">*</span>
                    </label>
                    <input
                      id="form-location"
                      type="text"
                      name="location"
                      required
                      placeholder="e.g., Chennai, Thanjavur"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs placeholder:text-[var(--text-tertiary)] transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="form-project-type"
                    className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                  >
                    Project Category <span className="text-[#4B1428] dark:text-[#E8A5BC] font-bold">*</span>
                  </label>
                  <select
                    id="form-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs transition-colors focus:outline-none cursor-pointer"
                  >
                    {projectTypeOptions.map((type) => (
                      <option key={type} value={type} className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Requirements */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="form-requirements"
                    className="block text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]"
                  >
                    Brief Project Requirements <span className="text-[#4B1428] dark:text-[#E8A5BC] font-bold">*</span>
                  </label>
                  <textarea
                    id="form-requirements"
                    name="requirements"
                    rows={4}
                    required
                    placeholder="Tell us about your plot dimensions, approximate square footage, number of floors, or specific architectural questions..."
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[var(--border-color)] focus:border-[#4B1428] bg-[var(--input-bg)] text-[var(--text-primary)] text-xs placeholder:text-[var(--text-tertiary)] transition-colors focus:outline-none resize-y leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group inline-flex items-center justify-center gap-3 py-3.5 px-6 bg-[#4B1428] hover:bg-[#631C37] disabled:opacity-60 text-[#F5F0E8] font-display text-xs tracking-widest uppercase rounded-xs transition-all duration-300 shadow-md hover:shadow-[#4B1428]/40"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#F5F0E8]" />
                        <span>Verifying & Recording...</span>
                      </>
                    ) : (
                      <>
                        <span>Start Your Project</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Alternative Link */}
                <div className="text-center pt-2">
                  <span className="text-[11px] text-[var(--text-tertiary)]">
                    Prefer immediate messaging?{' '}
                  </span>
                  <a
                    href={COMPANY_DETAILS.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#4B1428] dark:text-[#E8A5BC] hover:underline"
                  >
                    Chat directly on WhatsApp (+91 90000 00000)
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
