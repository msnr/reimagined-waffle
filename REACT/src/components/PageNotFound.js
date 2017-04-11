import React from 'react';
import { Link } from 'react-router';

export default function PageNotFound() {
	return (
		<div className="column is-8">
			<div className="card ">
				<header className="card-header">
					<p className="card-header-title"> Error </p>
				</header>
				<div className="content">
					<div className="has-text-centered">
						<br /> <br /> <br />
						<p>This page does not exist.</p>
						<Link to="/"><span className="icon"><i className="fa fa-arrow-right"></i></span> go back to home.</Link>
						<br /> <br /> <br />
					</div>
				</div>
			</div>
		</div>
	);
}