import moment from 'moment';

export function formatDate(date, format) {
	if (date === undefined || date === null || date === '') {
		return '';
	}
	return moment(date).format(format);
}