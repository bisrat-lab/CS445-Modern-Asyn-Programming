// const mydiv = document.getElementById("myDiv");
// console.log(mydiv);
//document.querySelector('div');//return one node
// const mydiv2 = document.querySelectorAll("Div")//return multiple
// console.log(mydiv2);

const divColor = document.getElementById("div1");
divColor.classList.add("size");
divColor.classList.toggle("red");

//events
// browser triger the event
function clickmeEvent() {
  const outPutDiv = document.querySelector("#outputDiv");
  outPutDiv.innerHTML = "Bisrat";
}
const clickButton = document.querySelector("#button");
//clickButton.onclick = clickmeEvent;
clickButton.addEventListener("click", clickmeEvent);

/**
 * !Geolocation
 */

navigator.geolocation.getCurrentPosition(success, fail);
function success(position) {
  console.log("Longitude:" + position.coords.longitude);
  console.log("Latitude:" + position.coords.latitude);
}
function fail(msg) {
  console.log(msg.code + msg.message); // Log the error
}
