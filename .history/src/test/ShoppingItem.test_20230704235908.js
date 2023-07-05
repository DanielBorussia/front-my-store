import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from '../components/ShoppingItem';


describe('<ShoppingItem />', () => {
    test('render content', () => {
        const order = {
            "id" : 1,
            "code" : "AK47554s",
            "total" : 160000,
            "created_at" : "2023-07-03 00:33:02",
            "products" : [
                {
                    "id" : 1,
                    "name" : "Camiseta Colombia",
                    "price" : 260000,
                    "image" : "camiseta-uniforme-de-local-colombia-22.jpg"
                }
            ]
        };
        
        const component = render(<ShoppingItem order={order}/>);
        const image = component.getByAltText(order.products[0].name);
        expect(component.getByText(`Tu Pedido: ${order.code}`));
        expect(image.src).toContain(order.products[0].image);
    });
});