"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { GalleryImage } from "@/types";

interface GalleryCardProps {
  image: GalleryImage;
  className?: string;
}

export function GalleryCard({ image, className }: GalleryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full overflow-hidden rounded-[var(--radius-xl)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
          className
        )}
        aria-label={`Lihat foto: ${image.alt}`}
        aria-haspopup="dialog"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-[var(--duration-slow)] rounded-[var(--radius-xl)]" />

          {/* Zoom icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)]">
            <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" aria-hidden="true" />
          </div>
        </div>

        {/* Caption */}
        {image.caption && (
          <p className="mt-2 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)] text-left px-1">
            {image.caption}
          </p>
        )}
      </button>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-[var(--color-brand-dark)] border-0 p-2">
          <DialogTitle className="sr-only">{image.alt}</DialogTitle>
          <div className="relative w-full aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          {image.caption && (
            <p className="px-2 pb-2 font-body text-[var(--text-sm)] text-[#D1D5DB] text-center">
              {image.caption}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}