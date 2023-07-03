import { Cookies } from "react-cookie";
import { login } from "../shared/Services/Auth";

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
 * @param {function} onError callback to run after login error
 */
export const logIn = (email, password, onError) => {
    console.log(email);
    console.log(password);
    login({ email, password })
    .then(( res ) => {
        console.log(res);
        cookies.set("user", res.user, { path: "/" });
        addUserlogin(res.user);
    })
    .catch((err) => {
        onError(err);
    });
};

const addUserlogin = (payload) => setData(LOGIN, payload);

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