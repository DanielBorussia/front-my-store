import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('<Login />', () => {
    test('render component', () => {
        const component = render(
            <Provider store={}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
            </Provider>
        );
        expect(component.getByText('Iniciar Sesión'));
    });
});