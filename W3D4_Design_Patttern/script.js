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
      //can acess
      return counter++;
    },
    resetCounter: function () {
      //can acess
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();
counterModule.incrementCounter();
counterModule.resetCounter();

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
console.log("Same instance? " + (instance1 === instance2));

/**
 * !The Observer Pattern
 */

function Subject() {
  this.observers = [];
}
Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
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


