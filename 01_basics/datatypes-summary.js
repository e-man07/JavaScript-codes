// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const bigNumber = 3456789923098n

const id =Symbol('123')
const accountId = Symbol()
console.log(id === accountId)


// Non-Primitive(reference)

// Array, Functions, Objects
const heroes = ["spidey", "irey", "jordy", "john"]
let myObj = {
    name: "aman",
    age: "22",
}

const myfunction = function(){
    console.log("hello world")
}