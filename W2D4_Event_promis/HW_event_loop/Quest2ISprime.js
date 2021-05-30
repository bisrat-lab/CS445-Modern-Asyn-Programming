// function isPrime(num){
//     for(let i =2; i< num ; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true;
// }

// const isPrimePromise = function(value){
//     new Promise((resolve, reject) => {
//         let result = isPrime(value)
//         if(result){
//             setTimeout(() =>{
//                 resolve({prime:true})
//             },0)

//         }else{
//             setTimeout(() => {
//                 reject({prime:false})
//             },0)

//         }
//     })
// }
// isPrimePromise(30)
// .then(console.log)
// .catch(console.log)

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const isPrimePromise = function (value) {
  return new Promise((resolve, reject) => {
    let result = isPrime(value);
    if (result) {
        setTimeout(() =>{
            resolve({ prime: true },200);
        })
      
    } else {
        setTimeout(()=>{
            reject({ prime: false },200);
        })
      
    }
  });
};

isPrimePromise(7)
.then(console.log)
.catch(console.log)
.finally(()=>console.log("complete"));


// const makeMePizza = function () {
//     return new Promise(function (resolve, reject) {
//         //console.log("1")
//       if (true) {
//         resolve("Here is your pizza!"); //then() will be called 
//       } else {
//         reject("Sorry no more cheese!"); //catch() will be called
//       }
//     });
//   };
//   //console.log('Start')
//   makeMePizza()
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))
//     .finally(() => console.log("final"))
//   console.log("Finish my homework");
//   console.log('end')