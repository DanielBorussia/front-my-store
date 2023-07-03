import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param  
 * @returns add user
 */
export const addUser = (data) => {
    return axiosInstanceMyStore.get(`/users`, data);
};