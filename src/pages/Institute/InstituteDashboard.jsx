import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useInstituteContext } from "@/context/InstituteContext";
import { Link } from "react-router-dom";

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
    <div className="pt-16 md:pt-24 pb-10 h-[100dvh] flex items-start justify-center gap-x-6">
      <Link to="/institute/upload-template" className="dark:text-neutral-100">
        Upload Template
      </Link>
      <Link
        to="/institute/add-certificate-format"
        className="dark:text-neutral-100"
      >
        Add Certificate Format
      </Link>
    </div>
  );
};

export default InstituteDashboard;
