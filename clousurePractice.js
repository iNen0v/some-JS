// function outerFunction (){
//     //private veriables
//     let count = 0
//     function innerFunction(){
//         count = count +1
//         console.log(count);
//     }
//     return innerFunction
// }
// const counterHandler = outerFunction()
// counterHandler()
// counterHandler()

// const createCounter = () =>{
//     // initialize the count vriable inside closure
//     let count = 0;
//      return{
//         increment: () =>{
//             count++;
//             return count
//         },
//         decrement:()=>{
//             count--;
//             return count
//         },
//         getCount: () => {
//             return count
//         }
//     }
// }

// const couter = createCounter()
// console.log(couter.getCount());

// const app = () =>{
//     let count = 0;

//     const increment = () =>{
//         count++;
//     }
//     onclick(increment)

// }
// onload(app)
