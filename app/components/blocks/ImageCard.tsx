type ImageCardProps = {
  src: string;
  alt: string;
  height?: number | string;
  className?: string;
};

export default function ImageCard({
  src,
  alt,
  height,
  className,
}: ImageCardProps) {
  return (
    <div className={`w-full overflow-hidden rounded-xl bg-black/5 ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={height ? { height } : undefined}
      />
    </div>
  );
}
