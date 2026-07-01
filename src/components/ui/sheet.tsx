"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  [
    "fixed z-50 bg-[var(--color-surface)] shadow-[var(--shadow-xl)]",
    "transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:duration-300 data-[state=open]:duration-500",
  ],
  {
    variants: {
      side: {
        right: [
          "inset-y-0 right-0 h-full w-4/5 max-w-sm",
          "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        ],
        left: [
          "inset-y-0 left-0 h-full w-4/5 max-w-sm",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        ],
      },
    },
    defaultVariants: { side: "right" },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side, className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        className={cn(
          "absolute right-4 top-4",
          "inline-flex items-center justify-center h-8 w-8 rounded-full",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-surface-muted)]",
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
        )}
        aria-label="Tutup menu"
      >
        <X className="h-5 w-5" />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 px-6 py-5 border-b border-[var(--color-border)]", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("font-heading font-semibold text-[var(--text-h4)] text-[var(--color-text-primary)]", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("font-body text-sm text-[var(--color-text-secondary)]", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose,
  SheetContent, SheetHeader, SheetTitle, SheetDescription,
};