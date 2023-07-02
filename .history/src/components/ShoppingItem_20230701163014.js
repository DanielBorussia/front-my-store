import { Box } from '@mui/material';
import React from 'react'

const ShoppingItem = ({ order }) => {
    return (
        <section className='shoppingItem'>
            <Box className="shoppingItem__info">
                <span>Tu Pedido: {order.code}</span>
                <Box className="shoppingItem__info--details">
                    2 de enero de 2023 | ${order.price} | {order.products.length } artículos
                </Box>
            </Box>
        </section>
    );
}

export default ShoppingItem;