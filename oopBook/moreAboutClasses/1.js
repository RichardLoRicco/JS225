class Person {
  #name
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#setAge(age);
  }

  #setAge(age) {
    if (typeof(age) === 'number' && age > 0) {
      this.#age = age;
    } else {
      throw new RangeError('Age must be positive');
    }
  }

  showAge() {
    console.log(this.#age);
  }

}

let person = new Person('John', 30);
person.showAge(); // 30

let person2 = new Person('John', -5);

// person.#age = 'abc'