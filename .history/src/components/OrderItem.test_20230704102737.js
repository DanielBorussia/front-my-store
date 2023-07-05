import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductItem from './ProductItem';
import AppContext from '../context/AppContext';
import OrderItem from './OrderItem';


describe('<ProductItem />', () => {
    let component;
    let removeFromCart;

    const product = {
        "id" : 1,
        "name" : "Camiseta Colombia",
        "price" : 260000,
        "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
    }

    beforeEach(() => {
        removeFromCart = jest.fn();
        const state = { cart : []};
        const initialState = {
            state,
            removeFromCart
        }
        component = render(
            <AppContext.Provider value={initialState}>
                <OrderItem product={product}/>
            </AppContext.Provider>
        );
    });


    test('render content and click button remove cart', () => {
        expect(component.getByText(product.name));
        const iconButton = component.getByRole('button');
        fireEvent.click(iconButton);
        expect(removeFromCart).toHaveBeenCalledTimes(1);
    });
});