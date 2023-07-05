import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<Header />', () => {
    const initialState = { user: null };
    const mockStore = configureStore();
    let store;

    test('Shows "MY STORE!"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect(getByText('MY STORE')).not.toBeNull();
    });
});