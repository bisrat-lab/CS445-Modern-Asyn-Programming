// let timerId = setInterval(countdown, 1000);
// let timeLeft  = 30;
// let timerId;
// const elem  = document.getElementById("tm");
// const start = document.getElementById("start").addEventListener('click',function(){
//     timerId = setInterval(function countdown(){
//         if(timeLeft == 0){
//             clearTimeout(timerId); 
//         }else{
//             elem.innerText = timeLeft;
//             timeLeft--;
//         }
//     }, 1000);
// })
// const stop = document.getElementById("stop").addEventListener('click',function(){
//     clearTimeout(timerId); 
// })

const secInp = document.querySelector("#sec");
secInp.value ="0"
const stop = document.querySelector("#stop");
stop.disabled = true;
const start = document.querySelector("#start");
start.disabled = true

document.querySelector("#sec").addEventListener('keyup', 
function(event){
    const newInput = event.target.value;
    if(parseInt(newInput) > 0){
        start.disabled = false;
    }
})
let intervalID;
start.addEventListener('click',function(){
    intervalID = setInterval(()=> {
        if(secInp.value ==1){
            clearInterval(intervalID);
        }
        secInp.value-=1
    },1000)
    start.disabled = true;
    stop.disabled = false;
})

stop.addEventListener('click',function(){
    clearInterval(intervalID);
    second.value = "0";
})