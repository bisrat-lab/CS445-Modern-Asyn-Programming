/**
 * !var scope is defined by the nearest function block \
 * ! let scope uses the closest curly breses
 * ! var scope uses the closest function */

function a() {
  for (var x = 1; x < 10; x++) {
    console.log(x);
  }
  console.log(x); // 10  bec var scope uses the closest function
}
console.log(x); // reference error

/**
 * !Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope before code execution
 * * function declaration can not be Hoisting
 * * let and const can not be hoisted
 * * var and function statment can be hoisted
 */
function a() {
  console.log(b);
}
a();
var b = 5;

/**
 * !Free variable
 * A variable referred to by a function that is not one of its  * parameters or local
 * variables.
 */
/**
 * *Global
 */
/**
 * *f scope
 * y= undefined 2 10
 * summ = undfinde fn
 */
/**
 * *g scope
 * z = undefined 3
 * 3+10+ 1
 */
var x = 1;
function f() {
  var y = 2;
  var summ = function () {
    var z = 3;
    console.log(x + y + z);
  }; // inner function closes over free variables x, y
  y = 10;
  return summ;
}
var g = f();
g(); // 14

/**
 * * f EC scope
 * a = undefined 1
 * b= undefined 20
 * c= undefined
 * g=fn
 */
/**
 * * g scope
 * b = undefined  300
 * c = undefined  4000
 */

function f() {
  var a = 1,
    b = 20,
    c;
  console.log(a + " " + b + " " + c); // 1 20 undefined
  function g() {
    var b = 300,
      c = 4000;
    console.log(a + " " + b + " " + c); // 1 300 4000
    a = a + b + c; //4301
    console.log(a + " " + b + " " + c); // 4301 300 4000
  }

  console.log(a + " " + b + " " + c); // 1 20 undefined
  g();
  console.log(a + " " + b + " " + c); //4301 20 undefind
}
f();

//
/**
 * * Global context scope
 * x = undefined 10
 */
/**
 * * main scope
 * x = undefined 20 30
 * f = fun
 */
var x = 10;
function main() {
  console.log("x1 is " + x); // undefined
  x = 20;
  console.log("x2 is " + x); //20
  if (x > 0) {
    var x = 30;
    console.log("x3 is " + x); //30
  }
  console.log("x4 is " + x); //30
  var x = 40;
  var f = function (x) {
    console.log("x5 is " + x); //50
  };
  f(50);
  console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);

/**
 * * Global context scope
 * x = undefined 10
 */
/**
 * * main scope
 * f = undefined
 */

var x = 10;
function main() {
  console.log("x1 is " + x); // 10
  x = 20;
  console.log("x2 is " + x); //20
  if (x > 0) {
    x = 30;
    console.log("x3 is " + x); //30
  }
  console.log("x4 is " + x); //30
  x = 40;
  var f = function (x) {
    console.log("x5 is " + x); //50
  };
  f(50);
  console.log("x6 is " + x); //40
}
main();
console.log("x7 is " + x); //40

/**
 * !Function Signature -------------------------------
 * * If a function is called with missing arguments (less than declared), the missing values are set to: undefined
 */
function a(x) {
  console.log(x);
}

a(); // undefined
a(5); // 5
a(5, 10); // 5

/**
 * !No Overloading!------------------------------------
 * * Allowys use the last one
 */

function log() {
  console.log("No Arguments");
}
function log(x) {
  console.log("1 Argument: " + x);
}
function log(x, y) {
  console.log("2 Arguments: " + x + ", " + y);
}
log(); //  undefined, undefined
log(5); //  5, undefined
log(5, 10); //  5, 10

/**
 * !Default values for parameters------------------------------
 */
function log(x = 10, y = 5) {
  console.log(x + ", " + y);
}
log(); // 10, 5
log(5); // 5, 5
log(5, 10); // 5, 10

/**
 * ! Arrow functions ---------------------------------
 */
const add = function (a, b) {
  return a + b;
};
const add2 = (a, b) => a + b;

/**
 * ! Higher-order functions ---------------------------------
 */
const sum = (x, y) => x + y;
const calculate = (fn, x, y) => fn(x, y);
calculate(sum, 1, 2); // 3

/**
 * !Currying
 */
const student = (name) => (grade) => `Name: ${name}, Grade: ${grade}`;
student("Asaad")(10); // Name: Asaad, Grade: 10

const student2 = function (name) {
  return function (greade) {
    return `Name: ${name}, Grade: ${grade}`;
  };
};

/**
 * !Destructuring Arrays and Objects
 */
// Destructuring Array
const [name, id, website] = ["Asaad", 123, "mum.edu"];
// Destructuring Object
const { width = 100, height = 100 } = { width: 300 };

/**
 * !Rest and Spread Operators (ES6)
 */

// Spread Operator
const technologies = ["Node", "NoSQL", "Angular"];
const gainedKnowledge = ["MongoDB", "TypeScript", ...technologies];

// Rest Operator
const family = ["George", "Angel", "Mada", "Asaad", "Mike"];
const [father, mother, ...children] = family; // fatther ->George mother 'Angel'

/**
 * !this inside functions--------------------
 */
function func() {
  console.log(this === window);
}
func(); // true
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const person = Person("Asaad", "Saad");
console.log(person); // undefined bec there is no "new" key word
console.log(window.firstName); // Asaad
console.log(window.lastName); // Saad

/**
 * !Invoke a Function Call and apply----------------------
 * * we want to changing the calling obj
 */
function sayHi(msg) {
  console.log(`${msg}, ${this.firstName}!`);
}
const person = { firstName: "Asaad" };
sayHi.call(person, "Yo"); // "Yo, Asaad!"
sayHi.apply(person, ["Hi"]); // "Hi, Asaad!"

var me = {
  first: "Asaad",
  last: "Saad",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
var you = {
  first: "George",
  last: "Saad",
};
console.log(me.getFullName.apply(you)); // George Saad

/**
 * !Bind is a permanant change 
 */

/**
 * !Immutable ---------------------------------------
 */
const person ={
    fname: "umer"
};
Object.freeze(person)//now we can not touch but we can read 
const copyPerson = {...person}; 
copyPerson.fname ="bisrat";
