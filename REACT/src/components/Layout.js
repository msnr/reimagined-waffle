import React from 'react';
import Nav from './Navigation';
import Sidebar from './Sidebar';

export default function Layout({children}) {
	return (
		<div>

			<Nav />

			<section className="section">
				<div className="container">
					<div className="columns">
						{children}
						<Sidebar />
					</div>
				</div>
			</section>

		</div>
	);
}
Layout.propTypes = {
	children: React.PropTypes.element.isRequired
};
