import React from 'react'
import {
    SidebarTrigger,
  } from "@/components/ui/sidebar";
  import { Separator } from "@/components/ui/separator";
import DropdownDemo from './dropdown-menu';
import cipla from "./ui/icons/cipla.png"

export default function Header() {
  return (
    <header className="fixed top-0 border-2 shadow-md border-r-0 border-l-0 left-0 right-0 z-10 flex h-[100px] items-center justify-between bg-background text-foreground">
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
  )
}
