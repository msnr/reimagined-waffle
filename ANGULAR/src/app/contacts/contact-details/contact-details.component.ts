import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';

import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
    selector: 'cpa-contact-details',
    templateUrl: './contact-details.component.html',
    styles: []
})
export class ContactDetailsComponent implements OnInit {

    private contact: Contact = new Contact();

    constructor(private contactService: ContactService,
                private activatedRoute: ActivatedRoute,
                private location: Location,
                private titleService: Title,
                private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            let contactId = params['id'];
            if (contactId) {
                this.contactService.getSingleContact(contactId)
                    .subscribe(
                        (response) => {
                            this.contact = response.json();
                            this.titleService.setTitle(`${this.contact.firstName} ${this.contact.lastName} | Contacts | CRM Prototype Angular`);
                            console.log(this.contact);
                        },
                        (err) => {
                            this.router.navigate(['/'])
                        });
            }
        });
    }

    onNavigateBack() {
        this.location.back();
    }

}
