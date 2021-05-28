
function isWeekend(){
    const todayDate: Date = new Date();
    const day: number = todayDate.getDay(); 

    switch (day) {
        case 0:
            console.log("weekend") 
        case 1:
            console.log("weekend")   
        default:
            console.log("weekDay")
            break;
    }
}
isWeekend();

export function isWeekend2() {
    const todayDate: Date = new Date();
    const day: number = todayDate.getDay(); 
    day ==0 || day == 6 ? console.log("weekend"):console.log("weekend"); 
    }
