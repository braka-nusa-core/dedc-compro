import { cn } from "@/lib/utils";

interface GreenBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function GreenBadge({ children, className }: GreenBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1",
        "bg-[var(--color-green-tint)] text-[var(--color-green-700)]",
        "font-body font-medium text-[var(--text-xs)] tracking-wide",
        "select-none",
        className
      )}
    >
      {children}
    </span>
  );
}