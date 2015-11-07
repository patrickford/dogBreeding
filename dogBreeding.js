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
  Mixed                   Mixed 70%, 

  Each parent will contribute a color gene based on the above odds
  They will be combined based on the following genetic dominance traits

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
  this.sex = sex;
  this.color = color;
  this.fur = fur;
  this.size = size;
}

// The best approach will be to write helper functions for each property of the puppy

function dogName(father, mother, birthOrder) {
// Combine father, mother, an birth order to generate dog's name
  return name;
}

function dogGender() {
// Odds of male or female are 50 : 50
  return gender;
}

function color(father, mother) {
// Determine the color based on the rules above.
  return color;
}

function selectFur(father, mother) {
// Determine length of fur based on the rules above.
  return fur;
}

function litterSize(mother) {
// determine litterSize
// Here is a code snippet to get you started
  var litterSize;

  if (mother.size < 10) {
    litterSize = 3;
  } 
  else if (mother.size < 26) {
    litterSize = 5;
  }

// etc...
// Remember to add the plus or minus variance!
  return litterSize;
}

function breedDogs(mother, father) {
  // Generate an array of puppies!
  var litter = [];


  return litter;
}
