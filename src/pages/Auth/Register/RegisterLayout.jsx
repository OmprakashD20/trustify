import { z } from "zod";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Institution } from "@/constants";

import InstituteRegister from "./components/InstituteRegister";
import InstituteVerify from "./components/InstituteVerify";

const RegisterLayout = () => {
  const [bgImage, setBgImage] = useState(Institution);
  const pathname = useLocation().pathname;
  const instituteSchema = z
    .object({
      name: z.string().min(1, "Institute name is required"),
      email: z.string().email().min(1, "Email is required"),
      password: z.string().min(1, "Password is required"),
      confirmPassword: z.string().min(1, "Confirm Password is required"),
      otp: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const instituteDefaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  };

  const handleBgImage = (image) => setBgImage(image);

  return (
    <div className="pt-24 lg:pt-0 pb-10 h-[100dvh] flex items-center justify-center lg:grid lg:grid-cols-2 overflow-hidden">
      <img
        src={bgImage}
        alt="Register Image"
        className="hidden lg:block bg-fixed object-cover dark:brightness-[0.2] dark:grayscale"
      />
      <div className="flex items-center justify-center w-full mx-4">
        {pathname === "/register/institute" && (
          <InstituteRegister
            schema={instituteSchema}
            defaultValues={instituteDefaultValues}
            handleBgImage={handleBgImage}
          />
        )}
        {pathname === "/institute/verify" && <InstituteVerify />}
      </div>
    </div>
  );
};

export default RegisterLayout;
