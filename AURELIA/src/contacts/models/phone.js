import { ValidationRules } from 'aurelia-validation';

export class Phone {

	type = 'Home';
	number = '';

	constructor() {
		ValidationRules
			.ensure('type')
			.required()
			.maxLength(25)
			.ensure('number')
			.required()
			.maxLength(25)
			.on(this);
	}

	static fromObject(src) {
		return Object.assign(new Phone(), src);
	}
}
