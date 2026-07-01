import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AspectRatio = "1/1" | "4/3" | "16/9" | "3/4" | "3/2";

interface OptimizedImageProps extends Omit<ImageProps, "className"> {
  aspectRatio?: AspectRatio;
  containerClassName?: string;
  imageClassName?: string;
  rounded?: boolean;
}

const aspectMap: Record<AspectRatio, string> = {
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "3/4": "aspect-[3/4]",
  "3/2": "aspect-[3/2]",
};

export function OptimizedImage({
  aspectRatio = "16/9",
  containerClassName,
  imageClassName,
  rounded = false,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectMap[aspectRatio],
        rounded && "rounded-[var(--radius-xl)]",
        containerClassName
      )}
    >
      <Image
        fill
        alt={alt}
        className={cn("object-cover", imageClassName)}
        {...props}
      />
    </div>
  );
}