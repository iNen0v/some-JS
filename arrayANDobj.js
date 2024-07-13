// const array = [5, 12, 8, 130, 44]
// const result =[]
// array.forEach((element) => {
//     if(element > 10)
//         result.push(element)
// })

// const result = array.find((element, index) => element > 10)
// console.log(result);

// const arr = [1, 2, 3, 4]
// // const arr2 = arr
// const arr2 = arr.every((element) => {return element > 5})
// // arr2[4] = 5
// console.log(arr2);

//// arr === "ref1"
// const arr = [1, 2, 3, 4]
///arr2 = "ref1"
// const index = arr.findIndex((element, index, arr) => element < 0)
// console.log(index);

// const arr = [1, 2, 3, 4]
// const index = arr.findLast((element, index, arr) => element < 5)
// console.log(index);

// const initValue = 0
// const arr = [1, 2, 3, 4]
// let result = initValue
// arr.forEach((element => result += element))
// console.log(result);
// const result1 = arr.reduce((accumalator, element) =>accumalator + element, initValue)
// console.log(result1);

// const array = [[0,1], [2,3], [4,5],]
// const result = array.reduceRight((acumalator, element) => acumalator.concat(element))
// console.log(result);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// const newArray = animals.slice(0, 2)
// console.log(newArray);

// const months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb')
// months.splice(4,1,'May')
// months.splice(0,2, 'a', 'b')
// console.log(months);

//Task : filter all even num bers multiply by 2, sum up all of them
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = arr
// .filter((element) => element % 2 === 0)
// .map((element) => element * 2)
// .reduce((acc, curretElement) => acc + curretElement, 0)
// console.log(result);

// const arr = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100] само за цифри
// arr.sort((a, b) =>a - b)
// const arr = ['A', 'j', 'K','b','c','d','a' ]
// arr.sort((a, b) => b.localeCompare(a, 'en', {sensitivity: 'accent'})) // за букви
// console.log(arr);

// const arr = [3, 1, 4, 1, 5, 9]
// arr.sort((a, b) => (b <  a ? -1 : 0))
// console.log(arr);

const arr = [1, 2, 3, 4, 5]
console.log(arr[0]);
const obj ={
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
}
const myObj = {
    'mama': 'nice way to call your mother',
    'papa': 'nice way to call your father',
    'solve': () =>console.log('method'),
}
console.log(myObj[0]);
console.log(myObj.solve);
const key = 'a'
function findItem (key){
    const obj={
        a: 'asd',
        b: 'dsa',
    }
    return obj
}
console.log(findItem('a'));
