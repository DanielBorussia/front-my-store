import React, { useContext } from 'react';


export const useAppContext = () => useContext(AppContext);
const AppContext = React.createContext({
    state : [],
});
export default AppContext;