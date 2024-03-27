import { cn } from "@/utils/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconLockAccess,
  IconShieldCheck,
  IconCode,
  IconReportAnalytics,
} from "@tabler/icons-react";

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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Decentralized Verification",
    description:
      "Empower users to verify certificates independently without relying on centralized authorities.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconShieldCheck className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Immutable Certificate Records",
    description:
      "Ensure the integrity and security of certificates through blockchain technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconLockAccess className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Transparent Credential History",
    description:
      "Provide transparent and auditable records of certificate issuance and updates for enhanced trust and accountability.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconReportAnalytics className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Smart Contract Automation",
    description:
      "Automate certificate issuance and validation processes using smart contracts for efficiency and reliability.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconCode className="h-4 w-4 text-indigo-500" />,
  },
];
