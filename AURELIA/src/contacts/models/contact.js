import { ValidationRules } from 'aurelia-validation';

import { Phone } from './phone';
import { Email } from './email';
import { Address } from './address';
import { SocialProfile } from './social-profile';

export class Contact {
	firstName = '';
	lastName = '';
	company = '';
	birthday = '';
	phones = [];
	emails = [];
	addresses = [];
	socialProfiles = [];
	photoUrl = '';
	note = '';

	constructor() {
		ValidationRules
			.ensure('firstName').maxLength(100)
			.ensure('lastName').maxLength(100)
			.ensure('company').maxLength(100)
			.ensure('birthday').maxLength(50)
			.ensure('photoUrl').maxLength(200)
			.ensure('note').maxLength(2000)
			.on(this);
	}

	static fromObject(src) {
		const contact = Object.assign(new Contact(), src);
		contact.phones = contact.phones.map(Phone.fromObject);
		contact.emails = contact.emails.map(Email.fromObject);
		contact.addresses = contact.addresses.map(Address.fromObject);
		contact.socialProfiles = contact.socialProfiles.map(SocialProfile.fromObject);
		return contact;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	addPhone() {
		this.phones.push(new Phone());
	}

	addEmail() {
		this.emails.push(new Email());
	}

	addAddress() {
		this.addresses.push(new Address());
	}

	addSocialProfile() {
		this.socialProfiles.push(new SocialProfile());
	}
}
