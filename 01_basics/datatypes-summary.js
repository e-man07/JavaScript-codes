// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const bigNumber = 3456789923098n

const id =Symbol('123')
const accountId = Symbol()
// console.log(id === accountId)


// Non-Primitive(reference)

// Array, Functions, Objects
const heroes = ["spidey", "irey", "jordy", "john"]
let myObj = {
    name: "aman",
    age: "22",
}

// const myfunction = function(){
   //  console.log("hello world")
//} 

// Memory
// stack(Primitive) & heap(non-primitive)

// let myEmail = "aman.com";
// let yourEmail = myEmail;
// yourEmail = "aman96.com";

// console.log(myEmail)
// console.log(yourEmail)


let user1 = {
    email: "her.com",
    name: "aman",
}

let user2 = user1;

user2.email = "her2341.com";

console.log(user1.email)
console.log(user2.email)