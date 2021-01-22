// let
for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
}
// console.log(counter); // This will give error as 'let' is only visible only on the block level.

// Expressions
let counter = 5;
let olderMsg = "counter = " + counter;
console.log(olderMsg);
let es6Msg = `counter = ${counter}`;
console.log(es6Msg);


// const
const myConst = "Hi";
//myConst = "Bye"; // This will give error.

// Spread - Expanding an array
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 10, 20, 30, 40];
console.log(nums2);

// Rest
function varArgFunction (...args) {
    console.log(args);
}
varArgFunction (1, 2);
varArgFunction (1, 2, 3, 4);

// Exercise
function sum(...args) {
    let total = 0;    
    args.forEach(element => {
        total += element;
    });
    return total;
}
let total = sum (1, 2, 3);
console.log (total);

// Transform array
let arr1 = [1, 2, 3, 4];
var arr2 = arr1.map (item => {
    return item + 1;
});
console.log (arr2);


// Class before ES6
function Customer (id, name, email) {

    this.show = function() {
        console.log(id, name, email); // prints undefined, as this refers to function's 'this'.
    }
    this.show2 = () => {
        console.log(id, name, email);
    }
}

let customerObject = new Customer(1, "John", "john@gmail.com");
console.log(customerObject);
customerObject.show();
customerObject.show2();

// Class after ES6
class User {
    constructor(id, name, email) {
        console.log("In Constructor");
        this.id = id;
        this.name = name;
        this.email = email;
    }
    show = function() {
        console.log(this.id, this.name, this.email);
    }
}
let user = new User(2, "John", "john@gmail.com");
user.show();

// Destructuring
let product = {
    id: 1,
    name: "Cannon",
    price: 1000,
    price: 2000
}

let {id, name, price} = product;
console.log(id);
console.log(name);
console.log(price); // Will give 2000 and not 1000.
let newProduct = {...product, price:300}; // Will replace 2000 with 300 for new object
console.log(product);
console.log(newProduct);
