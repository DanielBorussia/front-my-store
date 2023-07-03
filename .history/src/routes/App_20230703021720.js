import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import ShoppingList from '../containers/ShoppingList';
import LoginPage from '../pages/LoginPage';
import '../styles/Global.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';


const App = () => {
    const initialState = useInitialState();
    return (
        //encapsular la aplicacion para compartir la informacion
        <Provider store={store}>
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/products" element={<Home/>} />
                <Route exact path="/orderList" element={<ShoppingList/>} />
                <Route exact path="/login" element={<LoginPage/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
        </Provider>
    );
}

export default App;