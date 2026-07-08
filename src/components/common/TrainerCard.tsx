import Link from "next/link";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GreenBadge } from "./GreenBadge";
import type { TrainerCardData } from "@/types";

interface TrainerCardProps {
  trainer: TrainerCardData;
  className?: string;
  /** If true, card links to an anchor or page for this trainer */
  linkable?: boolean;
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0] ?? "")
    .join("")
    .toUpperCase();
}

export function TrainerCard({ trainer, className, linkable = false }: TrainerCardProps) {
  const inner = (
    <Card
      variant="trainer"
      padding="none"
      className={cn(
        "h-full transition-[box-shadow,transform] duration-[var(--duration-slow)]",
        linkable && "hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 cursor-pointer",
        className
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        {/* Avatar */}
        <Avatar
          size="xl"
          ring
          className="ring-[rgba(50,215,75,0.2)] ring-offset-2"
        >
          <AvatarImage src={trainer.imageSrc} alt={`Foto ${trainer.name}`} />
          <AvatarFallback>{initials(trainer.name)}</AvatarFallback>
        </Avatar>

        {/* Name & title */}
        <div className="flex flex-col gap-1">
          <h3 className="font-heading font-semibold text-[var(--text-h4)] text-[var(--color-text-primary)] leading-snug">
            {trainer.name}
          </h3>
          <p className="font-body text-[var(--text-sm)] text-[var(--color-text-secondary)]">
            {trainer.title}
          </p>
        </div>

        {/* Experience badge */}
        <div className="flex items-center gap-1">
          <Briefcase className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
          <span className="font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]">
            {trainer.experienceYears}+ tahun pengalaman
          </span>
        </div>

        {/* Expertise tags */}
        {trainer.expertise.length > 0 && (
          <div
            className="flex flex-wrap justify-center gap-1.5"
            aria-label="Keahlian"
          >
            {trainer.expertise.slice(0, 3).map((skill) => (
              <GreenBadge key={skill}>{skill}</GreenBadge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (linkable) {
    return (
      <Link
        href={`/about#trainer-${trainer.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-[var(--radius-xl)]"
        aria-label={`Profil trainer ${trainer.name}`}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}