// // Кога да използваме Callback?
// Примерите по-горе не са много вълнуващи.
// Те са опростени, за да ви научат на синтаксиса на callback.
// Там, където callback наистина блести, е в асинхронни функции, където една функция трябва да изчака друга функция (например да изчака файл да се зареди).
// Асинхронните функции ще бъдат разгледани в следващата глава.

// function executror(callback, text){
//     const words = text.split('') // Разделя текста на отделни символи
//     for(let char of words){
//         callback(char)  // Предава текущия символ на callback функцията
//     }
    
// }
// function cLog(char){
//     console.log(char);
// }
// function addChar(char, charToAdd){
//     console.log(char + '!' );
// }
// const text = 'Lorem inpsun'
// executror((char) => { console.log(char + '!'); }, text); //анонимна функция на callback
// executror(addChar, text)

// const addChar = (char) =>{
//     console.log(char + '!');

// }
// анонимна функция на callback
// () =>{
    
// }
// function addChar(char){
//     console.log(char + '!');
// }
// function executror(callback, text){
//     for (let char of text){
//         console.log(callback(char));
//     }
// }
// const text = 'Lorem inpsun'
// executror((char)=> char + '!', text)



// Функция, която решава задачата
// const solve = (text, number, totalWordsFunc, calcAvarageWordLength) => {
//     // Изчисляваме общия брой на думите чрез подадената функция totalWordsFunc
//     const totalWords = totalWordsFunc(text);
    
//     // Променливи за най-дългата и най-късата дума; започваме с произволни стойности
//     let lengthOfLongestWord = 0;
//     let lengthOfShortestWord = 1; // Започваме с голяма стойност, за да може да се намали
    
//     // Променлива за общата дължина на всички думи
//     let totalLength = 0;
    
//     // Разделяме текста на отделни думи
//     const arrayOfWords = text.split(' ');

//     // Обхождаме всеки елемент (дума) от масива с думи
//     for (let word of arrayOfWords) {
//         // Намираме най-дългата дума
//         if (word.length > lengthOfLongestWord) {
//             lengthOfLongestWord = word.length;
//         }
        
//         // Намираме най-късата дума
//         if (word.length < lengthOfShortestWord) {
//             lengthOfShortestWord = word.length;
//         }
        
//         // Сумираме дължината на текущата дума към общата дължина на всички думи
//         totalLength = totalLegth + word.length;
//     }

//     // Изчисляваме средната дължина на думите чрез подадената функция calcAvarageWordLength
//     const avarageWordLength = calcAvarageWordLength(totalLength, totalWords);
    
//     // Извеждаме резултатите на конзолата
//     console.log(totalWords, 'The total number of words in the sentence.');
//     console.log(lengthOfLongestWord, 'The length of the longest word.');
//     console.log(lengthOfShortestWord, 'The length of the shortest word.');
//     console.log(avarageWordLength, 'The average word length');
// }

// // Функция, която брои думите в текста
// const calcTotalNumberOfWords = (text) => {
//     return text.split(' ').length;
// }

// // Функция, която изчислява средната дължина на думите
// const calcAvarageWordLength = (totalLength, wordsCount) => {
//     return totalLength / wordsCount;
// }

// // Извикваме функцията solve с подадените аргументи
// solve('Sea, holiday, mountain, ski', 6, calcTotalNumberOfWords, calcAvarageWordLength);
// Коментарите поясняват следните стъпки в кода:
// Изчисляване на общия брой на думите (totalWords): Използваме функцията totalWordsFunc, за да разделим текста на думи и да върнем броят им.
// Намиране на най-дългата и най-късата дума: Обхождаме всички думи в масива arrayOfWords и сравняваме дължините на думите, за да намерим най-дългата и най-късата дума.
// Сумиране на дължината на всички думи (totalLength): Добавяме дължината на всяка дума към общата дължина totalLength.
// Изчисляване на средната дължина на думите (avarageWordLength): Използваме функцията calcAvarageWordLength, за да разделим общата дължина на всички думи на общия брой думи.
// Извеждане на резултатите: Използваме console.log, за да изведем общия брой на думите, дължината на най-дългата и най-късата дума, както и средната дължина на думите на конзолата.
// Така кодът е ясно коментиран и обяснява всяка отделна част от задачата.


// Функция, която приема callback функция и масив и извиква callback за всеки елемент на масива
// function executor (callback, arr){
//      // Обхождаме всеки елемент на масива
//     for (let i = 0; i < arr.lenth; i++){
//         // Извикваме подадената callback функция с параметри: елемент, индекс и самия масив
//         // const callback = (char) => addCharCallBack(char, '!')
//         callback(arr[i],i, arr);
//     }
// }
// Примерна callback функция, която принтира елемент, индекс и масив
// function cLogCallBack(element, index, arr){
//     console.log(element,'element',  index, 'index',  arr, 'arr');
// }
// // Тестов масив
// const arr = [1, 2, 3, 4, 5, 6]
// Извикваме функцията executor с нашата callback функция
// executor(cLogCallBack, arr)
// for(let number of arr){
//     console.log(number);
// }
// ForEach 
// Можем да използваме Array.forEach() като алтернатива нашата executor функция
// Array.forEach() извиква callback функцията за всеки елемент на масива
// arr.forEach(cLogCallBack)
 //ОБЯСНЕНИЕ
// executor функция: Обхожда масив и извиква подадената callback функция за всеки елемент на масива.
// Цикъл for: Цикълът обхожда всеки елемент от arr от първия до последния.
// Извикване на callback функцията: Всеки път когато се извиква callback, се предават три аргумента: текущия елемент (arr[i]), текущия индекс (i) и целия масив (arr).
// Примерна callback функция cLogCallBack: Тази функция просто извежда на конзолата елемента, индекса и самия масив.
// Тестов масив arr: Примерен масив от числа, който ще бъде използван за демонстрация.
// Извикване на executor с cLogCallBack: Тук се използва executor функцията, за да се покаже как cLogCallBack се изпълнява за всеки елемент на масива arr.
// Използване на Array.forEach(): Демонстрира се как може да се използва вградената функционалност на JavaScript forEach(), която прави същото като нашата executor функция.
// Тези коментари следват всеки кръг от процеса на изпълнение на кода и обясняват как всеки елемент работи заедно, за да постигне желания резултат.

// arr.forEach((element) => console.log(element, 'element'))
 
// const arr = [1, 2, 3, 4, 5, 6]
// const newLengthOfTheArr = arr.push(8)
// console.log(newLengthOfTheArr);
// console.log(arr);


// console.log(arr[arr.length -1]);
// console.log('------');
// const removedElement = arr.pop()
// console.log(removedElement);

// console.log(arr);

// const removedElement = arr.shift()
// console.log(removedElement);
// const newLengthOfTheArray = arr.unshift(0)
// console.log(newLengthOfTheArray);

// const solve = ()  =>{
// this
// }
// function solve1 (){
// this
// }
// const ojb = {a: 1, b:2}

// const arr = [1, 2, 3, 4, 5, 6]

// function reverseArray(arr){
//     const tempArray = [];
//      for(let i= arr.length - 1; i >= 0; i--){
//         tempArray.push(arr[i])
//     }
//     return tempArray
// }
// const result = arr.toReversed()
// console.log(result);
// console.log(arr);