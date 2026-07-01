"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a Carousel");
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setApi?.(api);
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => { 
      api.off("select", onSelect); 
      api.off("reInit", onSelect); 
    };
  }, [api, onSelect, setApi]);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      ref={ref}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Sebelumnya"
      className={cn(
        "inline-flex items-center justify-center",
        "h-10 w-10 rounded-full",
        "border border-[var(--color-border)] bg-[var(--color-surface)]",
        "text-[var(--color-text-secondary)] shadow-[var(--shadow-sm)]",
        "transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
        "disabled:pointer-events-none disabled:opacity-30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      ref={ref}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Berikutnya"
      className={cn(
        "inline-flex items-center justify-center",
        "h-10 w-10 rounded-full",
        "border border-[var(--color-border)] bg-[var(--color-surface)]",
        "text-[var(--color-text-secondary)] shadow-[var(--shadow-sm)]",
        "transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
        "disabled:pointer-events-none disabled:opacity-30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel };
export type { CarouselApi };