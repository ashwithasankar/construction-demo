/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Theme = 'dark' | 'light';

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('urbannest_theme') as Theme | null;
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  // Default to luxurious dark architectural theme
  return 'dark';
}

export function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.remove('theme-dark');
    root.classList.add('theme-light');
  } else {
    root.classList.remove('theme-light');
    root.classList.add('theme-dark');
  }
  localStorage.setItem('urbannest_theme', theme);
}
