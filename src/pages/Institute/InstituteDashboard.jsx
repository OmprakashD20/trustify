import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useInstituteContext } from "@/context/InstituteContext";

const InstituteDashboard = () => {
  const { auth } = useInstituteContext();
  const navigate = useNavigate();
  if (!auth) {
    toast.error("Login to access this page");
    navigate("/", {
      replace: true,
    });
  }
  return (
    <div className="pt-16 md:pt-24 pb-10 h-[100dvh] flex items-start justify-center"></div>
  );
};

export default InstituteDashboard;
