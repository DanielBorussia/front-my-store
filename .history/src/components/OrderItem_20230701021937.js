import React, { useContext } from 'react';
// Styles Component
import './../styles/OrderItem.scss';

// UI
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (product) => {
		removeFromCart(product);
	}
	return (
		<div className="orderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
            <IconButton  onClick={()=>handleRemove(product)}>
               <CloseIcon />
            </IconButton>
		</div>
	);
}

export default OrderItem;