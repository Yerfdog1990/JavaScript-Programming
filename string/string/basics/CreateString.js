// Creating string using double quotes
const str1 = "Hello World";
console.log(typeof str1.valueOf());

// Creating string using single quotes
const str2 = 'Hello World';
console.log(typeof str2.valueOf());

// Creating string using backticks
const str3 = `Hello World`;
console.log(typeof str3.valueOf());

// Creating from other types using the String() function
const str4 = String(123);
console.log(typeof str4.valueOf());

// Using toString() to convert Numbers, Booleans or Objects to Strings
const str5 = (123).toString();
console.log(typeof str5.valueOf());

// Using toString() to convert Booleans to Strings
const str6 = true.toString();
console.log(typeof str6.valueOf());

// Using toString() to convert Objects to Strings
const str7 = ({}).toString();
console.log(typeof str7.valueOf());

// Creating string using String.fromCharCode method.
const str8 = String.fromCharCode(65, 66, 67);
console.log(typeof str8.valueOf());

// Creating a String object using new keyword
const str9 = new String("Hello World");
console.log(typeof str9.valueOf());

// Note: You can use String.raw to get backslashes to be in the string without modification.
const str10= "Users\\directory\\HelloWorld";
console.log("Modified string: ", str10);
console.log("Unmodified string: ", String.raw `Users\\directory\\HelloWorld`);