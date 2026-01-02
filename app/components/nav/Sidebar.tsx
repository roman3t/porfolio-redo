import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";

export function Sidebar() {
  return (
    <aside className="fixed h-screen w-[250px] border-r border-black/10">
      <div className="flex flex-col px-8">
        <SidebarHeader />
        <SidebarNav />
        <SidebarFooter />
      </div>
    </aside>
  );
}
