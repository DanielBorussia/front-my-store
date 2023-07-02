import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param {*} idUser 
 * @returns orders by user
 */
export const getAllOrdersByUser = (idUser) => {
    return axiosInstanceMyStore.get(`/orders/${idUser}`);
};