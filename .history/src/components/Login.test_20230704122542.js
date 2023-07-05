import React from 'react';
import { act, fireEvent, prettyDOM, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import createMockStore from 'redux-mock-store';

describe('<Login />', () => {
    let component, inputEmail, inputPass, buttonLogin;
    beforeEach(() => {
        const initialState = {
            user: {
                
            }
        }
        const store = createMockStore(initialState);
        component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        inputPass = component.getByRole("textbox", { type: "password"});
        inputEmail = component.getByRole("textbox",{ type: "text"});
        buttonLogin = component.getByText("Login");
    });

    test('render component with the following fields: email, password and a submit button', () => {
       
        expect(component.getByText('Iniciar Sesión')).toBeInTheDocument();
        expect(inputPass).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(buttonLogin).toBeInTheDocument();
    });
       
});