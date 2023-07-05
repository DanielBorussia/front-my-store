import React from 'react';
import { act, fireEvent, prettyDOM, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe('<Login />', () => {
    const mockStore = configureStore();
    test('render component', async() => {
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
        
        
        act(() => {
            fireEvent.change(inputEmail, { target: { value: "daniel@gmail.com"}});
            fireEvent.change(inputPass, { target: { value: "123456"}});
            fireEvent.click(buttonLogin);
        });
        expect(component.getByText('Iniciar Sesión')).toBeInTheDocument();
        expect(inputPass).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
    });
       
});