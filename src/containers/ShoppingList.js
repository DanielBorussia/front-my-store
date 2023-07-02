import { useState } from "react";
// UI
import ShoppingItem from "../components/ShoppingItem";
import { Box, Container } from "@mui/material";

const ShoppingList = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            total: 1200,
            code: '45SADASD',
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
        },
        {
            id: 2,
            total: 2230,
            code: 'X22SRTTT',
            products:[
                {
                    id: 1,
                    title: 'product 1',
                    image: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/edfc06406f30408e842cae1c00a35c9c_9366/H57793_640_H57793_01_standard.jpg.jpg'
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
        <Container>
            <h1>Mis Compras</h1>
            <Box className="soppingList">
                {orders.map(order => (
                    <ShoppingItem order={order} key={order.id} />
                ))}
            </Box>
        
        </Container>
    );
}

export default ShoppingList;