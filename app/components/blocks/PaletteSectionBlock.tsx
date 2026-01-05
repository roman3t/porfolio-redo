import Heading02 from "../heading-02";
import { cn } from "@/app/lib/cn";

type Swatch = { name: string; hex: string; stroke?: boolean };

export default function PaletteSectionBlock({
  title,
  swatches,
}: {
  title: string;
  swatches: Swatch[];
}) {
  return (
    <section className="space-y-6">
      <Heading02>{title}</Heading02>

      <div className="grid grid-cols-1 gap-y-14 gap-x-10 md:grid-cols-4">
        {swatches.map((c) => (
          <div key={c.name} className="min-w-0 space-y-3">
            <div
              className={cn(
                "mx-auto aspect-square w-full rounded-full",
                "max-w-[340px] md:max-w-[260px] lg:max-w-[240px]"
              )}
              style={{
                backgroundColor: c.hex,
                border: c.stroke ? "1px solid rgba(0,0,0,0.85)" : "none",
              }}
            />

            <div className="text-[12px] leading-[1.2] text-black">
              <div className="font-medium">{c.name}</div>
              <div>Hex: {c.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
