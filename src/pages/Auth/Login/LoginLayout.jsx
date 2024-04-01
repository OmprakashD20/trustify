import { z } from "zod";
import { useLocation } from "react-router-dom";

import { User, Institution, Admin } from "@/constants";

import AdminLogin from "./components/AdminLogin";
import InstituteLogin from "./components/InstituteLogin";
import UserLogin from "./components/UserLogin";

const LoginLayout = () => {
  const pathname = useLocation().pathname;

  const adminSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });

  const adminDefaultValues = {
    username: "",
    password: "",
  };

  const userSchema = z.object({
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
  });

  const userDefaultValues = {
    email: "",
    password: "",
  };

  const instituteSchema = z.object({
    name: z.string().min(1, "Institute name is required"),
    code: z.string().min(1, "Institute code is required"),
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
  });

  const instituteDefaultValues = {
    name: "",
    code: "",
    email: "",
    password: "",
  };

  return (
    <div className="pt-24 lg:pt-0 pb-10 h-[100dvh] flex items-center justify-center lg:grid lg:grid-cols-2 overflow-hidden">
      <div className="flex items-center justify-center w-full mx-4">
        {pathname === "/login/user" && (
          <UserLogin schema={userSchema} defaultValues={userDefaultValues} />
        )}
        {pathname === "/login/institute" && (
          <InstituteLogin
            schema={instituteSchema}
            defaultValues={instituteDefaultValues}
          />
        )}
        {pathname === "/login/admin" && (
          <AdminLogin schema={adminSchema} defaultValues={adminDefaultValues} />
        )}
      </div>
      <img
        src={
          pathname === "/login/user"
            ? User
            : pathname === "/login/institute"
            ? Institution
            : Admin
        }
        alt="Login Image"
        className="hidden lg:block object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  );
};

export default LoginLayout;
