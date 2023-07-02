import React, { useContext } from 'react';
import './styles/ProductItem.css';
import AppContext from './context/AppContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)
	
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
                <AddCircleIcon />
			</div>
		</div>
	);
}

export default ProductItem;