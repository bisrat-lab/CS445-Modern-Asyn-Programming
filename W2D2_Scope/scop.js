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
 * * let and const no hoisted
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
  console.log("x2 is " + x);  //20
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
