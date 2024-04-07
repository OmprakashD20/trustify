import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/Home";

import LoginLayout from "@/pages/Auth/Login/LoginLayout";
import RegisterLayout from "@/pages/Auth/Register/RegisterLayout";

import InstituteDashboard from "@/pages/Institute/InstituteDashboard";
import VerifyLayout from "@/pages/Auth/Verify/VerifyLayout";

import ForgotPasswordLayout from "@/pages/Auth/ForgotPassword/ForgotPasswordLayout";
import ResetPasswordLayout from "@/pages/Auth/ResetPassword/ResetPasswordLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/user" element={<LoginLayout />} />
      <Route path="/login/institute" element={<LoginLayout />} />
      <Route path="/login/admin" element={<LoginLayout />} />
      <Route path="/register/institute" element={<RegisterLayout />} />
      <Route path="/institute" element={<InstituteDashboard />} />
      <Route path="/institute/verify" element={<VerifyLayout />} />
      <Route
        path="/institute/forgot-password"
        element={<ForgotPasswordLayout />}
      />
      <Route
        path="/institute/reset-password"
        element={<ResetPasswordLayout />}
      />
    </Routes>
  );
};

export default AppRoutes;
