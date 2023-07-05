import React, { useContext } from 'react';
// Styles Component
import './../styles/ProductItem.scss';
// Context
import AppContext, { useAppContext } from './../context/AppContext';
// UI
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { formatCurrency } from '../shared/Utils';

const ProductItem = ({ product }) => {
	const { addToCart } = useAppContext();

	return (
		<div className="productItem">
			<img src={product.image} alt={product.title} />
			<div className="productItem__info">
				<div>
					<p>{`$${formatCurrency(product?.price)}`}</p>
					<p>{product.name}</p>
				</div>
				<IconButton aria-label="addCart" onClick={() => addToCart(product)}>
                	<AddShoppingCartIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default ProductItem;