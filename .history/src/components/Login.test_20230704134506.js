import React from 'react';
import { fireEvent, prettyDOM, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import { LoginFormMock } from '../test/mocks/LoginForm.mock';

describe('<Login />', () => {
    let component, inputEmail, inputPass, buttonLogin;
    beforeEach(() => {
        const mockStore = configureStore();
        const initialState = {
            user: {
                
            }
        };
        const store = mockStore(initialState)
        component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        inputPass = screen.getByRole("textbox", { type: /password/i });
        inputEmail = screen.getByRole("textbox",{ name: /Email/i })
        buttonLogin = component.getByText("Login");
    });
    
    test('render component with the following fields: email, password and a submit button', () => {
       
        expect(component.getByText('Iniciar Sesión')).toBeInTheDocument();
        expect(inputPass).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(buttonLogin).toBeInTheDocument();
    });

    test("login valid data", async () => {
        await userEvent.type(inputEmail, LoginFormMock.email);
        await userEvent.type(inputPass, LoginFormMock.password);
        await waitFor(() => {
            console.log(inputEmail.value);
            expect(inputEmail.value).toBe(LoginFormMock.email);
            expect(inputPass).toBe(LoginFormMock.password);
        })
    });
       
});