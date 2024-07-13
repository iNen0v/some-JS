// // // // // // // let n = 0;
// // // // // // // let flag = true;
// // // // // // // while (flag){
// // // // // // //     console.log('Hello world');
// // // // // // //     if(n === 10){
// // // // // // //         console.log('special')
// // // // // // //         flag = false
// // // // // // //     }
// // // // // // //     n++
// // // // // // // }

// // // // // // function solve(condiotion){
// // // // // //     let n = 0;
// // // // // // while(n < condiotion){
// // // // // //     n++
// // // // // //     console.log(n);
// // // // // // }
// // // // // // }
// // // // // // solve(5)
// // // // // function solve(string) {
// // // // //     let n = 0;
// // // // //     while (n < string.length) {
// // // // //         console.log(string[n]);
// // // // //         n++;
// // // // //     }
// // // // // }

// // // // // solve('Hello ');
// // // // // // function solve(string) {
// // // // // //     for (let i = 0; i < string.length; i++) {
// // // // // //         let char = string[i];
// // // // // //         console.log(char);
// // // // // //     }
// // // // // // }
// // // // // // solve('hello');
// // // // function solve (string){
// // // //     let n = 0;
// // // //     let strLength = string.strLength
// // // //     do{
// // // //         console.log(string[n]);
// // // //         n++
// // // //     }while(n <= strLength -1)
// // // // }
// // // // solve('Hello')
// // // //for loop (initilization,condition, icrement of initilization value)
// // // // function solve(str){
// // // // for(let index = 0; index <= str.length; index++){
// // // //     console.log(str[index]);
// // // // }
// // // // }
// // // // solve('Hello world')

// // // // function solve(str){
// // // //     for (let index = 0; index <= str.length; index++){
// // // //         if(str[index] === ''){
// // // //             continue
// // // //         }
// // // //         console.log(str[index]);
// // // //     }
// // // //     console.log('finish')
// // // // }
// // // // solve('Hello world')
// // // function solve(str){
// // //     for (let index = str.length - 1 ; index > 0; index--){
// // //         if(str[index] === ' '){
// // //             continue
// // //         }
// // //         console.log(str[index]);
// // //     }
// // //     console.log('finish')
// // // }
// // // solve('Hello world')
// // // for of for(name of variable, of string)
// // function solve(str){
// //     for(char of str){
// //         console.log(char);
// //     }
// // }
// // solve('Hello world')
// //3 по 3 по 3 да се завърти
// for(let i =-0; i < 3; i++){
//     for(let j=0; j < 3; j++){
//         console.log(`i= ${i}, j= ${j}`);
//     }
// }

// function one(){

// }
// function two(){

// }

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8]
// const arrString = ['Petya', 'Victor', 'Nina', 'Grigor']
// const arrBul = [true, false, true]
// const arrFun = [one, two]
// const arrArr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// const arrMix = [1, 'Hello', one, true, [], null, undefined, NaN ]

// for(item of arrMix){
//     console.log(item);
// }
// let index = 0;
// while(index< arrMix.length){
//     console.log(arrMix[index]);
//     index++
// }
// for(let i=0; i<arrMix.length -1; i++){
//     console.log(arrMix[i]);
// }

// function checkTypeOfValuesInArray(arrString){
// for (let i = 0; i < arrMix.length; i++) {
//     const item = arrMix[i];

//     if (typeof item === 'number') {
//         if (Number.isNaN(item)) {
//             console.log(`Index ${i} is a NaN`);
//         } else {
//             console.log(`Index ${i} is a number`);
//         }
//     } else if (typeof item === 'string') {
//         console.log(`Index ${i} is a string`);
//     } else if (typeof item === 'boolean') {
//         console.log(`Index ${i} is a boolean`);
//     } else if (typeof item === 'object') {
//         if (item === null) {
//             console.log(`Index ${i} is a null`);
//         } else if (Array.isArray(item)) {
//             console.log(`Index ${i} is an array`);
//         } else {
//             console.log(`Index ${i} is an object`);
//         }
//     } else if (typeof item === 'undefined') {
//         console.log(`Index ${i} is an undefined`);
//     }
// }
// }
// checkTypeOfValuesInArray()

// 1: fizzBuzz
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

fizzBuzz();

//2. sumUntilNegative

// function sumUntilNegative(numbers) {
//     let totalSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             break;
//         }
//         totalSum += numbers[i];
//     }
//     console.log("Total Sum:", totalSum);
// }

const numbers = [1, 2, 3, 4, 5, 6, -1, 7, 8];
sumUntilNegative(numbers);

//3. findPassword
// function findPassword(passwords) {
//     for (let i = 0; i < passwords.length; i++) {
//         if (passwords[i] === "12345") {
//             console.log("Welcome!");
//             break;
//         }
//     }
// }

// const passwords = ["password1", "password2", "12345", "password3"];
// findPassword(passwords);