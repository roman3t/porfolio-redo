import { Block } from "@/app/content/guidelines.data";
import Heading02 from "../heading-02";

export default function ToneVoiceBlock({
  block,
}: {
  block: Extract<Block, { type: "toneVoice" }>;
}) {
  return (
    <section className="space-y-5">
      <Heading02>{block.title}</Heading02>

      <div className="space-y-4">
        {block.items.map((it, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-sm font-semibold text-black">{it.label}</div>
            <div className="text-sm text-black/60">{it.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
