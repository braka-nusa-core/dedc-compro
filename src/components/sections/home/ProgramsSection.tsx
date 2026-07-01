"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Award, Wifi, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { GreenBadge } from "@/components/common/GreenBadge";
import { programs } from "@/data/programs";
import { staggerContainer,  fadeIn } from "@/lib/animations";

// Engineering pipeline codes — one per program
const PROG_CODES = ["PRG-001", "PRG-002", "PRG-003", "PRG-004"] as const;

// Blueprint connector colour
const PIPE = "rgba(60,100,180,0.12)";
const PIPE_HOVER = "rgba(60,100,180,0.35)";
const EI_TEXT = "rgba(60,100,180,0.40)";

const modeLabelMap: Record<string, string> = {
  online: "Online",
  offline: "Offline",
  both: "Online & Offline",
};

export function ProgramsSection() {
  const reduce = useReducedMotion();
  // Track which card is hovered so the connecting pipeline segment highlights
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden py-20 lg:py-[7.5rem]"
      style={{ background: "#F7F9FC" }}
      aria-labelledby="programs-heading"
    >
      {/* Blueprint grid — only behind the section header area, not the cards */}
      <div className="pointer-events-none select-none absolute top-0 left-0 right-0" style={{ height: "40%" }} aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(60,100,180,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60,100,180,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
        {/* Fade downward — grid disappears before cards */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, transparent 0%, #F7F9FC 75%)",
        }} />
        {/* Fade horizontal edges */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #F7F9FC 0%, transparent 10%, transparent 90%, #F7F9FC 100%)",
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        {/* Section header */}
        <SectionHeader
          overline="Program Training"
          title="Jalur Karier Engineering Profesional"
          accentWord="Engineering"
          subtitle="Empat program terintegrasi — dari drafting dasar hingga plant modeling tingkat lanjut."
          align="center"
          as="h2"
        />

        {/* Pipeline + Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/*
            Desktop: Horizontal pipeline row.
            The pipeline connector sits between cards at vertical centre.
            It is a thin horizontal line — no arrows, no icons.
            Hovering a card highlights the adjacent connector segments.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 relative">

            {programs.map((p, i) => {
              const code = PROG_CODES[i] ?? "PRG-000";
              // A pipeline segment is "active" when the card to its left OR right is hovered
              const leftActive = hoveredIndex === i - 1;
              const rightActive = hoveredIndex === i;

              return (
                <div key={p.slug} className="relative flex items-stretch">

                  {/* ── Pipeline connector (between cards, desktop only) ── */}
                  {i > 0 && (
                    <div
                      className="absolute hidden lg:block top-[42%] left-0 w-0 z-20"
                      style={{ transform: "translateX(-50%)" }}
                      aria-hidden="true"
                    >
                      {/* Vertical tick — top */}
                      <div style={{
                        width: 1,
                        height: 8,
                        background: leftActive || rightActive ? PIPE_HOVER : PIPE,
                        transition: "background 250ms ease",
                        margin: "0 auto",
                      }} />
                      {/* Circle node */}
                      <div style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        border: `1px solid ${leftActive || rightActive ? PIPE_HOVER : PIPE}`,
                        background: leftActive || rightActive ? PIPE_HOVER : "transparent",
                        transition: "all 250ms ease",
                        margin: "2px auto",
                      }} />
                      {/* Vertical tick — bottom */}
                      <div style={{
                        width: 1,
                        height: 8,
                        background: leftActive || rightActive ? PIPE_HOVER : PIPE,
                        transition: "background 250ms ease",
                        margin: "0 auto",
                      }} />
                    </div>
                  )}

                  {/* ── Card ── */}
                  <motion.article
                    variants={
                      reduce
                        ? fadeIn
                        : {
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
                            },
                          }
                    }
                    className="group relative flex flex-col w-full mx-2 lg:mx-3 mb-6 lg:mb-0 cursor-pointer"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: 14,
                      transition: "transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocusCapture={() => setHoveredIndex(i)}
                    onBlurCapture={() => setHoveredIndex(null)}
                    whileHover={reduce ? {} : { y: -3 }}
                  >
                    <Link
                      href={`/programs/${p.slug}`}
                      className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-[14px]"
                      aria-label={`Program ${p.name} — ${p.tagline}`}
                    >
                      {/* Thumbnail */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{ aspectRatio: "16/10", borderRadius: "13px 13px 0 0" }}
                      >
                        <Image
                          src={p.thumbnailSrc}
                          alt={`${p.name} training program`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        />
                        {/* Mode badge */}
                        <div className="absolute top-3 left-3">
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-body font-medium"
                            style={{
                              fontSize: 10,
                              background: "rgba(255,255,255,0.9)",
                              color: "#374151",
                              border: "1px solid rgba(0,0,0,0.08)",
                            }}
                          >
                            {p.mode === "online" ? (
                              <Wifi className="h-3 w-3" aria-hidden="true" />
                            ) : p.mode === "offline" ? (
                              <MapPin className="h-3 w-3" aria-hidden="true" />
                            ) : null}
                            {modeLabelMap[p.mode] ?? p.mode}
                          </span>
                        </div>
                        {p.featured && (
                          <div className="absolute top-3 right-3">
                            <GreenBadge>Populer</GreenBadge>
                          </div>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="flex flex-col flex-1 p-5 gap-3">

                        {/* Technical reference code — becomes visible on hover */}
                        <span
                          className="font-mono block transition-opacity duration-200"
                          style={{
                            fontSize: 8,
                            letterSpacing: "0.14em",
                            color: EI_TEXT,
                            opacity: hoveredIndex === i ? 1 : 0.4,
                          }}
                          aria-hidden="true"
                        >
                          {code}
                        </span>

                        {/* Program name */}
                        <h3
                          className="font-heading font-semibold leading-snug"
                          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "#0D1117" }}
                        >
                          {p.name}
                        </h3>

                        {/* Tagline */}
                        <p
                          className="font-body leading-relaxed"
                          style={{ fontSize: 13, color: "#64748B", lineClamp: 2 }}
                        >
                          {p.tagline}
                        </p>

                        {/* Highlights — top 3 only */}
                        <ul className="flex flex-col gap-1.5 mt-1">
                          {p.highlights.slice(0, 3).map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 font-body"
                              style={{ fontSize: 12, color: "#64748B" }}
                            >
                              <span
                                className="h-1 w-1 rounded-full shrink-0"
                                style={{ background: "#1A8C2E" }}
                                aria-hidden="true"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* Footer row — duration, cert, CTA */}
                        <div
                          className="flex items-center justify-between mt-auto pt-4"
                          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                        >
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 font-body" style={{ fontSize: 11, color: "#94A3B8" }}>
                              <Clock className="h-3 w-3 text-[#1A8C2E]" aria-hidden="true" />
                              {p.duration}
                            </span>
                            {p.hasCertificate && (
                              <span className="flex items-center gap-1 font-body" style={{ fontSize: 11, color: "#94A3B8" }}>
                                <Award className="h-3 w-3 text-[#1A8C2E]" aria-hidden="true" />
                                Sertifikat
                              </span>
                            )}
                          </div>
                          <span
                            className="flex items-center gap-1 font-body font-medium transition-all duration-200"
                            style={{
                              fontSize: 12,
                              color: "#1A8C2E",
                              gap: hoveredIndex === i ? "6px" : "4px",
                            }}
                          >
                            Detail
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>

                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Section footer — understated link */}
        <motion.div
          className="flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
            style={{
              fontSize: 14,
              color: "#374151",
              textDecoration: "underline",
              textUnderlineOffset: 4,
              textDecorationColor: "rgba(0,0,0,0.18)",
            }}
          >
            Lihat semua program
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}