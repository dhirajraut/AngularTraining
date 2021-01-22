"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max_limit = exports.Contact = void 0;
class Contact {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    get name() {
        return this._name;
    }
    set name(nm) {
        this._name = nm;
    }
    get email() {
        return this._email;
    }
    set email(em) {
        this._email = em;
    }
    show() {
        console.log(this.name);
        console.log(this._email); // Both with/without _ is ok.
    }
}
exports.Contact = Contact;
exports.max_limit = 1000;
