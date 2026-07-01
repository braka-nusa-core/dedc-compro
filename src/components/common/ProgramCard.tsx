import Link from "next/link";
import { Clock, Award, ArrowRight, Wifi, MapPin, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "./OptimizedImage";
import { GreenBadge } from "./GreenBadge";
import type { ProgramCardData } from "@/types";

interface ProgramCardProps {
  program: ProgramCardData;
  className?: string;
}

const modeLabel: Record<ProgramCardData["mode"], string> = {
  online: "Online",
  offline: "Offline",
  both: "Online & Offline",
};

const modeBadgeVariant: Record<
  ProgramCardData["mode"],
  "online" | "offline" | "default"
> = {
  online: "online",
  offline: "offline",
  both: "default",
};

export function ProgramCard({ program, className }: ProgramCardProps) {
  const href = `/programs/${program.slug}`;

  return (
    <Link href={href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-[var(--radius-xl)]">
      <Card
        variant="program"
        padding="none"
        className={cn("h-full group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5 group-hover:shadow-[var(--shadow-md)] transition-[box-shadow,border-color,transform] duration-[var(--duration-slow)]", className)}
      >
        {/* Thumbnail */}
        <div className="relative">
          <OptimizedImage
            src={program.thumbnailSrc}
            alt={`${program.name} training program`}
            aspectRatio="16/9"
            containerClassName="rounded-t-[var(--radius-xl)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          {/* Mode badge */}
          <div className="absolute top-3 left-3">
            <Badge variant={modeBadgeVariant[program.mode]}>
              {program.mode === "online" ? (
                <Wifi className="h-3 w-3" aria-hidden="true" />
              ) : program.mode === "offline" ? (
                <MapPin className="h-3 w-3" aria-hidden="true" />
              ) : null}
              {modeLabel[program.mode]}
            </Badge>
          </div>
          {/* Featured badge */}
          {program.featured && (
            <div className="absolute top-3 right-3">
              <GreenBadge>Populer</GreenBadge>
            </div>
          )}
        </div>

        <CardContent className="p-5 gap-3">
          {/* Title */}
          <h3 className="font-heading font-semibold text-[var(--text-h4)] text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-base)]">
            {program.name}
          </h3>

          {/* Tagline */}
          <p className="font-body text-[var(--text-sm)] text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
            {program.tagline}
          </p>

          {/* Highlights */}
          {program.highlights.length > 0 && (
            <ul className="flex flex-col gap-1" aria-label="Materi utama">
              {program.highlights.slice(0, 3).map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-1.5 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </CardContent>

        <CardFooter className="px-5 pb-5 pt-4 flex-col items-start gap-3 border-t border-[var(--color-border)]">
          {/* Meta row */}
          <div className="flex items-center gap-4 w-full">
            <span className="flex items-center gap-1 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]">
              <Clock className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
              {program.duration}
            </span>
            {program.hasCertificate && (
              <span className="flex items-center gap-1 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]">
                <Award className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
                Sertifikat
              </span>
            )}
            {program.lastBatch && (
              <span className="flex items-center gap-1 font-body text-[var(--text-xs)] text-[var(--color-text-secondary)] ml-auto">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                Batch: {program.lastBatch}
              </span>
            )}
          </div>

          {/* CTA link */}
          <span className="flex items-center gap-1 font-body font-semibold text-[var(--text-sm)] text-[var(--color-primary)] group-hover:gap-2 transition-all duration-[var(--duration-base)]">
            Detail Program
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}