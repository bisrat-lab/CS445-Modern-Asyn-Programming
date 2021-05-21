const myArray = [1,2,3]
const result = myArray.map((item,index)=>item * 2)
console.log(result)

//function constractor
function Person(){
    this.name ="Bisrat";
    this.age = 20;
}
const p1 = new Person()
console.log(p1)

//Class keyword
class Animal{
    constructor(firstname,age) {
        this.name = firstname;
        this.age = age
    }
    print = function(){
        console.log(this.name + " " + this.age );
    }
}
const animal1 =new Animal("Alice",12)
animal1.print();
animal1.name ="bob";
animal1.print();

//inheritance ==> is a relation 
class Cat extends Animal {
    constructor(name,age){
       super(name,age);
    }
    //overriding
    print = ()=>{
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}
const cat1 = new Cat("Mewe", 5)
cat1.print()

function cilckMe(){
    console.log("clicked")
    }
    
    let button  = document.getElementById("clickMeButton");
    button.onclick = cilckMe;

    window.onload = function(){
    let button  = document.getElementById("clickMeButton");
    button.onclick = cilckMe;
    }