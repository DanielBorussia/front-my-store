import React, { createContext, useContext } from 'react';
import { fireEvent, prettyDOM, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';
import ProductItem from './ProductItem';


describe('<ProductItem />', () => {
    let component;
    const product = {
        "id" : 1,
        "name" : "Camiseta Colombia",
        "price" : 260000,
        "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
    }
    beforeEach(() => {
      
        component = render(<ProductItem product={product}/>);
    });

    test('render content', () => {
        const AppContext = createContext({});
        const mockAddToCart = jest.fn();
        const removeFromCart = jest.fn();
        const state = { cart : []};
        const initialState = {
            state,
            mockAddToCart,
            removeFromCart
        }
      
        const {getByText} = render(
              <AppContext.Provider value={initialState}>
                <ProductItem product={product}/>
              </AppContext.Provider>
        );
       

       
       expect(getByText(product.name));
    //   const { addToCart } = useContext(AppContext);
      // const iconButton = screen.getByRole('button');
       //fireEvent.click(iconButton);
    });
});