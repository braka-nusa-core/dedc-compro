"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { galleryImages } from "@/data/gallery";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#FFFFFF";

// ── Timeline milestones ───────────────────────────────────────────
// Each milestone picks 2 photos by index from galleryImages.
// Large/small alternates: even milestones = large left, odd = large right.
const MILESTONES = [
  {
    year:    "2011",
    el:      "EL+2011",
    code:    "DOC-001",
    title:   "DEDC Didirikan",
    caption: "Kelas pertama dimulai dengan fokus pada pelatihan AutoCAD untuk industri engineering.",
    photos:  [0, 1],
  },
  {
    year:    "2017",
    el:      "EL+2017",
    code:    "DOC-002",
    title:   "500+ Alumni",
    caption: "Lima ratus engineer terbentuk. Setiap sesi menghasilkan praktisi yang langsung diserap industri.",
    photos:  [2, 3],
  },
  {
    year:    "2021",
    el:      "EL+2021",
    code:    "DOC-003",
    title:   "Corporate Training",
    caption: "Program corporate in-house mulai menjangkau perusahaan EPC dan Oil & Gas terkemuka Indonesia.",
    photos:  [4, 5],
  },
  {
    year:    "2024",
    el:      "EL+2024",
    code:    "DOC-004",
    title:   "1.000+ Alumni",
    caption: "Satu ribu engineer. Tersebar di seluruh Indonesia, bekerja di industri yang sesungguhnya.",
    photos:  [6, 7],
  },
] as const;

// Pipe x-position within content area
const PIPE_X = 56;

