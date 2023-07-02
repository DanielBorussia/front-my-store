import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param {*} idUser 
 * @returns orders by user
 */
export const getAllOrdersByUser = (idUser) => {
    return axiosInstanceMyStore.get(`/orders/${idUser}`);
};


/**
 * 
 * @param {*} data 
 * @returns created order
 */
export const addOrder = (data) => {
    return axiosInstanceMyStore.post(`/orders`, data);
};