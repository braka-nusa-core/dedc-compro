import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Testimonial, TestimonialSource } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const sourceLabels: Record<TestimonialSource, string> = {
  whatsapp: "WhatsApp",
  google: "Google Review",
  instagram: "Instagram",
  video: "Video",
};

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0] ?? "")
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card
      variant="testimonial"
      padding="md"
      className={cn("h-full flex flex-col gap-4", className)}
    >
      <CardContent className="p-0 gap-4 flex flex-col h-full">
        {/* Source badge */}
        <div className="flex items-center justify-between">
          <Badge variant="default" className="text-[var(--text-xs)]">
            {sourceLabels[testimonial.source]}
          </Badge>

          {/* Star rating */}
          {testimonial.rating && (
            <div
              className="flex items-center gap-0.5"
              aria-label={`Rating ${testimonial.rating} dari 5`}
            >
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>

        {/* Quote */}
        <div className="flex-1">
          <Quote
            className="h-4 w-4 text-[var(--color-primary)] opacity-50 mb-2"
            aria-hidden="true"
          />
          <blockquote>
            <p className="font-body text-[var(--text-base)] text-[var(--color-text-primary)] leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Reviewer */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
          <Avatar size="sm" ring>
            {testimonial.reviewerPhoto && (
              <AvatarImage
                src={testimonial.reviewerPhoto}
                alt={`Foto ${testimonial.reviewerName}`}
              />
            )}
            <AvatarFallback>{initials(testimonial.reviewerName)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="font-body font-semibold text-[var(--text-sm)] text-[var(--color-text-primary)] truncate">
              {testimonial.reviewerName}
            </span>
            {testimonial.date && (
              <time
                dateTime={testimonial.date}
                className="font-body text-[var(--text-xs)] text-[var(--color-text-secondary)]"
              >
                {formatDate(testimonial.date)}
              </time>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}