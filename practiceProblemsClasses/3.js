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
  
}

let kitty = new Cat();
kitty.greet(); // Hello! My name is Kitty!
kitty.rename('Sophie');
kitty.greet(); // Hello! My name is Sophie!

