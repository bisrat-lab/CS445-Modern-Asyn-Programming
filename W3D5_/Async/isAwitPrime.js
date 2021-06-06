function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }


let isPrimePromise2 = function (num) {
    let result = isPrime(num);
    return new Promise(resolve => resolve(result))
    };

    async function primeResult(value){
        try {
          let result  = await isPrimePromise2(value);
          console.log(result);
        }catch(err) {
          console.log(err)
        }  
      }
      
      console.log('start')
      primeResult(11);

