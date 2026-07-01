"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

// ─── Types ────────────────────────────────────────────────────────
export interface PortfolioProject {
  code:        string;
  title:       string;
  industry:    string;
  software:    string;
  description: string;
  output:      string;
  year:        string;
  imageSrc:    string;
  imageAlt:    string;
  featured?:   boolean;
}

interface Props {
  projects: PortfolioProject[];
}

// ─── Component ────────────────────────────────────────────────────
export function FeaturedPortfolioSection({ projects }: Props) {
  const reduce   = useReducedMotion();
  const enter    = reduce ? fadeIn : fadeUp;
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="featured-portfolio-heading"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">

        {/* ── Section label ───────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-4 mb-20 lg:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="flex items-center gap-0" aria-hidden="true">
            <div className="flex flex-col gap-0.5 pr-4">
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>FEATURED WORK</span>
              <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>PTF-FTR-001</span>
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-A1</span>
            </div>
            <div style={{ width: 64, height: 1, background: EI }} />
            <div style={{ width: 1, height: 14, background: EI }} />
          </motion.div>

          <motion.h2
            id="featured-portfolio-heading"
            variants={enter}
            className="font-heading font-bold"
            style={{
              fontSize:      "clamp(1.875rem, 3vw, 3rem)",
              lineHeight:    1.06,
              letterSpacing: "-0.03em",
              color:         INK,
              maxWidth:      "18ch",
            }}
          >
            Project Terpilih dari{" "}
            <span style={{ color: GREEN }}>Peserta DEDC.</span>
          </motion.h2>
        </motion.div>

        {/* ── Project list — one per row, editorial ───────────── */}
        <div className="flex flex-col" style={{ gap: 0 }}>
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.code}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0"
                style={{
                  paddingTop:    index === 0 ? 0 : "6rem",
                  paddingBottom: "6rem",
                  borderBottom:  index < featured.length - 1
                    ? "1px solid rgba(0,0,0,0.07)"
                    : undefined,
                }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                aria-label={`Project: ${project.title}`}
              >
                {/* ── Metadata — 5 cols, order flips on even rows ── */}
                <motion.div
                  className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2 lg:col-start-8"}`}
                  style={{ gap: "1.5rem", padding: isEven ? "0 3rem 0 0" : "0 0 0 3rem" }}
                  variants={staggerContainer}
                >
                  {/* Project code + hairline */}
                  <motion.div variants={fadeIn} className="flex items-center gap-3" aria-hidden="true">
                    <span className="font-mono font-semibold"
                      style={{ fontSize: 8, letterSpacing: "0.2em", color: EI_T }}>
                      {project.code}
                    </span>
                    <div style={{ width: 24, height: 1, background: EI }} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    variants={enter}
                    className="font-heading font-bold"
                    style={{
                      fontSize:      "clamp(1.375rem, 2.2vw, 2rem)",
                      lineHeight:    1.1,
                      letterSpacing: "-0.025em",
                      color:         INK,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Specification strip */}
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col"
                    style={{ gap: "0.625rem", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "1rem" }}
                  >
                    {[
                      { label: "INDUSTRY", value: project.industry  },
                      { label: "SOFTWARE", value: project.software  },
                      { label: "OUTPUT",   value: project.output    },
                      { label: "YEAR",     value: project.year      },
                    ].map((spec) => (
                      <div key={spec.label} className="flex items-baseline gap-4">
                        <span className="font-mono shrink-0"
                          style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T, minWidth: 64 }}>
                          {spec.label}
                        </span>
                        <div style={{ width: 16, height: 1, background: EI, flexShrink: 0, alignSelf: "center" }} aria-hidden="true" />
                        <span className="font-body font-medium"
                          style={{ fontSize: 13.5, color: INK, letterSpacing: "-0.008em" }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    variants={enter}
                    className="font-body"
                    style={{
                      fontSize:   "clamp(0.875rem,1.1vw,0.9375rem)",
                      lineHeight: 1.75,
                      color:      "#52606D",
                      maxWidth:   "42ch",
                    }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>

                {/* ── Image — 7 cols ── */}
                <motion.div
                  className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1 lg:col-start-1"} mt-10 lg:mt-0`}
                  variants={{
                    hidden:  { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  {/* Dimension line — top */}
                  <div className="hidden lg:flex items-center mb-4" aria-hidden="true">
                    <div style={{ width: 1, height: 8, background: EI }} />
                    <div style={{ flex: 1, height: 1, background: EI }} />
                    <span className="font-mono px-3"
                      style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                      {project.code} · {project.software.toUpperCase()}
                    </span>
                    <div style={{ flex: 1, height: 1, background: EI }} />
                    <div style={{ width: 1, height: 8, background: EI }} />
                  </div>

                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{
                      aspectRatio:  "16/10",
                      borderRadius: 8,
                      background:   "rgba(60,100,180,0.04)",
                    }}
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      style={{
                        filter:     "saturate(88%) brightness(96%)",
                        transition: "filter 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLImageElement).style.filter =
                          "saturate(100%) brightness(100%)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLImageElement).style.filter =
                          "saturate(88%) brightness(96%)";
                      }}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>

                  {/* Dimension line — bottom */}
                  <div className="hidden lg:flex items-center justify-end mt-3 gap-2" aria-hidden="true">
                    <span className="font-mono"
                      style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                      {project.year}
                    </span>
                    <div style={{ width: 20, height: 1, background: EI }} />
                    <div style={{ width: 1, height: 8, background: EI }} />
                  </div>
                </motion.div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}