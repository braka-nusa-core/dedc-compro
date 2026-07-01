"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

const PRINCIPLES = [
  {
    num:   "01",
    title: "Small Batch Learning",
    desc:  "Belajar dalam kelompok kecil sehingga interaksi dengan trainer menjadi lebih fokus dan efektif.",
  },
  {
    num:   "02",
    title: "Industry Case Study",
    desc:  "Mempelajari workflow dan studi kasus berdasarkan standar industri engineering.",
  },
  {
    num:   "03",
    title: "Project Based Training",
    desc:  "Mengerjakan proyek nyata untuk membangun pengalaman dan portfolio profesional.",
  },
] as const;

export function InsideClassroomSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG, paddingTop: "clamp(5rem,8vw,7.5rem)", paddingBottom: "clamp(5rem,8vw,7.5rem)" }}
      aria-labelledby="classroom-heading"
    >
      {/* Ghost typography — ENGINEER, behind everything */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        style={{
          top: "12%",
          right: "-4%",
          fontFamily: "Space Grotesk, system-ui, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(10rem,22vw,26rem)",
          lineHeight: 1,
          color: INK,
          opacity: 0.02,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ENGINEER
      </div>

      {/* Blueprint codes — top right */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex flex-col items-end gap-1"
        style={{ top: 44, right: 72 }}
        aria-hidden="true"
      >
        {["TRN-01", "CLS-02", "REV-E1"].map((c) => (
          <span key={c} className="font-mono"
            style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T, opacity: 0.65 }}>
            {c}
          </span>
        ))}
        <div style={{ marginTop: 4, width: "100%", height: 1, background: EI }} />
        <div style={{ width: 1, height: 8, background: EI, alignSelf: "flex-end" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 flex flex-col" style={{ gap: "clamp(5rem,8vw,7rem)" }}>

        {/* ══════════════════════════════════════════════════════
            SECTION A — Cinematic photograph, the emotional anchor
            ══════════════════════════════════════════════════════

            Not a thumbnail. Not a supporting image.
            This photo IS the section.
            Placed first so the eye lands on it before reading.
            Almost full-width. Tall portrait ratio — unusual enough
            to stop the scroll, editorial enough to feel intentional.
        */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Photo — 5/12 cols, portrait, tall */}
          <motion.div
            className="lg:col-span-5"
            variants={reduce ? fadeIn : {
              hidden:  { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: 40,
              }}
            >
              <Image
                src="/images/programs/autocad-hero.jpg"
                alt="Instructor membimbing peserta training DEDC dalam sesi kelas profesional"
                fill
                className="object-cover object-top"
                style={{ filter: "saturate(85%) brightness(96%) contrast(104%)" }}
                sizes="(max-width:1024px) 100vw, 42vw"
                priority
              />

              {/*
                Bottom overlay — not a caption box.
                A gradient foundation with monospace text.
                The text is small, atmospheric — barely readable
                at normal viewing distance. It rewards attention.
              */}
              <div
                className="absolute bottom-0 left-0 right-0 px-8 py-6"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,26,0.72) 0%, rgba(10,15,26,0.2) 55%, transparent 100%)",
                }}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono font-semibold"
                    style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.85)" }}>
                    TRAINING EXPERIENCE
                  </span>
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.12em", color: "rgba(255,255,255,0.42)" }}>
                    EST.2011 · Thousands of engineers started here.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — empty breathing space on desktop */}
          {/* This asymmetric use of the 7/12 right side as negative space
              is the most important design decision in this section.
              The photo doesn't need a companion. It stands alone. */}
          <div className="lg:col-span-7 hidden lg:block" />
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            SECTION B — Editorial typography
            ══════════════════════════════════════════════════════

            Asymmetric layout — headline takes 7/12 cols,
            subtitle sits in 5/12 on the right.
            The two text blocks are NOT aligned to each other —
            the headline anchors upper-left, subtitle lower-right.
            This creates diagonal reading tension: premium, editorial.
        */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Headline block — left, larger */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={reduce ? fadeIn : {
              hidden:  { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            {/* Overline */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-[6px] w-[6px] shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-45"
                  style={{ background: GREEN }} />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px]"
                  style={{ background: GREEN }} />
              </span>
              <span className="font-body font-medium uppercase tracking-[0.13em]"
                style={{ fontSize: 10, color: "#52606D" }}>
                Training Experience
              </span>
            </div>

            {/*
              Headline — three lines, enormous.
              The break after "Tetapi" is intentional — a breath
              before the climactic final line. "Berlatih Seperti Engineer."
              is the only green phrase, making it the resolved statement.
            */}
            <h2
              id="classroom-heading"
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.25rem,3vw,4rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.034em",
                color: INK,
              }}
            >
              Bukan Sekadar Belajar.
              <br />
              Tetapi
              <br />
              <span style={{ color: GREEN }}>Berlatih Seperti Engineer.</span>
            </h2>
          </motion.div>

          {/* Subtitle block — right, lower, offset */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6 lg:pt-16"
            variants={reduce ? fadeIn : {
              hidden:  { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.14, ease: "easeOut" } },
            }}
          >
            <p className="font-body leading-relaxed"
              style={{ fontSize: "clamp(1rem,1.35vw,1.0625rem)", color: "#52606D", maxWidth: "42ch" }}>
              Peserta tidak hanya mempelajari software. Mereka belajar
              bagaimana engineer berpikir, bekerja, dan menyelesaikan
              permasalahan nyata di industri.
            </p>

            {/* Blueprint label — anchored below subtitle */}
            <div className="hidden lg:flex items-center gap-3" aria-hidden="true">
              <span className="font-mono"
                style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
                SECTION E–E · REV-E1
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <div style={{ width: 1, height: 8, background: EI }} />
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            SECTION C — Training principles
            ══════════════════════════════════════════════════════

            Three principles. No icons. No cards.
            Each principle: oversized ghost number behind the title,
            title at normal weight, description muted.
            The ghost numbers are atmospheric — they communicate
            sequence without demanding attention.
        */}

        {/* Dimension line above principles */}
        <div className="hidden lg:flex items-center" style={{ gap: 0 }} aria-hidden="true">
          <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5 shrink-0"
            style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}>
            TRAINING PRINCIPLES · 3 CORE VALUES
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {PRINCIPLES.map((p, i) => {
            const isLast = i === PRINCIPLES.length - 1;
            return (
              <motion.div
                key={p.num}
                variants={reduce ? fadeIn : {
                  hidden:  { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } },
                }}
                className="relative flex flex-col gap-4 py-8 overflow-hidden"
                style={{
                  paddingRight: !isLast ? "3rem" : undefined,
                  paddingLeft:  i > 0   ? "3rem" : undefined,
                  borderRight:  !isLast ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  borderTop:    "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {/*
                  Ghost number — enormous, very low opacity, sits behind.
                  Apple uses this pattern in their product pages.
                  It creates depth without decoration.
                */}
                <span
                  className="absolute font-heading font-bold select-none"
                  style={{
                    top: "-0.1em",
                    left: i > 0 ? "3rem" : 0,
                    fontSize: "clamp(5rem,8vw,8rem)",
                    lineHeight: 1,
                    color: INK,
                    opacity: 0.05,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                  }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>

                {/* Visible number — small, monospace, above title */}
                <span className="font-mono relative z-10"
                  style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
                  {p.num}
                </span>

                {/* Title */}
                <h3
                  className="font-heading font-bold relative z-10"
                  style={{
                    fontSize: "clamp(1rem,1.4vw,1.125rem)",
                    color: INK,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p className="font-body leading-relaxed relative z-10"
                  style={{ fontSize: 13.5, color: "#64748B", maxWidth: "30ch" }}>
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}