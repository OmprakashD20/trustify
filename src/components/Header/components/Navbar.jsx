import { Link } from "react-router-dom";

import { Logo, navItems } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { currentPage } = useAppContext();
  const [mounted, setMounted] = useState(false);

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
        <div className="flex gap-x-2 items-center border border-neutral-950 dark:border-indigo-500 rounded-md divide-x divide-neutral-950 dark:divide-indigo-400/80 dark:bg-[#030303] bg-neutral-50 py-0.5">
          {navItems.map((item, index) => (
            <Link
              to={item.path}
              key={item.title}
              className={cn(
                "pl-3 pr-1 py-1 dark:text-neutral-100 hover:text-indigo-500 dark:hover:text-indigo-500",
                index === navItems.length - 1 && "pr-3",
                currentPage === item.path &&
                  "text-indigo-500 dark:text-indigo-500"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
