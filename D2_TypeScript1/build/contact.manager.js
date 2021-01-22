"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_service_1 = require("./services/contact.service");
const rxjs_1 = require("rxjs");
/* Using ContactService. */
let contactService = new contact_service_1.ContactService();
let subscription1 = contactService.findAll().subscribe((result) => {
    console.log("Subscription 1", result);
}, () => {
    console.log("Error");
}, () => {
    console.log("subscription1 Complete");
});
subscription1.unsubscribe();
console.log("Non-blocking call");
let subscription2 = contactService.findAll().subscribe((result) => {
    console.log("Subscription 2", result);
}, () => {
    console.log("Error");
}, () => {
    console.log("subscription2 Complete");
});
subscription2.unsubscribe();
// Another way to subscribe (using subject)
let subject = new rxjs_1.Subject();
subject.subscribe((result) => {
    console.log("Subject ", result);
});
contactService.findAll().subscribe(subject);
