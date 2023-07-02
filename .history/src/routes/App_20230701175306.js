import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import ShoppingList from '../containers/ShoppingList';

const App = () => {
    const initialState = useInitialState();
    return (
        //encapsular la aplicacion para compartir la informacion
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/products" element={<Home/>} />
                <Route exact path="/OrderList" element={<ShoppingList/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
     
    );
}

export default App;