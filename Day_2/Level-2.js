// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Billy';
let lastName = 'Bob';
let country = 'U.S.A';
let city = 'Austin';
let age = 69;
let isMarried = false;
let year = 2069;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log('10' == 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
let a = '2';
let b = 3;
let isCool = true;

// Write three JavaScript statement which provide falsy value.
let n = '';
let q = null;
let t = undefined;

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = window.prompt('Enter the base:');
let height = window.prompt('Enter the height:');

let area = 0.5 * (base * height);
console.log(area);
