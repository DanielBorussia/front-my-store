import { useEffect, useState } from 'react';
// Redux
import { getAllOrdersByUser } from '../shared/Services/Orders';

const useGetOrders = ({ user}) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

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