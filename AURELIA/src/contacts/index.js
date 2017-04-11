import { inlineView } from 'aurelia-framework';

@inlineView('<template><router-view></router-view></template>')
export class Contacts {

	configureRouter(config) {
		config.map([
			{ route: '', name: 'contacts', moduleId: './components/contact-list'},
			{ route: 'new', name: 'contact-creation', moduleId: './components/contact-edition', title: 'Add new contact' },
			{ route: ':id', name: 'contact-details', moduleId: './components/contact-details' },
			{ route: ':id/edit', name: 'contact-edition', moduleId: './components/contact-edition' }
		]);
	}
}
