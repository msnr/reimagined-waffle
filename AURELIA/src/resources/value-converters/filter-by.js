export class FilterByValueConverter {
	toView(contacts, key = '') {
		return contacts.filter((contact) => {
			return contact.firstName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
				contact.lastName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
				contact.company.toLowerCase().indexOf(key.toLowerCase()) > -1;
		});
	}
}
