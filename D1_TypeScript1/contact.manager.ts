import {Contact, max_limit} from './model/Contact'
import { ContactService } from './services/contact.service';

/* Direct object creation. */
var c = new Contact ("John", "john@gmail.com");
c.show();
console.log(max_limit);

/* Using ContactService. */
let contactService:ContactService = new ContactService();
let contacts:Array<Contact> = contactService.findAll();
contacts.forEach ((c) => {
    console.log(c.name, c.email);
});