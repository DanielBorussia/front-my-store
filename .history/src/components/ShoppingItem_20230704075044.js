import React from 'react';
// UI
import { Box } from '@mui/material';
// Styles Component
import './../styles/ShoppingItem.scss';
import { formatCurrency } from '../shared/Utils';
// utils date
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ShoppingItem = ({ order }) => {
    return (
        <section className='shoppingItem'>
            <Box className="shoppingItem__info">
                <span>Tu Pedido: {order.code}</span>
                <Box className="shoppingItem__info--details">
                    {  format(new Date(order.created_at),"dd/MM/yyyy",{locale: es})} | $ {formatCurrency(order?.total)} | {order.products.length } artículos
                </Box>
            </Box>
            <Box className="shoppingItem__content">
                <Box className="shoppingItem__products">
                    {order.products.map(product => (
                        <Box className="shoppingProductItem">
                            <img src={product.image} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </section>
    );
}

export default ShoppingItem;