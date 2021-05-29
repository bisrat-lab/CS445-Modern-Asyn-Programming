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
* !Closure
**A first-class function that binds to free variables that are defined in its execution environment.
 * !Free variable
 * *A variable referred to by a function that is not parameters or not local variables
/**
 * *Global context(hosting)
 * x =undefined => 1
 * f = function
 * g = undefined 
 */
/**
 * * f scope
 * y= undefined => 2 => 10
 * summ = undfinde => fn
 */
/**
 * *g scope
 * z = undefined 3
 * 3+10+ 1
 */
var x = 1; //free varable
function f() {
  var y = 2; //free varable
  var summ = function () {
    var z = 3;
    console.log(x + y + z);
  }; // inner function closes over free variables x, y
  y = 10;
  return summ;
}
var g = f();
g(); // 14

/**===============================================
 * * f scope
 * a = undefined => 1 => 4301
 * b= undefined => 20
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

//====================================================
/**
 * * Global context scope
 * x = undefined => 10
 */
/**
 * * main scope
 * x = undefined => 20 => 30 => 40
 * f = undefined  => fun
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
  console.log("x6 is " + x); //40
}
main();
console.log("x7 is " + x); //10

/**====================================================
 * * Global context scope
 * x = undefined => 10 => 20 =>30 => 40
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
log(); //10, 5
log(5); //5,5
log(5, 10); //5,10

/**
 * ! Arrow functions ---------------------------------
 */
const add = function (a, b) {
  return a + b;
};
const add2 = (a, b) => a + b;

/**
 * ! Higher-order functions ---------------------------------
 * * A function that takes a function as parament or return a function
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

const add = (x) => (y) => x + y;
const addOne = add(1);
// const add1 = function(y){
//   return 1 + b;
// }
const addFive = add(5);
addOne(3); //4
addFive(10); // 15

/**
 * !Destructuring Arrays and Objects
 */
// Destructuring Array
const [name, id, website] = ["Asaad", 123, "mum.edu"];
console.log(id); //123
// Destructuring Object
const { width = 100, height = 100 } = { width: 300 };

/**
 * !Rest and Spread Operators (ES6)
 * *copy the array or copy the object
 */
// Spread Operator
const technologies = ["Node", "NoSQL", "Angular"];
const gainedKnowledge = ["MongoDB", "TypeScript", ...technologies];

// Rest Operator
const family = ["George", "Angel", "Mada", "Asaad", "Mike"];
const [father, mother, ...children] = family; // father ->George mother 'Angel'
//childrnd  gone be Mada", "Asaad", "Mike"

/**
 * !this as a Global Context---------------------------
 * *this refer to some Object
 * * if we are in the gobal this refer to window
 * * window obj located in Browser
 */
/**
 * !this inside functions---------------------------
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
 * !this inside Function Constructors------------------
 */
function Person(firstName, lastName) {
  console.log(this); //created empity obj this = {}
  this.firstName = firstName;
  console.log(this); // {"firstName":"Asaad"}
  this.lastName = lastName;
  console.log(this); // {"firstName":"Asaad","lastName":"Saad"}
  // return this; implicit
}
const person = new Person("Asaad", "Saad");

/**
 * !Invoke a Function Call and apply----------------------
 * * the purpuse we want to changing the calling obj
 */
function sayHi(msg) {
  console.log(`${msg}, ${this.firstName}!`);
}
const person = { firstName: "Asaad" };
sayHi("Hi"); //hi undefined
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
 * * the purpuse of bind we want to changing the calling obj permamntly
 */
const person = { firstName: "Asaad" };
function sayHi() {
  console.log(`Hi, my name is ${this.firstName}!`);
}
const greet = sayHi.bind(person);
greet(); // "Hi, my name is Asaad!"
greet.call({ firstName: "Mike" }); // "Hi, my name is Asaad!"
/**
 * !Immutable ---------------------------------------
 */
const person = {
  fname: "umer",
};
Object.freeze(person); //now we can not touch but we can read
const copyPerson = { ...person };
copyPerson.fname = "bisrat";

/**
 * !this within Arrow Functions -------------
 * *when we use Arrow function there will not be another this keyword uses the closest one 
 * *when ever we create a function we have another this keyword
 */
const counter ={
    count =0,
    increment (){
         setTimeout(()=>console.log(this.count++),100)
    }
}
counter.increment();//1,2,3.....
const counterF ={
  count =0,
  increment(){
    setTimeout(function(){
      console.log(this.count++)//NAN
    },1000)
  }
}

//JavaScript Class
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
greet() { // will be added to the prototype
console.log(this.firstname + ' ' + this.lastname);
}
}

//Fix me 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() { console.log(`Hi, my name is ${this.firstName}!`); }
  }
  const person = new Person("Asaad", "Saad");
  person.sayHi(); // "Hi, my name is Asaad!"
  const greet = person.sayHi;
  //greet(); // cannot read property firstName from undefined 
  greet.apply(person);