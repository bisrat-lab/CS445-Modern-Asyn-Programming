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