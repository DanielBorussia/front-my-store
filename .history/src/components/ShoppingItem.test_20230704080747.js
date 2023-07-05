import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';


describe('<ShoppingItem />', () => {
    test('render content', () => {
        const order = {
            "id" : 1,
            "code" : "AK47554s",
            "total" : 160000,
            "created_at" : "2023-07-03 00:33:02",
            "products" : []
        }
       const component = render(<ShoppingItem order={order}/>);
       expect(component.getByText(`Tu Pedido: ${order.code}`));
    });
});