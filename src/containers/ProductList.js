import React from 'react';
import ProductItem from '../components/ProductItem';
//use Hooks
import useGetProducts from '../hooks/useGetProducts';

// styles component
import './../styles/ProductList.scss';
import Loading from '../shared/Loading';

//UI
import Box from '@mui/material/Box';

const ProductList = () => {
    const { loading , products } = useGetProducts();
	return (
		<section className="main__container">
            {loading ? (
               <Loading />
              ) : (
                <Box className="productList">
                    {products.map(product => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </Box>
            )}
		</section>
	);
}

export default ProductList;