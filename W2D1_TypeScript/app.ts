/**
 * !Types
 */
let a : number = 5;
let b :string = "bisrat";
let c : boolean = true;
let d : any //any value
let arr : number[] = [1,3,4,9];
let mixArr :any[] = [1,true,"a",false]

enum Colors{Red =0,Green=1,Blue =2}
let baground = Colors.Blue;


function add3(a: number, b:number){
    return a + b;
}

function add2(a: number, b:number) : number{  //return type is num
    return a + b;
}

let employee : {
    id: number;
    name: string;
   };
   employee = {
    id: 100,
    name : "John"
   }

   /**
    * !union type */
   let z: number | string;

   //array
   let value : number[] = [12,44,6,7]
   value.push(1)//only number  

   let mix : (number | string)[] = [12,"B",6,7]//can be num or string
   mix.push("C")

/**
 * !Tuple ==>fixed size array  */
   let user: [number, string, boolean, number, string];
user = [1, "Asaad", true, 20, "Faculty"];

//Enum(enumration) constant 
enum Color{
    red =1,
    blue =2,
    black =3
}


function print(color : number , value:string){

}

print(Color.red,"bisrat")

/**
 * !Interface -------------------------------------*/
//  function showTod(todo : {title:string, text: string}){
//      console.log(todo.title + " " + todo.text)
//  }
// let mytodo = {title :"trush" , text :"take out "}
interface Todo {
    title:string;
    text: string;
}
function showTodo(todo : Todo){
    console.log(todo.title + " " + todo.text)
}
let mytodo = {title :"trush" , text :"take out "}
showTodo(mytodo);
/** 
 * !-------------------------------------------------- */
//Type Inference  //take the first type 
let text = "some text";
//text = 123; // Type '123' is not assignable to type 'string'

type Employee = { name: string } // We can also create an Interface
let emp = <Employee>{};
emp.name = 'Asaad'; // OK

let code: any = 123;
let courseCode = code as number;
let courseCode2 = <number> code;

/**
 * !Classes -------------------------------------*/
interface UserInterface{
    name : string;
    email : string;
    age : number;
    register(); 
    payInvoice();
}
class User implements UserInterface{
    name : string;
    email : string;
    age : number;
    constructor(name : string,email : string,age : number) {
        this.name =name;
        this.email = email;
        this.age = age;

        console.log(`User Created ${this.name}`)
    }
    register(){
        console.log(`${this.name} is now regestered`)
    }
    payInvoice(){
        console.log(this.name + "paid");
    }

}
class Member extends User{
    id : number;
    constructor(id:number,name : string,email : string,age : number) {
        super(name,email,age)
        this.id = id
    }
    payInvoice(){
        super.payInvoice();
    }
}
let bis = new User("bisrat", "",34)
/**
 * !------------------------------------------------------
 */
interface IPerson {
    fname :string;
    lname : string;
    age: number;
}

interface IAddress{
    street: string;
    city : string;
}

interface IDetailAddress extends IAddress{
    zip :string;
    country: string;
    state: string;
}
class Employees implements IPerson,IAddress{
    fname: string;
    lname: string;
    age: number;
    street: string;
    city : string;

    constructor(fname:string, lanme: string, age: number, street: string,city : string) {
        this.fname = fname;
        this.lname = lanme;
        this.age = age;
        this.street = street;
        this.city = city;
    }

}
class Faculty implements IDetailAddress{
    street: string;
    city : string;
    zip :string;
    country: string;
    state: string; 
    constructor(params) {
        
    }
}
let g = new Employees("","",1,"","")

type Employees2 = {fname: string,lname: string, age: number}



/** 
 * !Abstract Class
  *? if we don't create object from the class we can make it abstract */