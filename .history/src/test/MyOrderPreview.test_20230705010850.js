import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppContext from '../context/AppContext';
import MyOrderPreview from '../containers/MyOrderPreview';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<MyOrderPreview />', () => {
    test('render content', () => {
        const removeFromCart = jest.fn();
        const state = { cart : [
            {
                "id" : 1,
                "name" : "Camiseta Colombia",
                "price" : 260000,
                "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
            },
            {
                "id" : 2,
                "name" : "Buzo Essentials",
                "price" : 360000,
                "image" : "Buzo_con_Capucha_Essentials_Colorblock_Azul_HY5932_21_model.jpg",
            },
        ]};
        const initialState = {
            state,
            removeFromCart
        }
        const mockStore = configureStore();
        const initialStateRedux = {
            user: {
                "id" : 1,
                "name" : "Daniel"
            }
        };
        const store = mockStore(initialStateRedux)
        const component = render(
            <Provider store={store}>
            <AppContext.Provider value={initialState}>
                 <BrowserRouter>
                <MyOrderPreview handleClose={{}}/>
                </BrowserRouter>
            </AppContext.Provider>
            </Provider>
        );

        
        const iconButton = component.getByText('Realizar Compra');
        const image = component.getByAltText(state.cart[0].name);
        expect(iconButton).toBeInTheDocument();
        expect(image.src).toContain(state.cart[0].image);
    });
});