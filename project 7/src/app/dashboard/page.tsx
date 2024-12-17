import { AppSidebar } from "@/components/app-sidebar";
import cipla from "../../components/ui/icons/cipla.png"
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DropdownDemo from "../../components/dropdown-menu";
import { Outlet } from "react-router-dom";
import Header from "@/components/app-header";

export default function Page() {

  return (
    <SidebarProvider>
      <Header />
      <AppSidebar  className="fixed top-[100px]  left-0 h-[calc(100vh-100px)    transition-all duration-300" />
      <SidebarInset className="mt-[100px] shadow-md border-t-0 border-r-2  mr-20 bg-background text-foreground">
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}


