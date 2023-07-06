import React, { useContext, useState } from 'react';
// Styles Component
import './../styles/MyOrderPreview.scss';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import { formatCurrency } from '../shared/Utils';
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { addOrder } from '../shared/Services/Orders';
import { Alert, CircularProgress } from '@mui/material';

const MyOrderPreview = ({ handleClose }) => {
	const { state } = useContext(AppContext);
	const [loadingForm, setLoadingForm] = useState(false);
	const navigate = useNavigate();
	const user = useSelector((state)=>state.user);
    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

	const handleCreateOrder = () => {
		const data = {
			"idUser" : user.id,
			"total" : sumTotal(),
			"products" : state.cart
		};
		setLoadingForm(true);
		addOrder(data)
		.then((res) => {
			if(res && res.status === 200){
				handleClose();
				setLoadingForm(false);
				state.cart = [];
				navigate('/orderList');
			}
		})
	}

	return (	
		<aside className="myOrderPreview">
			<div className="myOrderPreview__title">
				<p>Resumen Compra</p>
			</div>
			<div className="myOrderPreview__body">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
            <div className="myOrderPreview__resume">
					<p className='myOrderPreview__resume--label'>Total</p>
					<p className='myOrderPreview__resume--value'>
					{`$${formatCurrency(sumTotal())}`}</p>
				</div>
				
            	<button 
					className={`button__primary ${!user?.name || !state.cart  && 'button__disabled'  }`} 
					disabled={user?.name || !state.cart ? false : true} 
					onClick={handleCreateOrder}
				>
					{loadingForm ? (<CircularProgress data-testid="loadingProgress" size={30} color="inherit" />) : (
						"Realizar Compra"
					)}
				</button>
			{!user?.name && <Alert style={{ marginTop: "20px"}} severity="warning">Para continuar con la compra debes iniciar Sesión.</Alert>}
		</aside>
	);
}

export default MyOrderPreview;