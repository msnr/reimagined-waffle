import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { Contact } from '../models/contact';
import environment from '../../environment';

@inject(HttpClient)
export class ContactApiService {

	constructor(httpClient) {
		this.httpClient = httpClient.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl(environment.SERVER_URL + 'contacts/');
		});
	}

	getAllContacts() {
		return this.httpClient.fetch('')
			.then(response => response.json())
			.then(contacts => contacts.map(Contact.fromObject));
	}

	getSingleContact(id) {
		return this.httpClient.fetch(`${id}`)
			.then(response => response.json())
			.then(Contact.fromObject);
	}

	createContact(contact) {
		return this.httpClient.fetch('',
			{ method: 'POST', body: json(contact) });
	}

	updateContact(contact) {
		return this.httpClient.fetch(`${contact._id}`,
			{ method: 'PUT', body: json(contact) });
	}

	deleteContact(id) {
		return this.httpClient.fetch(`${id}`,
			{ method: 'DELETE' });
	}
}
