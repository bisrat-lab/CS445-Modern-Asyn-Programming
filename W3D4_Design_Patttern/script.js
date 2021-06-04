/**
 * !Prototype Pattern Example
 */
const car = {
  name: "Toyota Camry",
  drive() {
    console.log("I'm driving!");
  },
  honk() {
    console.log("Horn is making sound!");
  },
};
//prototype design pattern
let c = car.drive
const myCar = Object.create(car);
myCar.drive();
console.log(myCar.name);

/**
 * !The Module Pattern
 * * hide or
 */
//*IIFE
const counterModule = (function () {
  //return object
  let counter = 0; // private it is in coluser not can acess
  return {
    incrementCounter: function () {
      //Public can acess
      return counter++;
    },
    resetCounter: function () {
      //Public can acess
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();
counterModule.incrementCounter();
counterModule.resetCounter();
//!Example 2 

let Items  = (function(){
  let objects =[];

  return {
    addObject: function(value){
      object.push(value);
    },
    removeObject : function(id){
      let index= objects.indexOf(id);
      if(index >= 0){
        objects.splice(index,1)
      }
    },
    getObject : function(){
      return JSON.parse(JSON.stringify(objects))
    }
  }
}());
collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects()); 

/**
 * !The Singleton Pattern
 * * if we want to access
 */

const Singleton = (function () {
  let instance;
  return {
    getInstance: function () {
      if (!instance) {
        instance = new Object("I am the instance");
      }
      return instance;
    },
  };
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log("Same instance? " + (instance1 === instance2));//true

//! example 2
let singleton = (function() {
  // private singleton value which gets initialized only once
  let instance;

  function initializeInstance(values){
      this.randomNumber = Math.random();
      values = values || {};
      this.number = values.number || 5;
      this.size = values.size || 10;
  }

  // we export the centralized method for retrieving the singleton value
  return {
      getInstance: function(values) {
          // we initialize the singleton value only once
          if (instance === undefined) {
            instance = new initializeInstance(values);
          }

          // and return the same config value wherever it is asked for
          return instance;
      }
  };
})();

var instanceObject = singleton.getInstance({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(instanceObject);
var instanceObject1 = singleton.getInstance({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(instanceObject1);
/**
 * !The Observer Pattern
 * * one to many 
 */

function Subject() {
  this.observers = []; //array of functions 
}
Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function(fn){
    this.observers = this.observers.filter(fn =>{
        if(fn != fntoRemove)
        return fn
    })
  },
  emit: function (msg) {
    this.observers.forEach(function (fn) {
      fn.call(null, msg);
    });
  },
};
const subject = new Subject();

subject.subscribe(console.log);
subject.emit("Hello");

//!
class Subject {
  constructor() {
    this.observers = [];
  }

  // Add an observer to this.observers.
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remove an observer from this.observers.
  removeObserver(observer) {
    const removeIndex = this.observers.findIndex(obs => {
      return observer === obs;
    });

    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  // Loops over this.observers and calls the update method on each observer.
  // The state object will call this method everytime it is updated.
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}

