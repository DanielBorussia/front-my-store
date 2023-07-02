import React, { useContext } from 'react';
// Styles Component
import './../styles/ProductItem.scss';
// Context
import AppContext from './../context/AppContext';
// UI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)
	
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="productItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="productItem__info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<IconButton onClick={() => handleClick(product)}>
                	<AddShoppingCartIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default ProductItem;