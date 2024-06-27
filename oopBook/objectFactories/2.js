function Smartphone(brand, model, releaseYear) {
  return {
    brand,
    model,
    releaseYear,

    checkBatteryLevel: function() {
      return `${brand} ${model} has 75% battery remaining.`;
    },

    displayInfo: function() {
      return `${releaseYear} ${brand} ${model}`;
    },
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