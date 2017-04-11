import React from 'react';
import { browserHistory } from 'react-router';
import * as api from '../api/contact-api-service';
import { formatDate } from '../utils/date-converter';

export default class ContactDetailsController extends React.Component {
	constructor() {
		super();

		this.state = {
			contact: {
			}
		};
	}

	componentDidMount() {
		if (this.props.params.id) {
			api.getSingleContact(this.props.params.id)
				.then((res) => {
					document.title = `${res.data.firstName} ${res.data.lastName} | Contacts | CRM Prototype React`;
					this.setState({
						contact: res.data
					});
				})
				.catch((err) => {
					browserHistory.replace('/');
				});
		} else {
			browserHistory.replace('/');
		}
	}

	render() {
		let { contact } = this.state;

		return (
			<div className="column is-8">
				<div className="card">
					<header className="card-header">
						<h1 className="card-header-title">{contact.firstName + ' ' + contact.lastName}</h1>
					</header>
					<div className="card-content">
						<div className="columns">
							<div className="column is-3 "><img src={contact.photoUrl ? contact.photoUrl : 'http://placehold.it/250x250'} alt="" /></div>
							<div className="column auto ">
								<table className="table">
									<tbody>
										<tr>
											<th>Created:</th>
											<td>{formatDate(contact.createdAt, 'DD.MM.YYYY - HH:mm:ss')}</td>
										</tr>
										<tr>
											<th>Updated:</th>
											<td>{formatDate(contact.updatedAt, 'DD.MM.YYYY - HH:mm:ss')}</td>
										</tr>
										<tr>
											<th>Name:</th>
											<td>{contact.firstName + ' ' + contact.lastName}</td>
										</tr>
										<tr>
											<th>Birthday:</th>
											<td>{formatDate(contact.birthday, 'DD.MM.YYYY')}</td>
										</tr>
										<tr>
											<th>Company:</th>
											<td>{contact.company}</td>
										</tr>

										<tr>
											<th>Email(s):</th>
										</tr>
										{contact.emails ? contact.emails.map((email, index) => {
											return <tr key={index}>
												<td>{email.type}:</td>
												<td><a href={`mailto:${email.address}`}> {email.address}</a></td>
											</tr>
										}) : null}

										<tr>
											<th>Phonenumber(s):</th>
										</tr>
										{contact.phones ? contact.phones.map((phone, index) => {
											return <tr key={index}>
												<td>{phone.type}:</td>
												<td>{phone.number}</td>
											</tr>
										}) : null}

										<tr>
											<th>Address(es):</th>
										</tr>
										{contact.addresses ? contact.addresses.map((address, index) => {
											return <tr key={index}>
												<td>{address.type}:</td>
												<td>{address.address}</td>
											</tr>
										}) : null}

										<tr>
											<th>Social Profile(s):</th>
										</tr>
										{contact.socialProfiles ? contact.socialProfiles.map((profile, index) => {
											return <tr key={index}>
												<td>{profile.type}:</td>
												<td> {profile.username}</td>
											</tr>
										}) : null}
										<tr>
											<th>Note:</th>
											<td>{contact.note}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<footer className="card-footer">
						<a className="card-footer-item" onClick={() => browserHistory.push(`/contacts/${this.state.contact._id}/edit`)}>Edit</a>
						<a className="card-footer-item" onClick={browserHistory.goBack}>Cancel</a>
					</footer>
				</div>
			</div >
		);
	}
}