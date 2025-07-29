// 100 JavaScript questions for the quiz app
// Each question has: question, options (array of 4), answer (index of correct option)

export type JSQuestion = {
  question: string;
  options: string[];
  answer: number;
};

export const jsQuestions: JSQuestion[] = [
  {
    question: "What is the correct syntax to print a message in the console in JavaScript?",
    options: [
      "console.print('Hello World')",
      "print('Hello World')",
      "console.log('Hello World')",
      "echo('Hello World')"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: [
      "Number",
      "String",
      "Boolean",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    options: [
      "<!-- comment -->",
      "// comment",
      "/* comment */",
      "# comment"
    ],
    answer: 1
  },
  {
    question: "Which symbol is used for strict equality comparison?",
    options: [
      "==",
      "=",
      "===",
      "!=="
    ],
    answer: 2
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: [
      "var myVar;",
      "let myVar;",
      "const myVar = 5;",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "parseJSON()",
      "toObject()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(typeof null)?",
    options: [
      "'null'",
      "'object'",
      "'undefined'",
      "'number'"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a JavaScript loop?",
    options: [
      "for",
      "while",
      "repeat",
      "do...while"
    ],
    answer: 2
  },
  {
    question: "How do you write an array in JavaScript?",
    options: [
      "let arr = (1,2,3);",
      "let arr = [1,2,3];",
      "let arr = {1,2,3};",
      "let arr = <1,2,3>;"
    ],
    answer: 1
  },
  {
    question: "Which function is used to select an element by its ID?",
    options: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
      "getElementByTag()"
    ],
    answer: 0
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current function",
      "The global object",
      "The object that owns the method",
      "The previous object"
    ],
    answer: 2
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: 0
  },
  {
    question: "What is the result of: '5' + 3 in JavaScript?",
    options: [
      "8",
      "'53'",
      "53",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: [
      "func",
      "function",
      "def",
      "method"
    ],
    answer: 1
  },
  {
    question: "What does NaN stand for?",
    options: [
      "Not a Number",
      "Not a Name",
      "Null and Null",
      "New and Natural"
    ],
    answer: 0
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "==",
      "=",
      "===",
      ":="
    ],
    answer: 1
  },
  {
    question: "How do you create an object in JavaScript?",
    options: [
      "let obj = [];",
      "let obj = {};",
      "let obj = ();",
      "let obj = <>;"
    ],
    answer: 1
  },
  {
    question: "Which method removes the last element from an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "slice()"
    ],
    answer: 0
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = (1:'red', 2:'green', 3:'blue')"
    ],
    answer: 1
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      "onchange",
      "onclick",
      "onmouseclick",
      "onmouseover"
    ],
    answer: 1
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    answer: 2
  },
  {
    question: "Which method can be used to find the length of a string?",
    options: [
      "length()",
      "size()",
      "length",
      "getSize()"
    ],
    answer: 2
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: [
      "true",
      "false",
      "NaN",
      "undefined"
    ],
    answer: 0
  },
  {
    question: "Which of the following is a valid JavaScript variable name?",
    options: [
      "2names",
      "first name",
      "_firstName",
      "first-name"
    ],
    answer: 2
  },
  {
    question: "What does the parseInt() function do?",
    options: [
      "Converts a string to an integer",
      "Converts an integer to a string",
      "Rounds a number",
      "Converts to boolean"
    ],
    answer: 0
  },
  {
    question: "Which method joins array elements into a string?",
    options: [
      "concat()",
      "join()",
      "merge()",
      "combine()"
    ],
    answer: 1
  },
  {
    question: "What is the output of: console.log(3 > 2 > 1)?",
    options: [
      "true",
      "false",
      "1",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which statement is used to stop a loop?",
    options: [
      "break",
      "return",
      "stop",
      "exit"
    ],
    answer: 0
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    options: [
      "Math.round(7.25)",
      "Math.rnd(7.25)",
      "round(7.25)",
      "rnd(7.25)"
    ],
    answer: 0
  },
  {
    question: "Which method returns the character at a specified index?",
    options: [
      "getCharAt()",
      "charAt()",
      "characterAt()",
      "getChar()"
    ],
    answer: 1
  },
  {
    question: "What does the isNaN() function check?",
    options: [
      "If a value is null",
      "If a value is not a number",
      "If a value is negative",
      "If a value is undefined"
    ],
    answer: 1
  },
  {
    question: "Which operator is used for string concatenation?",
    options: [
      "&",
      "+",
      "&&",
      "*"
    ],
    answer: 1
  },
  {
    question: "How do you declare a constant in JavaScript?",
    options: [
      "const myVar = 5;",
      "constant myVar = 5;",
      "final myVar = 5;",
      "static myVar = 5;"
    ],
    answer: 0
  },
  {
    question: "Which method converts a JavaScript object to a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "stringify()",
      "toJSON()"
    ],
    answer: 1
  },
  {
    question: "What is the result of: typeof []?",
    options: [
      "'array'",
      "'object'",
      "'list'",
      "'undefined'"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: [
      "var",
      "let",
      "const",
      "Both let and const"
    ],
    answer: 3
  },
  {
    question: "How do you access the first element of an array named 'cars'?",
    options: [
      "cars[1]",
      "cars[0]",
      "cars.first",
      "cars.1"
    ],
    answer: 1
  },
  {
    question: "Which method removes the first element from an array?",
    options: [
      "shift()",
      "unshift()",
      "pop()",
      "slice()"
    ],
    answer: 0
  },
  {
    question: "What does the '||' operator represent?",
    options: [
      "Logical AND",
      "Logical OR",
      "Assignment",
      "Comparison"
    ],
    answer: 1
  },
  {
    question: "Which method adds elements to the beginning of an array?",
    options: [
      "push()",
      "unshift()",
      "shift()",
      "concat()"
    ],
    answer: 1
  },
  {
    question: "What is the output of: console.log(0 == false)?",
    options: [
      "true",
      "false",
      "0",
      "undefined"
    ],
    answer: 0
  },
  {
    question: "Which symbol is used for the 'not equal' operator?",
    options: [
      "!=",
      "<>",
      "!==",
      "Both != and !=="
    ],
    answer: 3
  },
  {
    question: "How do you write a multi-line comment in JavaScript?",
    options: [
      "// comment //",
      "/* comment */",
      "<!-- comment -->",
      "# comment #"
    ],
    answer: 1
  },
  {
    question: "Which method finds the position of a substring in a string?",
    options: [
      "indexOf()",
      "findIndex()",
      "search()",
      "locate()"
    ],
    answer: 0
  },
  {
    question: "What does the 'return' statement do in a function?",
    options: [
      "Stops the function execution",
      "Returns a value from the function",
      "Exits the function",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which method creates a new array with all elements that pass a test?",
    options: [
      "map()",
      "filter()",
      "forEach()",
      "reduce()"
    ],
    answer: 1
  },
  {
    question: "What is the correct syntax for a for loop?",
    options: [
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5",
      "for (i <= 5; i++)"
    ],
    answer: 1
  },
  {
    question: "Which method executes a function for each array element?",
    options: [
      "forEach()",
      "map()",
      "filter()",
      "reduce()"
    ],
    answer: 0
  },
  {
    question: "What is the result of: '10' - 5 in JavaScript?",
    options: [
      "'105'",
      "5",
      "'5'",
      "NaN"
    ],
    answer: 1
  },
  {
    question: "Which method converts a string to uppercase?",
    options: [
      "toUpperCase()",
      "upperCase()",
      "toUpper()",
      "upper()"
    ],
    answer: 0
  },
  {
    question: "What is the correct way to create a Date object?",
    options: [
      "new Date()",
      "Date()",
      "createDate()",
      "new date()"
    ],
    answer: 0
  },
  {
    question: "Which method splits a string into an array?",
    options: [
      "split()",
      "slice()",
      "divide()",
      "separate()"
    ],
    answer: 0
  },
  {
    question: "What does the '&&' operator represent?",
    options: [
      "Logical OR",
      "Logical AND",
      "Bitwise AND",
      "Assignment"
    ],
    answer: 1
  },
  {
    question: "How do you check if a variable is an array?",
    options: [
      "typeof variable === 'array'",
      "Array.isArray(variable)",
      "variable instanceof Array",
      "Both B and C"
    ],
    answer: 3
  },
  {
    question: "Which method removes whitespace from both ends of a string?",
    options: [
      "trim()",
      "strip()",
      "clean()",
      "removeSpaces()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(1 + '1')?",
    options: [
      "2",
      "'11'",
      "11",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: [
      "catch",
      "try",
      "throw",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you convert a string to a number?",
    options: [
      "parseInt()",
      "Number()",
      "parseFloat()",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which method finds the maximum value in an array?",
    options: [
      "Math.max(...array)",
      "array.max()",
      "Math.maximum(array)",
      "array.maximum()"
    ],
    answer: 0
  },
  {
    question: "What is the scope of a variable declared with 'let'?",
    options: [
      "Global scope",
      "Function scope",
      "Block scope",
      "Object scope"
    ],
    answer: 2
  },
  {
    question: "Which method replaces text in a string?",
    options: [
      "replace()",
      "substitute()",
      "change()",
      "swap()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(Boolean(''))?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    answer: 1
  },
  {
    question: "How do you create a new array with transformed elements?",
    options: [
      "forEach()",
      "map()",
      "filter()",
      "reduce()"
    ],
    answer: 1
  },
  {
    question: "Which operator checks for both value and type equality?",
    options: [
      "==",
      "===",
      "!=",
      "!=="
    ],
    answer: 1
  },
  {
    question: "What is the default value of an uninitialized variable?",
    options: [
      "null",
      "undefined",
      "0",
      "empty string"
    ],
    answer: 1
  },
  {
    question: "Which method generates a random number between 0 and 1?",
    options: [
      "Math.random()",
      "Math.rand()",
      "random()",
      "Math.getRandom()"
    ],
    answer: 0
  },
  {
    question: "How do you concatenate two arrays?",
    options: [
      "array1 + array2",
      "array1.concat(array2)",
      "array1.join(array2)",
      "array1.merge(array2)"
    ],
    answer: 1
  },
  {
    question: "What is the output of: console.log(typeof NaN)?",
    options: [
      "'NaN'",
      "'number'",
      "'undefined'",
      "'object'"
    ],
    answer: 1
  },
  {
    question: "Which method checks if an array includes a certain element?",
    options: [
      "includes()",
      "contains()",
      "has()",
      "indexOf()"
    ],
    answer: 0
  },
  {
    question: "How do you declare a function expression?",
    options: [
      "function myFunc() {}",
      "const myFunc = function() {}",
      "let myFunc = () => {}",
      "Both B and C"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of the 'new' keyword?",
    options: [
      "Create a new variable",
      "Create a new function",
      "Create a new object instance",
      "Create a new array"
    ],
    answer: 2
  },
  {
    question: "Which method converts a string to lowercase?",
    options: [
      "toLowerCase()",
      "lowerCase()",
      "toLower()",
      "lower()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log([] == false)?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    answer: 0
  },
  {
    question: "How do you get the current timestamp?",
    options: [
      "Date.now()",
      "new Date().getTime()",
      "Date.timestamp()",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "Which method sorts array elements?",
    options: [
      "sort()",
      "order()",
      "arrange()",
      "organize()"
    ],
    answer: 0
  },
  {
    question: "What is the difference between '==' and '==='?",
    options: [
      "No difference",
      "== checks type, === doesn't",
      "=== checks type, == doesn't",
      "Both check type"
    ],
    answer: 2
  },
  {
    question: "How do you access object properties?",
    options: [
      "object.property",
      "object['property']",
      "object.property()",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "Which method reverses an array?",
    options: [
      "reverse()",
      "flip()",
      "invert()",
      "backward()"
    ],
    answer: 0
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A closed function",
      "A function with access to outer scope",
      "A terminated function",
      "A private function"
    ],
    answer: 1
  },
  {
    question: "How do you create a multi-dimensional array?",
    options: [
      "[[1,2],[3,4]]",
      "array(array(1,2),array(3,4))",
      "new Array[Array[1,2],Array[3,4]]",
      "matrix(1,2,3,4)"
    ],
    answer: 0
  },
  {
    question: "Which event is fired when a page finishes loading?",
    options: [
      "onload",
      "onready",
      "onfinish",
      "oncomplete"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log('5' - '3')?",
    options: [
      "'53'",
      "'2'",
      "2",
      "NaN"
    ],
    answer: 2
  },
  {
    question: "How do you prevent the default behavior of an event?",
    options: [
      "event.preventDefault()",
      "event.stopDefault()",
      "event.cancel()",
      "event.stop()"
    ],
    answer: 0
  },
  {
    question: "Which method gets a substring from a string?",
    options: [
      "substring()",
      "substr()",
      "slice()",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is the output of: console.log(!!null)?",
    options: [
      "true",
      "false",
      "null",
      "undefined"
    ],
    answer: 1
  },
  {
    question: "How do you add an event listener to an element?",
    options: [
      "element.addEventListener()",
      "element.addEvent()",
      "element.attachEvent()",
      "element.on()"
    ],
    answer: 0
  },
  {
    question: "Which method finds the index of an element in an array?",
    options: [
      "indexOf()",
      "findIndex()",
      "search()",
      "Both A and B"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of 'use strict'?",
    options: [
      "Enable strict mode",
      "Better error handling",
      "Prevent common mistakes",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "How do you create an arrow function?",
    options: [
      "() => {}",
      "=> () {}",
      "function => () {}",
      "arrow () {}"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(undefined == null)?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    answer: 0
  },
  {
    question: "Which method creates a shallow copy of an array?",
    options: [
      "slice()",
      "splice()",
      "copy()",
      "clone()"
    ],
    answer: 0
  },
  {
    question: "How do you check if an object has a property?",
    options: [
      "object.hasOwnProperty()",
      "'property' in object",
      "object.property !== undefined",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is the output of: console.log(1 + 2 + '3')?",
    options: [
      "'123'",
      "'33'",
      "6",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which method executes code after a delay?",
    options: [
      "setTimeout()",
      "setDelay()",
      "wait()",
      "pause()"
    ],
    answer: 0
  },
  {
    question: "How do you create a promise in JavaScript?",
    options: [
      "new Promise()",
      "Promise.create()",
      "createPromise()",
      "promise()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(2 ** 3)?",
    options: [
      "6",
      "8",
      "9",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which method removes duplicates from an array?",
    options: [
      "Array.from(new Set(array))",
      "array.unique()",
      "array.removeDuplicates()",
      "array.distinct()"
    ],
    answer: 0
  },
  {
    question: "How do you destructure an array?",
    options: [
      "const [a, b] = array",
      "const {a, b} = array",
      "const a, b = array",
      "const (a, b) = array"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which operator is used for template literals?",
    options: [
      "''",
      "\"\"",
      "``",
      "%"
    ],
    answer: 2
  },
  {
    question: "How do you handle asynchronous operations?",
    options: [
      "Callbacks",
      "Promises",
      "async/await",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "What is the output of: console.log(parseInt('10.5'))?",
    options: [
      "10",
      "10.5",
      "11",
      "NaN"
    ],
    answer: 0
  },
  {
    question: "Which method flattens nested arrays?",
    options: [
      "flat()",
      "flatten()",
      "merge()",
      "join()"
    ],
    answer: 0
  },
  {
    question: "How do you create a class in JavaScript?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "new class MyClass",
      "create class MyClass"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(Math.floor(4.7))?",
    options: [
      "4",
      "5",
      "4.7",
      "Error"
    ],
    answer: 0
  },
  {
    question: "Which method executes code repeatedly?",
    options: [
      "setInterval()",
      "setRepeat()",
      "loop()",
      "repeat()"
    ],
    answer: 0
  },
  {
    question: "How do you stop event propagation?",
    options: [
      "event.stopPropagation()",
      "event.stopBubbling()",
      "event.preventDefault()",
      "event.cancel()"
    ],
    answer: 0
  },
  {
    question: "What is the output of: console.log(Math.ceil(4.1))?",
    options: [
      "4",
      "5",
      "4.1",
      "Error"
    ],
    answer: 1
  },
  {
    question: "Which symbol is used for spread operator?",
    options: [
      "...",
      "---",
      "***",
      "+++"
    ],
    answer: 0
  },
  {
    question: "How do you convert an object to JSON?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "object.toJSON()",
      "stringify(object)"
    ],
    answer: 0
  }
];
