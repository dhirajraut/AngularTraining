import { Contact } from "../model/Contact";
import { contacts } from "../datastore/contacts.db";
import {Observable} from "rxjs";

export class ContactService {

    public findAll(): Observable<Contact> {
        let observable:Observable<Contact> = new Observable (o => {
            contacts.forEach(element => {
                o.next(element); 
            });
            setTimeout (() => {
                o.next(new Contact("Intruder", null));
            }, 3000);
            o.complete();
        })
        return observable;
    }
}