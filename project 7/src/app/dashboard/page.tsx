import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
      <header className="fixed top-0 border-2 shadow-md border-gray-200 left-0 right-0 z-10 flex h-[100px] items-center justify-between bg-background text-foreground">
        <h2 className="px-4">Kulcare</h2>
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="px-4">
          <DropdownDemo />
        </div>
      </header>

      <AppSidebar className="fixed top-[100px] left-0 h-[calc(100vh-100px) bg-gray-100 border-t-2 border-gray-200 transition-all duration-300" />

      <SidebarInset className="mt-[100px]  flex flex-1 flex-col border-gray-200 border-r-2  mr-20 bg-background text-foreground">
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
