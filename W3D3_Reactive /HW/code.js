const { Observable, from, of,fromEvent} = rxjs;



const url = 'https://randomuser.me/api/?results=5'
const card = document.querySelector(".card2");


// let refreshBtn = document.querySelector("#refresh");
//       refreshBtn.addEventListener('click',refresh); 
fromEvent(document.querySelector("#gen"),'click')
.subscribe(data => {
    refresh()
})

// function refresh(){
//     from(fetch(url))
//     .subscribe(res => {
//         res.json().then(data => {
//             let image = document.querySelectorAll(".photo");
//             let name = document.querySelectorAll(".name");
//             let phone = document.querySelectorAll(".phone");
//             let email = document.querySelectorAll(".email");

//             data.results.forEach((value ,key) => {
//                 console.log(value.phone,key)
//                 name[key].innerHTML = `${value.name.first} ${value.name.last} `
//                 phone[key].innerHTML = value.phone;
//                 email[key].innerHTML = value.email;
//                 image[key].src =  value.picture.medium;
//              })
//         })
//     })
// }


function refresh(){
    from(fetch(url))
    .subscribe(async res => {
        let data = await res.json()
        
            let image = document.querySelectorAll(".photo");
            let name = document.querySelectorAll(".name");
            let phone = document.querySelectorAll(".phone");
            let email = document.querySelectorAll(".email");

            data.results.forEach((value ,key) => {
                console.log(value.phone,key)
                name[key].innerHTML = `${value.name.first} ${value.name.last} `
                phone[key].innerHTML = value.phone;
                email[key].innerHTML = value.email;
                image[key].src =  value.picture.medium;
             })
      
    })
}
