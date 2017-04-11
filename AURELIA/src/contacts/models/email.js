import { ValidationRules } from 'aurelia-validation';

export class Email {

	type = 'Home';
	address = '';

	constructor() {
		ValidationRules
			.ensure('type')
			.required()
			.maxLength(25)
			.ensure('address')
			.required()
			.maxLength(250)
			.email()
			.on(this);
	}

	static fromObject(src) {
		return Object.assign(new Email(), src);
	}
}
