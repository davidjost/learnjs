// browser-sync start --server 'src' --files 'src'
// ------------------------------------ lesson 01 - basics

// string
console.log('this is a string')

// adding 2 strings together
console.log('string 1' + ' string 2')

// number
console.log('number: ' + 23434)

// adding numbers
console.log(2324234 + 34234)

// subtracting numbers
console.log(34324 - 31234)
const adding = 2 + 3
console.log('adding: ' + adding)

// subtracting numbers
const subtracting = 12 - 3
console.log('subtracting: ' + subtracting)

// multiplying numbers
const multiplying = 4 * 2
console.log('multiplying: ' + multiplying)

// division
const division = 4 / 2
console.log('division: ' + division)

// booleans
const bool = true
console.log(bool)

// ------------------------------------ lesson 07 - functions

function sayName (firstName, lastName) {
  console.log('First name: ' + firstName)
  console.log('Last name: ' + lastName)
}
sayName('david', 'jost')

function get2 () {
  return 'sefsdfsdf'
  console.log('blah')
}
const results = get2()
console.log(results) // so bekommt man ergebnisse aus dem function scope raus

function add2 (num) {
  return num + 2
}
const number = add2(8)
console.log(number)

// excercises

function logger (toLog) {
  console.log(toLog)
}
logger('tree')

function add (num1, num2) {
  return num1 + num2
}
const addResult = add(2, 2)
console.log(addResult)

function multy (num1, num2) {
  return num1 * num2
}
const multyResult = multy(2, 4)
console.log(multyResult)
