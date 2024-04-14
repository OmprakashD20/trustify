import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useInstituteContext } from "@/context/InstituteContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CustomBreadCrumbs from "@/components/CustomBreadCrumbs/CustomBreadCrumbs";
import CertificateFormatForm from "./components/CertificateFormatForm";
import PreviewCertificateFormat from "./components/PreviewCertificateFormat";

const AddCertificateFormat = () => {
  const { auth, institute, handleAddCertificateFormat } = useInstituteContext();
  const [certificateFormat, setCertificateFormat] = useState({
    name: "",
    title: "",
    description1: "",
    description2: "",
    templateUrl: "",
    signerName: "",
    signerDesignation: "",
    signatureUrl: "",
  });
  const navigate = useNavigate();
  const breadcrumbItems = {
    previousPages: [
      {
        name: "Home",
        to: "/",
      },
      {
        name: "Dashboard",
        to: "/institute",
      },
    ],
    currentPage: "Add Certificate Format",
  };

  const handleSubmit = async () => {
    await handleAddCertificateFormat(certificateFormat);
  };

  if (!auth) {
    toast.error("Login to access this page");
    navigate("/", {
      replace: true,
    });
  }
  return (
    <div className="pt-20 flex flex-col gap-y-[5px] lg:h-[100dvh] gap-x-4 mx-6 dark:bg-black">
      <CustomBreadCrumbs {...breadcrumbItems} />
      <Card className="h-full bg-transparent border-none dark:border-none dark:bg-transparent">
        <CardContent className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:gap-x-12 max-md:p-0 h-full gap-y-4">
          <Card className="mt-2 h-full max-w-sm w-full">
            <CardHeader className="py-4 px-6">
              <CardTitle className="text-neutral-800 dark:text-neutral-200">
                Certificate Formats
              </CardTitle>
              <CardDescription>
                These are the formats that will be used to generate certificates
              </CardDescription>
            </CardHeader>
            <CardContent className="py-0 px-6 max-lg:mb-6">
              <PreviewCertificateFormat
                certificateFormats={institute.certificateFormats}
              />
            </CardContent>
          </Card>
          <CertificateFormatForm
            templateList={
              institute.templates?.length === 0 ? [] : institute.templates
            }
            certificateFormat={certificateFormat}
            setCertificateFormat={setCertificateFormat}
            handleSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCertificateFormat;
