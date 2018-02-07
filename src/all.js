// browser-sync start --server 'src' --files 'src'

// --------------------------------------------lesson 03
// string
console.log('this is a string')

// adding 2 strings together
console.log('string 1' + ' string 2')

// number
console.log('number: ' + 23434)

// adding numbers
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

// --------------------------------------------lesson 07

// declaring a function
function sayHello (param1, param2, param3) {
  console.log('I\'m gonna say: ' + param1 + param2 + param3)
}

// using function
sayHello('hello ', 'World', '!')

// returns
function get2 (num) {
  return num + 2
}

const results = get2(8)
console.log(results)

// function expressions
const sayExpression = function () {
  console.log('aFunction')
}

sayExpression()

// add function
function add2 (num1, num2) {
  const result = num1 + num2
  console.log(result)
}

add2(2, 2)

// multiply function
function mult2 (num1, num2) {
  const result = num1 * num2
  console.log(result)
}

mult2(4, 2)

// --------------------------------------------lesson 08

// Arrow function
const arrowFunction = (arg1, arg2) => {
  const result = arg1 + arg2
  console.log(result)
}

arrowFunction(1, 2)

const sumArrow = (num1, num2) => num1 + num2
console.log(sumArrow(4, 5))

// exercises
const ten = () => { return 5 + 5 }
console.log(ten())

const twelve = _ => { return 6 + 6 }
console.log(twelve())

const logger = arg1 => console.log(arg1)
logger('loggin')

const loggerPars = (arg1) => console.log(arg1)
loggerPars('logginPars')

const addNonImplicit = (num1, num2) => {
  const result = num1 + num2
  console.log(result)
}
addNonImplicit(5, 4)

const addImplicit = (num1, num2) => num1 + num2
console.log(addImplicit(2, 5))
