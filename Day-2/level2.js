// Level 2

console.log(The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
);
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
var str = '10';
var num = parseInt(str, 10);  // Convert the string to an integer using base 10
if (typeof num !== 'number') {
  num = 10;  // Set num to 10 if it's not a number
}
console.log(num);  // Output: 10

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10
let num = '9.8';
if(parseFloat(num) == 10){
  console.log("equal");
}
else{
  num = 10;
}
console.log(num);

// Check if 'on' is found in both python and jargon
var a = 'python';
var b = 'jargon';
console.log(Boolean(a.search('on')));
console.log(Boolean(b.search('on')));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let str = 'I hope this course is not full of jargon';
console.log(Boolean(str.search('jargon')));

// Generate a random number between 0 and 100 inclusively
let rand = Math.floor(Math.random()*100);
console.log(rand);

// Generate a random number between 50 and 100 inclusively.
let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);

// Generate a random number between 0 and 255 inclusively.
let rand = Math.floor(Math.random()*255);
console.log(rand);

// Access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';
let num = Math.floor(Math.random() * str.length);
console.log(str[num]);

// Use console.log() and escape characters to print the following pattern.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1 \n2\t1\t2\t4\t8 \n3\t1\t3\t9\t27 \n4\t1\t4\t16\t64 \n5\t1\t5\t25\t125');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction';
let i = str.indexOf('because');
console.log(str.substr(i,23));
