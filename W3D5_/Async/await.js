async function myFunction() {
  try {
    const result = await new Promise((resolve, reject) => reject(true));
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
// myFunction();
// console.log(`Finish`);

const phoneCall = function(){
    return new Promise(resolve=>resolve("Ordered"))
   };
async function orderPizza() { //3
  try {
    console.log("Before making the call");
    let results = await phoneCall();
    console.log(results); //like then
    console.log("After making the call");//like then
    //everting after await scip and excuite later
  } catch (error) {
    console.log(error);
  }
}
console.log('start') //1
orderPizza(); //2
console.log('Finish homework')
/**
 * start
 * Before making the call
 * Finish homework
 * Ordered
 * After making the call
 */