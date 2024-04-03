import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { LogOut, LucideChevronRight, Paintbrush } from "lucide-react";
import { useInstituteContext } from "@/context/InstituteContext";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import ThemeSwitcher from "./ThemeSwitcher";

import { Logo, navItems } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { cn } from "@/utils";

const NavSheet = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const { auth } = useInstituteContext();
  const { currentPage, handleLogout } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="flex items-center m-3 justify-between">
      <div className="flex flex-1 gap-x-2 items-center">
        <img src={Logo} alt="Trustify Logo" className="size-9" />
        <p className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold text-xl">
          Trustify
        </p>
      </div>
      {isMobile && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={"icon"}
              variant={"outline"}
              className="mr-4 !bg-transparent"
            >
              <Paintbrush
                height={20}
                width={20}
                className="dark:text-indigo-500 text-indigo-500"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent sideOffset={15} asChild>
            <ThemeSwitcher />
          </PopoverContent>
        </Popover>
      )}
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="text-indigo-500 dark:text-indigo-500 size-10 p-2 rounded-md border dark:border-neutral-800" />
        </SheetTrigger>
        <SheetContent side="top" className="h-[60%] p-0 flex flex-col gap-y-0">
          <SheetHeader className="px-2 py-2 font-spaceGrotesk">
            <SheetTitle>
              <div className="flex gap-x-2 items-center">
                <img src={Logo} alt="Trustify Logo" className="size-9" />
                <p className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold text-xl">
                  Trustify
                </p>
              </div>
            </SheetTitle>
          </SheetHeader>
          <SheetDescription className="flex-1">
            <Separator />
            <ul className="mb-1 mt-2 flex flex-col gap-y-3 pl-2 pr-4 pb-3">
              {navItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={cn(
                      "w-full rounded-md text-start transition-all duration-300 ease-in-out dark:hover:bg-white/10 hover:bg-indigo-500/65",
                      currentPage === item.path &&
                        "bg-indigo-500/65 dark:bg-white/10 text-neutral-100"
                    )}
                  >
                    <HashLink
                      smooth
                      to={item.path}
                      className="group flex items-center justify-between py-1 pr-2 hover:text-neutral-100 font-spaceGrotesk"
                    >
                      <div className="group flex gap-x-2 justify-center items-center px-3 py-1 lg:px-4 xl:px-5 xl:py-1.5">
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                      <LucideChevronRight className="-translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                    </HashLink>
                  </li>
                );
              })}
            </ul>
            <Separator />
            {auth && (
              <SheetClose>
                <div
                  className="rounded-md text-start transition-all duration-300 ease-in-out dark:hover:bg-white/10 hover:bg-indigo-500/65 ml-2 mr-4 mt-3"
                  onClick={handleLogout}
                >
                  <div className="group flex items-center justify-between py-1 pr-2 hover:text-neutral-100 font-spaceGrotesk">
                    <div className="group flex gap-x-2 justify-center items-center px-3 py-1 lg:px-4 xl:px-5 xl:py-1.5">
                      <LogOut size={20} />
                      <span>Logout</span>
                    </div>
                    <LucideChevronRight className="-translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </SheetClose>
            )}
          </SheetDescription>
          <SheetFooter>
            <span className="text-center text-neutral-500 dark:text-neutral-500 font-spaceGrotesk text-xs">
              Trustify &copy; {new Date().getFullYear()}
            </span>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSheet;
