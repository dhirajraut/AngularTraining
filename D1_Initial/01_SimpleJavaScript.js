//Run using C:\Users\draut\00_Dhiraj\Workspace\Angular\D1_Initial> node .\SimpleJavaScript.js

// Hello World
var name = "Dhiraj";
console.log(typeof(name));
console.log("Hello world");
console.log("Hello " + name);
name = 3;
console.log(typeof(name));

// "Arrays"
var numberArray = [1, 2, 3, 4, 5];
console.log(typeof(numberArray));
console.log(numberArray);
var stringArray = ["Mumbai", "Pune"];
stringArray.push("Hyd");
console.log(typeof(stringArray));
console.log(stringArray);

// Functions
function hello() {
    console.log ("Hello from function");
    return "Return from function";
}
var returnValue = hello();
console.log(returnValue);

// Functional programming
function factory() {
    return function() {
        return "Hello Functional Programming";
    }
}
console.log(factory()());
var functionReference = factory();
console.log(functionReference());

// Sending Function
function callingFunction(f) {
    console.log("In Calling Function");
    f();
}
function calledFunction() {
    console.log("In Called Function");
}
callingFunction(calledFunction);
callingFunction(function() {
    console.log("In Annonymus Function");
});


// Accessing the parent function variable from child function.
function fx() {
    var x = 0;
    return function fy() {
        x++;
        return x;
    }
}
let counter1 = fx();
console.log(counter1());
console.log(counter1());
console.log(counter1());
let counter2 = fx(); // Starts from 1.
console.log(counter2());
console.log(counter2());

console.log(counter1());// Older value

// Async/blocking-nonblocking
console.log("Blocking nonBlocking Demo");
function blockingFunction() {
    // Blocking funtion
    for(var counter = 0; counter < 1000000000; counter ++) {

    }
    console.log("After blocking timeout");
}
function nonBlockingFn () {

        setTimeout(function() {
        console.log("After non-blocking timeout");
    }, 3000)
}
blockingFunction();
console.log("After blockingFunction");
nonBlockingFn();
console.log("After nonBlockingFunction");

// Callback
console.log("Callback Demo");
function add (a, b, callback) {
    setTimeout(function() {
        callback(a+b);
    }, 3000)
}
add(5, 3, function (result) {
    console.log("Inside callback");
    console.log(result);
});
console.log("Outside, but waiting for callback");

setTimeout(() => {
    
}, 3000);

// Promise
console.log("Promise Demo -------------");
function promiseDemo(a, b) {
    var promise = new Promise(function (resolve, reject) {
        if (a < 0 || b < 0) {
            reject ("Invalid Numbers");
        }
        else {
            resolve (a + b); // resolve returns. can be called only one time.
        }
    });
    return promise;
}
// Resolve
    promiseDemo(10, 20).then(function(result) {
        console.log (result);
    }, function rejectHandler(error) {
        console.log (error);
    });
// Reject
    promiseDemo(-10, 20).then(function resolveHandler(result) {
        console.log (result);
    }, function rejectHandler(error) {
        console.log (error);
    });
    // OR
    promiseDemo(-10, 20).then(function resolveHandler(result) {
        console.log (result);
    }).catch(function rejectHandler(error) {
        console.log (error);
    });
console.log("Promise ended");
