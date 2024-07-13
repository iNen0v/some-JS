// // // // // // // function solve(number){
// // // // // // //     if(number > 0){
// // // // // // //         return 'Biger then 0'
// // // // // // //     }else if (number < 0 ){
// // // // // // //         return 'Less then 0'
// // // // // // //     }else if(number === 0){
// // // // // // //         return'Number is 0'
// // // // // // //     }else{
// // // // // // //         return 'Wrong input'
// // // // // // //     }

// // // // // // // }
// // // // // // // console.log(solve(0));
// // // // // // //check if number is between 10 and 20
// // // // // // function solve(number) {
// // // // // //     if (number > 10) {
// // // // // //         if (number < 20) {
// // // // // //             console.log('inside the block of the if')
// // // // // //         } else {
// // // // // //             return 'is bigger then 10 but not less then 20'
// // // // // //         }
// // // // // //     } else {
// // // // // //         return 'less then 10 or equal'
// // // // // //     }

// // // // // // }
// // // // // // console.log(solve(15));

// // // // // function solve(num){
// // // // //     if(num> 10 && num <20){
// // // // //         return 'is between 10 and 20'
// // // // //     }else{
// // // // //         return 'is not'
// // // // //     }
// // // // // }
// // // // // console.log(solve(22));

// // // // //check if number is 10 or 20 else return bad number

// // // // // function solve(number){
// // // // //     if(number === 10 || number === 20 ){
// // // // //         return'good number'
// // // // //     }else{
// // // // //         return'bad number'
// // // // //     }
// // // // // }
// // // // // console.log(solve(3));

// // // // //with ternary operator
// // // // // function solve(condition){
// // // // //     let msg;
// // // // //     if(condition){
// // // // //         msg = 'is it girl'
// // // // //     }else{
// // // // //         msg='is it boy'
// // // // //     }
// // // // //     return msg
// // // // // }
// // // // // console.log(solve(false));
// // // // //condiotion ? (return value if is a true) : (retur value is a false)
// // // // function solve(condition){
// // // //     const  msg = condition ? 'is it a girl' : 'is it a boy'
// // // //     return msg
// // // // }
// // // // console.log(solve(false));

// // // // HOMEWORK you will day of the week as a number and you need a print it as a name of the day and if is out of the range tell the user..

// // // // function getDayName(dayNumber) {
// // // //    // let dayName;
// // // //     if (dayNumber === 1) {
// // // //         dayName = 'Monday';
// // // //     } else if (dayNumber === 2) {
// // // //         dayName = 'Tuesday';
// // // //     } else if (dayNumber === 3) {
// // // //         dayName = 'Wednesday';
// // // //     } else if (dayNumber === 4) {
// // // //         dayName = 'Thursday';
// // // //     } else if (dayNumber === 5) {
// // // //         dayName = 'Friday';
// // // //     } else if (dayNumber === 6) {
// // // //         dayName = 'Saturday';
// // // //     } else if (dayNumber === 7) {
// // // //         dayName = 'Sunday';
// // // //     } else {
// // // //         dayName = 'Invalid day number';
// // // //     }
// // // //     return dayName;
// // // // }
// // // // console.log(getDayName(5));

// // // // function solve (dayOfTheWeek){
// // // //     switch(dayOfTheWeek){
// // // //         case 'Monday':
// // // //             return 1;
// // // //             break;
// // // //         case 'Tuesday':
// // // //             return 2;
// // // //             break;
// // // //         case 'Wednesday':
// // // //             return 3;
// // // //             break;
// // // //         case 'Thursday':
// // // //             return 4;
// // // //             break;
// // // //         case 'Friday':
// // // //             return 5;
// // // //             break;
// // // //         case 'Saturday':
// // // //             return 6;
// // // //             break;
// // // //         case 'Sunday':
// // // //             return 7;
// // // //             break;
// // // //         default:
// // // //             return 'Wrong day'
// // // //             break;
// // // //     }        
// // // // }
// // // // console.log(solve("Monday"));
// // // // Function to determine grade based on score

// // // //1. Task for if-else if-else: Write a program that takes a user's score as input and outputs their grade based on the following criteria:
// // // // function calculateGrade(score) {
// // // //     let grade;
// // // //     if (score >= 90) {
// // // //         grade = 'A';
// // // //     } else if (score >= 80) {
// // // //         grade = 'B';
// // // //     } else if (score >= 70) {
// // // //         grade = 'C';
// // // //     } else if (score >= 60) {
// // // //         grade = 'D';
// // // //     } else {
// // // //         grade = 'F';
// // // //     }
// // // //     return grade;
// // // // }
// // // // let userScore = 85;
// // // // let userGrade = calculateGrade(userScore);
// // // // console.log(`For score ${userScore}, your grade is ${userGrade}.`);

// // // // //2. Task for ternary operator: Write a program that determines if a given number is even or odd and prints the result accordingly.
// // // // function checkEvenOdd(number) {
// // // //     let result = (number % 2 === 0) ? "Even" : "Odd";
// // // //     return result;
// // // // }
// // // // let someNumber = 25;
// // // // let evenOddResult = checkEvenOdd(someNumber);
// // // // console.log(`The number ${someNumber} is ${evenOddResult}.`);

// // // //3.
// function daysInMonth(month) {
//     let days= 2;
//     switch (month) {
//         case 1: return; January
//         case 3: return; March
//         case 5: return; May
//         case 7: return; July
//         case 8: return;August
//         case 10: return;October
//         case 12: return; December
//             days = 31;
//             break;
//         case 4: return; April
//         case 6: return; June
//         case 9: return; September
//         case 11: return; November
//             days = 30;
//             break;
//         case 2: 
//             let currentYear = new Date().getFullYear();
//             days = (currentYear % 4 === 0) ? 29 : 28;
//             break;
//         default:
//             days = -1; 
//             break;
//     }
//     return days;
// }

// let monthNumber = 2; 
// let numberOfDays = daysInMonth(monthNumber);
// if (numberOfDays === -1) {
//     console.log(`Invalid month number: ${monthNumber}.`);
// } else {
//     console.log(`In month ${monthNumber}, there are ${numberOfDays} days.`);
// }
// console.log(daysInMonth(2));
