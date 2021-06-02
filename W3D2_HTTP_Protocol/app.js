const url = 'https://randomuser.me/api/?results=5'
fetch(url)
 .then(response => response.json())
 .then(data => {
 
     for(let i =0; i < data.results.length; i++ ){
        document.querySelectorAll(".photo")[i].src = data.results[i].picture.medium;
        let name = document.querySelectorAll(".name")[i];
        let phone = document.querySelectorAll(".phone")[i];
        let email = document.querySelectorAll(".email")[i]
          name.innerHTML = `${data.results[i].name.first} ${data.results[i].name.last} `
          phone.innerHTML = data.results[i].phone;
          email.innerHTML = data.results[i].email;
          
        console.log(phone)
     }
 });

 let refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener('click',()=> window.location.reload())


fetch('https://randomuser.me/api/?results=5')
 .then(response => response.json())
 .then(data => {
 
     data.results.forEach((value ,key) => {
        console.log(value.phone,key)
        document.querySelectorAll(".photo")[key].src = value.picture.medium;
        let name = document.querySelectorAll(".name")[key];
        let phone = document.querySelectorAll(".phone")[key];
        let email = document.querySelectorAll(".email")[key];
        phone.innerHTML = value.phone;

        name.innerHTML = `${value.name.first} ${value.name.last} `
        phone.innerHTML = value.phone;
        email.innerHTML = value.email;
     })
 });

 let refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener('click',()=> window.location.reload())