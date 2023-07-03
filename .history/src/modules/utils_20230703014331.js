export const setData = (actionName, payload) => {
    console.log("-----.☻>");
    return dispatch => {
        dispatch({ 
            type: actionName, 
            payload: payload
        });
    }
}