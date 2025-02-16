import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to handle success messages
export const handleSuccess = (message) => {
  toast.success(message || "Success!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

// Function to handle error messages
export const handleError = (error) => {
  const message =
    error?.response?.data?.message || error?.message || "Something went wrong!";
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

// ToastContainer should be placed in the main app component (App.js or index.js)
export function ToastProvider() {
  return <ToastContainer />;
}
