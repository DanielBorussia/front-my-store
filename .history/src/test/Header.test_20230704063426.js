import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

test('<Header />', () => {
    const component = render(<Header />);
    component.getByText('MY STORE');
});