import axios from "axios";
import { handleError } from "../Components/ToastProvider";

const backend_url = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.getItem("token");

// Create an Axios instance with default headers
const api = axios.create({
  baseURL: backend_url,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

// Function to handle API requests dynamically with custom headers
export const apiRequest = async (
  method,
  endpoint,
  data = null,
  params = {},
  headers = {} // Accept custom headers
) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
      params,
      headers: {
        ...api.defaults.headers.common, // Preserve default headers
        ...headers, // Override with custom headers
      },
    });
    return response;
  } catch (error) {
    console.error("API Error:", error.response?.data.message);
    handleError(error);
    throw error;
  }
};

// CRUD Operations with custom headers support
export const apiGet = (endpoint, params, headers = {}) =>
  apiRequest("get", endpoint, null, params, headers);
export const apiPost = (endpoint, data, headers = {}) =>
  apiRequest("post", endpoint, data, {}, headers);
export const apiPut = (endpoint, data, headers = {}) =>
  apiRequest("put", endpoint, data, {}, headers);
export const apiPatch = (endpoint, data, headers = {}) =>
  apiRequest("patch", endpoint, data, {}, headers);
export const apiDelete = (endpoint, headers = {}) =>
  apiRequest("delete", endpoint, null, {}, headers);
