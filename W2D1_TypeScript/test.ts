// let x: number;
// x = 100;

// let str : string
// str =" bisrat";

// function add(a: number, b: number) {
//     return a + b;
//    }
//    const sum1: number = add(10,15);

//1
function University(name: string, dept: string){
       this.name = name;
       this.dept = dept;
       this.graduation = function(year: number){
           console.log(`Graduation ${this.dept} ${year} student`)
       }  
}  
let miu = new University("MIU","Computer Scince");
miu.graduation(1910);

//2
let bankAcc :{
    money: number;
    deposit : any;
}
bankAcc = {
    money : 2000,
    deposit(val: number){
        this.money +=val
    }
}

let myself :{
    name:string;
    bankAccount :typeof bankAcc
    hobbies : string[] 
}
myself = {
    name: "assid",
    bankAccount : bankAcc,
    hobbies : ["Violine","cooking"] 
}

//3
class Car{
    name:string;
    acceleration : number;
    constructor(name:string) {
        this.name = name;
        this.acceleration = 0
    }
    honk(){
        console.log(`${this.name} is saying :Tooooooot`)
    }
    accelerate(speed :number){
        this.acceleration = this.acceleration + speed; 
    }
}
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60

//4 
 class BaseObject{
    width : number;
    length: number;
    constructor(width:number,length: number) {
        this.width = 0;
        this.length = 0;
    } 
}
class Rectangle extends BaseObject{
    constructor(width:number,length: number) {
        super(width,length)

    }
    clalSize(){
        return this.width * this.length; 
    }
} 
let rec1 = new Rectangle(5,2);
console.log(rec1.clalSize())