"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("./model/Contact");
const contact_service_1 = require("./services/contact.service");
/* Direct object creation. */
var c = new Contact_1.Contact("John", "john@gmail.com");
c.show();
console.log(Contact_1.max_limit);
/* Using ContactService. */
let contactService = new contact_service_1.ContactService();
let contacts = contactService.findAll();
contacts.forEach((c) => {
    console.log(c.name, c.email);
});
