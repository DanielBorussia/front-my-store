import { useEffect, useState } from 'react';
import { getAllProducts } from '../shared/Services/Products';
// Redux
import { useSelector } from 'react-redux';
import { getAllOrdersByUser } from '../shared/Services/Orders';

const useGetOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector((state)=>state.user);

    const getData = async () => {
        setLoading(true);
        getAllOrdersByUser(user.id)
        .then((response) => {
            if(response && response.data){
                setLoading(false);
                setOrders(response.data);
            }
        })
    }
	useEffect(() => {
		getData();
	}, []);

    return { loading, orders };
};

export default useGetOrders;