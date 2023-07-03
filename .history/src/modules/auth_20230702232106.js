import { Cookies } from "react-cookie";

export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

const cookies = new Cookies();
const currentUser = cookies.get("user") || {};


const initialState = {
    user : currentUser,
}

const authModule = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
            ...state,
            ...action.payload
            };

        case LOGOUT:
            return {
              ...state,
              user : {}
            };

        default:
            return state;
    }

}

/**
 * Calls the loginService and executes the given callback
 * @param {string} email user email
 * @param {string} password user password
 * @param {function} onLogin callback to run after login success
 * @param {function} onError callback to run after login error
 */
export const logIn = (email, password) => {
    console.log(email);
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

export default authModule;