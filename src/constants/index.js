import {
  LucideHome,
  LucideInfo,
  LucideContact,
  LucideWallet,
} from "lucide-react";

import Logo from "@/assets/logo.svg";

export { Logo };

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: LucideHome,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: LucideInfo,
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    icon: LucideWallet,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    icon: LucideContact,
  },
];
