"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/common/WhatsAppLink";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { featuredAlumni } from "@/data/successStories";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Metrics ─────────────────────────────────────────────────────
const METRICS = [
  { value: "1.000+", label: "Alumni Aktif"      },
  { value: "50+",    label: "Corporate Network" },
  { value: "14+",    label: "Tahun Pengalaman"  },
] as const;

// ─── Career timeline stages ───────────────────────────────────────
// A single representative career journey — not a specific alumnus.
// The journey is archetypal — every visitor can see themselves in it.
const JOURNEY = [
  { year: "2019", coord: "EL+2019", event: "Bergabung DEDC",       sub: "Mulai dari nol",               type: "entry"   },
  { year: "2020", coord: "EL+2020", event: "Proyek Pertama",        sub: "AutoCAD & Plant 3D",           type: "stage"   },
  { year: "2021", coord: "EL+2021", event: "Lulus Bersertifikat",   sub: "Certified Engineer",           type: "stage"   },
  { year: "2022", coord: "EL+2022", event: "Piping Designer",       sub: "PT Rekayasa Industri",         type: "career"  },
  { year: "2025", coord: "EL+2025", event: "Senior Engineer",       sub: "EPC Industry",                 type: "career"  },
] as const;

// Pipeline x-position within right column
const PIPE_X = 52;

