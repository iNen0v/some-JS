// const user = {
//     name_first:'Mitko',
//     email: 'mitkova@abv.bg',
//     age:'24',
//     city:'Sofia',
//     level:4,
//     family: [{name: 'Polya', role: 'Mother'},{name: 'Gosho', role:'Father'}],
//     salary: 2000
// }
// Object.seal(user)
//  console.log();
// delete user.age
// user.age = 33
// console.log(user);
// const extraInfo={
//     profesion:'Dancer',
//     salary: '1800',
// }
// // console.log(Object.entries(user));
// // const entriesArrays = Object.entries(user)
// // const entriesArray  = [['name', 'Ivan'], ['age', 24], ['city', 'Sofia'], ['street', 'Slatina']]
// // console.log(Object.fromEntries(entriesArray));

// const name = 'I'
// const age = 24
// const profesion = 'Dancer'
// const obj={
//     name,
//     age,
//     profesion,
// }
// console.log(obj);


// for(property in user){
//     console.log(`${property} : ${user[property]}`);
// }
// for(const [key, value] of Object.entries(user)){
//     console.log(`${property} : ${user[property]}`);
// }

// const obj = {a: 'a', b: 'b', c: 'c'}
// const a1 =obj.a
// const b1 =obj.b
// const c1 = obj.c
// const {first, second, third} = obj
// console.log(a1,b1,c1);
// const  newName ='Pesho'
// // const result = {...extraInfo, ...user, name_first:newName}
// const newUserObject = {...user}
// user.family[0].name = 'Pesho'
// user.age = 34
// console.log(user.family[0].name, newUserObject.family[0].name)
// console.log(user.family.find((member)=> member.role === 'Mother')); 
// for (let property in user){
//     console.log(property === 'level', property);
// }
// const result = Object.hasOwn(user, 'level23')
// console.log(result);

// const inventory =[
//     {name: 'asparagus', type: 'vegetables', quantity: 5},
//     {name: 'banana', type: 'fruit', quantity: 0},
//     {name: 'goat', type: 'meat', quantity: 23},
//     {name: 'cherries', type: 'fruit', quantity: 5},
//     {name: 'fish', type: 'meat', quantity: 22}
// ]
// const result = Object.groupBy(inventory, (obj) => obj.type)
// console.log(result);


// TASK
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example usage
const exampleObject = { name: 'Diana', age: 28, city: 'Miami' };
console.log(getObjectKeys(exampleObject)); // Output: ['name', 'age', 'city']


function getObjectValues(obj) {
    return Object.values(obj);
}

// Example usage
const exampleObject1 = { name: 'Diana', age: 28, city: 'Miami' };
console.log(getObjectValues(exampleObject1)); // Output: ['Diana', 28, 'Miami']

function getObjectEntries(obj) {
    return Object.entries(obj);
}

// Example usage
const exampleObject2 = { name: 'Diana', age: 28, city: 'Miami' };
console.log(getObjectEntries(exampleObject2)); // Output: [['name', 'Diana'], ['age', 28], ['city', 'Miami']]
function summarizeObject(obj) {
    return Object.entries(obj)
                 .map(([key, value]) => `${key}: ${value}`)
                 .join(', ');
}

// Example usage
const exampleObject3 = { name: 'Diana', age: 28, city: 'Miami' };
console.log(summarizeObject(exampleObject3)); // Output: "name: Diana, age: 28, city: Miami"

