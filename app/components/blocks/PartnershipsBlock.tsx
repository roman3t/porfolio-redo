import Heading02 from "../heading-02";
import type { Block } from "../../content/guidelines.types";
import { cn } from "@/app/lib/cn";

export default function PartnershipsBlock({
  block,
}: {
  block: Extract<Block, { type: "partnerships" }>;
}) {
  const sizeClass =
    block.image?.size?.kind === "class" ? block.image.size.value : "h-[240px]";

  return (
    <section className="space-y-4">
      <Heading02>{block.title}</Heading02>

      <div className={cn("overflow-hidden bg-black", sizeClass)}>
        <img
          src={block.image.src}
          alt={block.image.alt}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
    </section>
  );
}
