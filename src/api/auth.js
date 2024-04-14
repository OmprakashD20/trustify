import api from "./axios";
import Cookies from "js-cookie";

const url = "/";

//admin login
export const apiAdminLogin = async (data) => {
  try {
    const response = await api.post(`${url}login/admin`, data);

    const { token, message } = response.data;

    Cookies.set("token", token);

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//instiute register
export const apiInstituteRegister = async (data) => {
  try {
    const response = await api.post(`${url}register/institute`, data);

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//institute login
export const apiInstituteLogin = async (data) => {
  try {
    const response = await api.post(`${url}login/institute`, data);

    const {
      name,
      code,
      email,
      phone,
      proof,
      templates,
      certificateFormats,
      token,
      message,
      isApproved,
      isEmailVerified,
    } = response.data;

    if (isEmailVerified) Cookies.set("token", token);

    const institute = {
      name,
      code,
      email,
      phone,
      proof,
      templates,
      certificateFormats,
      isApproved,
      isEmailVerified,
    };

    return { institute, message };
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//institute verify email
export const apiInstituteVerifyEmail = async (data) => {
  try {
    const response = await api.post(`${url}verify/institute`, data);

    const {
      name,
      code,
      email,
      phone,
      proof,
      templates,
      certificateFormats,
      token,
      message,
      isApproved,
      isEmailVerified,
    } = response.data;

    if (isEmailVerified) Cookies.set("token", token);

    const institute = {
      name,
      code,
      email,
      phone,
      proof,
      templates,
      certificateFormats,
      isApproved,
      isEmailVerified,
    };

    return { institute, message };
  } catch (error) {
    console.log(error);
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//institute forgot password
export const apiInstituteForgotPassword = async (data) => {
  try {
    const response = await api.post(`${url}forgot-password/institute`, data);

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//institute reset password
export const apiInstituteResetPassword = async ({ data, token }) => {
  try {
    const response = await api.post(
      `${url}reset-password/institute?token=${token}`,
      data
    );

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};
