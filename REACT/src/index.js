import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import ContactRoutes from './contacts/routes';
import '../node_modules/bulma/css/bulma.css';


const router = <Router history={browserHistory}>
	<Redirect from="/" to="contacts" />
	<Route path="/" component={Layout}>
		{ContactRoutes}
		<Route path="*" component={PageNotFound} />
	</Route>
</Router>;

ReactDOM.render(
	router,
	document.getElementById('root')
);
