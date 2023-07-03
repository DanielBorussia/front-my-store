export const setData = (actionName, payload) => {
    console.log("-----.☻>");
    console.log(actionName, payload);
    return dispatch => {
        dispatch({ 
            type: actionName, 
            payload: payload
        });
    }
}