import React from 'react';
import { cleanup, fireEvent, prettyDOM, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import { LoginFormMock } from './mocks/LoginForm.mock';
import  axios  from 'axios';

/*jest.mock('axios',() => {
    const mAxiosInstance = { get: jest.fn() };
    return {
        create: jest.fn(() => mAxiosInstance),
        interceptors: {
            request: { use: jest.fn()  },
            response: { use: jest.fn() },
        },
    };
});*/

describe('<Login />', () => {
    let component, inputEmail, inputPass, buttonLogin;
    afterAll(cleanup);
    afterAll(jest.clearAllMocks);

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
        inputEmail = screen.getByRole("textbox", { name: /Email/i });
        buttonLogin = screen.getByText("Login");
    });
    
    test('render component with the following fields: email, password and a submit button', () => {
        expect(component.getByText('Iniciar Sesión')).toBeInTheDocument();
        expect(inputPass).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(buttonLogin).toBeInTheDocument();
    });

    test("login valid data", async() => {
        fireEvent.change(inputEmail, { 
            target: { value: LoginFormMock.email }, 
        });
        await waitFor(() => {
            expect(inputEmail.value).toBe(LoginFormMock.email);
        });
        fireEvent.change(inputPass, { 
            target: { value: LoginFormMock.password },
        });
        await waitFor(() => {
            expect(inputPass.value).toBe(LoginFormMock.password);
        });

        //await userEvent.click(buttonLogin);

        //const data = await axiosInstanceMyStore.post('auth', {})
        //expect(axios.post).toHaveBeenCalled();
      
    });
       
});