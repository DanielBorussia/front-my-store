import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../contextt/AppContext';
import Layout from '../containers/Layout';
import Home from '../pages/Home';

const App = () => {
    const initialState = useInitialState();
    return (
        //encapsular la aplicacion para compartir la informacion
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
     
    );
}

export default App;