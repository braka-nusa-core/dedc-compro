"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

const DETAILS = [
  { label: "Alamat",         value: "Jl. Engineering No. 1, Surabaya, Jawa Timur"  },
  { label: "Telepon",        value: "+62 812 3456 7890"                             },
  { label: "Email",          value: "hello@dedc.id"                                 },
  { label: "Jam Operasional",value: "Senin – Sabtu, 09.00 – 17.00 WIB"             },
] as const;

export function VisitCampusSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  return (
    <section
      className="relative w-full py-20 lg:py-[7.5rem] overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="visit-heading"
    >
      {/* Selective grid — left 25% only, behind text column */}
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
          background: `linear-gradient(to right,transparent 0%,${BG} 78%)`,
        }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom,${BG} 0%,transparent 8%,transparent 92%,${BG} 100%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">

        {/* Top dimension line */}
        <div className="hidden lg:flex items-center mb-16" style={{ gap: 0 }} aria-hidden="true">
          <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5 shrink-0"
            style={{ fontSize: 9, letterSpacing: "0.17em", color: EI_T, whiteSpace: "nowrap" }}>
            LOC-01 · CAMPUS VISIT · REV-A1
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI, flexShrink: 0 }} />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* ── LEFT — editorial text ── */}
          <motion.div
            variants={enter}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Overline code */}
            <div className="flex items-center gap-3" aria-hidden="true">
              <span className="font-mono"
                style={{ fontSize: 9, letterSpacing: "0.16em", color: EI_T }}>
                LOC-01
              </span>
              <div style={{ width: 28, height: 1, background: EI }} />
            </div>

            {/* Headline */}
            <h2
              id="visit-heading"
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2rem,3vw,2.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: INK,
              }}
            >
              Visit Our{" "}
              <span style={{ color: GREEN }}>Campus.</span>
            </h2>

            {/* Description */}
            <p className="font-body leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#52606D", maxWidth: "40ch" }}>
              Kami percaya lingkungan belajar yang baik akan membentuk
              engineer yang lebih baik. Kunjungi kami dan rasakan
              sendiri suasana training DEDC.
            </p>

            {/* Contact details — specification rows */}
            <div className="flex flex-col" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              {DETAILS.map((d, i) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-0.5 py-3.5"
                  style={{
                    borderBottom: i < DETAILS.length - 1 ? "1px solid rgba(0,0,0,0.055)" : undefined,
                  }}
                >
                  <span className="font-mono"
                    style={{ fontSize: 8, letterSpacing: "0.13em", color: EI_T }}>
                    {d.label.toUpperCase()}
                  </span>
                  <span className="font-body font-medium"
                    style={{ fontSize: 13.5, color: INK }}>
                    {d.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Maps link */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm w-fit"
              style={{
                fontSize: 14,
                color: "#374151",
                textDecoration: "underline",
                textUnderlineOffset: 4,
                textDecorationColor: "rgba(0,0,0,0.18)",
              }}
            >
              <MapPin className="h-4 w-4 shrink-0" style={{ color: GREEN }} aria-hidden="true" />
              Buka di Google Maps →
            </a>

            {/* EST.2011 footnote */}
            <p className="font-mono"
              style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
              EST.2011
            </p>
          </motion.div>

          {/* ── RIGHT — campus image ── */}
          <motion.div
            variants={reduce ? fadeIn : {
              hidden:  { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.12, ease: "easeOut" } },
            }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            {/* Photo */}
            <div
              className="relative w-full overflow-hidden rounded-3xl group"
              style={{ aspectRatio: "16 / 9" }}
            >
              <Image
                src="/images/campus/classroom.jpg"
                alt="Ruang training DEDC Engineering Training Center"
                fill
                className="object-cover transition-all duration-700 ease-out"
                style={{ filter: "saturate(88%) brightness(95%) contrast(103%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "saturate(100%) brightness(100%) contrast(101%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "saturate(88%) brightness(95%) contrast(103%)";
                }}
                sizes="(max-width:1024px) 100vw, 58vw"
              />
            </div>

            {/* Caption below image */}
            <div className="flex items-center justify-between px-1">
              <p className="font-body"
                style={{ fontSize: 12, color: "#94A3B8" }}>
                DEDC Engineering Training Center — Surabaya, Indonesia
              </p>
              <span className="font-mono"
                style={{ fontSize: 8, letterSpacing: "0.12em", color: EI_T }}
                aria-hidden="true">
                REV-A1
              </span>
            </div>

            {/* Bottom hairline */}
            <div style={{ height: 1, background: EI }} aria-hidden="true" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}