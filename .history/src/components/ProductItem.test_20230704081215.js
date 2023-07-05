import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';
import ProductItem from './ProductItem';


describe('<ProductItem />', () => {
    test('render content', () => {
        const product = {
            "id" : 1,
            "name" : "Camiseta Colombia",
            "price" : 260000,
            "image" : "camiseta-uniforme-de-local-colombia-22.jpg",
        }
       const component = render(<ProductItem product={product}/>);
       const iconButton = component.getByRole('button');
       console.log(iconButton);
       expect(component.getByText(product.name));
    });
});