import React, { useContext } from 'react';
// Styles Component
import './../styles/OrderItem.scss';

// UI
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (product) => {
		removeFromCart(product);
	}
	return (
		<div className="orderItem">
			<Box className='orderItem__image'>
				<img src={product.image} alt={product.title} />
			</Box>
            <Box className='orderItem__information'>
                <p className='orderItem__information--title'>{product.title}</p>
                <p className='orderItem__information--price'>${product.price}</p>
            </Box>
            <IconButton onClick={()=>handleRemove(product)}>
               <CloseIcon />
            </IconButton>
		</div>
	);
}

export default OrderItem;