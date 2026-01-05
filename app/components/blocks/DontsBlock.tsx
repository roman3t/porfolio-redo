import Heading02 from "../heading-02";
import type { Block } from "../../content/guidelines.types";
import ImageCard from "./ImageCard";

export default function DontsBlock({
  block,
}: {
  block: Extract<Block, { type: "donts" }>;
}) {
  return (
    <section className="space-y-6">
      <Heading02>{block.title}</Heading02>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {block.items.map((it, idx) => (
          <div key={idx} className="min-w-0 space-y-3">
            <ImageCard image={it.image} />

            <div className="flex items-center gap-2 text-sm font-medium text-black">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] leading-none text-white">
                ×
              </span>
              <span className="min-w-0">{it.rule}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
