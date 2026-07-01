import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import type { WAContext } from "@/lib/whatsapp";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

interface CTASectionProps {
  overline?:      string;
  title:          string;
  accentWord?:    string;
  subtitle?:      string;
  primaryLabel?:  string;
  secondaryLabel?: string;
  secondaryHref?: string;
  waContext?:     WAContext;
  programName?:   string;
  code?:          string;
  output?:        string;
  className?:     string;
}

export function CTASection({
  overline      = "NEXT STORY",
  title,
  accentWord,
  subtitle,
  primaryLabel  = "Mulai Konsultasi Program",
  secondaryLabel = "Lihat Program",
  secondaryHref = "/programs",
  waContext     = "final-cta",
  programName,
  code          = "EL+2500",
  output        = "INDUSTRY READY ENGINEER",
  className,
}: CTASectionProps) {

  // Build title with single optional green accent
  const titleContent = (() => {
    if (!accentWord) return title;
    const idx = title.indexOf(accentWord);
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span style={{ color: GREEN }}>{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  })();

  return (
    <section
      className={cn("relative w-full overflow-hidden", className)}
      style={{ background: BG }}
      aria-labelledby="cta-heading"
    >
      {/*
        GRID — top-left corner only, ~20% coverage.
        Fades right and down before reaching content.
        Identical philosophy to TailwindCSS hero grid treatment.
      */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        style={{ top: 0, left: 0, width: "24%", height: "40%" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.034) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.034) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Right fade */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to right,transparent 0%,${BG} 75%)`,
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,transparent 0%,${BG} 78%)`,
        }} />
      </div>

      {/* Content — single centred column */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: 900,
          paddingLeft:  "2rem",
          paddingRight: "2rem",
          paddingTop:   "clamp(5rem,10vw,8.75rem)",
          paddingBottom:"clamp(5rem,10vw,8.75rem)",
          gap: "2.25rem",
        }}
      >

        {/*
          OVERLINE — engineering reference + hairline.
          The line extends rightward from the label,
          terminating with a vertical tick.
          This is the same structural grammar used throughout
          the site: the label is secondary to the line.
        */}
        <div
          className="flex items-center gap-0"
          aria-hidden="true"
        >
          <span
            className="font-mono shrink-0 pr-5"
            style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}
          >
            {overline}
          </span>
          <div style={{ width: 56, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </div>

        {/*
          HEADLINE — the emotional centrepiece.
          Large, unhurried, centred.
          clamp() scales fluidly — no breakpoint jumps.
          One accent word in green. Nothing else.
          max 10ch forces multi-line editorial break.
        */}
        <h2
          id="cta-heading"
          className="font-heading font-bold"
          style={{
            fontSize: "clamp(2.75rem,5vw,4.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: INK,
            maxWidth: "20ch",
          }}
        >
          {titleContent}
        </h2>

        {/* Subtitle — calm, no urgency, max 42ch */}
        {subtitle && (
          <p
            className="font-body"
            style={{
              fontSize: "clamp(1rem,1.5vw,1.125rem)",
              lineHeight: 1.8,
              color: "#52606D",
              maxWidth: "42ch",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA pair */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
          {/* Primary — solid green */}
          <Button variant="whatsapp" size="lg" asChild>
            <WhatsAppLink
              context={waContext}
              programName={programName}
              ariaLabel={`${primaryLabel} via WhatsApp (tab baru)`}
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              {primaryLabel}
            </WhatsAppLink>
          </Button>

          {/* Secondary — underlined text only, no button chrome */}
          <Link
            href={secondaryHref ?? "/programs"}
            className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
            style={{
              fontSize: 15,
              color: "#374151",
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textDecorationColor: "rgba(0,0,0,0.18)",
            }}
          >
            {secondaryLabel}{" "}
            <span
              className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        {/*
          BOTTOM ENGINEERING DETAIL — the closing colophon.
          ──────── EL+2500 ────────
          OUTPUT: INDUSTRY READY ENGINEER

          Centred. Monospace. Very low opacity.
          Feels like a drawing revision block at the bottom of a sheet.
          The last thing the eye rests on before leaving the section.
        */}
        <div
          className="flex flex-col items-center gap-2 mt-6"
          aria-hidden="true"
        >
          {/* Dimension line with code */}
          <div className="flex items-center gap-0">
            <div style={{ width: 1, height: 8, background: EI, flexShrink: 0 }} />
            <div style={{ width: 40, height: 1, background: EI }} />
            <span
              className="font-mono px-4 shrink-0"
              style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}
            >
              {code}
            </span>
            <div style={{ width: 40, height: 1, background: EI }} />
            <div style={{ width: 1, height: 8, background: EI, flexShrink: 0 }} />
          </div>

          {/* Output spec */}
          <span
            className="font-mono"
            style={{
              fontSize: 8,
              letterSpacing: "0.2em",
              color: "rgba(60,100,180,0.28)",
            }}
          >
            OUTPUT: {output}
          </span>
        </div>

      </div>
    </section>
  );
}