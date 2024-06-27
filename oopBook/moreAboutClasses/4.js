class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.#width;
  }

  set width(value) {
    if (value > 0) {
      this.#width = value;
    } else {
      throw new RangeError('width must be positive');
    }
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    if (value > 0) {
      this.#height = value;
    } else {
      throw new RangeError('height must be positive');
    }
  }

  get area() {
    return this.width * this.height;
  }
}

// test code omitted for brevity

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}