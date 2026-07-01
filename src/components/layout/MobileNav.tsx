"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { navLinks } from "@/config/navigation";
import { buildWAUrl } from "@/lib/whatsapp";
import { SITE_NAME } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const close = () => onOpenChange(false);
  const waUrl = buildWAUrl("navbar");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent id="mobile-navigation" side="right" className="flex flex-col p-0 w-[300px] sm:w-[340px]">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b border-[var(--color-border)]">
          <SheetTitle className="font-heading font-bold text-[var(--text-h4)] text-[var(--color-text-primary)] text-left">
            {SITE_NAME}
          </SheetTitle>
          <p className="font-body text-[var(--text-xs)] text-[var(--color-text-secondary)] text-left -mt-1">
            Professional Engineering Training
          </p>
        </SheetHeader>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto px-3 py-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  variant="mobile"
                  onClick={close}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className={cn(
          "px-4 py-5 border-t border-[var(--color-border)]",
          "bg-[var(--color-surface-muted)]"
        )}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi via WhatsApp (tab baru)"
            onClick={close}
          >
            <Button variant="whatsapp" size="md" className="w-full">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Konsultasi via WhatsApp
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}