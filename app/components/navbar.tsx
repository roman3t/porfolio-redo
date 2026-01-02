import { Sidebar } from "./nav";
import { MobileNavbar } from "./nav/MobileNavbar";
import { TabletNavbar } from "./nav/TabletNavbar";

export default function Navbar() {
  return (
    <>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>

      <div className="hidden md:block xl:hidden border border-red-500">
        <TabletNavbar />
      </div>

      <div className="hidden xl:block">
        <Sidebar />
      </div>
    </>
  );
}
