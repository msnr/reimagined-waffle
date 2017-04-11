import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CONTACT_ROUTES } from './contacts/contacts.routes';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/contacts', pathMatch: 'full' },
	{ path: 'contacts', component: ContactsComponent, children: CONTACT_ROUTES, data: {title: 'Contacts'}  },
	{ path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);