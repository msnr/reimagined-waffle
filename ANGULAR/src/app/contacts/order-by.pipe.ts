import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
	name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

	transform(contacts: Contact[], field: string, ascending: boolean): Contact[] {

		console.log(contacts, field, ascending);

		if (!field) {
			return contacts;
		}

		if (ascending) {
			return contacts.sort((a, b) => {
				if (a[field].toLowerCase() < b[field].toLowerCase()) {
					return -1;
				} else if (a[field].toLowerCase() > b[field].toLowerCase()) {
					return 1;
				} else {
					return 0;
				}
			});
		}

		return contacts.sort((a, b) => {
			if (a[field].toLowerCase() > b[field].toLowerCase()) {
				return -1;
			} else if (a[field].toLowerCase() < b[field].toLowerCase()) {
				return 1;
			} else {
				return 0;
			}
		});
	}

}
