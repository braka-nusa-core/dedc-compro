import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./AnimatedCounter";

interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function MetricCard({
  value,
  suffix = "+",
  label,
  duration = 1500,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10 md:py-12 px-4 md:px-6",
        className
      )}
    >
      {/* Number row */}
      <div className="flex items-baseline gap-0.5" aria-hidden="true">
        <AnimatedCounter
          to={value}
          duration={duration}
          className="font-heading font-bold text-[1.625rem] md:text-[var(--text-h1)] text-[var(--color-text-primary)] leading-none"
        />
        <span className="font-heading font-bold text-[var(--text-h3)] md:text-[var(--text-h2)] text-[var(--color-primary)] leading-none">
          {suffix}
        </span>
      </div>

      {/* Accessible full value for screen readers */}
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>

      {/* Label */}
      <p
        className="mt-2 font-body font-medium text-[var(--text-xs)] text-[var(--color-text-secondary)] uppercase tracking-wide text-center"
        aria-hidden="true"
      >
        {label}
      </p>
    </div>
  );
}