/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, Phone, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS } from '../data/companyData.ts';
import { ThemeToggle } from './ThemeToggle.tsx';
import { Theme } from '../utils/theme.ts';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenDrawer: () => void;
  onNavigate: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenDrawer,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-lg py-3'
          : 'bg-transparent py-4 sm:py-5 border-b border-[var(--border-color)]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Drawer Trigger + Brand Monogram */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDrawer}
              aria-label="Open Navigation Menu"
              className="group flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-sm border border-[var(--border-color)] hover:border-[#4B1428] hover:bg-[#4B1428]/20 text-[var(--text-primary)] transition-all"
            >
              <Menu className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline-block text-[11px] font-display uppercase tracking-widest text-[var(--text-secondary)]">
                Menu
              </span>
            </button>

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-[#4B1428] text-[#F5F0E8] flex items-center justify-center font-display font-bold text-base sm:text-lg tracking-widest shadow-md transition-transform group-hover:scale-105">
                AC
              </div>
              <div>
                <span className="font-display font-bold text-sm sm:text-base tracking-widest uppercase block text-[var(--text-primary)]">
                  UrbanNest
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--text-tertiary)] block">
                  Construction • Chennai
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <button
                key={link.href}
                onClick={() => onNavigate(link.href)}
                className="text-xs uppercase tracking-widest font-medium text-[var(--text-secondary)] hover:text-[#4B1428] dark:hover:text-[#F5F0E8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#4B1428] hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              aria-label={`Call ${COMPANY_DETAILS.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[#4B1428] dark:hover:text-[#F5F0E8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4B1428]" />
              <span className="hidden xl:inline">{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#4B1428] hover:bg-[#631C37] text-[#F5F0E8] text-[11px] sm:text-xs font-display tracking-widest uppercase rounded-xs shadow-md transition-all duration-300 hover:shadow-[#4B1428]/30 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3 h-3 text-[#F5F0E8]/70" />
              <span>Start Project</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
