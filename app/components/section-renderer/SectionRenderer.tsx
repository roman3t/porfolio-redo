import Heading01 from "../heading-01";
import type { Section } from "../../content/guidelines.data";
import SectionLayout from "../section-layout";
import { renderBlock } from "./renderBlock";

export default function SectionRenderer({ section }: { section: Section }) {
  return (
    <div className="
                  mt-8
                  pb-20
                  px-5
                  md:py-22
                  lg:pt-8
                  lg:pb-30
                  border-b
                  border-black/10
            ">
      <SectionLayout
        left={
          <Heading01>
            <span className="text-[#F45F00]">{section.number}</span>{" "}
            <span>{section.title}</span>
          </Heading01>
        }
        right={
          <div className="space-y-8">
            {section.blocks.map((block, idx) => (
              <div key={idx}>{renderBlock(block)}</div>
            ))}
          </div>
        }
      />
    </div>
  );
}
