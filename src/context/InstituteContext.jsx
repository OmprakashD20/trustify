import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

//api
import {
  apiInstituteRegister,
  apiInstituteLogin,
  apiInstituteVerifyEmail,
  apiUploadProof,
  apiInstituteDetails,
  apiInstituteForgotPassword,
  apiInstituteResetPassword,
} from "@/api";

import { OTP } from "@/constants";
import Cookies from "js-cookie";

export const InstituteContext = React.createContext();

export const InstituteProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [institute, setInstitute] = useState({
    name: "",
    code: "",
    email: "",
    phone: "",
    proof: [],
    isApproved: false,
    isEmailVerified: false,
  });

  const navigate = useNavigate();
  const INSTITUTE_DASHBOARD = "/institute";
  const PROOF_UPLOAD_PATH = "/institute/verify";

  const refreshInstitute = async () => {
    const token = Cookies.get("token");

    if (!token) return;

    apiInstituteDetails()
      .then((data) => {
        setInstitute(data);
        setAuth(true);
      })
      .catch((err) => {
        console.log(err);
        Cookies.remove("token");
        setAuth(false);
        setInstitute({
          name: "",
          code: "",
          email: "",
          phone: "",
          proof: [],
          isApproved: false,
          isEmailVerified: false,
        });
      });
  };

  //registration
  const handleInstituteRegister = async (data, setShowOTP, handleBgImage) => {
    toast.promise(apiInstituteRegister({ ...data }), {
      loading: "Registering...",
      success: (message) => {
        setShowOTP(true);
        handleBgImage(OTP);
        return message;
      },
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  //login
  const handleInstituteLogin = async (data, setShowOTP, handleBgImage) => {
    toast.promise(apiInstituteLogin({ ...data }), {
      loading: "Logging in...",
      success: (data) => {
        //navigate to the proof upload page after the email is verified
        if (
          data.institute.isEmailVerified &&
          data.institute.proof.length === 0
        ) {
          setShowOTP(true);
          handleBgImage(OTP);
          navigate(PROOF_UPLOAD_PATH, { replace: true });
          return data.message;
        }

        //navigate to the dashboard after the email is verified and the institute has already uploaded the proof
        if (data.institute.isEmailVerified) {
          setInstitute(data.institute);
          setAuth(true);
          navigate(INSTITUTE_DASHBOARD, { replace: true });
        }

        return data.message;
      },
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  //verify email
  const handleInstituteVerifyEmail = async (data) => {
    toast.promise(apiInstituteVerifyEmail({ ...data }), {
      loading: "Verifying...",
      success: (data) => {
        setInstitute(data.institute);
        setAuth(true);

        //navigate to the proof upload page after the email is verified
        if (
          data.institute.isEmailVerified &&
          data.institute.proof.length === 0
        ) {
          navigate(PROOF_UPLOAD_PATH, { replace: true });
          return data.message;
        }

        //navigate to the dashboard after the email is verified and the institute has already uploaded the proof
        if (data.institute.isEmailVerified)
          navigate(INSTITUTE_DASHBOARD, { replace: true });

        return data.message;
      },
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  //upload proof
  const handleInstituteProofUpload = async (data) => {
    return toast.promise(apiUploadProof({ proof: data }), {
      loading: "Uploading...",
      success: (message) => {
        // navigate(INSTITUTE_DASHBOARD, { replace: true });
        return message;
      },
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  //send reset password link
  const handleInstituteForgotPassword = async (data) => {
    return toast.promise(apiInstituteForgotPassword({ ...data }), {
      loading: "Sending reset link...",
      success: (message) => message,
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  //update password
  const handleInstituteResetPassword = async (data) => {
    toast.promise(apiInstituteResetPassword({ ...data }), {
      loading: "Updating...",
      success: (message) => {
        navigate("/institute/login", { replace: true });
        return message;
      },
      error: (err) => {
        return typeof err === "object" ? "Something went wrong..." : err;
      },
    });
  };

  useEffect(() => {
    refreshInstitute();
  }, [auth]);

  return (
    <InstituteContext.Provider
      value={{
        auth,
        setAuth,
        institute,
        setInstitute,
        refreshInstitute,
        handleInstituteRegister,
        handleInstituteLogin,
        handleInstituteVerifyEmail,
        handleInstituteProofUpload,
        handleInstituteForgotPassword,
        handleInstituteResetPassword,
      }}
    >
      {children}
    </InstituteContext.Provider>
  );
};

export const useInstituteContext = () => {
  const context = useContext(InstituteContext);

  if (context === undefined)
    throw new Error(
      "useInstituteContext must be used within a InstituteProvider"
    );

  return context;
};
