import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param {*} data 
 * @returns user logged in
 */
export const login = (data) => {
    return axiosInstanceMyStore.post(`/auth`, data);
};

/**
 * 
 * @param 
 * @returns user loggout
 */
export const logout = () => {
    return axiosInstanceMyStore.post(`/auth/logout`, );
};