import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';



const ProductList = () => {
    const { products } = useGetProducts();
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