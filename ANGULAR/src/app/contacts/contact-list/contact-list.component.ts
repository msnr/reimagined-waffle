import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
	selector: 'cpa-contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
	contacts: Contact[] = [];
	private error: boolean;
	private filter: string = '';
	private order = {
		property: 'firstName',
		asc: true
	}

	constructor(
		private contactService: ContactService,
		private titleService: Title
	) {
		this.titleService.setTitle('Contacts | CRM Prototype Angular');
	}

	ngOnInit() {
		this.contactService.getAllContacts()
			.subscribe(
			(response) => {
				if (response.status !== 200) {
					this.error = true;
					return;
				}
				this.error = false;
				this.contacts.splice(0);
				this.contacts.push.apply(this.contacts, response.json());
			},
			(err) => { this.error = true }
			);
	}

	private setOrder(property: string) {
		this.order = {
			property,
			asc: !this.order.asc
		}
	}
}
