export class App {

	configureRouter(config, router) {
		this.router = router;
		config.title = 'CRM Prototype Aurelia';
		config.options.pushState = true;
		config.options.root = '/';
		config.map([
			{ route: '', redirect: 'contacts' },
			{ route: 'contacts', name: 'contacts', moduleId: 'contacts/index', nav: true, title: 'Contacts' }
		]);
		config.mapUnknownRoutes('shared/page-not-found');
	}

}
