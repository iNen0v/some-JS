// forEach: Изпълнява дадена функция за всеки елемент от масива

// Дефинира се функция solve, която извежда 'hello 1'
// function solve () {
//     console.log('hello 1');
// }

// Присвоява функцията solve на променливата mySolve и я извиква
// const mySolve = solve 
// mySolve() // Извежда 'hello 1'

// Дефинира анонимна функция solve, която извежда text и index
// const mySolve = function solve(text, index, array){
//     console.log(text, index);
// }

// Дефинира стрелкова функция arrowFunction, която извежда text
// const arrowFunction = (text, index) => console.log(text); 

// Дефинира масив arr с четири елемента
// const arr = ['Hello', 'World', 'Good', 'Bad']

// Използва forEach с arrowFunction за извеждане на всеки елемент от arr
// arr.forEach(arrowFunction) // Извежда 'Hello', 'World', 'Good', 'Bad'

// Използва forEach с анонимна стрелкова функция за извеждане на всеки елемент и индекс от arr
// arr.forEach((text, index) => console.log(text, index)) // Извежда 'Hello 0', 'World 1', 'Good 2', 'Bad 3'

// Извежда самата стрелкова функция arrowFunction (ще се изведе като дефиниция на функция)
// console.log(arrowFunction);

// Дефинира анонимна функция solve, която извежда text и index
// const mySolve = function solve(text, index, array){
//     console.log(text, index);
// }

// Дефинира функцията solve, която извежда всеки елемент от масива arr
// function solve(arr){
//   arr.forEach((element) => console.log(element))
// }
// Дефинира масив arr с четири елемента
// const arr = ['Hello', 'World', 'Good', 'Bad']
// Вика функцията solve с масива arr, която извежда всеки елемент
// solve(arr)

// map: Създава нов масив с резултатите от извикването на дадена функция за всеки елемент от масива

// Дефинира функцията solve, която добавя '!' към всеки елемент от масива arr и извежда новия масив
// function solve(arr){
//     const newArr = arr.map((element) =>(element + '!'))
//     console.log(newArr);
// }
// Дефинира масив arr с четири елемента
// const arr = ['Hello', 'World', 'Good', 'Bad']
// Вика функцията solve с масива arr, която добавя '!' и извежда новия масив
// solve(arr) // Извежда ['Hello!', 'World!', 'Good!', 'Bad!']

// Дефинира функцията solve, която преобразува всеки елемент от arr в число и добавя 2 към него, след което извежда новия масив
// function solve(arr){
//     arr = arr.map(Number)
//     const newArr = arr.map((element) => element + 2)
//     console.log(newArr);
// }
// Дефинира масив arr със стрингове, представляващи числа
// const arr = ['1', '2', '3', '4']
// Вика функцията solve с масива arr, която преобразува стринговете в числа, добавя 2 към всеки елемент и извежда новия масив
// solve(arr) // Извежда [3, 4, 5, 6]

// concat: Обединява два или повече масива

// Дефинира три масива arr, arr1 и arr2
// const arr = ['1', '2', '3', '4']
// const arr1 = ['5', '6', '7', '8']
// const arr2 = ['9', '10', '11', '12']
// Обединява arr с '!', arr1 и arr2 и извежда новия масив
// const arr3 = arr.concat('!', arr1, arr2)
// console.log(arr3) // Извежда ['1', '2', '3', '4', '!', '5', '6', '7', '8', '9', '10', '11', '12']

// every: Проверява дали всеки елемент в масива отговаря на дадено условие

// Дефинира масив от числа arr
// const arr = [1, 2, 3, 4]
// Проверява дали всеки елемент в arr е число и е по-малък от 5
// let result = arr.every((number) => typeof number === 'number' && number < 5)
// console.log(result) // Извежда true, защото всички числа са по-малки от 5

// some: Проверява дали поне един елемент в масива отговаря на дадено условие

// Дефинира масив от числа arr
// const arr = [1, 2, 3, 4]
// Проверява дали поне един елемент в arr е по-голям от 1
// const result = arr.some(element => element > 1)
// console.log(result) // Извежда true, защото има елементи по-големи от 1

// fill: Запълва част от масива с определена стойност, започвайки от начален индекс и завършвайки преди краен индекс
// const arr = [1, 2, 3, 4]
// Използваме fill, за да запълним част от масива със '!' от индекс 2 до края
// const result = arr.fill('!', 2)
// console.log(result) // Извежда [1, 2, '!', '!']

// const arr = ['spray', 'elite', 'exuberant', 'cat', 'beer', 'dog', 'coffee']
// // const resultArray= []
// // const forEachResult = arr.forEach((element) =>{
// //     if (element .length < 6){
// //         resultArray.push(element)
// //     }
// // })
// const result = arr.filter((element, index, array) => element.length < 6 )
// console.log(result);


// function areAllPositive(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areAllPositive([1, 2, 3, -4, 5]))

// function filterNonPositive(numbers){
//     return numbers.filter(function(number){
//         return number <=0;
//     })
// }
// console.log(filterNonPositive([1, 2, 3, -1, -2, 0, 4, 5]));

// const contaiunsNegative = (arr) =>{
//     const result = arr.every((number) => number > 0)
//     console.log(result);
// }
// contaiunsNegative([1, 2, 3, 4, 5, 6, -2])

// const filterNonPositive1 = (arr) =>{
//     const result = arr.filter((number) => number >= 0)
//     console.log(result);
// }
// filterNonPositive1([1, 2, -3, 4, -6, 5])