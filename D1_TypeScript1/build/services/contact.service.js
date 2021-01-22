"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contacts_db_1 = require("../datastore/contacts.db");
class ContactService {
    findAll() {
        return contacts_db_1.contacts;
    }
}
exports.ContactService = ContactService;
