// console.log("Executed")

// function booWho(bool: boolean | string | number) {
//     if (bool === true || bool === false) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(booWho(false))
// console.log(booWho(true))

// // dyncamic type tushunchasi bolganligi uchun call qilishda ham boshqa turdagi
// // qiymat beraolmaymiz aga tepada yoki bilan berilmagan bolsa
// console.log(booWho("HELLO"))
// console.log(booWho(1))

//================================================

// Build an Email Masker
// In this lab, you will mask the username part of an email address with asterisks.Masking is a term used to hide or replace sensitive information with asterisks or other characters.

// For example, if the email address was myEmail @email.com, then the masked email address will be m ***** l@email.com.

//     Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Create a function named maskEmail that takes email as an argument.
// Inside the function, you should mask the email and append the domain name to it.Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
// Outside the function, declare a variable named email to store the email address you want to mask.
// Call the maskEmail function with the email variable and output the result to the console.
//     maskEmail("apple.pie@example.com") should return "a*******e@example.com".
//         maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
//             maskEmail("info@test.dev") should return "i**o@test.dev".
//                 maskEmail("user@domain.org") should return "u**r@domain.org".


// const email: string = "azizbek00000@gmail.com"
const email: string = "freecodecamp@example.com"

function masker(email: string) {
    let secondIndex: number = email.indexOf("@")
    let sliced: string = email.slice(1, secondIndex)
    // console.log(sliced)
    return email.replace(sliced, "*")
}

console.log(masker(email))





// CLUSTER ==> DATABASE ==> COLLECTIONS ==> DOCUMENT




// console.log('====================================');
// console.log("Executed");
// console.log('====================================');

// // const person: string = "Kevin";
// // const age: number = 25;

// import moment from 'moment'

// const time = moment().format("YYYY MM DD")
// console.log(time)
// // interface setting type for objects

// interface Person {
//     name: string,
//     age: number
// }

// let person: Person = {
//     name: "Kevin",
//     age: 25
// };

// console.log(person.name)

// // person = {
// //     name: "Kevin",
// //     age: 25
// // }