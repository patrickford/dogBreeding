/* Dog Breeding
------------
For this toy problem you will breed dogs by combining two dogs and generating puppies.

The puppies will be subject to the following rules:

Name:
  name = father's name + mother's name + order of birth in litter
  example: father: "A" and mother: "B" have 3 puppies:
  AB1, AB2, and AB3

Gender: 
  Odds of generating a male or female is 50%

Litter Size:
  Smaller dogs have smaller litters than big dogs. Here is our rule:

  Size of Mother   Average Litter
  ----------------------------
  < 10 lbs        3 puppies with 10% chance of plus or minus 1
  10 to 25 lbs    5 puppies with 10% chance of + or - 1
  26 to 50 lbs    7 puppies with 10% chance of + or - 2
  51 to 90 lbs    9 puppies with 10% chance of + or - 2


Color:
  Parent Color            Genetic Odds
  ------------------------------------
  Black                   Black 60%, White 20%, Brown 20%
  White                   White 60%, Black 20%, Brown 20%
  Brown                   Brown 80%, White 10%, Black 10%
  Mixed                   Mixed 70%, Black 10%, White 10%, Brown 10%

  Each parent will contribute a color gene based on the above odds
  They will be combined based on the following genetic dominance traits
  if father.color = 'black' {
   60% colorContribution = black
  }

  fatherColorContribution, motherColorContribution
  if colors are the same, puppies the same
  order of dominance is Mixed, Black, Brown, White

Fur:
  Dogs can have long or short fur with long fur being dominant.
  If both father and mother have the same length fur so will the puppies.
  If one has long and one has short, puppy will have long fur
  Except for genetic mutations which happen 10% of the time where fur will be random.

Size of dog
 Puppies will grow to the average size of their father and mother, plus or minus 10%

*/

// Here is a construction function to create dog objects.
// Use it to create a few parent dogs to start, then use it in your breeding program
// to generate each puppy
function Dog(name, gender, color, fur, size) {
  this.name = name;
  this.gender = gender;
  this.color = color;
  this.fur = fur;
  this.size = size;
}

var dogA = new Dog("A", "male", "black", "short", 35);
var dogB = new Dog("B", "female", "white", "long", 55);
var dogC = new Dog("C", "male", "brown", "short", 78);
var dogD = new Dog("D", "female", "mixed", "long", 9);

// The best approach will be to write helper functions for each property of the puppy

function dogName(father, mother, birthOrder) {
// Combine father, mother, an birth order to generate dog's name
  var name = father.name + mother.name + birthOrder;
  return name;
}

function dogGender() {
// Odds of male or female are 50 : 50
  var male = (Math.floor(Math.random() * 10) % 2 === 0);
  if (male) {
    gender = 'male';
  } else {
    gender = 'female';
  }
  return gender;
}

function dogColor(father, mother) {
// Determine the color based on the rules above.
  var color = 'brown';
  return color;
}

function dogFur(father, mother) {
// Determine length of fur based on the rules above.
  var fur;
  if (father.fur === mother.fur) {
    fur = father.fur;
  } else {
    fur = "long"
  }
  var mutation = Math.floor(Math.random() * 10);
  if (mutation === 1) {
    console.log('fur mutation occured');
    var long = (Math.floor(Math.random() * 10) % 2 === 0);
    if (long) {
      fur = 'long';
    } else {
      fur = 'short';
    }
  }
  return fur;
}

function dogSize(father, mother) {
  var size;
  var avg = Math.floor((father.size + mother.size) / 2);
  var variance = Math.floor(avg / 10);
  var adjustment = Math.floor(Math.random() * variance);
  var direction = (Math.floor(Math.random() * 10) % 2 === 0);
  if (direction) {
    size = avg + adjustment;
  } else {
    size = avg - adjustment;
  }
  return size;
}

function litterSize(mother) {
// determine litterSize
// Here is a code snippet to get you started
  // var litterSize;

  // if (mother.size < 10) {
  //   litterSize = 3;
  // } 
  // else if (mother.size < 26) {
  //   litterSize = 5;
  // }

// etc...
// Remember to add the plus or minus variance!

  return litterSize;
}

function breedDogs(father, mother) {
  // Generate an array of puppies!
  var litter = [];


  return litter;
}

function makePuppy(father, mother, birthOrder) {
  var name, gender, color, fur, size;
  name = dogName(father, mother, 1);
  gender = dogGender();
  color = dogColor(father, mother);
  fur = dogFur(father, mother);
  size = dogSize(father, mother);

  return new Dog(name, gender, color, fur, size);
}