//Selecting
let list1 = document.getElementById("highlight");

//Manipulate
list1.style.color = "red"

let tag2 = document.getElementsByClassName("bolded")

let tag3 = document.getElementsByTagName("h1")
console.log(tag3[0])

//-->one way
// let h1 = document.getElementById("header")
// h1.style.color = "blue";
// h1.style.border = "10px solid red"
// h1.style.fontSize = "20px"

//-->the other way
//this is better saparate css style in diff css file cal call it when when you need it.
let h1 = document.getElementById("header")
h1.classList.add("big")