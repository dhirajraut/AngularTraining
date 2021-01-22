import {Contact, max_limit} from './model/Contact'
import { ContactService } from './services/contact.service';
import {Observable, Subject} from 'rxjs';

/* Using ContactService. */
let contactService:ContactService = new ContactService();

let subscription1 = contactService.findAll().subscribe((result) => { //Result handler
    console.log("Subscription 1", result);
},
() => { // Error handler
    console.log("Error");
},
() => { // Complete handler
    console.log("subscription1 Complete");
}
);
subscription1.unsubscribe();

console.log("Non-blocking call");

let subscription2 = contactService.findAll().subscribe((result) => { //Result handler
    console.log("Subscription 2", result);
},
() => { // Error handler
    console.log("Error");
},
() => { // Complete handler
    console.log("subscription2 Complete");
}
);
subscription2.unsubscribe();


// Another way to subscribe (using subject)
let subject = new Subject();
subject.subscribe((result) => {
    console.log("Subject ", result);
});
contactService.findAll().subscribe(subject);