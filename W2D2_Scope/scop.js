/**
 * !var scope is defined by the nearest function block \
 * ! let scope uses the closest curly breses 
 * ! var scope uses the closest function */

function a(){
 for (var x = 1; x < 10; x++){
console.log(x);
 }
 console.log(x); // 10  bec var scope uses the closest function
}
console.log(x); // reference error

/**
 * !Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope before code execution
 */