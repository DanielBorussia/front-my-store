import { Box } from '@mui/material';
import React from 'react'

const ShoppingItem = ({ order }) => {
    return (
        <section className='shoppingItem'>
            <Box className="shoppingItem__info">
                <span>Pedido {order.code}</span>
            </Box>
        </section>
    );
}

export default ShoppingItem;