import React, { useContext } from 'react';
const initialState = useInitialState();
export const useAppContext = () => useContext(AppContext);
const AppContext = React.createContext(initialState);
export default AppContext;