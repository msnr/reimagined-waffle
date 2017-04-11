import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditionComponent } from './contact-edition/contact-edition.component';

export const CONTACT_ROUTES: Routes = [
	{ path: '', component: ContactListComponent },
	{ path: 'new', component: ContactEditionComponent, data: { title: 'Add new contact' } },
	{ path: ':id', component: ContactDetailsComponent },
	{ path: ':id/edit', component: ContactEditionComponent }
]