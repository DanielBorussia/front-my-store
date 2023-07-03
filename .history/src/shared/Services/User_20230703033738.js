import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param  
 * @returns add user
 */
export const addUser = (data) => {
    return axiosInstanceMyStore.post(`/users`, data);
};