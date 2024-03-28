import { cn } from "@/utils/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconLockAccess,
  IconShieldCheck,
  IconCode,
  IconReportAnalytics,
} from "@tabler/icons-react";

import { Feature1, Feature2, Feature3, Feature4 } from "@/constants";

const Services = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
};

export default Services;

const Header = ({ feature, imgStyle }) => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
      src={feature}
      alt="feature_logo"
      className={cn("w-full object-cover", imgStyle)}
    />
  </div>
);

const items = [
  {
    title: "Decentralized Verification",
    description:
      "Empower users to verify certificates independently without relying on centralized authorities.",
    header: <Header feature={Feature1} imgStyle={"bg-top"}/>,
    className: "md:col-span-2",
    icon: <IconShieldCheck className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Immutable Certificate Records",
    description:
      "Ensure the integrity and security of certificates through blockchain technology.",
    header: <Header feature={Feature2} imgStyle={"bg-top"}/>,
    className: "md:col-span-1",
    icon: <IconLockAccess className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Transparent Credential History",
    description:
      "Provide transparent and auditable records of certificate issuance and updates for enhanced trust and accountability.",
    header: <Header feature={Feature3} imgStyle={"bg-top"}/>,
    className: "md:col-span-1",
    icon: <IconReportAnalytics className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Smart Contract Automation",
    description:
      "Automate certificate issuance and validation processes using smart contracts for efficiency and reliability.",
    header: <Header feature={Feature4} imgStyle={"bg-top"}/>,
    className: "md:col-span-2",
    icon: <IconCode className="h-4 w-4 text-indigo-500" />,
  },
];
