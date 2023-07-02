import { useState } from "react";
// UI
import ShoppingItem from "../components/ShoppingItem";
import { Box } from "@mui/material";

const ShoppingList = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            total: 1200,
            cide: '45SADASD',
            products:[
                {
                    id: 1,
                    title: 'product 1',
                    image: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d1d0a4a589d44010bb8daacd00a85d46_9366/FM3897_250_FM3897_01_laydown.jpg.jpg'
                },
                {
                    id: 2,
                    title: 'product 2',
                    image: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/42c462d2f5d94d80930bae6701225f46_9366/HG7757_120_HG7757_03_standard.jpg.jpg'
                }
            ]
        }
    ]);

    return (
        <section className="main__container">
            <h1>Mis Compras</h1>
            <Box className="soppingList">
                {orders.map(order => (
                    <ShoppingItem order={order} key={order.id} />
                ))}
            </Box>
        
    </section>
    );
}

export default ShoppingList;