import React from 'react';
import * as api from '../api/contact-api-service';
import {orderBy} from '../utils/orderBy';
import {filterBy} from '../utils/filterBy';
import ContactList from './ContactList';
import ContactSearch from './ContactSearch';

export default class ContactController extends React.Component {
	constructor() {
		super();

		this.state = {
			allContacts: [],
			orderByAsc: true,
			searchText: '',
			displayedContacts: [],
			property: 'firstName',
			err: false
		};

		this.handleOrderBy = this.handleOrderBy.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		document.title = 'Contacts | CRM Prototype React';
		api.getAllContacts()
			.then((contacts) => {
				console.log(contacts);
				this.setState({
					allContacts: orderBy(contacts.data, 'firstName', this.state.orderByAsc),
					orderByAsc: !this.state.orderByAsc,
					displayedContacts: orderBy(contacts.data, 'firstName', this.state.orderByAsc),
					err: false
				});
			})
			.catch((err) => {
				this.setState({err: true});
			});
	}

	handleOrderBy(property) {
		this.setState({
			displayedContacts: orderBy(this.state.displayedContacts, property, this.state.orderByAsc),
			orderByAsc: !this.state.orderByAsc,
			property
		});
	}

	handleSearch(searchText) {
		this.setState({
				searchText
			}, () => {
				console.log(this.state.searchText);
				this.setState({
					displayedContacts: filterBy(this.state.allContacts, this.state.searchText)
				});
			}
		);
	}

	render() {
		const {displayedContacts, searchText, orderByAsc, property, err} = this.state;
		return (
			<div className="column is-8">
				<div className="card has-shadow">
					<header className="card-header">
						<h1 className="card-header-title"> Contacts </h1>
					</header>
					<div className="card-content">

						{err ? <div className="notification is-danger has-text-centered">Error Loading Contacts.</div> :
							<div>
								<ContactSearch searchText={searchText} onSearch={this.handleSearch}/>
								<ContactList displayedContacts={displayedContacts} onOrderBy={this.handleOrderBy} asc={orderByAsc}
														 property={property}/>
							</div>}


					</div>
				</div>
			</div>
		);
	}
}
