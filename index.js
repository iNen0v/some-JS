// // // // // // // // const name = 'Ivan'  
// // // // // // // // name ='Petq'
// // // // // // // // console.log(name);

// // // // // // // let name = 4
// // // // // // // name = '6'
// // // // // // // console.log(name - 2);

// // // // // // const  name = 'Ivan'
// // // // // // console.log(name);
// // // // // function solve(arg1, arg2){
// // // // //     console.log(arg1 + arg2);
// // // // // }
// // // // // solve(2,2)

// // // // const firstName = 'Ivan'
// // // // console.log(firstName);
// // // function solve(a,b){
// // //     return a % b 
// // // }
// // // const firstNumber = 9
// // // const secondNumber =  2
// // // console.log(solve(firstNumber, secondNumber));
// // // function solve(a,b){
// // //     return a === b 
// // // }
// // // const firstNumber = 9
// // // const secondNumber =  2
// // // console.log(solve(firstNumber, secondNumber));
// // // function solve(a,b){
// // //     return a !== b 
// // // }
// // // const firstNumber = 9
// // // const secondNumber =  2
// // // console.log(solve(firstNumber, secondNumber));
// // function solve(a,b){
// //     return a + b 
// // }
// // const firstNumber = 9.235
// // const secondNumber =  9.432
// // console.log(Number(firstNumber, secondNumber).toFixed(2));

// const number = 445.45
// console.log(number.toLocaleString());
    const jacket = 445.45
    const pants = 130.25
    function calcDiscount (product,discount){
    discountValue = product * discount /100
    return product - discountValue
} 
console.log(calcDiscount(jacket, 10).toFixed(2));
console.log(calcDiscount(pants, 15).toFixed(2));