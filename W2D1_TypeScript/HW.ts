

//1
class Unversity2 {
    name: string;
    dep : string;
    constructor(name: string,dep : string) {
        this.name = name;
        this.dep = dep;
    }
    graduation = (year: number)=>{
        console.log(`Graduation ${this.dep} ${year} student`)
    }
}

//2

interface IbankAccount {
    money: number;
    deposit (value: number) : void;
}
class BankAccount implements IbankAccount{
    money: number;
    constructor(money:number){
        this.money = money;
    }
    deposit(value:number): void{
        this.money+=value;
    }
}
const bankaccount = new BankAccount(2000);

interface IPerson{
    name: string;
    bankAccount : IbankAccount;
    hobbies : string [];
}
const myself2 : IPerson ={
    name :"bisar",
    bankAccount :bankaccount,
    hobbies: ["violn","danc"]
}

//3
interface ICar{
    brand: string;
    acceleration :number;
    honk():void;
    accelerate(speed:number):void
  }
  class Car implements ICar{
    brand: string;
    acceleration :number;
    constractor(brand: string){
        this.brand = brand;
        this.acceleration = 0;
    }
    honk(){
        console.log(`${this.brand} is saying :Tooooooot`)
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;
    }
  }
// class Car{
//     name:string;
//     acceleration : number;
//     constructor(name:string) {
//         this.name = name;
//         this.acceleration = 0
//     }
//     honk(){
//         console.log(`${this.name} is saying :Tooooooot`)
//     }
//     accelerate(speed :number){
//         this.acceleration = this.acceleration + speed; 
//     }
// }
// var car = new Car("BMW");
// car.honk(); // BMW is saying: Toooooooooot!
// console.log(car.acceleration); // 0
// car.accelerate(60);
// console.log(car.acceleration); // 60

//4 

interface IBaseObject{
    width : number;
    length: number;
}
class Rectangle2 implements IBaseObject{
    width : number;
    length: number;
   
        constructor(width:number,length: number) {
            this.width = width;
            this.length = length;
        } 
    clalSize (){
        return this.width * this.length; 
    }
} 
let rec2 = new Rectangle2(5,2);
console.log(rec1.clalSize())