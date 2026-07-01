"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import type { PortfolioProject } from "./FeaturedPortfolioSection";

const EI    = "rgba(60,100,180,0.16)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

const CATEGORIES = [
  { id: "all",       label: "Semua",       code: "CAT-00" },
  { id: "autocad",   label: "AutoCAD",     code: "CAT-01" },
  { id: "plant-3d",  label: "Plant 3D",    code: "CAT-02" },
  { id: "revit-mep", label: "Revit MEP",   code: "CAT-03" },
  { id: "e3d",       label: "AVEVA E3D",   code: "CAT-04" },
  { id: "structural",label: "Steel Structure", code: "CAT-05" },
  { id: "hvac",      label: "HVAC",        code: "CAT-06" },
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

interface Props {
  projects: PortfolioProject[];
}

export function ProjectCategoriesSection({ projects }: Props) {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;
  const [active, setActive] = useState<CategoryId>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => {
        const sw = p.software.toLowerCase();
        if (active === "autocad")    return sw.includes("autocad") && !sw.includes("plant");
        if (active === "plant-3d")   return sw.includes("plant 3d") || sw.includes("plant3d");
        if (active === "revit-mep")  return sw.includes("revit");
        if (active === "e3d")        return sw.includes("e3d") || sw.includes("aveva");
        if (active === "structural") return sw.includes("structural") || sw.includes("steel");
        if (active === "hvac")       return sw.includes("hvac");
        return true;
      });

  const activeCategory = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: BG }}
      aria-labelledby="categories-heading"
    >
      {/* Subtle top separator */}
      <div className="max-w-[1280px] mx-auto px-8 md:px-10">
        <div style={{ height: 1, background: "rgba(0,0,0,0.07)" }} aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10 py-24 lg:py-32">

        {/* ── Section header ───────────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeIn} className="flex items-center gap-0" aria-hidden="true">
            <div className="flex flex-col gap-0.5 pr-4">
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>PROJECT CATEGORIES</span>
              <span className="font-mono font-semibold" style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>PTF-CAT-001</span>
              <span className="font-mono" style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>REV-A1</span>
            </div>
            <div style={{ width: 64, height: 1, background: EI }} />
            <div style={{ width: 1, height: 14, background: EI }} />
          </motion.div>

          <motion.h2
            id="categories-heading"
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
            Jelajahi Berdasarkan{" "}
            <span style={{ color: GREEN }}>Disiplin.</span>
          </motion.h2>
        </motion.div>

        {/* ── Category filter — typography only ────────────────── */}
        <motion.div
          className="flex flex-wrap items-center gap-0"
          style={{ borderTop: "1px solid rgba(0,0,0,0.07)", marginBottom: "4rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="tablist"
          aria-label="Filter kategori project"
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = active === cat.id;
            const isLast   = i === CATEGORIES.length - 1;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id as CategoryId)}
                className="relative flex flex-col items-start py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{
                  paddingRight: 28,
                  paddingLeft:  i === 0 ? 0 : 28,
                  borderRight:  !isLast ? "1px solid rgba(0,0,0,0.07)" : undefined,
                  cursor:       "pointer",
                  background:   "transparent",
                  border:       "none",
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="category-indicator"
                    className="absolute top-0 left-0 right-0"
                    style={{ height: 2, background: GREEN }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    aria-hidden="true"
                  />
                )}

                <span
                  className="font-mono block"
                  style={{ fontSize: 7.5, letterSpacing: "0.18em", color: isActive ? GREEN : EI_T, marginBottom: 6 }}
                  aria-hidden="true"
                >
                  {cat.code}
                </span>
                <span
                  className="font-heading font-semibold"
                  style={{
                    fontSize:      "clamp(0.875rem,1.1vw,1rem)",
                    letterSpacing: "-0.01em",
                    color:         isActive ? INK : "#64748B",
                    transition:    "color 0.15s ease",
                    whiteSpace:    "nowrap",
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Filtered project grid ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {filtered.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-24 text-center"
                style={{ gap: "1rem" }}
              >
                <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
                  {activeCategory.code} · NO RESULTS
                </span>
                <p className="font-body" style={{ fontSize: 15, color: "#64748B", maxWidth: "32ch", lineHeight: 1.7 }}>
                  Belum ada project untuk kategori ini. Segera hadir.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {filtered.map((project, index) => (
                  <ProjectTile key={project.code} project={project} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom strip */}
        <motion.div
          className="hidden lg:flex items-center mt-20"
          style={{ gap: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          aria-hidden="true"
        >
          <div style={{ width: 1, height: 10, background: EI }} />
          <div style={{ flex: 1, height: 1, background: EI }} />
          <span className="font-mono px-5"
            style={{ fontSize: 8, letterSpacing: "0.16em", color: EI_T }}>
            {filtered.length} PROJECT · {activeCategory.code} · REV-A1
          </span>
          <div style={{ flex: 1, height: 1, background: EI }} />
          <div style={{ width: 1, height: 10, background: EI }} />
        </motion.div>

      </div>
    </section>
  );
}

// ─── Project tile — editorial, no card feel ───────────────────────
function ProjectTile({
  project,
  index,
}: {
  project: PortfolioProject;
  index:   number;
}) {
  const reduce = useReducedMotion();
  const col    = index % 3;
  const row    = Math.floor(index / 3);

  return (
    <motion.div
      className="flex flex-col group"
      style={{
        paddingBottom:  "3rem",
        paddingRight:   col < 2 ? "2.5rem" : undefined,
        paddingLeft:    col > 0 ? "2.5rem" : undefined,
        paddingTop:     row > 0 ? "3rem" : undefined,
        borderRight:    col < 2 ? "1px solid rgba(0,0,0,0.07)" : undefined,
        borderTop:      row > 0 ? "1px solid rgba(0,0,0,0.07)" : undefined,
      }}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden mb-5"
        style={{
          aspectRatio:  "4/3",
          borderRadius: 6,
          background:   "rgba(60,100,180,0.04)",
        }}
      >
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.015]"
          style={{ filter: "saturate(85%) brightness(96%)" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-2" aria-hidden="true">
        <span className="font-mono" style={{ fontSize: 7.5, letterSpacing: "0.18em", color: EI_T }}>
          {project.code}
        </span>
        <div style={{ width: 16, height: 1, background: EI }} />
        <span className="font-mono" style={{ fontSize: 7.5, letterSpacing: "0.12em", color: EI_T }}>
          {project.year}
        </span>
      </div>

      <h3
        className="font-heading font-bold"
        style={{
          fontSize:      "clamp(0.9375rem,1.3vw,1.0625rem)",
          lineHeight:    1.2,
          letterSpacing: "-0.014em",
          color:         INK,
          marginBottom:  6,
        }}
      >
        {project.title}
      </h3>

      <p
        className="font-body"
        style={{
          fontSize:   13.5,
          lineHeight: 1.65,
          color:      "#64748B",
          maxWidth:   "38ch",
        }}
      >
        {project.software} · {project.industry}
      </p>
    </motion.div>
  );
}