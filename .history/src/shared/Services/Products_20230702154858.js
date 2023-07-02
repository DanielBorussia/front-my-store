import { axiosInstanceMyStore } from "./Instance";

export const getAllProducts = () => {
    return axiosInstanceMyStore.get(`/products`);
};