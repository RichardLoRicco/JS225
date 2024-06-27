const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    return discountedPrice = this.price - discount;
  },
};



console.log(item.discount(20));   // should return 40
// = 40
console.log(item.discount(50));   // should return 25
// = 20
console.log(item.discount(25)  ); // should return 37.5
// = 15

// The problem is that the discount method is mutating the item object. 
// Recall that objects are mutable, and as such, changes made to the property of 
// the item object are compounded every time that the discount method is called. 
// To resolve this, the discount method should be modified so that it doesn't mutate the object. Here's one approach above.