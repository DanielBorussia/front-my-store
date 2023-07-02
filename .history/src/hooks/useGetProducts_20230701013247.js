import { useEffect, useState } from 'react';
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const response = await axios(API);
        setLoading(false);
		setProducts(response.data);
    }
	useEffect(() => {
		getData();
	}, []);

    return { loading, products };
};

export default useGetProducts;