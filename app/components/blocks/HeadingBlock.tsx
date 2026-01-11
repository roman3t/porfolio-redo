import type { Block } from "../../content/guidelines.types";
import { Text } from "../ui/Text";

export default function HeadingBlock({
  block,
}: {
  block: Extract<Block, { type: "heading" }>;
}) {
  return (
    <>
      <div className="border-b border-black/10 w-full col-span-12 mb-8" />
      <div className="mb-8">
        <Text variant={"h2"}>{block.text}</Text>
      </div>
    </>
  );
}
