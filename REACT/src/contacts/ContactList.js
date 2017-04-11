import React from 'react';
import ContactListItem from './ContactListItem';

export default function ContactList({ displayedContacts, onOrderBy, asc, property }) {

	return (
		<table className="table is-striped is-narrow">
			<thead>
				<tr>
					<th onClick={() => onOrderBy('firstName')} >Firstname
						<span className="icon is-small">
							<i className={(asc && property === 'firstName' ? 'fa fa-caret-up' : '') + '' +
								(!asc && property === 'firstName' ? 'fa fa-caret-down' : '')}></i>
						</span></th>
					<th onClick={() => onOrderBy('lastName')} >Lastname
						<span className="icon is-small">
							<i className={(asc && property === 'lastName' ? 'fa fa-caret-up' : '') + '' +
								(!asc && property === 'lastName' ? 'fa fa-caret-down' : '')}></i>
						</span>
					</th>
					<th onClick={() => onOrderBy('company')} >Company
						<span className="icon is-small">
							<i className={(asc && property === 'company' ? 'fa fa-caret-up' : '') + '' +
								(!asc && property === 'company' ? 'fa fa-caret-down' : '')}></i>
						</span>
					</th>
					<th>E-Mail</th>
					<th>Phone</th>
					<th></th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Company</th>
					<th>E-Mail</th>
					<th>Phone</th>
					<th></th>
				</tr>
			</tfoot>
			<tbody>
				{displayedContacts.map((contact) => {
					return <ContactListItem key={contact._id} contact={contact} />
				})}
			</tbody>
		</table >
	);
}

ContactList.propTypes = {
	displayedContacts: React.PropTypes.array.isRequired,
	onOrderBy: React.PropTypes.func.isRequired,
	asc: React.PropTypes.bool,
	property: React.PropTypes.string
}