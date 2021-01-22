"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function emitNumbers() {
    let observable = new rxjs_1.Observable((o) => {
        o.next(100);
        o.next(200);
        o.next(300);
        o.error("Error"); // Either
        o.complete(); // Or
    });
    return observable;
}
emitNumbers().subscribe((result) => {
    console.log(result);
}, () => {
    console.log("Error");
}, () => {
    console.log("Complete");
});
