import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {routing} from "./app.routing";

import {ContactService} from './contacts/contact.service';

import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HeaderComponent} from './header.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ContactDetailsComponent} from './contacts/contact-details/contact-details.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {ContactEditionComponent} from './contacts/contact-edition/contact-edition.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {OrderByPipe} from './contacts/order-by.pipe';
import {FilterByPipe} from './contacts/filter-by.pipe';


@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        HeaderComponent,
        ContactListComponent,
        ContactDetailsComponent,
        SidebarComponent,
        ContactEditionComponent,
        PageNotFoundComponent,
        OrderByPipe,
        FilterByPipe
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
