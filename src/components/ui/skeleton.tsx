import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-md)] bg-[var(--color-surface-muted)]",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

// Preset skeleton shapes for common components
function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--radius-xl)] border border-[var(--color-border)] p-6 space-y-4", className)}>
      <Skeleton className="h-12 w-12 rounded-[var(--radius-md)]" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

function SkeletonTrainerCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--radius-xl)] border border-[var(--color-border)] p-6 flex flex-col items-center gap-4", className)}>
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-4/5" : "w-full")}
        />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonTrainerCard, SkeletonText };