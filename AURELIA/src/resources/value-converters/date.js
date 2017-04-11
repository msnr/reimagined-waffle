import moment from 'moment';

export class DateValueConverter {
	toView(date, format) {
		if (date === undefined || date === null || date === '') {
			return '';
		}
		return moment(date).format(format);
	}
}
