import type { Block } from "@/app/content/guidelines.types";
import Heading02 from "../heading-02";

export default function SubheadingBlock({
  block,
}: {
  block: Extract<Block, { type: "subheading" }>;
}) {
  return (
    <Heading02>
      <span>{block.text}</span>
    </Heading02>
  );
}
