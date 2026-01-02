import { Sidebar } from "./nav";
import { MobileNavbar } from "./nav/MobileNavbar";
import { TabletNavbar } from "./nav/TabletNavbar";

export default function Navbar() {
  return (
    <>
      <div className="block tablet:hidden">
        <MobileNavbar />
      </div>

      <div className="hidden tablet:block xl:hidden border border-red-500">
        <TabletNavbar />
      </div>

      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </>
  );
}
