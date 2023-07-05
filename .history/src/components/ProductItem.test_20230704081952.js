import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';
import ProductItem from './ProductItem';


describe('<ProductItem />', () => {
    let component;
    beforeEach(() => {
        const product = {
            "id" : 1,
            "name" : "Camiseta Colombia",
            "price" : 260000,
            "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
        }
        component = render(<ProductItem product={product}/>);
    });

    test('render content', () => {
       const iconButton = component.getByRole('button');
       component.debug(iconButton);
       fireEvent.click(iconButton);
       expect(component.getByText(product.name));
    });
});