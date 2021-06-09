const { Observable, from, of } = rxjs;

/**
 * ! first way of creating Observable
 */
const obs$ = Observable.create(function (observer){//creating the stream
    console.log("before")
    observer.next("1")//add some data to the stream
    observer.next("2")
    observer.complete();
   // observer.next({name:"bisrat"})
});
console.log("after") //1=>
obs$.subscribe(//can take 3 parameter function 
    function(data){
        console.log(data)
    },
    function(error){
        console.log(error)
    },
    function(){
        console.log("Done")
})
console.log("End")

/**
 * !Creationg Observable from other data sources
 * ! Converting Data Sets to Observables from
 * *from can take array of takes single value
 */
const num = [5, 4, 6];
const numObs = from(num); //creat the stream and to add to the stream
numObs.subscribe((value) => {
  setTimeout(() => {
    console.log(value);
  }, 0);
});
// creating the above from scratch
const Obsnum = Observable.create(function (observer) {
  num.forEach((item) => {
    setTimeout(() => {
      observer.next(item);
    }, 2000);
  });
});
Obsnum.subscribe((value) => {
  console.log(value);
});

/**
 * ! Converting Data Sets to Observables from
 * *using pipe
 */
const { map, filter } = rxjs.operators;

const items = of(10, 20, 30).pipe(
  map((item) => item * 2),
  filter((item) => item < 70)
);
items.subscribe((data) => console.log(data));

//* example with object of array
const data = [
  { id: 0, name: "Learning Promises" },
  { id: 1, name: "Learning Async/Await" },
  { id: 2, name: "Learning Observables" },
];

const dataObv = from(data).pipe(map((item) => item.name));
dataObv.subscribe((value) => {
  console.log(value);
});

/**
 * ! Creating Observable from events
 *
 */
const { fromEvent } = rxjs;
const myBtn = document.querySelector("#myBtn");
const obs$ = fromEvent(myBtn, "click");
obs$.subscribe((e) => console.log("clicked"));
obs$.subscribe((e) => console.log("bisrat"));

/**
 * ! Creating Observable promises
 *
 */
const myPromise = new Promise((resolv, reject) => {
  setTimeout(() => {
    resolv("Susess");
  }, 2000);
});
from(myPromise).subscribe((e) => console.log(e));

/**
 * !Subject Creating Observable
 *
 */

const { Subject } = rxjs;
var myObservable$ = new Subject();

myObservable$.subscribe((value) => console.log(value));
setTimeout(() => {
  myObservable$.next("1");
}, 3000);
myObservable$.subscribe((value) => console.log(value));
setTimeout(() => {
  myObservable$.next("2");
}, 3000);

/**
 * !debounceTime()
 *
 */
 const { debounceTime } = rxjs.operators;

const txtInput = document.querySelector("#myInput");
const input$ = fromEvent(txtInput,'input');
input$
    .pipe(
    // When silence of 200ms => Emit
    debounceTime(200),
    map((event) => event.target.value)
  )
  .subscribe((value) => console.log(`Check if user exists: ${value}`));

/**
 * ! mergeAll()
 **highe order observable
 */
 

const { interval } = rxjs;
const {  mergeAll, take } = rxjs.operators;
interval(100) // ms
 .pipe(
take(10),
map(x => of(1, 2, 3)),
mergeAll()
 )
 .subscribe(console.log);

 /**
 * ! flatMap
 **highe order observable
 */

const {  flatMap} = rxjs.operators;
interval(100) // ms
 .pipe(
take(10),
// map(x => of(1, 2, 3)),
// mergeAll()
flatMap(x => of(1, 2, 3)),
 )
 .subscribe(console.log);