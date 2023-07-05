import React, { useContext } from 'react';
// Styles Component
import './../styles/OrderItem.scss';

// UI
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import AppContext from '../context/AppContext';
import { formatCurrency } from '../shared/Utils';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	
	return (
		<div className="orderItem">
			<Box className='orderItem__image'>
				<img src={product.image} alt={product?.name} />
			</Box>
            <Box className='orderItem__information'>
                <p className='orderItem__information--title'>{product.name}</p>
                <p className='orderItem__information--price'>{`$${formatCurrency(product?.price)}`}</p>
            </Box>
            <IconButton onClick={()=>removeFromCart(product)}>
               <CloseIcon />
            </IconButton>
		</div>
	);
}

export default OrderItem;