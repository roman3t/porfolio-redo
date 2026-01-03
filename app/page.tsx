import { sections } from "@/app/content/guidelines.data";
import SectionRenderer from "@/app/components/section-renderer/SectionRenderer";
import GuidelinesIntro from "./components/guidelines/GuidelinesIntro";

export default function Page() {
  return (
    <main className="">
      <div className="w-full">
        <GuidelinesIntro sections={sections} />
        {sections.map((s) => (
          <SectionRenderer key={s.id} section={s} />
        ))}
      </div>
    </main>
  );
}
