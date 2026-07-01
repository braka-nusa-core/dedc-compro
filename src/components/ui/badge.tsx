import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1 rounded-full",
    "font-body font-medium text-xs tracking-wide",
    "transition-colors select-none",
  ],
  {
    variants: {
      variant: {
        // Default — green tint background
        default: "bg-[var(--color-green-tint)] text-[var(--color-green-700)] px-3 py-1",
        // On dark section backgrounds
        dark: "bg-[#1F2937] text-[#D1D5DB] px-3 py-1",
        // Primary green fill
        solid: "bg-[var(--color-primary)] text-[var(--color-brand-dark)] px-3 py-1",
        // Outline only
        outline: "border border-[var(--color-primary)] text-[var(--color-primary)] px-3 py-1",
        // Neutral — source badges for testimonials
        neutral: "bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] px-3 py-1",
        // Online mode badge
        online: "bg-blue-50 text-blue-700 px-3 py-1",
        // Offline mode badge
        offline: "bg-amber-50 text-amber-700 px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };