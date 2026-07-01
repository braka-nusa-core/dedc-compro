"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { galleryImages } from "@/data/gallery";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ── Editorial moments — each paired with a gallery image ─────────
// Sections alternate left/right image position on desktop.
const MOMENTS = [
  {
    code:   "SECTION 01",
    ref:    "TRN-01",
    title:  "Training",
    desc:   "Setiap perjalanan dimulai dari satu langkah. Di sinilah semuanya berawal — ruang kelas, layar, dan tekad untuk belajar.",
    photo:  0,
  },
  {
    code:   "SECTION 02",
    ref:    "CLS-02",
    title:  "Inside Classroom",
    desc:   "Bukan sekadar mempelajari software. Tetapi memahami cara berpikir seorang engineer — terstruktur, presisi, dan berorientasi industri.",
    photo:  1,
  },
  {
    code:   "SECTION 03",
    ref:    "WRK-03",
    title:  "Workshop Session",
    desc:   "Teori bertemu praktik. Proyek nyata, standar industri, dan bimbingan langsung dari praktisi yang sudah bekerja di lapangan.",
    photo:  2,
  },
  {
    code:   "SECTION 04",
    ref:    "GRD-04",
    title:  "Graduation",
    desc:   "Momen ketika seseorang yang datang sebagai pemula pergi sebagai engineer yang siap. Sertifikat bukan tujuan — ini hanya awal.",
    photo:  3,
  },
  {
    code:   "SECTION 05",
    ref:    "VIS-05",
    title:  "Industrial Visit",
    desc:   "Melihat langsung skala industri sesungguhnya. Proyek, peralatan, dan lingkungan yang akan segera menjadi keseharian mereka.",
    photo:  4,
  },
] as const;

export function DEDCMomentsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:    BG,
        paddingTop:    "clamp(5rem,8vw,7.5rem)",
        paddingBottom: "clamp(5rem,8vw,7.5rem)",
      }}
      aria-labelledby="moments-heading"
    >
      {/* Engineering corner refs — top right, barely visible */}
      <div
        className="pointer-events-none select-none absolute hidden lg:flex flex-col items-end gap-1"
        style={{ top: 44, right: 72 }}
        aria-hidden="true"
      >
        {MOMENTS.map((m) => (
          <span key={m.ref} className="font-mono"
            style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T, opacity: 0.55 }}>
            {m.ref}
          </span>
        ))}
        <div style={{ marginTop: 4, width: "100%", height: 1, background: EI }} />
        <div style={{ width: 1, height: 8, background: EI, alignSelf: "flex-end" }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">

        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-5 mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Blueprint label */}
          <div className="hidden lg:flex items-center gap-0" aria-hidden="true">
            <span className="font-mono shrink-0 pr-4"
              style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
              DEDC MOMENTS · HUMAN JOURNEY
            </span>
            <div style={{ width: 64, height: 1, background: EI }} />
            <div style={{ width: 1, height: 10, background: EI }} />
          </div>

          {/* Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <h2
                id="moments-heading"
                className="font-heading font-bold"
                style={{
                  fontSize: "clamp(2.25rem,4vw,3.75rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.034em",
                  color: INK,
                }}
              >
                Small Moments.<br />
                Big{" "}
                <span style={{ color: GREEN }}>Transformations.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="font-body leading-relaxed"
                style={{ fontSize: "clamp(0.9375rem,1.2vw,1rem)", color: "#52606D", maxWidth: "50ch" }}>
                Setiap engineer memiliki awal. Dimulai dari ruang kelas,
                latihan pertama, proyek pertama, hingga akhirnya menjadi
                profesional yang dipercaya industri.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Editorial moments ───────────────────────────────── */}
        <div className="flex flex-col" style={{ gap: "clamp(4rem,8vw,7rem)" }}>
          {MOMENTS.map((moment, i) => {
            const photo     = galleryImages[moment.photo];
            const imageLeft = i % 2 === 0;   // alternate per row

            if (!photo) return null;

            return (
              <motion.div
                key={moment.code}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
              >
                {/*
                  IMAGE — placed first or second in DOM depending on imageLeft.
                  On mobile always stacks naturally (full width).
                  On desktop col order creates the alternating layout.
                */}

                {/* Image column */}
                <motion.div
                  className={`lg:col-span-7 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  variants={reduce ? fadeIn : {
                    hidden:   { opacity: 0, y: 24 },
                    visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
                  }}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-3xl group"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <Image
                      src={photo.src}
                      alt={`${moment.title} — DEDC`}
                      fill
                      className="object-cover transition-all duration-700 ease-out"
                      style={{
                        filter:     "saturate(88%) brightness(95%) contrast(105%)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.filter =
                          "saturate(100%) brightness(100%) contrast(103%)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.filter =
                          "saturate(88%) brightness(95%) contrast(105%)";
                      }}
                      sizes="(max-width:1024px) 100vw, 58vw"
                      priority={i === 0}
                    />
                  </div>
                </motion.div>

                {/* Text column */}
                <motion.div
                  className={`lg:col-span-5 flex flex-col gap-5 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
                  variants={reduce ? fadeIn : {
                    hidden:   { opacity: 0, y: 16 },
                    visible:  { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.1, ease: "easeOut" } },
                  }}
                >
                  {/* Section code */}
                  <div className="flex items-center gap-4" aria-hidden="true">
                    <span className="font-mono shrink-0"
                      style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
                      {moment.code}
                    </span>
                    <div style={{ width: 24, height: 1, background: EI }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading font-bold"
                    style={{
                      fontSize: "clamp(1.625rem,2.5vw,2.25rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.028em",
                      color: INK,
                    }}
                  >
                    {moment.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: "clamp(0.9375rem,1.2vw,1rem)",
                      lineHeight: 1.78,
                      color: "#52606D",
                      maxWidth: "38ch",
                    }}
                  >
                    {moment.desc}
                  </p>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* ── Closing engineering colophon ────────────────────── */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-2 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          aria-hidden="true"
        >
          {/* Dimension line */}
          <div className="flex items-center" style={{ gap: 0 }}>
            <div style={{ width: 1, height: 8, background: EI, flexShrink: 0 }} />
            <div style={{ width: 40, height: 1, background: EI }} />
            <span className="font-mono px-4 shrink-0"
              style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
              EL+2500
            </span>
            <div style={{ width: 40, height: 1, background: EI }} />
            <div style={{ width: 1, height: 8, background: EI, flexShrink: 0 }} />
          </div>
          <span className="font-mono"
            style={{ fontSize: 8, letterSpacing: "0.2em", color: "rgba(60,100,180,0.28)" }}>
            EST. 2011 · DEDC ENGINEERING TRAINING
          </span>
        </motion.div>

      </div>
    </section>
  );
}