import { useEffect, useState } from 'react';
import { getAllProducts } from '../shared/Services/Products';

const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        getAllProducts()
        .then((response) => {
            if(response && response.data){
                setLoading(false);
                setProducts(response.data);
            }
        })
    }
	useEffect(() => {
		getData();
	}, []);

    return { loading, products };
};

export default useGetProducts;