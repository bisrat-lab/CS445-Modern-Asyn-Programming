const { Observable,from } = rxjs;

const obs$ = Observable.create(function (observer){
    observer.next("1")//add this value to the stream
});

obs$.subscribe(function(data){ //take 3 parameter
    console.log(data)
})
