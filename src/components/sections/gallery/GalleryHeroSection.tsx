"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeIn, fadeUp } from "@/lib/animations";
import { galleryImages } from "@/data/gallery";

const EI    = "rgba(60,100,180,0.15)";
const EI_T  = "rgba(60,100,180,0.42)";
const GREEN = "#1A8C2E";
const INK   = "#0D1117";
const BG    = "#F7F9FC";

/*
  EDITORIAL COLLAGE LAYOUT
  ─────────────────────────
  Four portraits in two columns.
  Column A (left, 52%): photos 0 and 2
  Column B (right, 45%): photos 1 and 3

  Each photo has a unique vertical offset — the offsets create the
  diagonal reading path: A0 → B1 → A2 → B3.

  Column B is shifted down (paddingTop) to break horizontal alignment.
  Individual marginTop values create the final organic stagger.
*/
const COLLAGE = [
  // Column A
  { idx: 0, coord: "X-100", marginTop: "0rem"   },
  { idx: 2, coord: "X-300", marginTop: "2rem"   },
  // Column B
  { idx: 1, coord: "X-200", marginTop: "-1.5rem"},
  { idx: 3, coord: "X-400", marginTop: "3rem"   },
] as const;

export function GalleryHeroSection() {
  const reduce = useReducedMotion();
  const enter  = reduce ? fadeIn : fadeUp;

  // Take first 4 gallery images — the preview set
  const photos = galleryImages.slice(0, 4);

  return (
    <section
      className="relative w-full pt-16 overflow-hidden"
      style={{ background: BG, minHeight: "100svh" }}
      aria-labelledby="gallery-hero-heading"
    >
      {/* ── Background ──────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden="true">

        {/* Grid — top-right, 30% of viewport, fades inward */}
        <div className="absolute top-0 right-0" style={{ width: "32%", height: "55%" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(60,100,180,0.038) 1px,transparent 1px),
              linear-gradient(90deg,rgba(60,100,180,0.038) 1px,transparent 1px)
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

        {/* Engineering coordinates — top-right */}
        <div
          className="absolute hidden lg:flex items-center gap-5"
          style={{ top: 72, right: 72 }}
        >
          {["GAL-2025", "REV-G1", "X-400"].map((c) => (
            <span key={c} className="font-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: EI_T }}>
              {c}
            </span>
          ))}
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{
          background: `linear-gradient(to top,${BG},transparent)`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100svh-4rem)]">

          {/* ════════ LEFT — text, 6 columns ════════ */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center py-24 lg:py-28"
            style={{ gap: "2rem" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Blueprint label */}
            <motion.div
              variants={fadeIn}
              className="hidden lg:flex items-center gap-0"
              aria-hidden="true"
            >
              <span className="font-mono shrink-0 pr-4"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: EI_T }}>
                GAL-2025 · DOCUMENTATION
              </span>
              <div style={{ width: 64, height: 1, background: EI }} />
              <div style={{ width: 1, height: 10, background: EI }} />
            </motion.div>

            {/*
              HEADLINE — 3 lines, enormous, editorial.
              "Professional Engineer" in green — the destination,
              not the process. The photos are moments on the way there.
            */}
            <motion.h1
              id="gallery-hero-heading"
              variants={enter}
              className="font-heading font-bold"
              style={{
                fontSize: "clamp(2.75rem,5vw,5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: INK,
                maxWidth: "10ch",
              }}
            >
              Momen yang Membentuk{" "}
              <span style={{ color: GREEN }}>Professional Engineer.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={enter}
              className="font-body"
              style={{
                fontSize: "clamp(1rem,1.4vw,1.125rem)",
                lineHeight: 1.8,
                color: "#52606D",
                maxWidth: "42ch",
              }}
            >
              Setiap kelas, setiap proyek, dan setiap pencapaian
              menjadi bagian dari perjalanan karier.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={enter}
              className="flex flex-row items-center gap-6 flex-wrap"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="#gallery-grid">
                  Jelajahi Dokumentasi
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </Button>

              <Link
                href="/programs"
                className="font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
                style={{
                  fontSize: 15,
                  color: "#374151",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                  textDecorationColor: "rgba(0,0,0,0.18)",
                }}
              >
                Lihat Program{" "}
                <span
                  className="inline-block transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ════════ RIGHT — editorial collage, 6 columns ════════ */}
          <div
            className="lg:col-span-6 hidden lg:flex items-center py-20 pl-10"
            aria-label="Dokumentasi DEDC"
          >
            <div
              className="relative w-full flex gap-5"
              style={{ height: "calc(100svh - 10rem)", maxHeight: 700 }}
            >

              {/* Column A — photos 0 and 2 */}
              <div
                className="flex flex-col gap-5"
                style={{ flex: "0 0 52%" }}
              >
                {[0, 2].map((photoIdx) => {
                  const photo  = photos[photoIdx];
                  const layout = COLLAGE.find((c) => c.idx === photoIdx);
                  if (!photo || !layout) return null;

                  return (
                    <motion.div
                      key={photo.id}
                      className="flex flex-col gap-0"
                      style={{ marginTop: layout.marginTop, flex: "1 1 0" }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.18 + photoIdx * 0.1,
                        duration: 0.65,
                        ease: "easeOut",
                      }}
                    >
                      {/* Coordinate label above photo */}
                      <div
                        className="flex items-center gap-3 mb-2"
                        aria-hidden="true"
                      >
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                          {layout.coord}
                        </span>
                        <div style={{ flex: 1, height: 1, background: EI }} />
                      </div>

                      {/* Photo */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{
                          flex: 1,
                          borderRadius: 24,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                        }}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover object-center"
                          sizes="25vw"
                          priority={photoIdx === 0}
                        />
                        {/* Minimal bottom vignette */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to top,rgba(0,0,0,0.08) 0%,transparent 28%)",
                            borderRadius: 24,
                          }}
                        />
                      </div>

                      {/* Caption below photo */}
                      {photo.caption && (
                        <p className="font-body mt-2 px-0.5"
                          style={{ fontSize: 10.5, color: "#94A3B8", lineHeight: 1.4 }}>
                          {photo.caption}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Column B — photos 1 and 3, shifted down 3.5rem */}
              <div
                className="flex flex-col gap-5"
                style={{ flex: "0 0 45%", paddingTop: "3.5rem" }}
              >
                {[1, 3].map((photoIdx) => {
                  const photo  = photos[photoIdx];
                  const layout = COLLAGE.find((c) => c.idx === photoIdx);
                  if (!photo || !layout) return null;

                  return (
                    <motion.div
                      key={photo.id}
                      className="flex flex-col gap-0"
                      style={{ marginTop: layout.marginTop, flex: "1 1 0" }}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.26 + photoIdx * 0.1,
                        duration: 0.65,
                        ease: "easeOut",
                      }}
                    >
                      {/* Coordinate label above photo */}
                      <div
                        className="flex items-center gap-3 mb-2"
                        aria-hidden="true"
                      >
                        <span className="font-mono"
                          style={{ fontSize: 8, letterSpacing: "0.14em", color: EI_T }}>
                          {layout.coord}
                        </span>
                        <div style={{ flex: 1, height: 1, background: EI }} />
                      </div>

                      {/* Photo */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{
                          flex: 1,
                          borderRadius: 24,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                        }}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover object-center"
                          sizes="22vw"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to top,rgba(0,0,0,0.08) 0%,transparent 28%)",
                            borderRadius: 24,
                          }}
                        />
                      </div>

                      {photo.caption && (
                        <p className="font-body mt-2 px-0.5"
                          style={{ fontSize: 10.5, color: "#94A3B8", lineHeight: 1.4 }}>
                          {photo.caption}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/*
                Engineering detail — anchored to bottom-right of the collage.
                SECTION C-C + EL+2500 as the closing annotation.
                Structurally attached to the photo wall boundary.
              */}
              <div
                className="absolute bottom-2 right-0 flex flex-col items-end gap-1"
                aria-hidden="true"
              >
                <div style={{ width: 48, height: 1, background: EI }} />
                <span className="font-mono"
                  style={{ fontSize: 7.5, letterSpacing: "0.14em", color: EI_T }}>
                  SECTION C–C · EL+2500
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}