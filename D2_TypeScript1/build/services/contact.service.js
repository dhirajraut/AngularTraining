"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const Contact_1 = require("../model/Contact");
const contacts_db_1 = require("../datastore/contacts.db");
const rxjs_1 = require("rxjs");
class ContactService {
    findAll() {
        let observable = new rxjs_1.Observable(o => {
            contacts_db_1.contacts.forEach(element => {
                o.next(element);
            });
            setTimeout(() => {
                o.next(new Contact_1.Contact("Intruder", null));
            }, 3000);
            o.complete();
        });
        return observable;
    }
}
exports.ContactService = ContactService;
