import React, { useContext } from 'react';
// Styles Component
import './../styles/MyOrderPreview.scss';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import { formatCurrency } from '../shared/Utils';
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const MyOrderPreview = () => {
	const { state } = useContext(AppContext);
	const naviage = useNavigate();
	const user = useSelector((state)=>state.user);
    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
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
            <button className="button__primary" disabled={user?.name ? false : true}>
				Realizar Pedido
			</button>
		</aside>
	);
}

export default MyOrderPreview;