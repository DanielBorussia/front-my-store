import React, { useContext } from 'react';


const AppContext = React.createContext({
    state : [],
});
export const useAppContext = () => useContext(AppContext);
export default AppContext;