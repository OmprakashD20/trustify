import api from "./axios";

const url = "/institute";

//institute details
export const apiInstituteDetails = async () => {
  try {
    const response = await api.get(`${url}/`);

    const {
      name,
      code,
      email,
      phone,
      proof,
      templates,
      certificateFormats,
      isApproved,
      isEmailVerified,
    } = response.data;

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

    return institute;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//upload institute proof
export const apiUploadProof = async (data) => {
  try {
    const response = await api.post(`${url}/upload-proof`, data);

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//upload institute's certificate templates
export const apiUploadCertificateTemplate = async (data) => {
  try {
    const response = await api.post(`${url}/upload-template`, data);

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};

//add certificate format
export const apiAddCertificateFormat = async (data) => {
  try {
    const response = await api.post(`${url}/add-certificate-format`, data);

    const { message } = response.data;

    return message;
  } catch (error) {
    if (error.response) throw error.response.data.error;
    throw error;
  }
};
