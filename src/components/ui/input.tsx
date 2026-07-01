import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full",
          "rounded-[var(--radius-sm)] border bg-[var(--color-surface)]",
          "px-4 py-3 font-body text-[var(--text-base)] text-[var(--color-text-primary)]",
          "placeholder:text-[#9CA3AF]",
          "transition-colors duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0",
          "focus-visible:border-[var(--color-primary)] focus-visible:shadow-[var(--shadow-inner)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Default border
          !error && "border-[var(--color-border)] focus-visible:border-[var(--color-primary)]",
          // Error state
          error && "border-red-400 bg-red-50 focus-visible:border-red-500 focus-visible:ring-red-400",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };