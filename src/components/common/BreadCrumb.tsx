import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export function Breadcrumb({ items, className, dark = false }: BreadcrumbProps) {
  const schema = breadcrumbSchema(items);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className={cn("w-full", className)}>
        <ol
          className="flex flex-wrap items-center gap-1"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.path}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />

                {isLast ? (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className={cn(
                      "font-body text-[var(--text-xs)] font-medium",
                      dark ? "text-[#9CA3AF]" : "text-[var(--color-text-secondary)]"
                    )}
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      itemProp="item"
                      className={cn(
                        "font-body text-[var(--text-xs)] font-medium transition-colors duration-[var(--duration-base)]",
                        dark
                          ? "text-[#9CA3AF] hover:text-white"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                      )}
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    <ChevronRight
                      className={cn(
                        "h-3 w-3 shrink-0",
                        dark ? "text-[#4B5563]" : "text-[var(--color-border)]"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}