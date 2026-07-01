/**
 * EngineeringGrid — DEDC signature background element.
 *
 * Appears on ALL pages. The two-scale blueprint grid is the primary
 * visual identifier of the DEDC design language.
 *
 * Usage:
 *   <EngineeringGrid />                    — full-bleed, absolute
 *   <EngineeringGrid variant="subtle" />   — reduced opacity
 *   <EngineeringGrid className="..." />    — custom positioning
 */

import { cn } from "@/lib/utils";

interface EngineeringGridProps {
  /** "default" = 2–4% opacity · "subtle" = 1–2% · "section" = anchored to parent section */
  variant?: "default" | "subtle" | "section";
  className?: string;
}

export function EngineeringGrid({
  variant = "default",
  className,
}: EngineeringGridProps) {
  const minorOpacity = variant === "subtle" ? 0.018 : 0.032;
  const majorOpacity = variant === "subtle" ? 0.032 : 0.055;

  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Minor grid — 40px */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,${minorOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60,100,180,${minorOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Major grid — 160px */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,${majorOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60,100,180,${majorOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}