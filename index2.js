// const s = "Hello world"
// // // length
// // console.log(s.length);

// // // indexing
// // console.log(s[0]);

// //chartAt
// // console.log(s.charAt(0));

// //charCodeAt
// // console.log(s.charCodeAt(0));

// //at
// // console.log(s.at(-2));

//Extrating String Parts

// const text = 'Cat, Dog, Mouse'
// // console.log(text.slice());
// // console.log(text.substring(-1, -4));

// // console.log(tex.substr(0, 4));
// // deprecated

// const name = 'IVAN'
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// const str1 = 'Hello'
// const str2 = 'World'
// // console.log(str1 + " " + str2);
// console.log(str1.concat(" ", str2));

// const text1 = "   Hello World       "
// console.log(text1.trim());
// console.log(text1.trimStart())
// console.log(text1.trimEnd())

// const num = 5
// const text = num.toString()
// console.log(text.padStart(10, '0'));
// console.log(text.padEnd(10, '0'));

// const text = 'Hello World'
// console.log(text.repeat(30));

// const text = 'Hello world'
// console.log(text.replace('world', 'class'));

// const text = 'Dog, Dog, Cat, Cat'
// console.log(text.replaceAll('Dog', 'Cat'));

// const text = 'a,b,c,d,e,f'
// console.log(text.split(','));

// const text = 'Hello world at location Bulgaria at location'
// // console.log(text.indexOf('location, 29'));
// // console.log(text.lastIndexOf('location'));
// // console.log(text.search(/location/));
// // console.log(text.match('o'));
// // console.log(text.includes('Bulgaria'));
// // console.log(text.startsWith('Hello'));
// // console.log(text.endsWith('location'));

// const name = 'Ivan'
// const age = Math.random()

// // // const greeting = `Your name is ${name.toUpperCase()}, your age is ${age.toFixed()} `

// function greeting(name, age){
//     return `Your name is ${name.toUpperCase()}, your age is ${age.toFixed()} `
// }
// console.log(greeting('Petya', age));

// //Task
// 1. Email Validation (Basic):
// Write a function that takes an email address as input and returns true if the email contains the '@' symbol and has at least one dot ('.') after '@', otherwise false.

// 2.Greeting Message:
// Create a function that takes a person's name as input and returns a personalized greeting message, such as "Hello, [Name]!".

// 3. BMI Calculator (Basic):
// Write a function that takes a person's weight (in kilograms) and height (in meters) as input and returns their Body Mass Index (BMI) as a string 
// 'Your Body Mass Index is N.'

// function validateEmail(email) {
//     const atSymbolIndex = email.indexOf('@');
//     if (atSymbolIndex > -1) {
//         const domain = email.substring(atSymbolIndex + 1);
//         if (domain.indexOf('.') > -1) {
//             return true;
//         }
//     }
//     return false;
// }

// function greetingMessage(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greetingMessage()); 

// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
//     return `'Your Body Mass Index is ${bmi.toFixed(2)}.`;
// }

// console.log(calculateBMI()); 
// console.log(calculateBMI()); 
