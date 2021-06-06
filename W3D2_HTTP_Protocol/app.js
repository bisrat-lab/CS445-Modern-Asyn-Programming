// const url = 'https://randomuser.me/api/?results=5'
// fetch(url)
//  .then(response => response.json())
//  .then(data => {
 
//      for(let i =0; i < data.results.length; i++ ){
//         document.querySelectorAll(".photo")[i].src = data.results[i].picture.medium;
//         let name = document.querySelectorAll(".name")[i];
//         let phone = document.querySelectorAll(".phone")[i];
//         let email = document.querySelectorAll(".email")[i]
//           name.innerHTML = `${data.results[i].name.first} ${data.results[i].name.last} `
//           phone.innerHTML = data.results[i].phone;
//           email.innerHTML = data.results[i].email;
          
//         console.log(phone)
//      }
//  });

//  let refreshBtn = document.querySelector("#refresh");
// refreshBtn.addEventListener('click',()=> window.location.reload())

// let refreshBtn = document.querySelector("#refresh");
//       refreshBtn.addEventListener('click',refresh); 

// function refresh(){ 
// fetch('https://randomuser.me/api/?results=5')
//  .then(response => response.json())
//  .then(data => {

//         let image = document.querySelectorAll(".photo");
//         let name = document.querySelectorAll(".name");
//         let phone = document.querySelectorAll(".phone");
//         let email = document.querySelectorAll(".email");

//      data.results.forEach((value ,key) => {
//         console.log(value.phone,key)
//         name[key].innerHTML = `${value.name.first} ${value.name.last} `
//         phone[key].innerHTML = value.phone;
//         email[key].innerHTML = value.email;
//         image[key].src =  value.picture.medium;
//      })
//  });
// }
   let myLon,myLat

function accessUserLoc() {
   navigator.geolocation.getCurrentPosition(
       function (currPos) {
           myLon = currPos.coords.longitude;
           myLat = currPos.coords.latitude;
         console.log(myLon)
         console.log(myLat)
         
          
       });
}
accessUserLoc()

 async function locFetching(){

  let result = await fetch(`http://open.mapquestapi.com/geocoding/v1/reverse?key=AIzaSyBEealQnwTbeSTPfbNUqLul6tS4Uye41JI&location=38.987722399999996,-77.0276382`,
   {
     
       method: 'GET',
       headers: {"Access-Control-Allow-Origin":'*', 'Content-Type': 'application/json',} 
      })
   
   let data = await result.json();
   console.log(data)
   //  .then(response => response.json())
    
   //  .then(data => {
   //    console.log(data)
   //  });
}

// locFetching(); 