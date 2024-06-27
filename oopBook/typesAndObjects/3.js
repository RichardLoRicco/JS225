// Write a simple constructor function that creates objects that represent musical albums. Each album should have a title, artist, and release year. Create objects that represent the following 2 albums:

// Title	Artist	Release Year
// Thriller	Michael Jackson	1982
// The Dark Side of the Moon	Pink Floyd	1973

// When you are done, identify the type of the objects created, the constructor function, and the instance objects.

function Album(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}

let thriller = new Album('Thriller', 'Michael Jackson', 1982);
let darkSide = new Album('The Dark Side of the Moon', 'Pink Floyd', 1973);