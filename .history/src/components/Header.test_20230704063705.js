import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('<Header />', () => {
    const component = render(<Header />);
    component.getByText('MY STORE');
});