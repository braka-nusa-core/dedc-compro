"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface NavLinkProps {
  item: NavItem;
  /** visual context — controls color scheme */
  variant?: "navbar" | "mobile" | "footer";
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  item,
  variant = "navbar",
  onClick,
  className,
}: NavLinkProps) {
  const pathname = usePathname();

  // Active: exact match for "/" otherwise startsWith
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname.startsWith(item.href);

  if (variant === "navbar") {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "relative font-body font-medium text-[var(--text-sm)] transition-colors duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-sm",
          // Active indicator — green underline
          "after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[var(--color-primary)] after:transition-transform after:duration-[var(--duration-base)] after:origin-left",
          isActive
            ? "text-[var(--color-primary)] after:scale-x-100"
            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] after:scale-x-0",
          className
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  if (variant === "mobile") {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "flex items-center w-full px-4 py-3 rounded-[var(--radius-md)]",
          "font-body font-medium text-[var(--text-base)]",
          "transition-colors duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1",
          isActive
            ? "bg-[var(--color-green-tint)] text-[var(--color-primary)]"
            : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]",
          className
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {isActive && (
          <span
            className="mr-3 h-4 w-[3px] rounded-full bg-[var(--color-primary)] shrink-0"
            aria-hidden="true"
          />
        )}
        {item.label}
      </Link>
    );
  }

  // Footer variant
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "font-body text-[var(--text-sm)] text-[#9CA3AF]",
        "transition-colors duration-[var(--duration-base)]",
        "hover:text-white",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)] rounded-sm",
        className
      )}
    >
      {item.label}
    </Link>
  );
}