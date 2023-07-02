import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param {*} data 
 * @returns user logged in
 */
export const login = (data) => {
    return axiosInstanceMyStore.post(`/auth/`, data);
};