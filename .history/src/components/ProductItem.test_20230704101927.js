import React, { createContext, useContext } from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';
import ProductItem from './ProductItem';
import AppContext from '../context/AppContext';


describe('<ProductItem />', () => {
    let component;
    let addToCart;
    const product = {
        "id" : 1,
        "name" : "Camiseta Colombia",
        "price" : 260000,
        "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
    }

    beforeEach(() => {
        addToCart = jest.fn();
        const removeFromCart = jest.fn();
        const state = { cart : []};
        const initialState = {
            state,
            addToCart,
            removeFromCart
        }
        component = render(
            <AppContext.Provider value={initialState}>
                <ProductItem product={product}/>
            </AppContext.Provider>
        );
    });


    test('render content and click button add cart', () => {
        expect(component.getByText(product.name));
        const iconButton = component.getByRole('button');
        fireEvent.click(iconButton);
        expect(addToCart).toHaveBeenCalledTimes(1);
    });
});