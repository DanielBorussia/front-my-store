import React, { createContext, useContext } from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';
import ProductItem from './ProductItem';
import AppContext from '../context/AppContext';


describe('<ProductItem />', () => {
    let component;
    const product = {
        "id" : 1,
        "name" : "Camiseta Colombia",
        "price" : 260000,
        "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
    }


    test('render content', () => {
        const addToCart = jest.fn();
        const removeFromCart = jest.fn();
        const state = { cart : []};
        const initialState = {
            state,
            addToCart,
            removeFromCart
        }
  
        const c = render(
            <AppContext.Provider value={initialState}>
                <ProductItem product={product}/>
              </AppContext.Provider>
        );
        

       
        expect(c.getByText(product.name));
        const iconButton = c.getByRole('button');
        fireEvent.click(iconButton);
        expect(addToCart).toHaveBeenCalledTimes(1);
    });
});