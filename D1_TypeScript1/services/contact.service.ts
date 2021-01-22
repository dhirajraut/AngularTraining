import { Contact } from "../model/Contact";
import { contacts } from "../datastore/contacts.db";

export class ContactService {

    public findAll(): Array<Contact> {
        return contacts;
    }
}