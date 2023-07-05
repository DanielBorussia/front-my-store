import { renderHook } from "@testing-library/react-hooks";
import useGetOrders from "../hooks/useGetOrders";
import { render } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

/*test('should list orders', () => {
    const mockStore = configureStore();
    const initialStateRedux = {
        user: {
            "id" : 1,
            "name" : "Daniel"
        }
    };
    const store = mockStore(initialStateRedux);
    render(<Provider store={store}></Provider>)
    const { result } = renderHook(() => useGetOrders());
    result.current.loading = false;
    expect(result.current.loading).toBe(false);
});*/