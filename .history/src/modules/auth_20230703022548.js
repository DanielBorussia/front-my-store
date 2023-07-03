import { Cookies } from "react-cookie";
import { login } from "../shared/Services/Auth";
import { setData } from "./utils";
import { createSlice } from "@reduxjs/toolkit";

export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

const cookies = new Cookies();
const currentUser = cookies.get("user") || {};


const initialState = {
    name : "",
    email: "",
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        addUserLogin: (state, action) => {
            const { name, email } = action.payload;
            state.name = name;
            state.email = email;
        },
        removeUser: (state, action) => {
            state.name = null;
            state.email = null;
        }
    }
})



/**
 * Calls the loginService and executes the given callback
 * @param {string} email user email
 * @param {string} password user password
 * @param {function} onLogin callback to run after login success
 * @param {function} onError callback to run after login error
 */
export const logIn = (email, password, onLogin, onError) => {
    console.log(email);
    console.log(password);
    login({ email, password })
    .then(( res ) => {
        console.log(res);
        cookies.set("user", res.user, { path: "/" });
        onLogin(res.user);
    })
    .catch((err) => {
        onError(err);
    });
};



/**
 * Delete the token cookie and logs out the user
 */
export const logOut = () => (dispatch) => {
    cookies.remove("user", { path: "/" });
    localStorage.clear();
    dispatch({
      type: LOGOUT,
    });
  };



export const { addUserLogin, removeUser } = userSlice.actions;
export default userSlice.reducer;