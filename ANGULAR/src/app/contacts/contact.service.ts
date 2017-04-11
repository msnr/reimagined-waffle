import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Http, Response, Headers } from '@angular/http';
import { config } from '../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

	constructor(private http: Http) { }

	getAllContacts(): Observable<Response> {
		return this.http.get(`${config.SERVER_URL}/contacts`);
	}

	getSingleContact(id: string): Observable<Response> {
		return this.http.get(`${config.SERVER_URL}/contacts/${id}`);
	}

	createContact(contact: Contact): Observable<Response> {
		const body = JSON.stringify(contact);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${config.SERVER_URL}/contacts`, body, {
			headers: headers
		});
	}

	deleteContact(id: string): Observable<Response> {
		return this.http.delete(`${config.SERVER_URL}/contacts/${id}`);
	}

	updateContact(id: string, contact: Contact): Observable<Response> {
		const body = JSON.stringify(contact);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.patch(`${config.SERVER_URL}/contacts/${id}`, body, {
			headers: headers
		});
	}
}
