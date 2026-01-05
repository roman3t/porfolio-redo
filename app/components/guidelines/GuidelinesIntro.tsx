import Link from "next/link";
import type { Section } from "@/app/content/guidelines.types";
import { Text } from "@/app/components/ui/Text";

export default function GuidelinesIntro({ sections }: { sections: Section[] }) {
  return (
    <section>
      <div className="overflow-hidden">
        <div
          className=" md:mt-0 relative flex h-65.5 items-center justify-center md:h-135"
          style={{
            background:
              "radial-gradient(120% 120% at 18% 20%, #BFD0DA 0%, rgba(191,208,218,0.45) 25%, rgba(191,208,218,0) 48%), radial-gradient(120% 120% at 45% 40%, #F8C46C 0%, rgba(248,196,108,0.75) 35%, rgba(248,196,108,0) 62%), radial-gradient(120% 120% at 85% 60%, #F45F00 0%, rgba(244,95,0,0.85) 45%, rgba(244,95,0,0) 70%)",
          }}
        >
          <Text as="div" className="text-white" variant="h1">
            Redo
          </Text>
        </div>

        <div className="px-5 md:px-8 ">
          <div
            className="

                  md:grid md:grid-cols-1
                  md:grid-cols-[316px_1fr]
                  md:gap-8
                  lg:grid-cols-[419px_1fr]
                  md:h-104 
                  lg:h-101.5
                  

                  mt-8
                  pb-20
                  border-b
                  border-black/10
            "
          >
            <div className="mb-8 md:w-79 lg:w-[419px] bg-red-300">
              <Text variant={"h1"}>
                Brand
                <br className="hidden md:block" /> Guidelines
              </Text>
            </div>

            <div
              className="text-[#575757] 
                        md:space-y-6
                        md:bg-yellow-400
                        lg:bg-blue-600
                      "
            >
              <Text variant={"paragraph"} preserveNewlines>
                {`This guide defines the visual language, design style, and principles that shape a clear and consistent brand experience, no matter the team or area of expertise.

                At its core, Redo is about precision and clarity—just like our mission to correct financial errors and optimize balance sheets. This guide lays out the essential design standards that bring our brand to life, from our color system and typography to
                accessibility benchmarks and documentation.

                Whether you’re designing for digital platforms or printed materials, these guidelines ensure every touchpoint reflects the trust and efficiency at the heart of Redo.`}
              </Text>
            </div>
          </div>

          <div
            className="
                  mt-8
                  pb-20
                  border-b
                  border-black/10"
          >
            <Text as="div" variant="h2" className="text-black mb-7.5">
              Contents
            </Text>

            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 hover:text-black"
                  >
                    <Text
                      as="span"
                      variant={"h2"}
                      className="w-7 text-[#575757]"
                    >
                      {s.number}
                    </Text>

                    <Text as="span" variant="h2" className="text-black">
                      {s.title}
                    </Text>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
