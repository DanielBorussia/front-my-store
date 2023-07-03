import { useEffect, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { getAllOrdersByUser } from '../shared/Services/Orders';

const useGetOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector((state)=>state.user);

    const getData = async () => {
        console.log("-----");
        setLoading(true);
       
    }
	useEffect(() => {
		getData();
	}, []);

    return { loading, orders };
};

export default useGetOrders;