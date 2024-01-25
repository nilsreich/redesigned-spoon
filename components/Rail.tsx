"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { HomeIcon, LogInIcon, SettingsIcon, User2Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

const RailItems = [
  {
    tooltip: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    tooltip: "Login",
    href: "/login",
    icon: LogInIcon,
  },
  {
    tooltip: "About",
    href: "/about",
    icon: User2Icon,
  },
];
export const Rail = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4 grow">
      {RailItems.map((item) => (
        <TooltipProvider key={item.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                asChild
              >
                <Link href={item.href}>
                  <item.icon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>{item.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <div className="grow" />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <SettingsIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            {theme === "light" ? (
              <Button variant="ghost" onClick={() => setTheme("dark")}>
                light
              </Button>
            ) : (
              <Button onClick={() => setTheme("light")} variant={"ghost"}>
                dark
              </Button>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
