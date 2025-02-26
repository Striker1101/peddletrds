import axios from "axios";
import { handleError } from "../Components/ToastProvider";

const backend_url = process.env.REACT_APP_BACKEND_URL;
const token = localStorage.getItem("token");

// Create an Axios instance with default headers
const api = axios.create({
  baseURL: backend_url,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Function to handle API requests dynamically
export const apiRequest = async (
  method,
  endpoint,
  data = null,
  params = {}
) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
      params,
    });
    return response;
  } catch (error) {
    console.error("API Error:", error.response?.data.message);
    handleError(error);
    throw error;
  }
};

// CRUD Operations
export const apiGet = (endpoint, params) =>
  apiRequest("get", endpoint, null, params);
export const apiPost = (endpoint, data) => apiRequest("post", endpoint, data);
export const apiPut = (endpoint, data) => apiRequest("put", endpoint, data);
export const apiPatch = (endpoint, data) => apiRequest("patch", endpoint, data);
export const apiDelete = (endpoint) => apiRequest("delete", endpoint);