export function DocumentationTimelineSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:    BG,
        paddingTop:    "clamp(5rem,10vw,8.75rem)",
        paddingBottom: "clamp(5rem,10vw,8.75rem)",
      }}
      aria-labelledby="doc-timeline-heading"
    >
      {/*
        GRID — left side only, 25% width.
        Fades right and bottom. Never touches the content column.
        Same zone as HistorySection pipeline background.
      */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        style={{ top: 0, bottom: 0, left: 0, width: "25%" }}
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
          background: `linear-gradient(to right,transparent 0%,${BG} 80%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 8%,transparent 92%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <motion.div
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
        >

          {/* ── Section header ─────────────────────────────────── */}
          <motion.div
            variants={enter}
            className="flex flex-col gap-5 mb-20"
          >
            <div className="flex items-center gap-2">
              <span
                className="relative flex h-[6px] w-[6px] shrink-0"
                aria-hidden="true"
              >
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
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
                Documentation Journey
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6">
                <h2
                  id="doc-timeline-heading"
                  className="font-heading font-bold"
                  style={{
                    fontSize: "clamp(2rem,3.2vw+0.25rem,2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: INK,
                  }}
                >
                  Merekam Perjalanan Membangun{" "}
                  <span style={{ color: GREEN }}>Engineer.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p
                  className="font-body leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B", maxWidth: "44ch" }}
                >
                  Dari kelas pertama hingga ribuan alumni yang kini
                  berkarier di berbagai industri.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Opening dimension line ──────────────────────────── */}
          <div
            className="hidden lg:flex items-center mb-16"
            style={{ gap: 0 }}
            aria-hidden="true"
          >
            <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: EI }} />
            <span
              className="font-mono px-5 shrink-0"
              style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}
            >
              SECTION C–C · TIMELINE 2011–2024 · REV-G1
            </span>
            <div style={{ flex: 1, height: 1, background: EI }} />
            <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
          </div>

          {/* ══ TIMELINE ══════════════════════════════════════════ */}
          <div className="relative">

            {/*
              Continuous vertical pipe — runs full height of timeline.
              Positioned at PIPE_X from left. Same structure as HistorySection.
              All milestone nodes sit on this single line.
            */}
            <div
              className="absolute hidden lg:block top-0 bottom-0"
              style={{ left: PIPE_X, width: 2, background: EI }}
              aria-hidden="true"
            />

            {MILESTONES.map((m, i) => {
              const isLast    = i === MILESTONES.length - 1;
              // Alternate: even = large left, odd = large right
              const largeLeft = i % 2 === 0;
              // Get photos safely
              const p0 = galleryImages[m.photos[0]];
              const p1 = galleryImages[m.photos[1]];

              return (
                <motion.div
                  key={m.year}
                  className="relative flex"
                  style={{ paddingBottom: isLast ? 0 : "7.5rem" }}
                  variants={reduce ? fadeIn : {
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { delay: i * 0.14, duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >

                  {/* ── Left column: year + node ── */}
                  <div
                    className="hidden lg:flex flex-col items-end shrink-0"
                    style={{ width: PIPE_X, paddingRight: 16 }}
                    aria-hidden="true"
                  >
                    {/* EL coordinate above node */}
                    <span
                      className="font-mono mb-1"
                      style={{ fontSize: 8, letterSpacing: "0.13em", color: EI_T }}
                    >
                      {m.el}
                    </span>
                    {/* Horizontal tick from EL label to pipe */}
                    <div style={{ width: 12, height: 1, background: EI, marginBottom: 2 }} />
                    {/* Node on pipe */}
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: `2px solid ${GREEN}`,
                        background: BG,
                        marginRight: -8,  // centres on pipe (pipe is 2px, node is 16px)
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN }} />
                    </div>
                  </div>

                  {/* ── Right: milestone content ── */}
                  <div
                    className="flex flex-col gap-8 flex-1"
                    style={{ paddingLeft: 40 }}
                  >
                    {/* Milestone header */}
                    <div className="flex flex-col gap-2">
                      {/* Code */}
                      <div className="flex items-center gap-3" aria-hidden="true">
                        <span className="font-mono"
                          style={{ fontSize: 8.5, letterSpacing: "0.14em", color: EI_T }}>
                          {m.code} · {m.year}
                        </span>
                        <div style={{ width: 28, height: 1, background: EI }} />
                      </div>
                      {/* Year — large, green */}
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <span
                          className="font-heading font-bold"
                          style={{
                            fontSize: "clamp(1.75rem,2.8vw,2.5rem)",
                            lineHeight: 1,
                            letterSpacing: "-0.04em",
                            color: GREEN,
                          }}
                        >
                          {m.year}
                        </span>
                        <h3
                          className="font-heading font-semibold"
                          style={{
                            fontSize: "clamp(1.0625rem,1.5vw,1.25rem)",
                            color: INK,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          {m.title}
                        </h3>
                      </div>
                      {/* Caption */}
                      <p
                        className="font-body leading-relaxed"
                        style={{ fontSize: 14, color: "#64748B", maxWidth: "52ch" }}
                      >
                        {m.caption}
                      </p>
                    </div>

                    {/*
                      PHOTO PAIR — editorial composition.
                      largeLeft: large image left, small image bottom-right.
                      !largeLeft: small image top-left, large image right.
                      Heights differ significantly (not equal) — this is what
                      makes it editorial rather than a 2-col grid.
                    */}
                    <div
                      className="relative"
                      style={{ maxWidth: 720 }}
                    >
                      {largeLeft ? (
                        // LARGE LEFT / SMALL BOTTOM-RIGHT
                        <div className="grid" style={{ gridTemplateColumns: "3fr 2fr", gap: "1rem" }}>
                          {/* Large image */}
                          {p0 && (
                            <div
                              className="relative overflow-hidden"
                              style={{
                                borderRadius: 24,
                                aspectRatio: "4/3",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                              }}
                            >
                              <Image
                                src={p0.src}
                                alt={p0.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 60vw, 35vw"
                              />
                            </div>
                          )}
                          {/* Small image — shifted down for stagger */}
                          {p1 && (
                            <div
                              className="relative overflow-hidden self-end"
                              style={{
                                borderRadius: 24,
                                aspectRatio: "4/5",
                                marginTop: "3rem",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                              }}
                            >
                              <Image
                                src={p1.src}
                                alt={p1.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 40vw, 22vw"
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        // SMALL TOP-LEFT / LARGE RIGHT
                        <div className="grid" style={{ gridTemplateColumns: "2fr 3fr", gap: "1rem" }}>
                          {/* Small image — aligned top */}
                          {p0 && (
                            <div
                              className="relative overflow-hidden self-start"
                              style={{
                                borderRadius: 24,
                                aspectRatio: "4/5",
                                marginTop: "2rem",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                              }}
                            >
                              <Image
                                src={p0.src}
                                alt={p0.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 40vw, 22vw"
                              />
                            </div>
                          )}
                          {/* Large image */}
                          {p1 && (
                            <div
                              className="relative overflow-hidden"
                              style={{
                                borderRadius: 24,
                                aspectRatio: "4/3",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                              }}
                            >
                              <Image
                                src={p1.src}
                                alt={p1.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 60vw, 35vw"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Closing annotation */}
            <div
              className="hidden lg:flex items-center mt-16"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ width: PIPE_X - 1, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0"
                style={{ fontSize: 9, letterSpacing: "0.15em", color: EI_T }}>
                EL+2024 · 1.000+ ALUMNI DEPLOYED
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}