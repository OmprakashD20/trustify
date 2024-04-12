import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

//api
import { apiAdminLogin } from "@/api";

import Cookies from "js-cookie";

import { useAppContext } from "./AppContext";

export const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {
  const { setUserType } = useAppContext();
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();
  const ADMIN_DASHBOARD = "/";

  const refreshAdmin = async () => {
    const token = Cookies.get("token");

    if (!token) return;
  };

  //login
  const handleAdminLogin = async (data) => {
    toast.promise(apiAdminLogin(data), {
      loading: "Logging in...",
      success: (message) => {
        setAuth(true);
        navigate(ADMIN_DASHBOARD);
        setUserType("admin");
        return message;
      },
      error: (error) => {
        return error;
      },
    });
  };

  //logout
  const handleAdminLogout = async () => {
    Cookies.remove("token");
    toast.success("Logged out successfully");
    navigate("/");
    setAuth(false);
    setUserType("");
  };

  useEffect(() => {
    refreshAdmin();
  }, [auth]);

  return (
    <AdminContext.Provider
      value={{
        auth,
        setAuth,
        handleAdminLogin,
        handleAdminLogout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (context === undefined)
    throw new Error("useAdminContext must be used within a AdminProvider");

  return context;
};
