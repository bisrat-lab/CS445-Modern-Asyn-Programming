const { Observable,from } = rxjs;
// const obs$ = Observable.create(function (observer) {//3
//     console.log("before")
//   observer.next(1);
// //   observer.next(2);
//   observer.complete()
// setTimeout(()=> {observer.complete()},1000)
// });

// console.log("after") //1
// obs$.subscribe(  //2
//     function(data){
//         console.log(data)
//     },null,
//     function(){
//         console.log("done")
//     }
// )
// console.log("end")

// const { Observable, from } = rxjs;

// const number = [10, 20, 30];
// const numObs = from(number);
// numObs.subscribe((value) => {
//   console.log(value);
// });
// const obs$ = Observable.create(function (observer) {
//   //3
//   number.forEach((item) => {
//     setTimeout(() => {
//       observer.next(item);
//     }, 2000);
//   });
// });

// console.log("after"); //1
// obs$.subscribe(
//   //2
//   function (data) {
//     console.log(data);
//   },
//   null,
//   function () {
//     console.log("done");
//   }
// );

/**
 * ! Of
 */
const { of } = rxjs;
const { map, filter } = rxjs.operators;
console.log("Start");
of(1, 2, 3)
  .pipe(
    map((n) => n + 3),
    filter((n) => n >= 5)
  )
  .subscribe(
    (x) => console.log(x),
    null,
    () => console.log("done")
  );
console.log("End");


let myPromise = new Promise((resolve, reject) => {
    setTimeout(function () { resolve("Success!"); }, 2000);
    });
    from(myPromise).subscribe(e => console.log(e));
