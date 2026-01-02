import { Text } from "@/app/components/ui/Text";

export function SidebarFooter() {
  return (
    <div className="h-8 mt-6">
      <div className="flex flex-col gap-1 text-[14px] text-black/60">
        <Text as="span" variant="link" className="text-text-1 ">
          Download Kit
        </Text>
        <Text as="span" variant="link" className="text-text-1 ">
          Contact Us
        </Text>
      </div>
    </div>
  );
}
