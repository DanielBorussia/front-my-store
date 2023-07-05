import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingList from "../containers/ShoppingList";
import useGetOrders from "../hooks/useGetOrders";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Loading from '../shared/Components/Loading';

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
        /*STATE_SPY.mockReturnValue({
            loading: false,
            orders: orders,
        });*/
        useGetOrders.mockImplementation(() => {
            loading : false, orders
        });
    });

    test('has same amount of cards as orders are provided', () => {
        const mockStore = configureStore();
        const initialStateRedux = {
            user: {
                "id" : 1,
                "name" : "Daniel"
            }
        };
        const store = mockStore(initialStateRedux);
        render(
            <Provider store={store}>
                <ShoppingList />
            </Provider>
        );
        expect(screen.getAllByTestId('order-card')).toHaveLength(1);
    });
});

