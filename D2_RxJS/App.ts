import {Observable} from 'rxjs';

function emitNumbers() {
    let observable:Observable <number> = new Observable((o) => {
        o.next(100);
        o.next(200);
        o.next(300);
        o.error("Error"); // Either
        o.complete(); // Or
    });
    return observable;
}

emitNumbers().subscribe((result) => { //Result handler
    console.log(result);
},
() => { // Error handler
    console.log("Error");
},
() => { // Complete handler
    console.log("Complete");
}
);