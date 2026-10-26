/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../utils/theme.ts';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
  showLabel = false
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-sm border focus:outline-none focus:ring-1 focus:ring-[#4B1428] ${
        isDark
          ? 'bg-[#242124]/80 text-[#F5F0E8] border-[#F5F0E8]/15 hover:border-[#4B1428] hover:bg-[#4B1428]/20'
          : 'bg-[#F5F0E8] text-[#242124] border-[#4B1428]/20 hover:border-[#4B1428] hover:bg-[#4B1428]/10'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[#F5F0E8]" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#4B1428]" />
      )}
      {showLabel && (
        <span className="font-medium text-[11px] tracking-wider">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
