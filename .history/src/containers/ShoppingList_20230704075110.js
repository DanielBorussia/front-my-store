
// UI
import ShoppingItem from "../components/ShoppingItem";
import { Box, Container } from "@mui/material";

// Hoooks
import useGetOrders from "../hooks/useGetOrders";
import Loading from "../shared/Components/Loading";

const ShoppingList = () => {
   
    const {loading, orders} = useGetOrders();

    return (
        <Container>
            <h1>Mis Compras</h1>
            {loading ? (
               <Loading />
            ) : (
                orders && orders.length == 0 ? 'No hay ordenes' : (
                <Box className="soppingList">
                    {orders.map(order => (
                        <ShoppingItem order={order} key={order.id} />
                    ))}
                </Box>
                )
            )}
        
        </Container>
    );
}

export default ShoppingList;