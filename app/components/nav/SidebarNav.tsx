import Link from "next/link";
import { Text } from "@/app/components/ui/Text";

const items = [
  { label: "Brand Strategy", number: "01" },
  { label: "Personality", number: "02" },
  { label: "Logo", number: "03" },
  { label: "Color", number: "04" },
  { label: "Typography", number: "05" },
  { label: "Art Direction", number: "06" },
];

export function SidebarNav() {
  return (
    <nav className="pb-7.5">
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.number}>
            <Link
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-baseline gap-1"
            >
              <Text as="span" variant="link" className="text-text-1 ">
                {item.label}
              </Text>

              <Text as="span" variant="display" className="text-text-2 -translate-y-1 -translate-x-1 text-[#575757]">
                {item.number}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
