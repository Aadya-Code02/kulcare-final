import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Bolt,
  BookOpen,
  ChevronDown,
  Layers2,
  LogOut,
  Pin,
  UserPen,
} from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";
import { useNavigate } from "react-router-dom";

export default function DropdownDemo() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, state)

    // Redirect to the desired route (e.g., login page or home page)
    navigate("/errorpage");
  };
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="ms-2 opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">Keith Kennedy</span>
          <span className="truncate text-xs font-normal text-muted-foreground dark:hover:bg-gray-600">
            k.kennedy@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="dark:hover:bg-gray-600">
            <Bolt size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 1</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:hover:bg-gray-600">
            <Layers2 size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:hover:bg-gray-600">
            <BookOpen size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 3</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="dark:hover:bg-gray-600">
            <Pin size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:hover:bg-gray-600">
            <UserPen size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Option 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="dark:hover:bg-gray-600" >
          <LogOut size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          <span onClick={handleLogout} className="cursor-pointer text-blue-500 hover:underline">
      Logout
    </span>        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>
            <ModeToggle />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
