export function orderBy(contacts, field, ascending) {

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