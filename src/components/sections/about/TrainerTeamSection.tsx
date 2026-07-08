"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { trainers } from "@/data/trainers";

// ─── Design tokens ────────────────────────────────────────────────
const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Principles ───────────────────────────────────────────────────
const PRINCIPLES = [
  {
    id:    "TRN-01",
    title: "Industry Experience",
    desc:  "Aktif mengerjakan proyek engineering di EPC, Oil & Gas, dan industri terkemuka.",
  },
  {
    id:    "TRN-02",
    title: "Real Project Workflow",
    desc:  "Mengajarkan proses kerja sesuai standar industri — bukan teori semata.",
  },
  {
    id:    "TRN-03",
    title: "Personal Mentoring",
    desc:  "Mendampingi peserta secara langsung hingga siap memasuki dunia kerja profesional.",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────
export function TrainerTeamSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  const [lead, ...secondary] = trainers;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:     BG,
        paddingTop:     "clamp(5rem,8vw,7.5rem)",
        paddingBottom:  "clamp(5rem,8vw,7.5rem)",
      }}
      aria-labelledby="trainers-heading"
    >
      {/* ── Ghost word ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none select-none absolute hidden lg:block"
        style={{
          top:          "6%",
          right:        "-5%",
          fontFamily:   "Space Grotesk, system-ui, sans-serif",
          fontWeight:   900,
          fontSize:     "clamp(10rem,20vw,24rem)",
          lineHeight:   1,
          color:        INK,
          opacity:      0.02,
          letterSpacing: "-0.04em",
          userSelect:   "none",
        }}
        aria-hidden="true"
      >
        MENTORS
      </div>

      {/* ── Blueprint coordinates — top right ──────────────────── */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex flex-col items-end gap-1"
        style={{ top: 44, right: 72 }}
        aria-hidden="true"
      >
        {["TRN-01", "REV-C2", "SECTION T–T"].map((c) => (
          <span
            key={c}
            className="font-mono"
            style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T, opacity: 0.65 }}
          >
            {c}
          </span>
        ))}
        <div style={{ marginTop: 6, width: "100%", height: 1, background: EI }} />
        <div style={{ width: 1, height: 8, background: EI, alignSelf: "flex-end" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* ══════════════════════════════════
              LEFT — 5 cols
              ══════════════════════════════════ */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            style={{ gap: "2.5rem" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Overline */}
            <motion.div variants={fadeIn} className="flex items-center gap-2">
              <span
                className="relative flex h-[6px] w-[6px] shrink-0"
                aria-hidden="true"
              >
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40"
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
                Trainer Team
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              id="trainers-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize:      "clamp(2.25rem,3.8vw,3.75rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.034em",
                color:         INK,
                maxWidth:      "12ch",
              }}
            >
              Belajar Langsung
              <br />
              Dari
              <br />
              <span style={{ color: GREEN }}>Praktisi Industri.</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize:   "clamp(0.9375rem,1.2vw,1rem)",
                lineHeight: 1.78,
                color:      "#52606D",
                maxWidth:   "42ch",
              }}
            >
              Trainer DEDC bukan hanya menguasai software. Mereka adalah
              engineer aktif yang membawa pengalaman proyek nyata langsung
              ke dalam kelas.
            </motion.p>

            {/* Blueprint divider */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-3"
              aria-hidden="true"
            >
              <span
                className="font-mono"
                style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}
              >
                TRN-2025
              </span>
              <div style={{ flex: 1, height: 1, background: EI }} />
              <span
                className="font-mono"
                style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}
              >
                MENTOR NETWORK
              </span>
              <div style={{ width: 16, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI }} />
            </motion.div>

            {/* Principles — editorial list */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-col"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              {PRINCIPLES.map((p, i) => {
                const isLast = i === PRINCIPLES.length - 1;
                return (
                  <motion.div
                    key={p.id}
                    variants={
                      reduce
                        ? fadeIn
                        : {
                            hidden:  { opacity: 0, y: 8 },
                            visible: {
                              opacity: 1,
                              y:       0,
                              transition: {
                                delay:    i * 0.07,
                                duration: 0.42,
                                ease:     "easeOut",
                              },
                            },
                          }
                    }
                    className="flex gap-5 py-5"
                    style={{
                      borderBottom: isLast
                        ? undefined
                        : "1px solid rgba(0,0,0,0.07)",
                    }}
                  >
                    {/* Blueprint coordinate */}
                    <div
                      className="flex flex-col gap-1 shrink-0 pt-0.5"
                      style={{ width: 52 }}
                      aria-hidden="true"
                    >
                      <span
                        className="font-mono"
                        style={{ fontSize: 7.5, letterSpacing: "0.2em", color: EI_T }}
                      >
                        {p.id}
                      </span>
                      <div style={{ width: 24, height: 1, background: EI }} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1.5">
                      <h3
                        className="font-heading font-semibold"
                        style={{
                          fontSize:      15,
                          color:         INK,
                          letterSpacing: "-0.012em",
                          lineHeight:    1.25,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="font-body"
                        style={{
                          fontSize:   13.5,
                          color:      "#64748B",
                          lineHeight: 1.7,
                          maxWidth:   "36ch",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════
              RIGHT — 7 cols editorial composition
              ══════════════════════════════════ */}
          <div
            className="lg:col-span-7"
            aria-label="Tim trainer DEDC"
          >

            {/* ── Desktop: art-directed asymmetric composition ── */}
            <div
              className="hidden lg:block relative"
              style={{ height: 540 }}
            >
              {/* Blueprint dimension line — top */}
              <div
                className="absolute flex items-center"
                style={{ top: 0, left: "10%", right: "4%", zIndex: 1 }}
                aria-hidden="true"
              >
                <div style={{ width: 1, height: 8, background: EI }} />
                <div style={{ flex: 1, height: 1, background: EI }} />
                <span
                  className="font-mono px-3"
                  style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}
                >
                  TRAINER COMPOSITION
                </span>
                <div style={{ flex: 1, height: 1, background: EI }} />
                <div style={{ width: 1, height: 8, background: EI }} />
              </div>

              {/*
                Composition intent:
                ─ Lead: centred slightly left, large, anchors the composition.
                ─ secondary[0]: upper-left, intentionally higher than lead, smaller.
                ─ secondary[1]: upper-right, slightly lower than secondary[0], smallest.
                ─ secondary[2]: lower-right, below lead's midpoint.
                Vertical rhythm is intentional and asymmetric.
              */}

              {/* Lead — dominant centre-left */}
              {lead && (
                <motion.div
                  className="absolute"
                  style={{ left: "28%", top: 40, zIndex: 3 }}
                  initial={{ opacity: 0, scale: 0.98, y: 18 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  <TrainerPortrait
                    trainer={lead}
                    size={292}
                    radius={32}
                    nameSize={17}
                    dominant
                  />
                </motion.div>
              )}

              {/* secondary[0] — upper-left */}
              {secondary[0] && (
                <motion.div
                  className="absolute"
                  style={{ left: "2%", top: 18, zIndex: 2 }}
                  initial={{ opacity: 0, scale: 0.98, y: 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.14, duration: 0.52, ease: "easeOut" }}
                >
                  <TrainerPortrait
                    trainer={secondary[0]}
                    size={162}
                    radius={22}
                    nameSize={12}
                  />
                </motion.div>
              )}

              {/* secondary[1] — upper-right */}
              {secondary[1] && (
                <motion.div
                  className="absolute"
                  style={{ right: "1%", top: 48, zIndex: 2 }}
                  initial={{ opacity: 0, scale: 0.98, y: 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22, duration: 0.52, ease: "easeOut" }}
                >
                  <TrainerPortrait
                    trainer={secondary[1]}
                    size={154}
                    radius={20}
                    nameSize={12}
                  />
                </motion.div>
              )}

              {/* secondary[2] — lower-right */}
              {secondary[2] && (
                <motion.div
                  className="absolute"
                  style={{ right: "3%", bottom: 24, zIndex: 2 }}
                  initial={{ opacity: 0, scale: 0.98, y: 14 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.30, duration: 0.52, ease: "easeOut" }}
                >
                  <TrainerPortrait
                    trainer={secondary[2]}
                    size={166}
                    radius={22}
                    nameSize={12}
                  />
                </motion.div>
              )}

              {/* Blueprint coordinate — bottom left of composition */}
              <div
                className="absolute flex items-center gap-2"
                style={{ bottom: 0, left: "2%" }}
                aria-hidden="true"
              >
                <div style={{ width: 1, height: 10, background: EI }} />
                <span
                  className="font-mono"
                  style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}
                >
                  REV-C2
                </span>
              </div>
            </div>

            {/* ── Mobile: stack then 2-col grid ── */}
            <div className="lg:hidden flex flex-col gap-10">

              {/* Lead — full width centred */}
              {lead && (
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <TrainerPortrait
                    trainer={lead}
                    size={220}
                    radius={26}
                    nameSize={15}
                    dominant
                  />
                </motion.div>
              )}

              {/* Secondary — 2-column grid */}
              {secondary.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                  {secondary.map((t, i) => (
                    <motion.div
                      key={t.slug}
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                    >
                      <TrainerPortrait
                        trainer={t}
                        size={148}
                        radius={18}
                        nameSize={12}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── TrainerPortrait ───────────────────────────────────────────────
// Editorial portrait treatment.
// No card, no border, no background box.
// Photo + minimal typographic caption.

interface PortraitProps {
  trainer: {
    name:            string;
    title:           string;
    experienceYears: number;
    imageSrc:        string;
    slug:            string;
  };
  size:      number;
  radius:    number;
  nameSize:  number;
  dominant?: boolean;
}

function TrainerPortrait({
  trainer,
  size,
  radius,
  nameSize,
  dominant = false,
}: PortraitProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center cursor-default"
      style={{ width: size, gap: 10 }}
      whileHover={{ y: -3, transition: { duration: 0.18, ease: "easeOut" } }}
    >
      {/* Portrait */}
      <div
        className="relative overflow-hidden"
        style={{
          width:        size,
          height:       size,
          borderRadius: radius,
          boxShadow:    dominant
            ? "0 12px 48px rgba(0,0,0,0.11), 0 2px 8px rgba(0,0,0,0.06)"
            : "0 4px 18px rgba(0,0,0,0.07)",
          flexShrink: 0,
        }}
      >
        <Image
          src={trainer.imageSrc}
          alt={`${trainer.name} — ${trainer.title}`}
          fill
          className="object-cover object-top"
          style={{
            filter:     "saturate(85%) brightness(95%) contrast(1.03)",
            transition: "filter 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "saturate(100%) brightness(100%) contrast(1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "saturate(85%) brightness(95%) contrast(1.03)";
          }}
          sizes={`${size}px`}
        />
      </div>

      {/* Caption */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="font-heading font-bold leading-snug"
          style={{
            fontSize:      nameSize,
            color:         INK,
            letterSpacing: "-0.015em",
          }}
        >
          {trainer.name}
        </span>

        <span
          className="font-body leading-tight"
          style={{ fontSize: nameSize - 3, color: "#64748B" }}
        >
          {trainer.title}
        </span>

        <div className="flex items-center gap-2 mt-0.5">
          <div style={{ width: 12, height: 1, background: EI }} aria-hidden="true" />
          <span
            className="font-mono font-medium"
            style={{ fontSize: 9, letterSpacing: "0.1em", color: GREEN }}
          >
            {trainer.experienceYears}+ YRS
          </span>
          <div style={{ width: 12, height: 1, background: EI }} aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
}