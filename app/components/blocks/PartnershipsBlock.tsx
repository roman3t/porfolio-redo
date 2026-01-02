import type { Block } from "../../content/guidelines.data";
import Heading02 from "../heading-02";

export default function PartnershipsBlock({
  block,
}: {
  block: Extract<Block, { type: "partnerships" }>;
}) {
  return (
    <section className="space-y-4">
      <Heading02>{block.title}</Heading02>

      <div className="rounded-xl bg-[#1A0A0A] p-6">
        <div className="flex items-center justify-center gap-6">
          <img src={block.image.src} alt={block.image.alt} className="h-6" />
          <div className="h-6 w-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
