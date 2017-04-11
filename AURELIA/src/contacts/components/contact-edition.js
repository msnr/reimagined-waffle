import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ContactApiService } from '../services/api-service';
import { Contact } from '../models/contact';

@inject(ContactApiService, Router)
export class ContactEdition {
	constructor(api, router) {
		this.api = api;
		this.router = router;
	}

	activate(params, config) {
		this.isNew = params.id === undefined;
		if (this.isNew) {
			this.contact = new Contact();
		} else {
			this.api.getSingleContact(params.id)
				.then((contact) => {
					this.contact = contact;
					config.navModel.setTitle(contact.fullName);
				})
				.catch((err) => console.log(err));
		}
	}

	saveContact() {
		if (this.isNew) {
			this.api.createContact(this.contact)
				.then((res) => this.router.navigateToRoute('contacts'))
				.catch((err) => console.log(err));
		} else {
			this.api.updateContact(this.contact)
				.then(() => this.router.navigateToRoute('contact-details', { id: this.contact._id }))
				.catch((err) => console.log(err));
		}
	}

	deleteContact() {
		if (confirm('Do you really want to delete this contact?')) {
			this.api.deleteContact(this.contact._id)
				.then(() => { this.router.navigateToRoute('contacts'); });
		}
	}
}
