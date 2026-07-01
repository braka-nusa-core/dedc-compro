"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Expand } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { staggerContainer, fadeIn } from "@/lib/animations";
import type { GalleryImage } from "@/types";

const EI_TEXT = "rgba(60,100,180,0.40)";

// Bento layout — varied spans create a modern, non-uniform grid.
// 6 images total: 1 wide hero tile + 5 tiles of mixed sizes.
const preview = galleryImages.slice(0, 6);

// Tailwind col/row span per tile index — defines the bento rhythm
const bentoSpans = [
  "lg:col-span-7 lg:row-span-2", // 0 — large feature, tall
  "lg:col-span-5",               // 1 — wide top-right
  "lg:col-span-5",               // 2 — wide, below 1
  "lg:col-span-4",                // 3 — bottom row
  "lg:col-span-4",                // 4 — bottom row
  "lg:col-span-4",                // 5 — bottom row
] as const;

const categoryLabel: Record<string, string> = Object.fromEntries(
  galleryCategories.map((c) => [c.key, c.label])
);

function GalleryTile({ image, index, large }: { image: GalleryImage; index: number; large?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full h-full overflow-hidden rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2"
        style={{ minHeight: large ? 320 : 150 }}
        aria-label={`Lihat foto: ${image.alt}`}
        aria-haspopup="dialog"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={large ? "(max-width:1024px) 100vw, 55vw" : "(max-width:1024px) 50vw, 25vw"}
        />

        {/* Gradient — always present at low intensity, strengthens on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(10,15,26,0.65) 0%, rgba(10,15,26,0.05) 45%, transparent 65%)",
          }}
        />

        {/* Category tag — top-left, monospace, always visible */}
        <span
          className="absolute top-3 left-3 font-mono font-medium px-2 py-1 rounded"
          style={{
            fontSize: 9,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.85)",
            background: "rgba(13,17,23,0.35)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          {categoryLabel[image.category]?.toUpperCase() ?? image.category.toUpperCase()}
        </span>

        {/* Expand icon — appears on hover, top-right */}
        <span
          className="absolute top-3 right-3 flex items-center justify-center h-7 w-7 rounded-full opacity-0 scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
          style={{ background: "rgba(255,255,255,0.92)" }}
          aria-hidden="true"
        >
          <Expand className="h-3.5 w-3.5" style={{ color: "#0D1117" }} />
        </span>

        {/* Caption — slides up on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 transform transition-transform duration-300 ease-out translate-y-1 group-hover:translate-y-0"
        >
          <p
            className="font-body font-medium leading-snug"
            style={{
              fontSize: large ? 14 : 12,
              color: "#FFFFFF",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            {image.alt}
          </p>
        </div>
      </button>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-[#0D1117] border-0 p-2">
          <DialogTitle className="sr-only">{image.alt}</DialogTitle>
          <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="px-2 pb-2 pt-3 font-body text-sm text-[#9CA3AF] text-center">
            {image.alt}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function GalleryPreviewSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="gallery"
      className="relative w-full py-20 lg:py-[7.5rem]"
      style={{ background: "#F7F9FC" }}
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col gap-14">

        {/* Header — left-anchored, asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <SectionHeader
              overline="Galeri Training"
              title="Suasana Training DEDC"
              accentWord="Training"
              align="left"
              as="h2"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-3 items-start lg:items-end text-left lg:text-right">
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: "clamp(0.9rem,1.2vw,1rem)", color: "#64748B" }}
            >
              Dokumentasi kegiatan kelas offline, online, dan workshop DEDC.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-body font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8C2E] focus-visible:ring-offset-2 rounded-sm"
              style={{
                fontSize: 14,
                color: "#374151",
                textDecoration: "underline",
                textUnderlineOffset: 4,
                textDecorationColor: "rgba(0,0,0,0.18)",
              }}
            >
              Lihat semua dokumentasi
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/*
          Bento grid — 12-col base, varied spans per tile.
          Tile 0 is large (7 cols, 2 rows). Tiles 1–2 are medium width.
          Tiles 3–5 form the bottom row. On mobile everything collapses
          to a single column with consistent aspect ratios.
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4"
          style={{ gridAutoRows: "150px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              className={`relative ${bentoSpans[i] ?? ""} ${i === 0 ? "sm:col-span-2" : ""}`}
              style={i === 0 ? { gridRow: "span 2" } : undefined}
              variants={
                reduce
                  ? fadeIn
                  : {
                      hidden: { opacity: 0, scale: 0.97 },
                      visible: { opacity: 1, scale: 1, transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" } },
                    }
              }
            >
              <GalleryTile image={img} index={i} large={i === 0} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}