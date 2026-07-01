/**
 * DimensionLine — engineering drawing dimension accent.
 *
 * Used as a visual separator or section accent across the site.
 * Never used as primary content. Always aria-hidden.
 *
 * Examples from reference: ←──────── 5200 ────────→
 *
 * Usage:
 *   <DimensionLine label="5200" />
 *   <DimensionLine label="SEC-A1" className="my-8" />
 */

import { cn } from "@/lib/utils";

interface DimensionLineProps {
  label?: string;
  className?: string;
  opacity?: number;
}

const BLUE = "rgba(60,100,180,0.30)";
const BLUE_TEXT = "rgba(60,100,180,0.55)";

export function DimensionLine({
  label = "5200",
  className,
  opacity = 1,
}: DimensionLineProps) {
  return (
    <div
      className={cn("flex items-center gap-0 w-full", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Left arrow */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div style={{
          width: 0, height: 0,
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          borderRight: `5px solid ${BLUE}`,
        }} />
        <div style={{ flex: 1, height: 1, background: BLUE }} />
      </div>

      {/* Label */}
      {label && (
        <span
          className="font-mono shrink-0 px-3"
          style={{ fontSize: 9, letterSpacing: "0.12em", color: BLUE_TEXT }}
        >
          {label}
        </span>
      )}

      {/* Right arrow */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <div style={{ flex: 1, height: 1, background: BLUE }} />
        <div style={{
          width: 0, height: 0,
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          borderLeft: `5px solid ${BLUE}`,
        }} />
      </div>
    </div>
  );
}