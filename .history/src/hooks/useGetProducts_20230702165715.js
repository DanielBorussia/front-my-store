import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllProducts } from '../shared/Services/Products';
const API = 'https://api.escuelajs.co/api/v1/products';
const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        getAllProducts()
        .then((response) => {
            console.log(response)
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