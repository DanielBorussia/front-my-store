import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			<div className='Content'>
				{children}
			</div>
		</div>
	);
}

export default Layout;