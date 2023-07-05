const axios = require("axios");

export const axiosInstanceMyStore = axios.create({
    baseURL: process.env.REACT_APP_API_MYSTORE_URL,
});

axiosInstanceMyStore.interceptors.response.use(
    (res) => res.data,
    (err) => {
      return new Promise((resolve, reject) => {
        reject(err.response.data);
      });
    }
);

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