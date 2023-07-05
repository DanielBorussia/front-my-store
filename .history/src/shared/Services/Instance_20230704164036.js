import axios from "axios";

export const axiosInstanceMyStore = axios.create({
    baseURL: process.env.REACT_APP_API_MYSTORE_URL,
});



axiosInstanceMyStore.interceptors.request.use(
  (config) => {
    const currentUser = localStorage.getItem("access_token") || "";
    if (currentUser) {
      config.headers["Authorization"] = `Bearer ${currentUser}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);