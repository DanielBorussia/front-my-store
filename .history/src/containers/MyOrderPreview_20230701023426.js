import React, { useContext } from 'react';
// Styles Component
import './../styles/MyOrderPreview.scss';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';

const MyOrderPreview = () => {
	const { state } = useContext(AppContext);

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
					<p className='myOrderPreview__resume--value'>${sumTotal()}</p>
				</div>
            <button className="primary-button">
				Checkout
			</button>
		</aside>
	);
}

export default MyOrderPreview;