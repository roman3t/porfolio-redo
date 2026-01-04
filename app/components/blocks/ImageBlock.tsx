import { Block } from "@/app/content/guidelines.data";
import ImageCard from "./ImageCard";

export default function ImageBlock({
  block,
}: {
  block: Extract<Block, { type: "image" }>;
}) {
  return (
    // <ImageCard src={block.src} alt={block.alt} height={block.height} />
    <ImageCard
      src={block.src}
      alt={block.alt}
      heightClass={block.heightClass}
    />
  );
}
