import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-body font-semibold transition-all select-none",
    "rounded-[var(--radius-btn)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-[0.98] active:brightness-95",
  ],
  {
    variants: {
      variant: {
        // Solid green — primary CTA (Konsultasi via WhatsApp)
        primary: [
          "bg-[var(--color-primary)] text-[var(--color-brand-dark)]",
          "hover:bg-[var(--color-accent)] hover:shadow-[var(--shadow-green)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ],
        // Transparent with green border — secondary CTA (Lihat Program)
        outline: [
          "border-2 border-[var(--color-primary)] bg-transparent text-[var(--color-primary)]",
          "hover:bg-[var(--color-green-tint)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ],
        // Transparent, no border — tertiary / nav actions
        ghost: [
          "bg-transparent text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-surface-muted)]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ],
        // Dark background — CTAs on light sections
        dark: [
          "bg-[var(--color-brand-dark)] text-white",
          "hover:bg-[#1F2937]",
          "focus-visible:ring-offset-[var(--color-bg)]",
        ],
        // White fill — CTAs on dark (#0B0F14) sections
        white: [
          "bg-white text-[var(--color-brand-dark)]",
          "hover:bg-[var(--color-surface-muted)]",
          "focus-visible:ring-offset-[var(--color-brand-dark)]",
        ],
        // WhatsApp brand colour
        whatsapp: [
          "bg-[#25D366] text-white",
          "hover:bg-[#1DA851] hover:shadow-[0_4px_16px_0_rgba(37,211,102,0.3)]",
          "focus-visible:ring-[#25D366] focus-visible:ring-offset-[var(--color-bg)]",
        ],
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-11 px-6 py-3 text-base",
        lg: "h-13 px-8 py-4 text-base",
        xl: "h-15 px-10 py-5 text-lg",
        icon: "h-11 w-11 p-0",
        "icon-sm": "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };