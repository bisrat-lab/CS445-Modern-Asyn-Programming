class Person{
    constructor(fname,lname) {
        this.fname = fname;
        this.lname = lname;
    }
}
const p1 =new Person("b","V")
const copyP1 = {...p1}
