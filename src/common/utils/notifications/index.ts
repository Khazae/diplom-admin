import { toast, ToastOptions } from "react-toastify";

const options: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const showSuccessNotification = (message: string) => {
  toast.success(message, options);
};

export const showErrorNotification = (message: string) => {
  toast.error(message, options);
};

export const showInfoNotification = (message: string) => {
  toast.info(message, options);
};
