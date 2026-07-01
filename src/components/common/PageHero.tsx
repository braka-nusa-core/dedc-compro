import { cn } from "@/lib/utils";
import { Breadcrumb } from "./BreadCrumb";
import type { BreadcrumbItem } from "@/types";

// Shared design tokens — mirror HeroSection exactly
const BG    = "#F5F7FA";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const EI    = "rgba(60,100,180,0.18)";
const EI_T  = "rgba(60,100,180,0.42)";

interface PageHeroProps {
  /** Engineering reference prefix — e.g. "REF-001", "SEC-A", "DOC-004"
   *  Combined with overline: "REF-001 • PROGRAM TRAINING" */
  refCode?: string;
  overline?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  refCode,
  overline,
  title,
  accentWord,
  subtitle,
  breadcrumbs,
  className,
  children,
}: PageHeroProps) {
  // Build title with optional single green accent word
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
      className={cn("relative w-full pt-16 overflow-hidden", className)}
      style={{ background: BG }}
      aria-label="Page hero"
    >
      {/*
        BACKGROUND — selective grid, right zone only.
        Identical philosophy to Home HeroSection:
        grid lives only behind the empty right breathing space.
        Left 58% (content column) remains clean.
      */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{ left: "58%" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(60,100,180,0.042) 1px,transparent 1px),
                linear-gradient(90deg,rgba(60,100,180,0.042) 1px,transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Left fade — grid doesn't bleed into content */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right,${BG} 0%,transparent 25%)`,
          }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{
            background: `linear-gradient(to top,${BG} 0%,transparent 100%)`,
          }} />
        </div>

        {/* Top-right engineering codes — X-101  REV-B2  PL-302
            Same position and treatment as Home Hero */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 74, right: 72 }}
        >
          {["X-101", "REV-B2", "PL-302"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Crosshair below codes */}
        <div
          className="absolute hidden lg:block"
          style={{ top: 110, right: 222, width: 10, height: 10 }}
          aria-hidden="true"
        >
          <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:1, background:EI, transform:"translateX(-50%)" }} />
          <div style={{ position:"absolute", top:"50%", left:0, right:0, height:1, background:EI, transform:"translateY(-50%)" }} />
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            className="lg:col-span-7 flex flex-col"
            style={{ paddingTop: "5rem", paddingBottom: "4.5rem" }}
          >

            {/* Breadcrumb — secondary, above the frame */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mb-6">
                <Breadcrumb items={breadcrumbs} />
              </div>
            )}

            {/*
              TOP FRAMING LINE — the dominant structural engineering element.

              A full-width horizontal line spanning the content column,
              with a left tick + ref code label at the start.
              This is the same top-frame technique used on the photo
              in the Home Hero — but here it frames the TITLE BLOCK.

              The line is the element. The code is secondary.

              ──────────────────────── REF-001 • OVERLINE
              |
              | TITLE
              |
              ──────────────────────── EL+2500
            */}
            <div
              className="hidden lg:flex items-center gap-0 mb-8"
              aria-hidden="true"
            >
              {/* Left tick */}
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              {/* Arm */}
              <div style={{ flex: 1, height: 1, background: EI }} />
              {/* Label */}
              <span
                className="font-mono shrink-0 px-4"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}
              >
                {refCode && overline
                  ? `${refCode} • ${overline.toUpperCase()}`
                  : refCode
                  ? refCode
                  : overline
                  ? overline.toUpperCase()
                  : "DOC-001"}
              </span>
            </div>

            {/* Overline — mobile only (desktop overline is in the frame line) */}
            {overline && (
              <div className="lg:hidden flex items-center gap-2 mb-4">
                <span
                  className="relative flex h-[6px] w-[6px] shrink-0"
                  aria-hidden="true"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                    style={{ background: GREEN }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-[6px] w-[6px]"
                    style={{ background: GREEN }}
                  />
                </span>
                <span
                  className="font-body font-medium uppercase tracking-[0.13em]"
                  style={{ fontSize: 10, color: "#52606D" }}
                >
                  {refCode ? `${refCode} · ${overline}` : overline}
                </span>
              </div>
            )}

            {/* Title — same scale and tracking as Home Hero h1 */}
            <h1
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw + 0.5rem, 4.5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.033em",
                color: INK,
              }}
            >
              {titleContent}
            </h1>

            {/* Green accent rule — 40px × 2px, mirrors Home Hero */}
            <div
              className="mt-6 mb-0"
              style={{ width: 40, height: 2, background: GREEN, borderRadius: 1 }}
              aria-hidden="true"
            />

            {/* Subtitle */}
            {subtitle && (
              <p
                className="font-body mt-6"
                style={{
                  fontSize: "clamp(0.9375rem, 1.2vw, 1rem)",
                  lineHeight: 1.78,
                  color: "#52606D",
                  maxWidth: "55ch",
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Optional children — action slot */}
            {children && <div className="mt-8">{children}</div>}

            {/*
              BOTTOM FRAMING LINE — closes the frame started above.
              Mirrors the bottom frame line of the Hero photo box.
              Label: EL+{year} — structural elevation reference.
            */}
            <div
              className="hidden lg:flex items-center gap-0 mt-10"
              aria-hidden="true"
            >
              {/* Left tick */}
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              {/* Arm */}
              <div style={{ flex: 1, height: 1, background: EI }} />
              {/* Label */}
              <span
                className="font-mono shrink-0 px-4"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T }}
              >
                EL+2011
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}