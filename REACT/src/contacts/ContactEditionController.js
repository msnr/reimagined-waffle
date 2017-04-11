import React from 'react';
import {browserHistory, router} from 'react-router';
import * as api from '../api/contact-api-service';
import Contact from './contact-model';
import ContactForm from './ContactForm';

export default class ContactEditionController extends React.Component {

	constructor() {
		super();

		this.state = {
			isNew: true,
			found: false,
			contact: new Contact()
		};

		this.handleSaveContact = this.handleSaveContact.bind(this);
		this.handleDeleteContact = this.handleDeleteContact.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleAddTo = this.handleAddTo.bind(this);
		this.handleDeleteFrom = this.handleDeleteFrom.bind(this);
	}

	componentDidMount() {
		if (this.props.params.id) {
			api.getSingleContact(this.props.params.id)
				.then((res) => {
					document.title = `${res.data.firstName } ${res.data.lastName} | Contacts | CRM Prototype React`;
					this.setState({
						found: true,
						contact: res.data,
						isNew: false
					});
				}).catch(() => {
				browserHistory.replace('/');
			});
		} else {
			document.title = 'Add new contact | Contacts | CRM Prototype React'
		}
	}

	handleChange(e, arrayName, index) {
		let name = e.target.name;
		let value = e.target.value;

		if (arrayName && index !== undefined) {
			let array = this.state.contact[arrayName];
			array[index][name] = value;
			value = array;
			name = arrayName;
		}

		this.setState({
			contact: {
				...this.state.contact, //take old contactstate
				[name]: value //and only overwrite the changed field
			}
		});
	}

	handleAddTo(arrayName) {
		let arrayObj = (new Contact())[arrayName][0];
		let contact = this.state.contact;
		contact[arrayName].push(arrayObj);
		this.setState(contact);
	}

	handleDeleteFrom(arrayName, index) {
		let contact = this.state.contact;
		contact[arrayName].splice(index, 1);
		this.setState(contact);
	}

	handleSaveContact(e) {
		e.preventDefault();
		console.log('(this.state.contact', this.state.contact);
		if (this.state.isNew) {
			api.createNewContact(this.state.contact)
				.then((contact) => {
					browserHistory.push(`/contacts/${contact._id}`);
				})
				.catch((err) => {
					console.log(err)
				});

		} else {
			api.updateContact(this.state.contact)
				.then(() => {
					browserHistory.push(`/contacts/${this.state.contact._id}`);
				})
				.catch((err) => {
					console.log(err)
				});
		}
	}

	handleDeleteContact() {
		if (window.confirm(`Do you really want to this contact ? `)) {
			api.deleteContact(this.state.contact._id)
				.then(() => {
					browserHistory.replace('/');
				})
				.catch((err) => console.log(err));
		}
	}

	handleCancel() {
		browserHistory.goBack();
	}

	render() {
		let {isNew, contact, found} = this.state;
		console.log(contact);
		return (
			<ContactForm
				contact={this.state.contact}
				isNew={this.state.isNew}
				onCancel={this.handleCancel}
				onValueChanged={this.handleChange}
				onAddTo={this.handleAddTo}
				onDeleteFrom={this.handleDeleteFrom}
				onDeleteContact={this.handleDeleteContact}
				onSaveContact={this.handleSaveContact}
			/>
		);
	}
}