"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { featuredAlumni } from "@/data/successStories";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#FFFFFF";

const META = [
  { code: "ALM-001", coord: "X-120", since: "2022", industry: "EPC"         },
  { code: "ALM-002", coord: "X-240", since: "2021", industry: "Building MEP" },
  { code: "ALM-003", coord: "X-360", since: "2023", industry: "Industrial"   },
] as const;

const PROG_LABEL: Record<string, string> = {
  "autocad":          "AutoCAD",
  "autocad-plant-3d": "Plant 3D",
  "revit-mep":        "Revit MEP",
  "e3d":              "AVEVA E3D",
};

export function AlumniStoriesSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;
  const stories = featuredAlumni.slice(0, 3);

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="stories-heading"
    >
      {/* Grid — top-right corner only */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        style={{ top: 0, right: 0, width: "28%", height: "32%" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.032) 1px,transparent 1px),
            linear-gradient(90deg,rgba(60,100,180,0.032) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to left,transparent 0%,${BG} 68%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,transparent 0%,${BG} 72%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col gap-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >

          {/* ── Section header ─────────────────────────────────── */}
          <motion.div variants={enter} className="flex flex-col gap-5 mb-20">
            <div className="flex items-center gap-2">
              <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                  style={{ background: GREEN }} />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px]"
                  style={{ background: GREEN }} />
              </span>
              <span className="font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}>
                Alumni Success Stories
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6">
                <h2
                  id="stories-heading"
                  className="font-heading font-bold"
                  style={{
                    fontSize: "clamp(2rem,3.2vw+0.25rem,2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: INK,
                  }}
                >
                  Perjalanan Nyata{" "}
                  <span style={{ color: GREEN }}>Alumni DEDC</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="font-body leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}>
                  Tiga perjalanan dari hari pertama training hingga
                  posisi profesional di industri engineering Indonesia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Stories ─────────────────────────────────────────── */}
          {stories.map((alumni, i) => {
            const meta     = META[i] ?? META[0];
            const photoLeft = i % 2 === 0;  // stories 1 and 3: photo left
            const isLast   = i === stories.length - 1;
            const prog     = PROG_LABEL[alumni.programSlug] ?? alumni.programSlug.toUpperCase();

            const PhotoColumn = (
              <motion.div
                className="lg:col-span-5 flex flex-col gap-0"
                variants={reduce ? fadeIn : {
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } },
                }}
              >
                {/*
                  Photo frame with blueprint annotation above and below.
                  The annotation is structurally attached to the frame —
                  it sits on the same boundary lines, not floating.
                */}

                {/* Top frame annotation */}
                <div className="hidden lg:flex flex-col gap-1 mb-0" aria-hidden="true">
                  <div style={{ height: 1, background: EI }} />
                  <div className="flex items-center justify-between px-0 py-1.5">
                    <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                      {meta.code}
                    </span>
                    <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}>
                      {alumni.position.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: GREEN }} />
                      <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: GREEN }}>
                        ACTIVE
                      </span>
                    </div>
                  </div>
                  <div style={{ height: 1, background: EI }} />
                </div>

                {/* Portrait photo */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    borderRadius: 24,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <Image
                    src={alumni.photoSrc}
                    alt={`${alumni.name} — ${alumni.position} di ${alumni.company}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:1024px) 90vw, 38vw"
                  />
                </div>

                {/* Below frame annotation */}
                <div className="hidden lg:flex flex-col gap-0 mt-0" aria-hidden="true">
                  <div style={{ height: 1, background: EI }} />
                  <div className="grid grid-cols-3 py-2 px-0">
                    {[
                      ["WORKING SINCE", meta.since],
                      ["INDUSTRY",      meta.industry],
                      ["REV",           "REV-ALM"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex flex-col gap-0.5">
                        <span className="font-mono"
                          style={{ fontSize: 7, letterSpacing: "0.12em", color: EI_T }}>
                          {k}
                        </span>
                        <span className="font-mono font-medium"
                          style={{ fontSize: 7.5, letterSpacing: "0.1em", color: "#374151" }}>
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );

            const StoryColumn = (
              <motion.div
                className="lg:col-span-6 flex flex-col justify-center gap-7"
                style={{ paddingTop: "1rem" }}
                variants={reduce ? fadeIn : {
                  hidden: { opacity: 0, x: photoLeft ? 16 : -16 },
                  visible: {
                    opacity: 1, x: 0,
                    transition: { delay: i * 0.1 + 0.12, duration: 0.55, ease: "easeOut" },
                  },
                }}
              >
                {/* Engineering ref label + coord */}
                <div className="flex items-center gap-4" aria-hidden="true">
                  <span className="font-mono shrink-0"
                    style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
                    {meta.code} · {meta.coord}
                  </span>
                  <div style={{ width: 32, height: 1, background: EI }} />
                </div>

                {/* Identity */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-heading font-bold"
                    style={{
                      fontSize: "clamp(1.625rem,2.5vw,2.25rem)",
                      letterSpacing: "-0.028em",
                      color: INK,
                      lineHeight: 1.12,
                    }}
                  >
                    {alumni.name}
                  </h3>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-body font-semibold"
                      style={{ fontSize: "clamp(0.875rem,1.2vw,1rem)", color: GREEN }}>
                      {alumni.position}
                    </span>
                    <span style={{ color: "#CBD5E1" }}>·</span>
                    <span className="font-body"
                      style={{ fontSize: "clamp(0.875rem,1.2vw,1rem)", color: "#64748B" }}>
                      {alumni.company}
                    </span>
                  </div>
                </div>

                {/*
                  The story — editorial, generous line-height.
                  No stylised quotation marks.
                  No background block.
                  Just the words at a comfortable reading width.
                */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "clamp(1rem,1.35vw,1.0625rem)",
                    lineHeight: 1.85,
                    color: "#374151",
                    maxWidth: "48ch",
                  }}
                >
                  &ldquo;{alumni.quote}&rdquo;
                </p>

                {/* Programme footnote */}
                <div className="flex items-center gap-3">
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                    PROGRAM
                  </span>
                  <div style={{ width: 20, height: 1, background: EI }} />
                  <span className="font-mono font-medium"
                    style={{ fontSize: 9, letterSpacing: "0.1em", color: "#374151" }}>
                    {prog}
                  </span>
                </div>
              </motion.div>
            );

            // One empty col for breathing room
            const Spacer = <div className="hidden lg:block lg:col-span-1" />;

            return (
              <motion.div
                key={alumni.id}
                className="flex flex-col"
                style={{ paddingBottom: isLast ? 0 : "6rem" }}
                variants={staggerContainer}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
                  {photoLeft ? (
                    <>{PhotoColumn}{Spacer}{StoryColumn}</>
                  ) : (
                    <>{StoryColumn}{Spacer}{PhotoColumn}</>
                  )}
                </div>

                {/* Story divider — not on last */}
                {!isLast && (
                  <div
                    className="hidden lg:flex items-center gap-4 mt-16"
                    aria-hidden="true"
                  >
                    <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.07)" }} />
                    <span className="font-mono shrink-0"
                      style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                      {META[i + 1]?.code ?? ""}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Section close */}
          <motion.div
            variants={fadeIn}
            className="hidden lg:flex items-center mt-8"
            style={{ gap: 0 }}
            aria-hidden="true"
          >
            <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: EI }} />
            <span className="font-mono px-5 shrink-0"
              style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T, whiteSpace: "nowrap" }}>
              END OF RECORD · SECTION C–C · EL+2500
            </span>
            <div style={{ flex: 1, height: 1, background: EI }} />
            <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}