export function SuccessStoriesHeroSection() {
  const reduce  = useReducedMotion();
  const enter   = reduce ? fadeIn : fadeUp;
  const ref     = useRef<HTMLElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.1 });

  // Take up to 5 alumni photos for the timeline avatars
  const avatars = featuredAlumni.slice(0, 5);

  return (
    <section
      ref={ref}
      className="relative w-full pt-10 overflow-hidden"
      style={{ background: BG, minHeight: "100svh" }}
      aria-labelledby="stories-hero-heading"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/*
          Ghost typography — "FROM TRAINING TO INDUSTRY"
          Massive. Opacity 0.02. Partially cropped top-right.
          Subconscious presence only. The user feels it without
          consciously reading it. Same technique as Tailwind / Linear
          use with oversized background wordmarks.
        */}
        <div
          className="absolute hidden lg:flex flex-col items-end leading-none select-none"
          style={{
            top: "-2%",
            right: "-4%",
            fontFamily: "Space Grotesk, system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(8rem,16vw,18rem)",
            lineHeight: 0.9,
            color: INK,
            opacity: 0.02,
            letterSpacing: "-0.04em",
            textAlign: "right",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span>FROM</span>
          <span>TRAINING</span>
          <span>TO</span>
          <span>INDUSTRY</span>
        </div>

        {/* Grid — top-right corner, 30–35% area only */}
        <div
          className="absolute top-0 right-0"
          style={{ width: "34%", height: "52%" }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to left,transparent 0%,${BG} 65%)`,
          }} />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom,transparent 0%,${BG} 70%)`,
          }} />
        </div>

        {/* Engineering codes top-right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["ALM-2025", "REV-A1", "X-400"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{
          background: `linear-gradient(to top,${BG},transparent)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100svh-4rem)]">

          {/* ════════════════════════════════════
              LEFT — 7 columns, typography hero
              ════════════════════════════════════ */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center py-24 lg:py-28"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Blueprint label + hairline */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-0"
              aria-hidden="true"
            >
              <span className="font-mono shrink-0 pr-4"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
                ALM-2025 · SUCCESS STORIES
              </span>
              <div style={{ width: 80, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI }} />
            </motion.div>

            {/*
              HEADLINE — anaphoric three-line structure.
              "Kisah Nyata. / Perjalanan Nyata. / Karier Yang Nyata."
              Each line is a parallel statement. The repetition of
              "Nyata" creates emphasis through accumulation, not decoration.
              The third line has the green accent — the payoff.
            */}
            <motion.h1
              id="stories-hero-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.75rem,5vw,5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: INK,
              }}
            >
              Kisah Nyata.<br />
              Perjalanan Nyata.<br />
              <span style={{ color: GREEN }}>Karier Yang Nyata.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(0.9375rem,1.3vw,1.0625rem)",
                lineHeight: 1.78,
                color: "#52606D",
                maxWidth: "50ch",
              }}
            >
              Lebih dari 1.000 alumni DEDC telah membangun karier
              mereka di perusahaan engineering, EPC, Oil & Gas, dan
              industri manufaktur di Indonesia.
            </motion.p>

            {/* Metrics — no cards, hairline dividers */}
            <motion.dl
              variants={fadeIn}
              className="flex items-start"
              style={{ gap: 0 }}
              aria-label="Statistik alumni DEDC"
            >
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="relative flex flex-col"
                  style={{ paddingRight: 32 }}
                >
                  {i < METRICS.length - 1 && (
                    <div
                      className="absolute"
                      style={{ right: 16, top: 5, height: 38, width: 1, background: "rgba(0,0,0,0.09)" }}
                      aria-hidden="true"
                    />
                  )}
                  <dt className="sr-only">{m.label}</dt>
                  <dd
                    className="font-heading font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(1.6rem,2.5vw,2.25rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: GREEN,
                    }}
                  >
                    {m.value}
                  </dd>
                  <span
                    className="font-body mt-1.5"
                    style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.3 }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </motion.dl>

            {/* CTA pair */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="#stories">
                  Lihat Kisah Alumni
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>

              <WhatsAppLink
                context="hero"
                ariaLabel="Konsultasi Program via WhatsApp (tab baru)"
              >
                <span
                  className="font-body font-medium"
                  style={{
                    fontSize: 15,
                    color: "#374151",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    textDecorationColor: "rgba(0,0,0,0.18)",
                  }}
                >
                  Konsultasi Program →
                </span>
              </WhatsAppLink>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — 5 columns, human career timeline
              ════════════════════════════════════ */}
          <div
            className="lg:col-span-5 hidden lg:flex flex-col justify-center py-20 pl-10"
            aria-label="Jalur karier alumni DEDC"
          >

            {/* Top dimension line */}
            <div
              className="flex items-center mb-8"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0"
                style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T, whiteSpace: "nowrap" }}>
                SUCCESS STORIES · HUMAN JOURNEY
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
            </div>

            {/* Pipeline */}
            <div className="relative flex flex-col">

              {/* Continuous vertical pipe */}
              <motion.div
                className="absolute top-0 bottom-0"
                style={{
                  left: PIPE_X,
                  width: 2,
                  background: EI,
                  transformOrigin: "top center",
                }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
                aria-hidden="true"
              />

              {/* FLOW IN node */}
              <motion.div
                className="relative flex items-center"
                style={{ paddingBottom: "1.75rem" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div
                  className="shrink-0 flex flex-col items-end"
                  style={{ width: PIPE_X, paddingRight: 14 }}
                  aria-hidden="true"
                >
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.12em", color: EI_T }}>
                    FLOW IN
                  </span>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  border: `2px solid ${GREEN}`, background: BG,
                  flexShrink: 0, marginLeft: -9, zIndex: 2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: GREEN }} />
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span className="font-mono font-semibold"
                    style={{ fontSize: 10, letterSpacing: "0.08em", color: EI_T }}>
                    TRAINING BEGINS
                  </span>
                </div>
              </motion.div>

              {/* Journey stages */}
              {JOURNEY.map((stage, i) => {
                const avatar = avatars[i];
                const isCareer = stage.type === "career";
                const delay = 0.55 + i * 0.1;

                return (
                  <motion.div
                    key={stage.year}
                    className="relative flex items-start"
                    style={{ paddingBottom: i === JOURNEY.length - 1 ? "1.75rem" : "1.5rem" }}
                    initial={{ opacity: 0, x: 8 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                    transition={{ delay, duration: 0.45, ease: "easeOut" }}
                  >
                    {/* EL coordinate left of pipe */}
                    <div
                      className="shrink-0 flex flex-col items-end justify-start"
                      style={{ width: PIPE_X, paddingRight: 12, paddingTop: 14 }}
                      aria-hidden="true"
                    >
                      <span className="font-mono"
                        style={{ fontSize: 7.5, letterSpacing: "0.1em", color: EI_T }}>
                        {stage.coord}
                      </span>
                    </div>

                    {/*
                      Avatar node — sits on the pipe.
                      Circular portrait: 48px, slightly desaturated.
                      The grayscale filter gives them a documentary,
                      archival quality — these are real moments, not
                      marketing photos.
                    */}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        marginLeft: -(48 / 2) - 1,
                        border: `2px solid ${isCareer ? GREEN : "rgba(26,140,46,0.35)"}`,
                        background: "#E5E7EB",
                        position: "relative",
                        zIndex: 2,
                        filter: isCareer ? "none" : "grayscale(35%)",
                      }}
                    >
                      {avatar ? (
                        <Image
                          src={avatar.photoSrc}
                          alt={`${stage.event} — ${stage.year}`}
                          fill
                          className="object-cover object-top"
                          sizes="48px"
                        />
                      ) : (
                        // Fallback: green dot if no photo
                        <div style={{
                          width: "100%", height: "100%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: "rgba(26,140,46,0.08)",
                        }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }} />
                        </div>
                      )}
                    </div>

                    {/* Stage content */}
                    <div
                      className="flex flex-col gap-0.5"
                      style={{ paddingLeft: 14, paddingTop: 4 }}
                    >
                      <span className="font-mono"
                        style={{ fontSize: 9, letterSpacing: "0.1em", color: EI_T }}>
                        {stage.year}
                      </span>
                      <span
                        className="font-heading font-semibold"
                        style={{
                          fontSize: isCareer ? 14 : 13,
                          color: isCareer ? INK : "#374151",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.25,
                        }}
                      >
                        {stage.event}
                      </span>
                      <span
                        className="font-body"
                        style={{
                          fontSize: 11.5,
                          color: isCareer ? GREEN : "#94A3B8",
                          fontWeight: isCareer ? 500 : 400,
                        }}
                      >
                        {stage.sub}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* FLOW OUT node */}
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.15, duration: 0.5 }}
              >
                <div
                  className="shrink-0 flex flex-col items-end"
                  style={{ width: PIPE_X, paddingRight: 14 }}
                  aria-hidden="true"
                >
                  <span className="font-mono"
                    style={{ fontSize: 7.5, letterSpacing: "0.12em", color: EI_T }}>
                    FLOW OUT
                  </span>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  border: `2px solid ${GREEN}`,
                  background: GREEN,
                  flexShrink: 0, marginLeft: -9, zIndex: 2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: BG }} />
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span
                    className="font-mono font-bold"
                    style={{ fontSize: 11, letterSpacing: "0.1em", color: GREEN }}
                  >
                    CAREER GROWTH
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Closing line */}
            <div
              className="flex items-center mt-8"
              style={{ gap: 0 }}
              aria-hidden="true"
            >
              <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
              <div style={{ width: 44, height: 1, background: EI }} />
              <span className="font-mono px-4 shrink-0"
                style={{ fontSize: 8, letterSpacing: "0.15em", color: EI_T }}>
                EL+2500 · EST. 2011
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}