import { Cookies } from "react-cookie";
// Services
import { login } from "../../shared/Services/Auth";
import { addUser } from "../../shared/Services/User";
// Redux
import { createSlice } from "@reduxjs/toolkit";

const cookies = new Cookies();
const currentUser = cookies.get("user") || {};


const initialState = {
    name :currentUser.name,
    email: currentUser.email,
    id: currentUser.id,
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        addUserLogin: (state, action) => {
            const { name, email, id } = action.payload;
            state.name = name;
            state.email = email;
            state.id = id;
        },
        removeUser: (state, action) => {
            cookies.remove("user", { path: "/" });
            localStorage.clear();
            state.name = null;
            state.email = null;
            state.id = null;
        }
    }
})



/**
 * Calls the login service and executes the given callback
 * @param {string} email user email
 * @param {string} password user password
 * @param {function} onLogin callback to run after login success
 * @param {function} onError callback to run after login error
 */
export const logIn = (email, password, onLogin, onError) => {
    login({ email, password })
    .then(( res ) => {
        cookies.set("user", res.user, { path: "/" });
        onLogin(res.user);
    })
    .catch((err) => {
        onError(err);
    });
};

/**
 * Calls the register user and executes the given callback
 * @param {string} data user data
 * @param {function} onRegister callback to run after register success
 * @param {function} onError callback to run after register error
 */
export const signIn = (data, onRegister, onError) => {
    addUser(data)
    .then(( res ) => {
        cookies.set("user", res.user, { path: "/" });
        onRegister(res.user);
    })
    .catch((err) => {
        onError(err);
    });
};


export const { addUserLogin, removeUser } = userSlice.actions;
export default userSlice.reducer;