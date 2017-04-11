import React from 'react';
import { Route } from 'react-router';
//https://rackt.github.io/history/stable/HashHistoryCaveats.html

//import created components
import ContactController from './ContactController';
import ContactDetailsController from './ContactDetailsController';
import ContactEditionController from './ContactEditionController';

export default (
	<Route>
		<Route path="contacts" component={ContactController} />
		<Route path="contacts/new" component={ContactEditionController} />
		<Route path="contacts/:id" component={ContactDetailsController} />
		<Route path="contacts/:id/edit" component={ContactEditionController} />
	</Route>
);
