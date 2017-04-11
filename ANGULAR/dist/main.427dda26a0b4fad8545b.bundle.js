webpackJsonp([0,3],{168:function(t,e,n){"use strict";var a=n(1),o=n(336),r=n(551),i=n(722);n.n(i);n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t}return t.prototype.getAllContacts=function(){return this.http.get(r.a.SERVER_URL+"/contacts")},t.prototype.getSingleContact=function(t){return this.http.get(r.a.SERVER_URL+"/contacts/"+t)},t.prototype.createContact=function(t){var e=JSON.stringify(t),n=new o.b;return n.append("Content-Type","application/json"),this.http.post(r.a.SERVER_URL+"/contacts",e,{headers:n})},t.prototype.deleteContact=function(t){return this.http.delete(r.a.SERVER_URL+"/contacts/"+t)},t.prototype.updateContact=function(t,e){var n=JSON.stringify(e),a=new o.b;return a.append("Content-Type","application/json"),this.http.patch(r.a.SERVER_URL+"/contacts/"+t,n,{headers:a})},t=c([n.i(a.c)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.c&&o.c)&&e||Object])],t);var e}()},359:function(t,e,n){"use strict";var a=n(1),o=n(238),r=n(84),i=n(76),c=n(168),s=n(362);n.d(e,"a",function(){return p});var l=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n,a,o){this.contactService=t,this.activatedRoute=e,this.location=n,this.titleService=a,this.router=o,this.contact=new s.a}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){var n=e.id;n&&t.contactService.getSingleContact(n).subscribe(function(e){t.contact=e.json(),t.titleService.setTitle(t.contact.firstName+" "+t.contact.lastName+" | Contacts | CRM Prototype Angular"),console.log(t.contact)},function(e){t.router.navigate(["/"])})})},t.prototype.onNavigateBack=function(){this.location.back()},t=l([n.i(a._4)({selector:"cpa-contact-details",template:n(714),styles:[]}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.a&&c.a)&&e||Object,"function"==typeof(p="undefined"!=typeof o.b&&o.b)&&p||Object,"function"==typeof(f="undefined"!=typeof r.c&&r.c)&&f||Object,"function"==typeof(u="undefined"!=typeof i.c&&i.c)&&u||Object,"function"==typeof(h="undefined"!=typeof o.c&&o.c)&&h||Object])],t);var e,p,f,u,h}()},360:function(t,e,n){"use strict";var a=n(1),o=n(84),r=n(238),i=n(329),c=n(76),s=n(168),l=n(362);n.d(e,"a",function(){return f});var d=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,a,o,r){this.location=t,this.activatedRoute=e,this.router=n,this.formBuilder=a,this.contactService=o,this.titleService=r,this.contactForm=new i.b({}),this.contact=new l.a,this.isNew=!0}return t.prototype.ngOnInit=function(){var t=this;this.subscription=this.activatedRoute.params.subscribe(function(e){var n=e.id;n&&(t.isNew=!1,t.contactService.getSingleContact(n).subscribe(function(e){t.contact=e.json(),t.titleService.setTitle(t.contact.firstName+" "+t.contact.lastName+" | Contacts | CRM Prototype Angular"),console.log(t.contact),t.initForm()},function(e){t.router.navigate(["/"])})),t.isNew&&t.titleService.setTitle("Add new contact | Contacts | CRM Prototype Angular"),t.initForm()})},t.prototype.initForm=function(){var t="",e="",n="",a="",o="",r="",c=new i.c([]),s=new i.c([]),l=new i.c([]),d=new i.c([]);if(!this.isNew){for(var p=0,f=this.contact.emails;p<f.length;p++){var u=f[p];c.push(new i.b({type:new i.d(u.type),address:new i.d(u.address)}))}for(var h=0,m=this.contact.phones;h<m.length;h++){var y=m[h];s.push(new i.b({type:new i.d(y.type),number:new i.d(y.number)}))}for(var v=0,b=this.contact.addresses;v<b.length;v++){var g=b[v];l.push(new i.b({type:new i.d(g.type),address:new i.d(g.address)}))}for(var R=0,w=this.contact.socialProfiles;R<w.length;R++){var O=w[R];d.push(new i.b({type:new i.d(O.type),username:new i.d(O.username)}))}t=this.contact.firstName||"",e=this.contact.lastName||"",n=this.contact.birthday||"",a=this.contact.company||"",o=this.contact.photoUrl||"",r=this.contact.note||""}this.contactForm=this.formBuilder.group({firstName:[t],lastName:[e],birthday:[n],company:[a],photoUrl:[o],note:[r],emails:c,phones:s,addresses:l,socialProfiles:d})},t.prototype.onAddTo=function(t){switch(t){case"phones":this.contactForm.controls[t].push(new i.b({type:new i.d("Home"),number:new i.d("")}));break;case"socialProfiles":this.contactForm.controls[t].push(new i.b({type:new i.d("GitHub"),username:new i.d("")}));break;case"addresses":case"emails":this.contactForm.controls[t].push(new i.b({type:new i.d("Home"),address:new i.d("")}))}},t.prototype.onNavigateBack=function(){this.location.back()},t.prototype.onSubmit=function(){var t=this;this.isNew?this.contactService.createContact(this.contactForm.value).subscribe(function(e){return t.router.navigate(["/"])},function(t){return console.log(t)}):this.contactService.updateContact(this.contact._id,this.contactForm.value).subscribe(function(e){return t.router.navigate(["contacts",t.contact._id])},function(t){return console.log(t)})},t.prototype.onDelete=function(){var t=this;console.log("delete"),window.confirm("Do you really want to delete this contact?")&&this.contactService.deleteContact(this.contact._id).subscribe(function(e){t.router.navigate(["/"])},function(t){console.log(t)})},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t=d([n.i(a._4)({selector:"cpa-contact-edition",template:n(715),styles:[]}),p("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.c&&o.c)&&e||Object,"function"==typeof(f="undefined"!=typeof r.b&&r.b)&&f||Object,"function"==typeof(u="undefined"!=typeof r.c&&r.c)&&u||Object,"function"==typeof(h="undefined"!=typeof i.e&&i.e)&&h||Object,"function"==typeof(m="undefined"!=typeof s.a&&s.a)&&m||Object,"function"==typeof(y="undefined"!=typeof c.c&&c.c)&&y||Object])],t);var e,f,u,h,m,y}()},361:function(t,e,n){"use strict";var a=n(1),o=n(76),r=n(168);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.contactService=t,this.titleService=e,this.contacts=[],this.filter="",this.order={property:"firstName",asc:!0},this.titleService.setTitle("Contacts | CRM Prototype Angular")}return t.prototype.ngOnInit=function(){var t=this;this.contactService.getAllContacts().subscribe(function(e){return 200!==e.status?void(t.error=!0):(t.error=!1,t.contacts.splice(0),void t.contacts.push.apply(t.contacts,e.json()))},function(e){t.error=!0})},t.prototype.setOrder=function(t){this.order={property:t,asc:!this.order.asc}},t=i([n.i(a._4)({selector:"cpa-contact-list",template:n(716)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(s="undefined"!=typeof o.c&&o.c)&&s||Object])],t);var e,s}()},362:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function t(t,e,n,a,o,r,i,c,s,l,d,p){void 0===e&&(e=""),void 0===n&&(n=""),void 0===a&&(a=""),void 0===o&&(o=""),void 0===r&&(r=[{type:"",address:""}]),void 0===i&&(i=[{type:"",number:""}]),void 0===c&&(c=[{type:"",address:""}]),void 0===s&&(s=[{type:"",username:""}]),void 0===l&&(l=""),void 0===d&&(d=""),this._id=t,this.firstName=e,this.lastName=n,this.birthday=a,this.company=o,this.emails=r,this.phones=i,this.addresses=c,this.socialProfiles=s,this.photoUrl=l,this.note=d,this.__v=p}return t}()},363:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(a._4)({selector:"cpa-contacts",template:n(717),styles:[n(711)]}),r("design:paramtypes",[])],t)}()},364:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(a._4)({selector:"cpa-page-not-found",template:n(719),styles:[]}),r("design:paramtypes",[])],t)}()},430:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=430},431:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(n(558),n(519)),o=n(1),r=n(557),i=n(549);r.a.production&&n.i(o.a)(),n.i(a.a)().bootstrapModule(i.a)},548:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.title="cpa works!"}return t=o([n.i(a._4)({selector:"cpa-root",template:n(713),styles:[n(710)]}),r("design:paramtypes",[])],t)}()},549:function(t,e,n){"use strict";var a=n(76),o=n(1),r=n(329),i=n(336),c=n(550),s=n(168),l=n(548),d=n(363),p=n(555),f=n(361),u=n(359),h=n(556),m=n(360),y=n(364),v=n(554),b=n(553);n.d(e,"a",function(){return w});var g=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(){function t(){}return t=g([n.i(o.b)({declarations:[l.a,d.a,p.a,f.a,u.a,h.a,m.a,y.a,v.a,b.a],imports:[a.a,r.a,i.a,c.a],providers:[s.a],bootstrap:[l.a]}),R("design:paramtypes",[])],t)}()},550:function(t,e,n){"use strict";var a=n(238),o=n(363),r=n(364),i=n(552);n.d(e,"a",function(){return s});var c=[{path:"",redirectTo:"/contacts",pathMatch:"full"},{path:"contacts",component:o.a,children:i.a,data:{title:"Contacts"}},{path:"**",component:r.a}],s=a.a.forRoot(c)},551:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={SERVER_URL:"http://localhost:8080/api/v1"}},552:function(t,e,n){"use strict";var a=n(361),o=n(359),r=n(360);n.d(e,"a",function(){return i});var i=[{path:"",component:a.a},{path:"new",component:r.a,data:{title:"Add new contact"}},{path:":id",component:o.a},{path:":id/edit",component:r.a}]},553:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.transform=function(t,e){return e?t.filter(function(t){return t.firstName.toLowerCase().indexOf(e.toLowerCase())>-1||t.lastName.toLowerCase().indexOf(e.toLowerCase())>-1||t.company.toLowerCase().indexOf(e.toLowerCase())>-1}):t},t=o([n.i(a.p)({name:"filterBy"}),r("design:paramtypes",[])],t)}()},554:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.transform=function(t,e,n){return console.log(t,e,n),e?n?t.sort(function(t,n){return t[e].toLowerCase()<n[e].toLowerCase()?-1:t[e].toLowerCase()>n[e].toLowerCase()?1:0}):t.sort(function(t,n){return t[e].toLowerCase()>n[e].toLowerCase()?-1:t[e].toLowerCase()<n[e].toLowerCase()?1:0}):t},t=o([n.i(a.p)({name:"orderBy"}),r("design:paramtypes",[])],t)}()},555:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(a._4)({selector:"cpa-header",template:n(718)}),r("design:paramtypes",[])],t)}()},556:function(t,e,n){"use strict";var a=n(1);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(a._4)({selector:"cpa-sidebar",template:n(720),styles:[n(712)]}),r("design:paramtypes",[])],t)}()},557:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={production:!0}},558:function(t,e,n){"use strict";var a=n(572),o=(n.n(a),n(565)),r=(n.n(o),n(561)),i=(n.n(r),n(567)),c=(n.n(i),n(566)),s=(n.n(c),n(564)),l=(n.n(s),n(563)),d=(n.n(l),n(571)),p=(n.n(d),n(560)),f=(n.n(p),n(559)),u=(n.n(f),n(569)),h=(n.n(u),n(562)),m=(n.n(h),n(570)),y=(n.n(m),n(568)),v=(n.n(y),n(573)),b=(n.n(v),n(986));n.n(b)},710:function(t,e){t.exports=""},711:function(t,e){t.exports=""},712:function(t,e){t.exports=""},713:function(t,e){t.exports='<cpa-header></cpa-header>\r\n<section class="section">\r\n    <div class="container">\r\n        <div class="columns">\r\n            <div class="column is-8">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <div class="column is-4">\r\n                <cpa-sidebar></cpa-sidebar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>'},714:function(t,e){t.exports='<div class="card">\r\n    <header class="card-header">\r\n        <h1 class="card-header-title"> {{contact.firstName}} {{contact.lastName}} </h1>\r\n    </header>\r\n    <div class="card-content">\r\n        <div class="columns">\r\n            <div class="column is-3 has-text-centered"><img\r\n                    src="{{contact.photoUrl ? contact.photoUrl : \'http://placehold.it/250x250\'}}" alt=""></div>\r\n            <div class="column auto">\r\n                <table class="table">\r\n                    <tr>\r\n                        <th>Created:</th>\r\n                        <td>{{contact.createdAt | date:\'dd.MM.yyyy - H:m:s\'}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Updated:</th>\r\n                        <td>{{contact.updatedAt | date:\'dd.MM.yyyy - H:m:s\'}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Name:</th>\r\n                        <td>{{contact.firstName}} {{contact.lastName}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Birthday:</th>\r\n                        <td>{{contact.birthday}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Company:</th>\r\n                        <td>{{contact.company}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>E-Mail(s):</th>\r\n                    </tr>\r\n                    <tr *ngFor="let email of contact.emails">\r\n                        <td>{{email.type}}</td>\r\n                        <td><a href="mailto:{{email.address}}">{{email.address}}</a></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Phonenumber(s):</th>\r\n                    </tr>\r\n                    <tr *ngFor="let phone of contact.phones">\r\n                        <td>{{phone.type}}</td>\r\n                        <td>{{phone.number}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Address(es):</th>\r\n                    </tr>\r\n                    <tr *ngFor="let address of contact.addresses">\r\n                        <td>{{address.type}}</td>\r\n                        <td>{{address.address}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Social Profile(s):</th>\r\n                    </tr>\r\n                    <tr *ngFor="let profile of contact.socialProfiles">\r\n                        <td>{{profile.type}}</td>\r\n                        <td>{{profile.username}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>Note:</th>\r\n                        <td>{{contact.note}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class="card-footer">\r\n        <a class="card-footer-item" [routerLink]="[\'edit\']">Edit</a>\r\n        <a class="card-footer-item" (click)="onNavigateBack()">Cancel</a>\r\n    </footer>\r\n</div>\r\n'},715:function(t,e){t.exports='<div class="card">\n    <form id="contactForm" [formGroup]="contactForm" (ngSubmit)="onSubmit()">\n        <header class="card-header">\n            <h1 class="card-header-title"> {{ isNew ? \'Create new\': \'Edit\'}} contact </h1>\n            <!--<h1 *ngIf="isNew" class="card-header-title"> Create new contact </h1>\n        <h1 *ngIf="!isNew" class="card-header-title"> Edit Contact </h1>-->\n        </header>\n        <div class="card-content">\n            <div class="columns">\n                <div class="column auto ">\n\n                    <label for="firstname" class="label">First name</label>\n                    <p class="control">\n                        <input id="firstname" class="input" type="text" placeholder="" formControlName="firstName">\n                    </p>\n\n                    <label for="lastname" class="label">Last name</label>\n                    <p class="control">\n                        <input id="lastname" class="input" type="text" placeholder="" formControlName="lastName">\n                    </p>\n\n                    <label for="birthday" class="label">Birthday</label>\n                    <p class="control">\n                        <input id="birthday" class="input" type="date" placeholder="" formControlName="birthday">\n                    </p>\n\n                    <label for="company" class="label">Company</label>\n                    <p class="control">\n                        <input id="company" class="input" type="text" placeholder="" formControlName="company">\n                    </p>\n\n                    <label for="company" class="label">Photo</label>\n                    <p class="control">\n                        <input id="photoUrl" class="input" type="text" placeholder="photo URL"\n                               formControlName="photoUrl">\n                    </p>\n\n                    <div formArrayName="emails">\n                        <label class="label">Email</label>\n                        <div *ngFor="let email of contactForm.controls[\'emails\'].controls; let i = index">\n                            <p class="control has-addons" formGroupName="{{i}}">\n\t\t\t\t\t\t\t\t\t\t<span class="select">\n\t\t\t\t\t\t\t\t\t\t<select formControlName="type">\n\t\t\t\t\t\t\t\t\t\t\t<option value="Home">Home</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Office">Office</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Other">Other</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</span>\n                                <input type="email" class="input is-expanded" placeholder="Email address"\n                                       formControlName="address">\n                                <a class="button is-danger is-outlined" title="Remove"\n                                   (click)="contactForm.controls[\'emails\'].removeAt(i, 1)">\n                                    <span class="icon"><i class="fa fa-times"></i></span>\n                                </a>\n                            </p>\n                        </div>\n                        <!--ngFor-->\n                    </div>\n                    <!--formArray-->\n                    <a type="button" class="button is-primary is-outlined" (click)="this.onAddTo(\'emails\')">\n                        <span class="icon">\t<i class="fa fa-plus-square-o"> </i> </span> &nbsp; Add an email address\n                    </a>\n                    <!--emails-->\n\n                    <div formArrayName="phones">\n                        <label class="label">Phone</label>\n                        <div *ngFor="let phone of contactForm.controls[\'phones\'].controls; let i = index">\n                            <p class="control has-addons" formGroupName="{{i}}">\n\t\t\t\t\t\t\t\t\t\t<span class="select">\n\t\t\t\t\t\t\t\t\t\t<select formControlName="type">\n\t\t\t\t\t\t\t\t\t\t\t<option value="Home">Home</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Office">Office</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Mobile">Mobile</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Other">Other</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</span>\n                                <input type="text" class="input is-expanded" placeholder="Phone number"\n                                       formControlName="number">\n                                <a class="button is-danger is-outlined" title="Remove"\n                                   (click)="contactForm.controls[\'phones\'].removeAt(i, 1)">\n                                    <span class="icon"><i class="fa fa-times"></i></span>\n                                </a>\n                            </p>\n                        </div>\n                        <!--ngFor-->\n                    </div>\n                    <!--formArray-->\n                    <a type="button" class="button is-primary is-outlined" (click)="this.onAddTo(\'phones\')">\n                        <span class="icon">\t<i class="fa fa-plus-square-o"> </i> </span> &nbsp; Add a phone number\n                    </a>\n                    <!--phones-->\n\n                    <div formArrayName="socialProfiles">\n                        <label class="label">Email</label>\n                        <div *ngFor="let profile of contactForm.controls[\'socialProfiles\'].controls; let i = index">\n                            <p class="control has-addons" formGroupName="{{i}}">\n\t\t\t\t\t\t\t\t\t\t<span class="select">\n\t\t\t\t\t\t\t\t\t\t<select formControlName="type">\n\t\t\t\t\t\t\t\t\t\t\t<option value="GitHub">GitHub</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Xing">Xing</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="LinkedIn">LinkedIn</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Facebook">Facebook</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Twitter">Twitter</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Google">Google</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</span>\n                                <input type="text" class="input is-expanded" placeholder="username"\n                                       formControlName="username">\n                                <a class="button is-danger is-outlined" title="Remove"\n                                   (click)="contactForm.controls[\'socialProfiles\'].removeAt(i, 1)">\n                                    <span class="icon"><i class="fa fa-times"></i></span>\n                                </a>\n                            </p>\n                        </div>\n                        <!--ngFor-->\n                    </div>\n                    <!--formArray-->\n                    <a type="button" class="button is-primary is-outlined" (click)="this.onAddTo(\'socialProfiles\')">\n                        <span class="icon">\t<i class="fa fa-plus-square-o"> </i> </span> &nbsp; Add a social profile\n                    </a>\n                    <!--social-->\n\n                    <div formArrayName="addresses">\n                        <label class="label">Address</label>\n                        <div *ngFor="let address of contactForm.controls[\'addresses\'].controls; let i = index">\n                            <p class="control has-addons" formGroupName="{{i}}">\n\t\t\t\t\t\t\t\t\t\t<span class="select">\n\t\t\t\t\t\t\t\t\t\t<select formControlName="type">\n\t\t\t\t\t\t\t\t\t\t\t<option value="Home">Home</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Office">Office</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="Other">Other</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</span>\n                                <input type="email" class="input is-expanded" placeholder="Address"\n                                       formControlName="address">\n                                <a class="button is-danger is-outlined" title="Remove"\n                                   (click)="contactForm.controls[\'addresses\'].removeAt(i, 1)">\n                                    <span class="icon"><i class="fa fa-times"></i></span>\n                                </a>\n                            </p>\n                        </div>\n                        <!--ngFor-->\n                    </div>\n                    <!--formArray-->\n                    <a type="button" class="button is-primary is-outlined" (click)="this.onAddTo(\'addresses\')">\n                        <span class="icon">\t<i class="fa fa-plus-square-o"> </i> </span> &nbsp; Add an address\n                    </a>\n                    <!--addresses-->\n\n                    <label for="note" class="label">Note</label>\n                    <p class="control">\n                        <textarea id="note" class="textarea" placeholder="Textarea" formControlName="note"></textarea>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <footer class="card-footer">\n            <button type="submit" [disabled]="!contactForm.valid" class="card-footer-item">Save</button>\n            <a *ngIf="!isNew" class="card-footer-item" (click)="onDelete()">Delete</a>\n            <a class="card-footer-item" (click)="onNavigateBack()">Cancel</a>\n        </footer>\n    </form>\n</div>\n'},716:function(t,e){t.exports='<div class="card has-shadow">\r\n    <header class="card-header">\r\n        <h1 class="card-header-title"> Contacts </h1>\r\n    </header>\r\n    <div class="card-content">\r\n        <div *ngIf="error">\r\n            <div class="notification is-danger has-text-centered">Error Loading Contacts.</div>\r\n        </div>\r\n\r\n        <div *ngIf="!error">\r\n\r\n            <div class="control is-grouped">\r\n                <p class="control is-expanded">\r\n                    <input class="input" type="text" name="searchText" #filter (keyup)="0"\r\n                           placeholder="Search for a name or company"/>\r\n                </p>\r\n            </div>\r\n\r\n            <table class="table is-striped is-narrow">\r\n                <thead>\r\n                <tr>\r\n                    <th (click)="setOrder(\'firstName\')">Firstname\r\n                        <span class="icon is-small">\r\n                            <i [ngClass]="{\'fa\':true, \'fa-caret-down\':order.asc && order.property === \'firstName\',\'fa-caret-up\':!order.asc && order.property === \'firstName\'}"></i>\r\n                        </span>\r\n                    </th>\r\n                    <th (click)="setOrder(\'lastName\')">Lastname\r\n                        <span class="icon is-small">\r\n                            <i [ngClass]="{\'fa\':true, \'fa-caret-down\':order.asc && order.property === \'lastName\',\'fa-caret-up\':!order.asc && order.property === \'lastName\'}"></i>\r\n                        </span>\r\n                    </th>\r\n                    <th (click)="setOrder(\'company\')">Company\r\n                        <span class="icon is-small">\r\n                            <i [ngClass]="{\'fa\':true, \'fa-caret-down\':order.asc && order.property === \'company\',\'fa-caret-up\':!order.asc && order.property === \'company\'}"></i>\r\n                        </span>\r\n                    </th>\r\n                    <th>E-Mail</th>\r\n                    <th>Phone</th>\r\n                    <th></th>\r\n                </tr>\r\n                </thead>\r\n                <tfoot>\r\n                <tr>\r\n                    <th>Firstname</th>\r\n                    <th>Lastname</th>\r\n                    <th>Company</th>\r\n                    <th>E-Mail</th>\r\n                    <th>Phone</th>\r\n                    <th></th>\r\n                </tr>\r\n                </tfoot>\r\n                <tbody>\r\n                <tr *ngFor="let contact of contacts | filterBy:filter.value | orderBy:order.property:order.asc">\r\n                    <td>{{contact.firstName}}</td>\r\n                    <td>{{contact.lastName}}</td>\r\n                    <td>{{contact.company}}</td>\r\n                    <td>{{contact.emails[0] ? contact.emails[0].address : ""}}</td>\r\n                    <td>{{contact.phones[0] ? contact.phones[0].number : ""}}</td>\r\n                    <td>\r\n                        <a [routerLink]="[contact._id]"> <span class="icon"><i class="fa fa-info-circle"></i></span></a>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
},717:function(t,e){t.exports="<router-outlet></router-outlet>\r\n"},718:function(t,e){t.exports='<nav class="nav has-shadow" role="navigation">\r\n\t<div class="container">\r\n\t\t<div class="nav-left">\r\n\t\t\t<span class="nav-item">\r\n\t\t\t\t\t<span class="title is-5">CRM Prototype Angular</span>\r\n\t\t\t</span>\r\n\t\t\t<a class="nav-item is-tab is-hidden-mobile" routerLink="/contacts" routerLinkActive="is-active">Contacts</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-mobile" routerLink="/companies" routerLinkActive="is-active">Companies</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-mobile" routerLink="/transactions" routerLinkActive="is-active">Transactions</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-mobile" routerLink="/manymore" routerLinkActive="is-active">About</a>\r\n\t\t</div>\r\n\t\t<span class="nav-toggle">\r\n      <span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t</span>\r\n\t\t<div class="nav-right nav-menu">\r\n\t\t\t<a class="nav-item is-tab is-hidden-tablet is-active">Home</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-tablet">Features</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-tablet">Pricing</a>\r\n\t\t\t<a class="nav-item is-tab is-hidden-tablet">About</a>\r\n\t\t\t<a class="nav-item is-tab">Profile</a>\r\n\t\t\t<a class="nav-item is-tab">Log out</a>\r\n\t\t</div>\r\n\t</div>\r\n</nav>'},719:function(t,e){t.exports='<div class="card ">\n    <header class="card-header">\n        <p class="card-header-title"> Error </p>\n    </header>\n    <div class="content">\n        <div class="has-text-centered">\n            <br> <br> <br>\n            <p>This page does not exist.</p>\n            <a routerLink="/"><span class="icon"><i class="fa fa-arrow-right"></i></span> go back to home.</a>\n            <br> <br> <br>\n        </div>\n    </div>\n</div>\n'},720:function(t,e){t.exports='<div class="card">\n\t<div class="card-content">\n\t\t<aside class="menu">\n\t\t\t<p class="menu-label">\n\t\t\t\tGeneral\n\t\t\t</p>\n\t\t\t<ul class="menu-list">\n\t\t\t\t<li><a routerLink="/contacts/new" routerLinkActive="is-active">Add new Contact</a></li>\n\t\t\t\t<li><a>Dashboard</a></li>\n\t\t\t\t<li><a>Customers</a></li>\n\t\t\t</ul>\n\t\t\t<p class="menu-label">\n\t\t\t\tAdministration\n\t\t\t</p>\n\t\t\t<ul class="menu-list">\n\t\t\t\t<li><a>Team Settings</a></li>\n\t\t\t\t<li>\n\t\t\t\t\t<a class="is-active">Manage Your Team</a>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a>Members</a></li>\n\t\t\t\t\t\t<li><a>Plugins</a></li>\n\t\t\t\t\t\t<li><a>Add a member</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li><a>Invitations</a></li>\n\t\t\t\t<li><a>Cloud Storage Environment Settings</a></li>\n\t\t\t\t<li><a>Authentication</a></li>\n\t\t\t</ul>\n\t\t\t<p class="menu-label">\n\t\t\t\tTransactions\n\t\t\t</p>\n\t\t\t<ul class="menu-list">\n\t\t\t\t<li><a>Payments</a></li>\n\t\t\t\t<li><a>Transfers</a></li>\n\t\t\t\t<li><a>Balance</a></li>\n\t\t\t</ul>\n\t\t</aside>\n\t</div>\n</div>'},987:function(t,e,n){t.exports=n(431)}},[987]);