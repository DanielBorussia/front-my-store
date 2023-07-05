import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('<Login />', () => {
    test('render component', () => {
        const component = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        expect(component.getByText('Iniciar Sesión'));
    });
});