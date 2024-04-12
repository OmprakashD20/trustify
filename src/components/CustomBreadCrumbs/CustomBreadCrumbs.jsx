import { Link } from "react-router-dom";

import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CustomBreadCrumbs = ({ previousPages = [], currentPage = "" }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {previousPages.map((previousPage, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink>
                <Link to={previousPage.to}>{previousPage.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumbs;