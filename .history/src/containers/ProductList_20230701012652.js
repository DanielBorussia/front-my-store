import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const { products } = useGetProducts(API);
	return (
		<section className="main__container">
			<div className="productList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;