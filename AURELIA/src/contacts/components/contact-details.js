import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ContactApiService } from '../services/api-service';
import { Contact } from '../models/contact';

@inject(ContactApiService, Router)
export class ContactDetails {
	constructor(api, router) {
		this.api = api;
		this.router = router;
	}

	activate(params, config) {
		return this.api.getSingleContact(params.id)
			.then(contact => {
				this.contact = contact;
				config.navModel.setTitle(contact.fullName);
				console.log(this.contact);
			})
			.catch((err) => {
				this.router.navigate('contacts');
			});
	}
}
