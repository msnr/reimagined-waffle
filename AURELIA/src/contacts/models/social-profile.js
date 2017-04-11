import { ValidationRules } from 'aurelia-validation';

export class SocialProfile {

	type = 'GitHub';
	username = '';

	constructor() {
		ValidationRules
			.ensure('type').required().maxLength(25)
			.ensure('username').required().maxLength(100)
			.on(this);
	}

	static fromObject(src) {
		return Object.assign(new SocialProfile(), src);
	}

}
