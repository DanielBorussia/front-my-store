import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('<Header />', () => {
    const initialState = { user: null };
    const mockStore = configureStore();
    let store;

    it('Shows "MY STORE!"', () => {
      
    });
});