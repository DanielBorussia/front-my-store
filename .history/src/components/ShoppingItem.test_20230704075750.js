import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingItem from './ShoppingItem';


describe('<ShoppingItem />', () => {
   

    test('Shows "MY COMPONENT!"', () => {
        const order = {
            "id" : 1,
            "code" : "AK47554s",
            "total" : 160000,
            "products" : []
        }
       render(<ShoppingItem order={order}/>)
    });
});