// Write a constructor function that creates objects that represent smartphones. Each smartphones should have a brand, model, and release year. Add methods to check the battery level and to display the smartphones's information. Create objects that represent the following two smartphones:

// Brand	Model	Release Year
// Apple	iPhone 12	2020
// Samsung	Galaxy S21	2021


function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBatteryLevel = function() {
    return `${this.brand} ${this.model} has 75% battery remaining.`;
  };

  this.displayInfo = function() {
    return `${this.releaseYear} ${this.brand} ${this.model}`;
  };
}

let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21