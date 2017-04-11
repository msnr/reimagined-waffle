export class Contact {
	constructor(
		public _id?: string ,
		public firstName: string = '',
		public lastName: string = '',
		public birthday: string = '',
		public company: string = '',
		public emails: [email] = [{ type: '', address: '' }],
		public phones: [phone] = [{ type: '', number: '' }],
		public addresses: [address] = [{ type: '', address: '' }],
		public socialProfiles: [socialProfile] = [{ type: '', username: '' }],
		public photoUrl: string = '',
		public note: string = '',
		public __v?: number
	) { }
}

interface address {
	type: string,
	address: string
}

interface phone {
	type: string,
	number: string
}

interface email {
	type: string,
	address: string
}

interface socialProfile {
	type: string,
	username: string
}