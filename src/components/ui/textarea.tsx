import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[120px] w-full resize-y",
          "rounded-[var(--radius-sm)] border bg-[var(--color-surface)]",
          "px-4 py-3 font-body text-[var(--text-base)] text-[var(--color-text-primary)]",
          "placeholder:text-[#9CA3AF]",
          "transition-colors duration-[var(--duration-base)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-0",
          "focus-visible:border-[var(--color-primary)] focus-visible:shadow-[var(--shadow-inner)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          !error && "border-[var(--color-border)]",
          error && "border-red-400 bg-red-50 focus-visible:border-red-500 focus-visible:ring-red-400",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };