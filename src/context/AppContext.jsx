import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";

import { useInstituteContext } from "@/context/InstituteContext";
import toast from "react-hot-toast";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("/");

  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentPage(location ? location.pathname : "/");
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        userType,
        setUserType,
        currentPage,
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
