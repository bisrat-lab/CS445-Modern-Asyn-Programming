// console.log("a");
// console.log("c");
// setTimeout(() => {
//   console.log("timeout");
// }, 1000);
// setTimeout(() => {
//   console.log("timeout2");
// }, 5000);

// console.log("d");

/**
 * !Create Promise Object 
 * ! Example 1*/

const promiseInstance = new Promise(function (resolve, reject) {
  resolve();
  reject();
});

const makeMePizza = function () {
  return new Promise(function (resolve, reject) {
      console.log("1")
    if (false) {
      resolve("Here is your pizza!"); //then() will be called 
    } else {
      reject("Sorry no more cheese!"); //catch() will be called
    }
  });
};
console.log('Start')
makeMePizza()
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("final"))
console.log("Finish my homework");
console.log('end')

/**
 * !Create Promise Object 
 * ! Example 2*/
let userLogOut = false;
let userInThePage = true ;
function userLogIn(){
    return new Promise((resolve, reject) =>{
        if(userLogOut){
            resolve({
                name : "user Left",
                massage: "see you next time"
            })
        }else if(userInThePage){
            resolve({
                name: 'user login the web',
                massage: "fill the form"
            })
        }else{
            reject("SignUP please! ")
        }
    })
}

userLogIn()
    .then((massage) => console.log("sucess" + massage))
    .then((massage) => console.log("sucess" + massage))
    .catch((error)=> console.log(error))
