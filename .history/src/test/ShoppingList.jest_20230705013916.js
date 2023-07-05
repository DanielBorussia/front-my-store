import ShoppingList from "../containers/ShoppingList";
import useGetOrders from "../hooks/useGetOrders";
import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
jest.mock('../hooks/useGetOrders');

describe('</ShoppingList>', () => {
    beforeEach(() => {
        const orders = [
           {
            "id": 3,
			"code": "r54jabjW7p",
			"total": 45000,
			"idUser": 1,
			"created_at": "2023-07-03T00:33:02.000000Z",
			"updated_at": "2023-07-03T00:33:02.000000Z",
			"products": [
				{
					"id": 1,
					"idOrder": 3,
					"idProduct": 1,
					"name": "Camiseta Colombia 22",
					"price": 200000,
					"image": "camiseta-uniforme-de-local-colombia-22.jpg",
					"created_at": "2023-07-03T00:33:02.000000Z",
					"updated_at": "2023-07-03T00:33:02.000000Z"
				}
			]
           }
        ];
        useGetOrders.mockImplementation(() => orders);
    });

    test('has same amount of cards as orders are provided', () => {
        render(<ShoppingList />);
        expect(screen.getAllByTestId('order-card')).toHaveLength(2);
    });
});

