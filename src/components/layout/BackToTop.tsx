"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const SHOW_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SHOW_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  }, [shouldReduceMotion]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label="Kembali ke atas halaman"
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? 0 : -1}
      className={cn(
        // Position — sits above WhatsApp button
        "fixed bottom-24 right-6 z-40",
        // Size & shape
        "inline-flex items-center justify-center h-10 w-10 rounded-full",
        // Colours
        "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
        "border border-[var(--color-border)]",
        "shadow-[var(--shadow-sm)]",
        // Hover
        "hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)]",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
        // Transition
        "transition-all duration-[var(--duration-slow)]",
        // Visibility
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}