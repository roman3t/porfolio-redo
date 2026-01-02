import type { Block } from "../../content/guidelines.data";
import Heading02 from "../heading-02";
import ImageCard from "./ImageCard";

export default function GalleryBlock({
  block,
}: {
  block: Extract<Block, { type: "gallery" }>;
}) {
  return (
    <div className="space-y-10">
      {block.items.map((it, idx) => (
        <section key={idx} className="space-y-4">
          <Heading02>{it.title}</Heading02>
          <ImageCard
            src={it.image.src}
            alt={it.image.alt}
            height={it.image.height}
          />
        </section>
      ))}
    </div>
  );
}
