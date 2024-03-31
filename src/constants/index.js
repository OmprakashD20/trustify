import {
  LucideHome,
  LucideInfo,
  LucideContact,
  LucideWallet,
} from "lucide-react";

import Logo from "@/assets/logo.svg";
import Trustify from "@/assets/hero.webp";

import Feature1 from "@/assets/feature1.webp";
import Feature2 from "@/assets/feature2.webp";
import Feature3 from "@/assets/feature3.webp";
import Feature4 from "@/assets/feature4.webp";

export { Logo, Trustify, Feature1, Feature2, Feature3, Feature4 };

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/#top",
    icon: LucideHome,
  },
  {
    id: 2,
    title: "About",
    path: "/#about",
    icon: LucideInfo,
  },
  {
    id: 3,
    title: "Features",
    path: "/#features",
    icon: LucideWallet,
  },
  {
    id: 4,
    title: "Contact",
    path: "/#contact",
    icon: LucideContact,
  },
];
