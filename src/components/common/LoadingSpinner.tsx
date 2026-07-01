import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: "h-4 w-4 border-[1.5px]",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-2",
};

export function LoadingSpinner({
  size = "md",
  className,
  label = "Memuat...",
}: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <span
        className={cn(
          "rounded-full border-[var(--color-border)] border-t-[var(--color-primary)] animate-spin",
          sizeMap[size]
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}