fetch('https://dog.ceo/api/breeds/image/random')
.then(res => {
    console.log(res.headers.get('Content-Type'))
    console.log(res.headers.get('Date'))
})

//!JSON Methods 
//* text is a JSON Data  to convert to JSON Object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text); //to JSON object 
//console.log(obj)

let data = JSON.stringify(obj)  // to JSON Data
//console.log(data)


//!Using Fetch 
//*The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 

fetch(url)
.then(res => res.json())//read response body and parse(break up) as JSON
.then(data =>{
    console.log(data)
})


fetch(url, 
    {method: 'POST',
headers: {'Content-Type': 'application/json'}, body: JSON.stringify({student: "Asaad Saad"})
})
.then(res => res.json())
.catch(error => console.error(error))