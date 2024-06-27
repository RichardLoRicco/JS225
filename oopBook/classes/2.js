// If you have a Dog class and an object assigned to a variable named boo, how can you tell whether the object is an instance of the Dog class?

console.log(boo instanceof Dog);
// true if `boo` is a Dog, false if it is not

console.log(boo);
// Dog { name: 'Boo', color: 'chocolate', age: 3 }
//
// Your JavaScript engine may show different output,
// but it should clearly show that you are looking
// at a Dog.