/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS } from '../data/companyData.ts';
import { ThemeToggle } from './ThemeToggle.tsx';
import { Theme } from '../utils/theme.ts';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onNavigate: (href: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  theme,
  onToggleTheme,
  onNavigate
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      // Handle Escape key
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
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (clicking outside closes drawer) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#242124]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Left-Side Architectural Navigation Drawer */}
          <motion.aside
            ref={drawerRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Drawer"
            className="fixed top-0 bottom-0 left-0 z-50 w-[80vw] max-w-md h-full flex flex-col justify-between overflow-y-auto border-r transition-colors duration-300 shadow-2xl bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)]"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#4B1428] flex items-center justify-center text-[#F5F0E8] font-display font-bold text-lg tracking-widest shadow-md">
                    AC
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-sm tracking-wider uppercase text-[var(--text-primary)]">
                      UrbanNest
                    </h2>
                    <p className="text-[10px] tracking-widest uppercase text-[var(--text-tertiary)]">
                      Construction
                    </p>
                  </div>
                </div>

                {/* Visible Close Button */}
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-sm border border-[var(--border-color)] hover:border-[#4B1428] hover:bg-[#4B1428]/20 text-[var(--text-primary)] transition-colors focus:outline-none focus:ring-1 focus:ring-[#4B1428]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="p-6 space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-4 px-2">
                  Directory
                </p>
                {NAV_LINKS.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      onNavigate(link.href);
                      onClose();
                    }}
                    className="w-full group flex items-center justify-between px-3 py-3 rounded-sm text-left font-display text-sm tracking-wider uppercase hover:bg-[#4B1428]/15 hover:text-[#4B1428] dark:hover:text-[#F5F0E8] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-sans text-[var(--text-tertiary)] group-hover:text-[#4B1428] dark:group-hover:text-[#F5F0E8]">
                        0{index + 1}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Quick Contacts & Theme */}
            <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-color)]">
                <span className="text-xs uppercase tracking-wider text-[var(--text-tertiary)]">
                  Appearance
                </span>
                <ThemeToggle theme={theme} onToggle={onToggleTheme} showLabel />
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-[#4B1428]/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#4B1428]" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={COMPANY_DETAILS.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-[#4B1428]/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#4B1428]" />
                  <span>WhatsApp Enquiries</span>
                </a>
                <a
                  href={COMPANY_DETAILS.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-2 rounded-sm hover:bg-[#4B1428]/20 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#4B1428] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">Chennai, Tamil Nadu</span>
                </a>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onNavigate('#contact');
                  onClose();
                }}
                className="w-full py-3 px-4 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] font-display text-xs tracking-widest uppercase text-center rounded-sm shadow-md transition-colors"
              >
                Start Your Project
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
