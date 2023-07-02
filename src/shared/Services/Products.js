import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param  
 * @returns list of all products
 */
export const getAllProducts = () => {
    return axiosInstanceMyStore.get(`/products`);
};