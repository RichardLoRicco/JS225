class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    );
  }
}

let cocoa = new Cat("Cocoa", "black", 5);
let leo = new Cat("Leo", "orange", 3);

cocoa.speak();
// Meow. I am Cocoa. I am a 5-year-old black cat.

leo.speak();
// Meow. I am Leo. I am a 3-year-old orange cat.

console.log(cocoa);
// Cat { name: 'Cocoa', color: 'black', age: 5 }

console.log(cocoa instanceof Cat);
// true