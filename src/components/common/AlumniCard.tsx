import { Building2, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "./OptimizedImage";
import { GreenBadge } from "./GreenBadge";
import type { Alumni } from "@/types";

interface AlumniCardProps {
  alumni: Alumni;
  className?: string;
}

export function AlumniCard({ alumni, className }: AlumniCardProps) {
  return (
    <Card
      variant="alumni"
      padding="none"
      className={cn("h-full overflow-hidden", className)}
    >
      {/* Photo */}
      <OptimizedImage
        src={alumni.photoSrc}
        alt={`Foto ${alumni.name}`}
        aspectRatio="1/1"
        containerClassName="rounded-t-[var(--radius-2xl)]"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      <CardContent className="p-5 md:p-6 gap-3">
        {/* Quote */}
        <div className="relative">
          <Quote
            className="h-5 w-5 text-[var(--color-primary)] opacity-60 mb-1"
            aria-hidden="true"
          />
          <blockquote>
            <p className="font-body text-[var(--text-sm)] text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 italic">
              &ldquo;{alumni.quote}&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Name & role */}
        <div className="flex flex-col gap-0.5 pt-1">
          <h3 className="font-heading font-semibold text-[var(--text-h5)] text-[var(--color-text-primary)] leading-snug">
            {alumni.name}
          </h3>
          <p className="font-body font-medium text-[var(--text-sm)] text-[var(--color-primary)]">
            {alumni.position}
          </p>
          <span className="flex items-center gap-1.5 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]">
            <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {alumni.company}
          </span>
        </div>

        {/* Programme badge */}
        <div>
          <GreenBadge>{alumni.programSlug.toUpperCase().replace(/-/g, " ")}</GreenBadge>
        </div>
      </CardContent>
    </Card>
  );
}