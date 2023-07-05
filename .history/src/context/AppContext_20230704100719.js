import React, { useContext } from 'react';
import useInitialState from '../hooks/useInitialState';
const initialState = useInitialState();
export const useAppContext = () => useContext(AppContext);
const AppContext = React.createContext(initialState);
export default AppContext;