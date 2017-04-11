import axios from 'axios';
import { config } from '../config';

axios.defaults.baseURL = config.SERVER_URL + '/contacts/';

export function getAllContacts() {
	return axios.get('');
}

export function getSingleContact(id) {
	return axios.get(`${id}`);
}

export function createNewContact(contact) {
	return axios.post('', contact);
}

export function updateContact(contact) {
	return axios.patch(`${contact._id}`, contact);
}

export function deleteContact(id) {
	return axios.delete(`${id}`);
}