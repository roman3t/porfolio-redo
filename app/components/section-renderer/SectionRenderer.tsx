import Heading01 from "../heading-01";
import type { Section } from "../../content/guidelines.data";
import SectionLayout from "../section-layout";
import { renderBlock } from "./renderBlock";

export default function SectionRenderer({ section }: { section: Section }) {
  return (
    <div className="py-14 md:py-20 lg:py-24">
      <SectionLayout
        left={
          <Heading01>
            <span className="text-[#F45F00]">{section.number}</span>{" "}
            <span>{section.title}</span>
          </Heading01>
        }
        right={
          <div className="space-y-10">
            {section.blocks.map((block, idx) => (
              <div key={idx}>{renderBlock(block)}</div>
            ))}
          </div>
        }
      />
    </div>
  );
}
