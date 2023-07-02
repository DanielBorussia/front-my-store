import axios from "axios";

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