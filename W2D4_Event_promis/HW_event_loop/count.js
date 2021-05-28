// let timerId = setInterval(countdown, 1000);
let timeLeft  = 30;
let timerId;
const elem  = document.getElementById("tm");
const start = document.getElementById("start").addEventListener('click',function(){
    timerId = setInterval(function countdown(){
        if(timeLeft == 0){
            clearTimeout(timerId); 
        }else{
            elem.innerText = timeLeft;
            timeLeft--;
        }
    }, 1000);
})
const stop = document.getElementById("stop").addEventListener('click',function(){
    clearTimeout(timerId); 
})

