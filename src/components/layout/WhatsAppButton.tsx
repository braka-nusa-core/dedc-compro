"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWAUrl } from "@/lib/whatsapp";

const SHOW_DELAY_MS = 2000;

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const waUrl = buildWAUrl("final-cta");

  // Show after a short delay — avoids competing with hero CTA on first load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp (tab baru)"
      className={cn(
        "fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-6 z-50",
        // Size & shape
        "inline-flex items-center justify-center h-14 w-14 rounded-full",
        // WhatsApp brand colour
        "bg-[#25D366] text-white",
        // Shadow
        "shadow-[var(--shadow-lg)]",
        // Hover
        "hover:bg-[#1DA851] hover:shadow-[0_8px_32px_0_rgba(37,211,102,0.35)] hover:scale-105",
        // Focus
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2",
        // Transition
        "transition-all duration-[var(--duration-slow)]",
        // Mount animation
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}