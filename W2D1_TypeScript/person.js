
export class Person{
    constructor() {
        console.log("A")
    }
}
export class Employee{
    constructor() {
        console.log("B")
    }
}

//Must have only one default in one file
export default class Manager{
    constructor() {
        console.log("M")
    }  
}

//export {A,B}// another export techinic 
//we can dot use distract and we can give any names  