import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
	name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

	transform(contacts: Contact[], key: string): Contact[] {

		if (!key) {
			return contacts;
		}

		return contacts.filter((contact) => {
			return contact.firstName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
				contact.lastName.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
				contact.company.toLowerCase().indexOf(key.toLowerCase()) > -1;
		});
	}
}
