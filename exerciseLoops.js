// check if string is palidrom
// function solve(string){
//     const stringL = string.length
//     let stringToCheck= '';
//     for(let index = stringL - 1; index >= 0; index--){
//         stringToCheck = stringToCheck + string[index]
//     }
//     if(string === stringToCheck){
//         return 'string is palidrom'
//     }else{
//         return 'string is not palidrom'
//     }
//     // return stringToCheck
// }
// console.log(solve('deified'));

// arr [1,2,3,4,5,6,6,5,4,3,2,1]
// function solve(arr) {
//     const arrL = arr.length - 1;
//     const firstHalfIndexStart = 0;
//     const firstHalfIndexEnd = (arrL - 1) / 2;
//     const secontHalfIndexStart = arrL;
//     const secontHalfIndexEnd = firstHalfIndexEnd + 1;
//      console.log(firstHalfIndexStart, "firstHalfIndexStart",firstHalfIndexEnd,secontHalfIndexStart, "secontHalfIndexStart", secontHalfIndexEnd,
//   "secontHalfIndexEnd",secontHalfIndexEnd,"secontHalfIndexEnd");
//     let firstHalfString = ''
//     let secondHalfString = ''
//     for(let index = firstHalfIndexStart; index <=firstHalfIndexEnd; index++){
//         firstHalfString =  firstHalfString + arr[index]
//     } for(let index = secontHalfIndexStart ; index >=secontHalfIndexEnd; index--){
//         secondHalfString =  secondHalfString + arr[index]
//     }
//     if(firstHalfString === secondHalfString){
//         return 'the array is palidrom'
//     }else{
//         return 'the array is not palidrom'
//     }
//     // console.log(firstHalfString, 'firstHalfString', secondHalfString, 'secondHalfString', firstHalfString === secondHalfString);
    
//     // return arrL;
// }
// console.log(solve([1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1,]));

// const arr= [1,2,3,4]
// console.log(arr[arr.length - 1]);

// function check(element, type){

//     return typeof element === type ? true : false
// }

// function solve(array){
//     //declear a state varibles
//     let numbers = 0;
//     let strings = 0;
//     let booleans = 0;

//     for(let element of array){
//         if(check(element, 'number')){
//             numbers = numbers +1
//         }else if(check(element, 'string')){
//             strings = strings +1
//         }else if(check (element,'boolean')){
//             booleans = booleans +1
//         }
//     }
//     return `we have ${numbers} numbers ${booleans} booleans and ${strings} strings`
// }
// console.log(solve([1, 2, 3, true, 'b', false, 4, 'b', 'stop', 4, 's', 19, false]));
// console.log(check(1, 'number'));

//arrow function
// function check (element, type){
//     return typeof element === type ? true : false
// }
// const greet = function (name){
//     return 'Hello ' + name
// }
// console.log(greet('Ivan'));
// const check1 = (element, type) =>{
//     return typeof element === type ? true : false
// }
// const f = check
// console.log(f(1, 'number'));

//IIFE (immediately invoked function expression)

// (function (){
//     console.log('This run immediately!');
// })()

// function solve(name = ''){
//     console.log('Hello ' + name);
// }
// solve('Ivan')

// function solve(...arr){
//     console.log(arr);
// }
// solve('Ivan', 420, 'Sofia', 'Worker')

// function show(msg){
//     console.log(msg);
// }
// function solve(callbackfunction) {
//     callbackfunction('I am called as callback')
// }
// solve(((msg) => { console.log(msg)}))

// const arr = [1, 2, 3, 4]

// // arr.forEach((value, index, array)=>{console.log(value,);})
// // console.log(arr.filter((value, index, array)=> {return value !== 2}));;
// console.log(arr.sort((a,b)=> {return b - a}));;