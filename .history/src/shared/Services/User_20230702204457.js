import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param  
 * @returns add user
 */
export const addUser = () => {
    return axiosInstanceMyStore.get(`/users`);
};