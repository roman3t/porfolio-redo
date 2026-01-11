import { ImageAsset } from "@/app/content/guidelines.types";
import Heading02 from "../heading-02";
import { Text } from "../ui/Text";

export default function GradientSectionBlock({
  title,
  gradients,
}: {
  title: string;
  gradients: { name: string; image: ImageAsset }[];
}) {
  return (
    <section className="space-y-6 px-8 mt-8">
      <Heading02>{title}</Heading02>

      <div className=" grid grid-cols-1 gap-x-10 gap-y-8 md:gap-y-5 md:gap-x-8 md:grid-cols-2">
        {gradients.map((g) => (
          <div key={g.name} className="min-w-0 space-y-2.5">
            <div className="w-full overflow-hidden">
              <img
                src={g.image.src}
                alt={g.image.alt}
                className={[
                  "w-full object-cover",
                  g.image.size?.kind === "class" ? g.image.size.value : "",
                ].join(" ")}
                style={
                  g.image.size?.kind === "px"
                    ? { height: g.image.size.value }
                    : undefined
                }
              />
            </div>
            <Text variant={"caption2"}>{g.name}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
