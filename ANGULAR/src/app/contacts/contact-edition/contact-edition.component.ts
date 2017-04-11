import {Component, OnInit, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {Subscription} from "rxjs/Rx";

import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
    selector: 'cpa-contact-edition',
    templateUrl: './contact-edition.component.html',
    styles: []
})
export class ContactEditionComponent implements OnInit, OnDestroy {
    contactForm: FormGroup = new FormGroup({});
    private contact: Contact = new Contact();
    private isNew: boolean = true;
    private subscription: Subscription;

    constructor(private location: Location,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder,
                private contactService: ContactService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
            let contactId = params['id'];
            if (contactId) {
                this.isNew = false;
                this.contactService.getSingleContact(contactId)
                    .subscribe(
                        (response) => {
                            this.contact = response.json();
                            this.titleService.setTitle(`${this.contact.firstName} ${this.contact.lastName} | Contacts | CRM Prototype Angular`);
                            console.log(this.contact);
                            this.initForm();
                        },
                        (err) => {
                            this.router.navigate(['/'])
                        });
            }
            if (this.isNew) {
                this.titleService.setTitle('Add new contact | Contacts | CRM Prototype Angular');
            }
            this.initForm();
        });
    }

    private initForm() {
        let firstName: string = '';
        let lastName: string = '';
        let birthday: string = '';
        let company: string = '';
        let photoUrl: string = '';
        let note: string = '';
        let emails: FormArray = new FormArray([]);
        let phones: FormArray = new FormArray([]);
        let addresses: FormArray = new FormArray([]);
        let socialProfiles: FormArray = new FormArray([]);

        if (!this.isNew) {
            for (let email of this.contact.emails) {
                emails.push(
                    new FormGroup({
                        'type': new FormControl(email.type),
                        'address': new FormControl(email.address)
                    })
                );
            }
            for (let phone of this.contact.phones) {
                phones.push(
                    new FormGroup({
                        'type': new FormControl(phone.type),
                        'number': new FormControl(phone.number)
                    })
                );
            }
            for (let address of this.contact.addresses) {
                addresses.push(
                    new FormGroup({
                        'type': new FormControl(address.type),
                        'address': new FormControl(address.address)
                    })
                );
            }
            for (let profile of this.contact.socialProfiles) {
                socialProfiles.push(
                    new FormGroup({
                        'type': new FormControl(profile.type),
                        'username': new FormControl(profile.username)
                    })
                );
            }
            firstName = this.contact.firstName || '';
            lastName = this.contact.lastName || '';
            birthday = this.contact.birthday || '';
            company = this.contact.company || '';
            photoUrl = this.contact.photoUrl || '';
            note = this.contact.note || '';
        }

        this.contactForm = this.formBuilder.group({
            'firstName': [firstName],
            'lastName': [lastName],
            'birthday': [birthday],
            'company': [company],
            'photoUrl': [photoUrl],
            'note': [note],
            'emails': emails,
            'phones': phones,
            'addresses': addresses,
            'socialProfiles': socialProfiles
        });
    }

    private onAddTo(formArrayName: string) {
        switch (formArrayName) {

            case "phones":
                (<FormArray>this.contactForm.controls[formArrayName]).push(
                    new FormGroup({
                        type: new FormControl('Home'),
                        number: new FormControl('')
                    })
                );
                break;
            case "socialProfiles":
                (<FormArray>this.contactForm.controls[formArrayName]).push(
                    new FormGroup({
                        type: new FormControl('GitHub'),
                        username: new FormControl('')
                    })
                );
                break;
            case "addresses":
            case "emails":
                (<FormArray>this.contactForm.controls[formArrayName]).push(
                    new FormGroup({
                        type: new FormControl('Home'),
                        address: new FormControl('')
                    })
                );
                break;
        }
    }

    private onNavigateBack() {
        this.location.back();
    }

    private onSubmit() {
        if (this.isNew) {
            this.contactService.createContact(<Contact>this.contactForm.value)
                .subscribe(
                    (res) => this.router.navigate(['/']),
                    (err) => console.log(err)
                );
        } else {
            this.contactService.updateContact(this.contact._id, <Contact>this.contactForm.value)
                .subscribe(
                    (res) => this.router.navigate(['contacts', this.contact._id]),
                    (err) => console.log(err)
                );
        }
    }

    private onDelete() {
        console.log('delete');
        if (window.confirm('Do you really want to delete this contact?')) {
            this.contactService.deleteContact(this.contact._id)
                .subscribe(
                    (response) => {
                        this.router.navigate(['/'])
                    },
                    (err) => {
                        console.log(err)
                    }
                );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
