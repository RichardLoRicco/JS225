function createFruit(name, color) {
  return {
    name: name,
    color: color,

    isRipe: function() {
      return `This ${this.name} is ripe.`;
    },

    describe: function() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = createFruit('Apple', 'Red');
let banana = createFruit('Banana', 'Yellow');
let blackberry = createFruit('Blackberry', 'Black');