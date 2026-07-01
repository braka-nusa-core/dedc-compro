import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col overflow-hidden transition-all",
  {
    variants: {
      variant: {
        // Default — programme cards, general cards
        default: [
          "bg-[var(--color-surface)] border border-[var(--color-border)]",
          "rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)] hover:-translate-y-0.5",
        ],
        // Feature cards — Why DEDC, large content
        feature: [
          "bg-[var(--color-surface)] border border-[#E5E7EB]",
          "rounded-[var(--radius-2xl)] shadow-[var(--shadow-md)]",
          "hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5",
        ],
        // Trainer profile cards
        trainer: [
          "bg-[var(--color-surface)] border border-[#E5E7EB]",
          "rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5",
        ],
        // Alumni success cards
        alumni: [
          "bg-[var(--color-surface)] border border-[#E5E7EB]",
          "rounded-[var(--radius-2xl)] shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-md)]",
        ],
        // Testimonial cards
        testimonial: [
          "bg-[var(--color-surface)] border border-[#E5E7EB]",
          "rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-md)]",
        ],
        // Cards on dark (#0B0F14) section backgrounds
        dark: [
          "bg-[#111827] border border-[#1F2937]",
          "rounded-[var(--radius-xl)]",
          "hover:border-[var(--color-primary)]",
        ],
        // Programme listing cards
        program: [
          "bg-[var(--color-surface)] border border-[#E5E7EB]",
          "rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)] hover:-translate-y-0.5",
        ],
        // Flat — no shadow, no border — used inside already-elevated containers
        flat: [
          "bg-[var(--color-surface-muted)]",
          "rounded-[var(--radius-lg)]",
        ],
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading font-semibold text-[var(--text-h4)] text-[var(--color-text-primary)] leading-snug",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-body text-[var(--text-sm)] text-[var(--color-text-secondary)] leading-relaxed",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 pt-4 mt-auto border-t border-[var(--color-border)]",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };