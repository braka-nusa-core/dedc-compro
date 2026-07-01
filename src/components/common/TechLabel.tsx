/**
 * TechLabel — engineering annotation label.
 *
 * Used as subtle decorative context across section headers and page heroes.
 * Appears with a small engineering icon + code + sub-description.
 *
 * From the reference:
 *   AUTOCAD / 2D·3D DRAFTING
 *   PLANT 3D / PIPING DESIGN
 *   REVIT MEP / BIM WORKFLOW
 *   E3D / PLANT MODELING
 *
 * Usage:
 *   <TechLabel code="DWG-101" label="AUTOCAD" sub="2D / 3D DRAFTING" />
 *   <TechLabel code="BIM-204" label="REVIT MEP" sub="BIM WORKFLOW" />
 */

import { cn } from "@/lib/utils";

interface TechLabelProps {
  /** Engineering code reference — e.g. DWG-101, PL-302 */
  code?: string;
  /** Primary label — e.g. AUTOCAD, PLANT 3D */
  label: string;
  /** Sub-description — e.g. 2D / 3D DRAFTING */
  sub: string;
  className?: string;
}

export function TechLabel({ code, label, sub, className }: TechLabelProps) {
  return (
    <div
      className={cn("flex flex-col gap-0.5", className)}
      aria-hidden="true"
    >
      {code && (
        <span
          className="font-mono"
          style={{ fontSize: 8, letterSpacing: "0.14em", color: "rgba(60,100,180,0.4)" }}
        >
          {code}
        </span>
      )}
      <span
        className="font-mono font-semibold"
        style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(10,15,26,0.7)" }}
      >
        {label}
      </span>
      <span
        className="font-mono"
        style={{ fontSize: 8, letterSpacing: "0.1em", color: "rgba(100,120,150,0.65)" }}
      >
        {sub}
      </span>
    </div>
  );
}

// ─── Preset program labels matching the reference image ───────────
export const PROGRAM_TECH_LABELS = [
  { code: "DWG-101", label: "AUTOCAD",   sub: "2D / 3D DRAFTING" },
  { code: "PL-302",  label: "PLANT 3D",  sub: "PIPING DESIGN"    },
  { code: "BIM-204", label: "REVIT MEP", sub: "BIM WORKFLOW"      },
  { code: "E3D-001", label: "E3D",       sub: "PLANT MODELING"    },
] as const;