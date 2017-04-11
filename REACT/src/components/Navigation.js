import React from 'react';
import { Link } from 'react-router';

export default function Nav() {
	return (
		<nav className="nav has-shadow">
			<div className="container">
				<div className="nav-left">
					<span className="nav-item">
						<span className="title is-5">CRM Prototype React</span>
					</span>
					<Link to="/contacts" className="nav-item is-tab is-hidden-mobile" activeClassName="is-active">Contacts</Link>
					<Link to="/companies" className="nav-item is-tab is-hidden-mobile" activeClassName="is-active">Companies</Link>
					<Link to="/Transactions" className="nav-item is-tab is-hidden-mobile" activeClassName="is-active">Transactions</Link>
					<Link to="/about" className="nav-item is-tab is-hidden-mobile" activeClassName="is-active">About</Link>
				</div>
				<span className="nav-toggle">
					<span></span>
					<span></span>
					<span></span>
				</span>
				<div className="nav-right nav-menu">
					<Link to="/contacts" className="nav-item is-tab is-hidden-tablet" activeClassName="is-active">Home</Link>
					<Link to="/contacts" className="nav-item is-tab is-hidden-tablet" activeClassName="is-active">Features</Link>
					<Link to="/contacts" className="nav-item is-tab is-hidden-tablet" activeClassName="is-active">Pricing</Link>
					<Link to="/contacts" className="nav-item is-tab is-hidden-tablet" activeClassName="is-active">About</Link>
					<Link to="/contacts" className="nav-item is-tab">Profile</Link>
					<Link to="/contacts" className="nav-item is-tab">Log out</Link>
				</div>
			</div>
		</nav>
	);
}