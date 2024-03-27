import {
  LucideHome,
  LucideInfo,
  LucideContact,
  LucideWallet,
} from "lucide-react";

import Logo from "@/assets/logo.svg";
import Trustify from "@/assets/hero.png";

export { Logo, Trustify };

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
    path: "#",
    icon: LucideInfo,
  },
  {
    id: 3,
    title: "Services",
    path: "#",
    icon: LucideWallet,
  },
  {
    id: 4,
    title: "Contact",
    path: "#",
    icon: LucideContact,
  },
];
