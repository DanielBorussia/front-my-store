import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param  
 * @returns add user
 */
export const addUser = (data) => {
    return new Promise((resolve, reject) => {
        axiosInstanceMyStore.post(`/users`, data)
        .then(( res ) => {
            if (!res || !res.data) {
                reject("Ha existido un error inesperado");
            }
            localStorage.setItem("access_token", res.data.token);
            resolve(res.data);
        })
        .catch((error) => {
            reject(error.message);
        });
    });
    
};