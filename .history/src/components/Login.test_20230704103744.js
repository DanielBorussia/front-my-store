import React from 'react';
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

describe('<Login />', () => {
    test('render component', () => {
        const component = render(<Login />);
        expect(component.getByText('Iniciar Sesión'));
    });
});