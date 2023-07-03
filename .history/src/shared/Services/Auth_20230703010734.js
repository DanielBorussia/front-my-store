import { axiosInstanceMyStore } from "./Instance";

/**
 * 
 * @param {*} data 
 * @returns user logged in
 */
export const login = (data) => {
    return new Promise((resolve, reject) => {
        axiosInstanceMyStore.post(`/auth`, data)
        .then(( res ) => {
            console.log(res);
            if (!res || !res.data) {
                reject("Usuario o contraseña inválida");
            }
            localStorage.setItem("access_token", res.token);
            resolve(res.data);
        })
        .catch((error) => {
            reject("Usuario o contraseña inválidas");
        });
    });
    
};

/**
 * 
 * @param 
 * @returns user loggout
 */
export const logout = () => {
    return axiosInstanceMyStore.post(`/auth/logout`, );
};