import React, { useContext } from 'react';


const AppContext = React.createContext({});
export const useAppContext = () => useContext(AppContext);
export default AppContext;