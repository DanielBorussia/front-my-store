import React, { useContext } from 'react';
// Styles Component
import './../styles/MyOrderPreview.scss';
import AppContext from '../context/AppContext';

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
				
				<p>My order</p>
			</div>
			<div className="myOrderPreview__body">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrderPreview;