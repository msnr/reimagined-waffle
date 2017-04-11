import {inject} from 'aurelia-framework';
import {ContactApiService} from '../services/api-service';

@inject(ContactApiService)
export class ContactList {
	error = false;
	contacts = [];
	order = {
		property: 'firstName',
		asc: true
	};

	constructor(api) {
		this.api = api;
	}

	activate() {
		this.api.getAllContacts()
			.then(contacts => {
				console.log(contacts);
				this.contacts.splice(0);
				this.contacts.push.apply(this.contacts, contacts);
				this.error = false;
			})
			.catch((err) => this.error = true);
	}

	setOrder(property) {
		this.order = {
			property,
			asc: !this.order.asc
		}
	}
}
