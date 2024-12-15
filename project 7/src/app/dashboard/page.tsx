import { AppSidebar } from "@/components/app-sidebar";
import cipla from "../../components/ui/icons/cipla.png"
import {kulcare} from "../../components/ui/icons/kulcare_logo_black .svg"

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DropdownDemo from "../../components/dropdown-menu";
import { Outlet } from "react-router-dom";

export default function Page() {

  return (
    <SidebarProvider>
      <header className="fixed top-0 border-2 shadow-md  left-0 right-0 z-10 flex h-[100px] items-center justify-between bg-background text-foreground">
        <h2 className="px-4"> KULCARE</h2>
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <img src = {cipla} style={{width:"100px"}} alt ="cipla" />
        </div>
        <div className="px-4">
          <DropdownDemo />
        </div>
      </header>

      <AppSidebar  className="fixed top-[100px]  left-0 h-[calc(100vh-100px)  border-t-2  transition-all duration-300" />

      <SidebarInset className="mt-[100px] shadow-md     border-r-2  mr-20 bg-background text-foreground">
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}


