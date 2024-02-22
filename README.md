# Object Oriented JavaScript

## OOJS
- Object-oriented programming (OOP) is a programming paradigm that uses objects – which bundle data and methods that operate on the data – as the fundamental building blocks of a program.
- Everything in JavaScript is an object or behaves like an object. Objects can be created using object literals or through constructors.

 ```javascript
// Object literal
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  start: function() {
    console.log('Engine started');
  }
};

// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function() {
    console.log('Engine started');
  };
}

let myCar = new Car('Toyota', 'Camry', 2022);

}
 ```

## Constructors:
- These functions act as blueprints for creating objects. When a function is used with the new keyword, a new object is created and its prototype is set to the constructor's prototype.


## Prototypes
- Each object in JavaScript has a prototype, and this prototype is itself an object or null. Properties and methods can be inherited from the prototype.


 ```javascript
// Adding a method to the Car prototype
Car.prototype.drive = function() {
  console.log('Driving...');
};

myCar.drive(); // Outputs: Driving...
 ```



### Activities
1. Part 1: In the `js` file, complete the list of exercises. 
1. Part 2: In the `js` file, complete the list of exercises. 