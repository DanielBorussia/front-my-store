import { renderHook } from "@testing-library/react-hooks";
import useGetOrders from "../hooks/useGetOrders";


test('should list orders', () => {
    const { result } = renderHook(() => useGetOrders());
    console.log(result);
});