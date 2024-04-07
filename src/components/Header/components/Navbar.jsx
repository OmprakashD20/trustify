import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { LogOut } from "lucide-react";

import { useInstituteContext } from "@/context/InstituteContext";

import { Logo, navItems } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "@/utils";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { auth } = useInstituteContext();
  const { currentPage, handleLogout } = useAppContext();
  const [mounted, setMounted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="mx-4 my-3 flex justify-between">
      <div className="flex gap-x-2 items-center">
        <img src={Logo} alt="Trustify Logo" className="size-9" />
        <p className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-semibold text-xl">
          Trustify
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="flex gap-x-2 items-center border border-neutral-300 rounded-md text-neutral-900 bg-neutral-100 py-0.5 space-x-2 px-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
          {navItems.map((item) => {
            if (auth && item.title === "Login") return;
            return (
              <HashLink
                key={item.title}
                smooth
                to={item.path}
                className={cn(
                  "py-[4.5px] hover:text-indigo-500 dark:hover:text-indigo-500",
                  currentPage === item.path &&
                    "text-indigo-500 dark:text-indigo-500"
                )}
              >
                {item.title}
              </HashLink>
            );
          })}
        </div>
        {auth && currentPage !== "/institute" && (
          <Button
            className="px-3 text-base rounded dark:bg-indigo-600/30 dark:border-indigo-800/40 border-indigo-800/40 border-2 dark:text-gray-50 text-indigo-600 dark:hover:bg-indigo-600/50 transition-colors duration-300 bg-transparent hover:bg-transparent"
            variant="outline"
            onClick={() => navigate("/institute")}
          >
            Dashboard
          </Button>
        )}
        <ThemeSwitcher />
        {auth && (
          <Button
            className="px-3 text-base rounded dark:bg-indigo-600/30 dark:border-indigo-800/40 border-indigo-800/40 border-2 dark:text-gray-50 text-indigo-600 dark:hover:bg-indigo-600/50 transition-colors duration-300 bg-transparent hover:bg-transparent"
            variant="outline"
            onClick={handleLogout}
          >
            <LogOut size={20} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
