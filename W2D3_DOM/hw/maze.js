let isStart = false;
let isInMap = false;
window.onload = function(){
    let boundary = document.getElementsByClassName("boundary");
    document.getElementById("start").addEventListener("mouseover",function(){
        isStart = true;
        isInMap = true;
        for(let i=0;i< boundary.length;i++){
            boundary[i].style.backgroundColor = "#EEEEEE";
        }
    })

    document.getElementById("maze").addEventListener("mouseleave",function() {
        isInMap= false
    });

    //boundary
    for (let i=0; i< boundary.length;i++){
        boundary[i].addEventListener("mouseover", function(e){
            if(isStart){
                e.target.style.backgroundColor= "red";
                document.getElementById("status").textContent = "You Lost the Game";
                isStart = false;
            }
        });
        for(let i=0;i<boundary.length;i++){
            boundary[i].addEventListener("mouthleave", (e)=>{
                e.target.style.backgroundColor = "#EEEEEE"
            });
            document.getElementById("end").addEventListener("mouseover" ,function(){
                if(isStart){
                    if(isInMap){
                        document.getElementById("status").textContent = "You Win";
                    }else{
                        document.getElementById("status").textContent = "try again";
                        isStart = false;
                    }
                }
                isStart = false;
            })
        }
    }
} 
