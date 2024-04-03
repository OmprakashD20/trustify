import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/Home";

import LoginLayout from "@/pages/Auth/Login/LoginLayout";
import RegisterLayout from "@/pages/Auth/Register/RegisterLayout";

import InstituteDashboard from "@/pages/Institute/InstituteDashboard";
import VerifyLayout from "@/pages/Auth/Verify/VerifyLayout";

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
    </Routes>
  );
};

export default AppRoutes;
