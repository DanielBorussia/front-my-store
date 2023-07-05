import React, { useContext } from 'react';
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
        const AppContext = React.createContext({});
        const mockAddToCart = jest.fn();
        const removeFromCart = jest.fn();
        const state = { cart : []};
        const initialState = {
            state,
            mockAddToCart,
            removeFromCart
        }
        render(
            <AppContext.Provider value={initialState}>
                <ProductItem product={product}/>
            </AppContext.Provider>
        )
      // console.log(prettyDOM(iconButton));
       expect(component.getByText(product.name));
       const { addToCart } = useContext(AppContext);
       const iconButton = component.getByRole('button');
       fireEvent.click(iconButton);
    });
});