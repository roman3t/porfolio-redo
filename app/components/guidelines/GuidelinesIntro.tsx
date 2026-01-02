import Link from "next/link";
import type { Section } from "@/app/content/guidelines.data";
import { Text } from "@/app/components/ui/Text";

export default function GuidelinesIntro({ sections }: { sections: Section[] }) {
  return (
    <section>
      <div className="overflow-hidden">
        <div
          className="relative flex h-65.5 items-center justify-center md:h-135 "
          style={{
            background:
              "radial-gradient(120% 120% at 18% 20%, #BFD0DA 0%, rgba(191,208,218,0.45) 25%, rgba(191,208,218,0) 48%), radial-gradient(120% 120% at 45% 40%, #F8C46C 0%, rgba(248,196,108,0.75) 35%, rgba(248,196,108,0) 62%), radial-gradient(120% 120% at 85% 60%, #F45F00 0%, rgba(244,95,0,0.85) 45%, rgba(244,95,0,0) 70%)",
          }}
        >
          <Text as="div" className="text-white" variant="h1">
            Redo
          </Text>
        </div>

        <div className="bg-white">
          <div className="pt-8 md:flex px-8 md:h-[416px] lg:h-[438px]">
            <div className="w-[316px] gap-8">
              <Text variant={"h1"}>
                Brand
                <br />
                Guidelines
              </Text>
            </div>

            <div className="md:max-w-[388px] lg:max-w-[515px] text-[#575757] space-y-6">
              <Text className="leading-[1.55] text-sm" variant={"paragraph"}>
                This guide defines the visual language, design style, and
                principles that shape a clear and consistent brand experience,
                no matter the team or area of expertise.
              </Text>
              <Text className="leading-[1.55] text-sm" variant={"paragraph"}>
                At its core, Redo is about precision and clarity—just like our
                mission to correct financial errors and optimize balance sheets.
                This guide lays out the essential design standards that bring
                our brand to life, from our color system and typography to
                accessibility benchmarks and documentation.
              </Text>
              <Text className="leading-[1.55] text-sm" variant={"paragraph"}>
                Whether you’re designing for digital platforms or printed
                materials, these guidelines ensure every touchpoint reflects the
                trust and efficiency at the heart of Redo.
              </Text>
            </div>
          </div>

          <div className="border-t border-black/10 px-5 py-10 tablet:px-8 desktop:px-10">
            <div className="grid gap-8 tablet:grid-cols-[360px_1fr] desktop:grid-cols-[420px_1fr]">
              <Text as="div" variant="paragraphBold" className="text-black/90">
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
                        variant="link"
                        className="w-7 text-black/60"
                      >
                        {s.number}
                      </Text>

                      <Text as="span" variant="link" className="text-black/90">
                        {s.title}
                      </Text>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
