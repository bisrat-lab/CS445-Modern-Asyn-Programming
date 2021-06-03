const { Observable, from, of,fromEvent} = rxjs;
const url = "https://randomuser.me/api/?results=5";

const myBtn = document.querySelector("#gen");
const obs$ = fromEvent(myBtn, "click");
obs$.subscribe((e) =>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
       
     data.results.forEach((value ,key) => {
        console.log(value.location,key)
        let p = document.querySelectorAll(".photo")[key].src
         = value.picture.medium;
        let name = document.querySelectorAll(".name")[key];
        let loc = document.querySelectorAll(".location")[key];

        name.innerHTML = `${value.name.first} ${value.name.last} `
        loc.innerHTML = `${value.location.street.name} ${value.location.postcode}`;

     })
 });
});

