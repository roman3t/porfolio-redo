import { cn } from "@/app/lib/cn";

type ImageCardProps = {
  src: string;
  alt: string;
  heightClass?: string;
  className?: string;
};

export default function ImageCard({
  src,
  alt,
  heightClass,
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-black/5",
        heightClass,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
