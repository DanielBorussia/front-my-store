import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppContext from '../context/AppContext';

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
        const component = render(
            <AppContext.Provider value={initialState}>
                <OrderItem handleClose={{}}/>
            </AppContext.Provider>
        );

        const iconButton = component.getByRole('Realizar Compra');
        expect(iconButton).toBeInTheDocument();
    });
});