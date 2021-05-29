function isPrime(num){
    for(let i =2; i< num ; i++){
        if(num % i === 0){
            return fal
        }
    }
    return true
}

const isPrimePromise = function(value){
    new Promise((resolve, reject) => {
        let result = isPrime(n)
        if(result){
            setTimeout(() =>{
                result({prime:true})
            },500)
            
        }else{
            setTimeout(() => {
                reject({prime:false})
            },500)
            
        }
    })
} 
isPrimePromise(30)
    .then(console.log)
    .catch(console.log)