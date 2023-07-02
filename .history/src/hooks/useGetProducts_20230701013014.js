import { useEffect, useState } from 'react';
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const response = await axios(API);
		setProducts(response.data);
    }
	useEffect(() => {
		getData();
	}, []);

    return { products };
};

export default useGetProducts;