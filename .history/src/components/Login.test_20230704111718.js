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
        const inputPass = component.getByRole("textbox", { type: "password"});
        const inputEmail = component.getByRole("textbox",{ type: "text"});
        const buttonLogin = component.getByText("Login");
        fireEvent.change(inputEmail, { target: { value: 'daniel@gmail.com'}});
        fireEvent.change(inputPass, { target: { value: '123456'}});
        
        fireEvent.click(buttonLogin);
        expect(component.getByText('Iniciar Sesión'));
    });
});