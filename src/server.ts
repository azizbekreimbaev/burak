console.log('====================================');
console.log("Executed");
console.log('====================================');

// const person: string = "Kevin";
// const age: number = 25;

import moment from 'moment'

const time = moment().format("YYYY MM DD")
console.log(time)
// interface setting type for objects

interface Person {
    name: string,
    age: number
}

let person: Person = {
    name: "Kevin",
    age: 25
};

console.log(person.name)

// person = {
//     name: "Kevin",
//     age: 25
// }