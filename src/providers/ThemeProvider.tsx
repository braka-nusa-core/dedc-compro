"use client";

import React from "react";

// DEDC is light-only. This provider exists as an architectural placeholder
// so ThemeProvider can be swapped for next-themes if dark mode is ever needed.
// For now it simply enforces light mode and passes children through.

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div data-theme="light" className="contents">
      {children}
    </div>
  );
}
