// browser-sync start --server 'src' --files 'src'

// --------------------------------------------
console.log(' ')
console.log('--- lesson 03 strings, numbers and booleans ---')

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

// --------------------------------------------
console.log(' ')
console.log('--- lesson 07 functions ---')

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

// --------------------------------------------lesson 08 Arrow functions
console.log(' ')
console.log('--- lesson 08 Arrow functions ---')

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

// non-implicit, wegen dem return
const twelve = _ => { return 6 + 6 }
console.log(twelve())

const logger = arg1 => console.log(arg1)
logger('loggin')

const loggerPars = (arg1) => console.log(arg1)
loggerPars('logginPars')

// non-implicit, wegen dem return
const addNonImplicit = (num1, num2) => {
  const result = num1 + num2
  return result
}
console.log(addNonImplicit(5, 4))

const addImplicit = (num1, num2) => num1 + num2
console.log(addImplicit(2, 5))

// --------------------------------------------
console.log(' ')
console.log('--- lesson 09 scopes & closures ---')
// variablen, die mit var deklariert werden, beachten den local scope nicht und überschreiben sich bei mehrfacher verwendung. Never use var!

// this is a closure pattern
function outerFn () {
  const outerVar = 'variable in the outer function'

  return function innerFn () {
    const innerVar = 'variable in the inner function!'
    console.log(outerVar)
  }
}
outerFn()()

// exercises
// 1. What is a block scope? A: Block scope is the code between curly braces: {}
// 2. What is a function scope? A: same as block scope, it's a fun fact
// 3. What is a function scope? A: Yes, but you should not use global variables at all!
// 4. Can you use a local variable in the global scope? A: nope, only via functions.
// 5. What is a closure? A: Closures are nested functions, that allow the use of variables to be used in the outer functions scope.
// practise
// creating a global variable
var globalVar = 'a GLOBAL variable'
console.log(globalVar)

{
  const localVar = 'a local variable in BLOCK scope'
  console.log(localVar)
}

const localVaribableFunction = _ => {
  const localVar = 'a local variable in FUNCTION scope!'
  console.log(localVar)
}
localVaribableFunction()
// console.log(localVar) // not defined error, code execution stops!

function closureOuter () {
  const closureOuterVariable = 'this is the variable accessed by closure'

  return function closureInner () {
    const closureInnerVariable = 'this is just function scope'
    console.log(closureInnerVariable)
    console.log(closureOuterVariable) // um closure zu benutzen muss man hier auch die äußere variable callen, die man haben will!
  }
}
closureOuter()()

console.log(closureInnerVariable)
// letzte aufgabe nicht gelöst bisher!
