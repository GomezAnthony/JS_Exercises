/*
Exercise Level 1
*/

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';
// rint the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3, 7));
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 22));
// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));
// Split the string into an array using split() method
console.log(challenge.split(''));
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log(
  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
);
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));
//  What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  'You cannot end a sentence with because because because is a conjunction'.indexOf(
    'because'
  )
);
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  'You cannot end a sentence with because because because is a conjunction'.lastIndexOf(
    'because'
  )
);
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  'You cannot end a sentence with because because because is a conjunction'.search(
    'because'
  )
);
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.startsWith('30 Days Of JavaScript'));
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('30 Days Of JavaScript'));
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let a = '30 Days of ';
let b = 'JavaScript';
console.log(a.concat(b));
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

/*
 Exercise Level 2
*/

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let x = '10';
let y = 10;

console.log(x === y);
console.log(+x === y);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.ceil(9.8) === 10);
// Check if 'on' is found in both python and jargon
let py = 'python';
let jar = 'jargon';
console.log(py.includes('on'));
console.log(jar.includes('on'));
// I hope this course is not full of jargon. Check if jargon is in the sentence.
let jarSen = 'I hope this course is not full of jargon';
console.log(jarSen.includes('jargon'));
// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100));
// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() + 50) + 100);
