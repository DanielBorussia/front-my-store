import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe('<Login />', () => {
    const mockStore = configureStore();
    test('render component', () => {
        const initialState = {
            user: {
                
            }
        }
        const store = mockStore(initialState)
        const component = render(
            <Provider store={store}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
            </Provider>
        );
        expect(component.getByText('Iniciar Sesión'));
        component.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'daniel@hotmail.com'}});
        component.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
        const buttonLogin = component.getByText('Login');
        fireEvent.click(buttonLogin);
    });
});