class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log("Accelerate");
  }

  decelerate() {
    console.log("Decelerate");
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log("Honk");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log("Drop anchor");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log("Take off");
  }

  land() {
    console.log("Land");
  }
}

let car = new Car('red', 3300, 'BXY334');
let boat = new Boat('yellow', 12000, 'Bahamas');
let plane = new Plane('blue', 83000, 'Southwest');


console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);


console.log(car instanceof Car);
console.log(boat instanceof Car);

