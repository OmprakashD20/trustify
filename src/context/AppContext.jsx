import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";

import { useInstituteContext } from "@/context/InstituteContext";
import toast from "react-hot-toast";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { setAuth, setInstitute } = useInstituteContext();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("/");

  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentPage(location ? location.pathname : "/");
  }, [location]);

  //logout
  const handleLogout = async () => {
    //todo: handle logout based on the user type
    Cookies.remove("token");
    toast.success("Logged out successfully");
    navigate("/");
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
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentPage,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined)
    throw new Error("useAppContext must be used within a AppProvider");

  return context;
};
