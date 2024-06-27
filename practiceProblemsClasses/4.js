class Cat {
  constructor(name = 'Kitty') {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}

Cat.genericGreeting(); // Hello! I'm a cat!
