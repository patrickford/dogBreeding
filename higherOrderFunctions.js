/* Prepared by Patrick Ford
/* For Student Mentor Group Session

/* Dog Breeding
---------------
For this toy problem you will breed dogs by combining two dogs 
and generating puppies.

The puppies will be subject to the following rules:

Name:
  name = father's name + mother's name + order of birth in litter
  example: father: 'A' and mother: 'B' have 3 puppies:
  [A-B-1], [A-B-2], and [A-B-3]

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
  Parent Color    Genetic Odds
  ------------------------------------
  Mixed           Mixed 70%, Black 10%, White 10%, Brown 10%,
  Black           Mixed 10%, Black 60%, White 10%, Brown 20%
  Brown           Mixed 15%, Black 10%, White 5%,  Brown 70%
  White           Mixed 10%, Black 10%, White 60%, Brown 20%

  Each parent will contribute a color gene based on the above odds
  They will be combined based on the following genetic dominance traits:
  if father.color = 'black' then there is a 60% chance his colorContribution will be black

  Each parent contributes a color gene
  if colors are the same, puppies are the same color
  if colors are different the order of dominance is: Mixed, Black, Brown, White

Fur:
  Dogs can have long or short fur with long fur being dominant.
  If both father and mother have the same length fur so will the puppies.
  If one has long and one has short, puppy will have long fur
  Except for genetic mutations which happen 10% of the time where fur will be random.

Size of dog
 Puppies will grow to the average size of their father and mother, plus or minus 20%

*/

// Here is a constructor function to create dog objects. 
// Use it to create a few parent dogs to start, then use it in your breeding program
// to generate each puppy

function Dog(name, gender, color, fur, size) {
  this.name   = name;
  this.gender = gender;
  this.color  = color;
  this.fur    = fur;
  this.size   = size;
}

// Some starter dogs
var dogA = new Dog('A', 'male',   'black', 'short', 35);
var dogB = new Dog('B', 'female', 'white', 'long',  55);
var dogC = new Dog('C', 'male',   'brown', 'short', 78);
var dogD = new Dog('D', 'female', 'mixed', 'long',  9);
var dogE = new Dog('E', 'male',   'white', 'short', 25);
var dogF = new Dog('F', 'female', 'white', 'short', 40);
var dogG = new Dog('G', 'male',   'brown', 'long',  90);
var dogH = new Dog('H', 'female', 'mixed', 'short', 15);


function randomBoolean(percentage) {
  if (percentage === undefined) {
    return Math.random() < 0.5;
  } else {
    return Math.random() < percentage / 100;
  }
}

// The best approach will be to write helper functions for each property of the puppy

function dogName(father, mother, birthOrder) {
// Combine father, mother, an birth order to generate dog's name
  var name = '[' + father.name + '-' + mother.name + '-' + birthOrder + ']';
  return name;
}

function dogGender() {
// Odds of male or female are 50 : 50
  var gender = randomBoolean() ? 'male' : 'female';
  return gender;
}

function dogColor(father, mother) {
  var colors = ['mixed', 'black', 'brown', 'white'];

  function dogColorGene(dog) {
    var colorGenes = {
      mixed : [70, 10, 10, 10],   
      black : [ 5, 80, 10,  5],
      brown : [15, 10, 70,  5],
      white : [ 5,  5, 10, 80]
    }
    var probability = colorGenes[dog.color];
    var accumulator = 0;
    var random = Math.ceil(Math.random() * 100);

    for (var i = 0; i < probability.length; i++) {
      accumulator += probability[i];
      if (random <= accumulator) {
        return colors[i];
      }
    }
  }

// Determine the color based on the rules above.
  var fatherGene = colors.indexOf(dogColorGene(father));
  var motherGene = colors.indexOf(dogColorGene(mother));

  return (motherGene < fatherGene) ? colors[motherGene] : colors[fatherGene];
}

function dogFur(father, mother) {
// Determine length of fur based on the rules above.
  var fur;
  fur = father.fur === mother.fur ? father.fur : 'long';

  if (randomBoolean(10)) {
    fur = randomBoolean() ? 'long' : 'short';
  }
  return fur;
}

function dogSize(father, mother) {
  var size;
  var avg = Math.floor((father.size + mother.size) / 2);
  var variance = Math.floor(avg * 0.2);
  var adjustment = Math.ceil(Math.random() * variance);
  size = randomBoolean() ? avg + adjustment : avg - adjustment
  return size;
}

function litterSize(mother) {
  var puppies;
  var variance;

  if (mother.size < 10) {
    puppies = 3;
    variance = 1;
  } 
  else if (mother.size >= 10 && mother.size <= 25) {
    puppies = 5;
    variance = 1;
  }
  else if (mother.size >= 26 && mother.size <= 50) {
    puppies = 7;
    variance = 2; 
  }
  else if (mother.size > 50) {
    puppies = 9;
    variance = 2;
  }

  var adjustment = Math.floor(Math.random() * variance);
  puppies += randomBoolean() ? adjustment : -adjustment;
  return puppies;
}

function makePuppy(father, mother, birthOrder) {

  var name    = dogName(father, mother, birthOrder);
  var gender  = dogGender();
  var color   = dogColor(father, mother);
  var fur     = dogFur(father, mother);
  var size    = dogSize(father, mother);

  return new Dog(name, gender, color, fur, size);
}

function breedDogs(father, mother) {
  if (father.gender === mother.gender) {
    return 'Dogs must be opposite sex to breed.';
  } 
  // Generate an array of puppy objects!
  var litter = [];
  for (var i = 1; i <= litterSize(mother); i++) {
    litter.push(makePuppy(father, mother, i));
  }
  return litter;
}


/* Breeding program to create very large dogs
   
   Use our previously created higher order functions such as 'filter' where appropriate.

   Exercise 1: Starting with any two dogs, determine how many generations it takes to
               create a dog weighing more than 100 lbs.
*/

function getLargestDog(litter) {
  var largestDog;
  var highestDogWeight = 0;
  each(litter, function(element) {
    if (element.size > highestDogWeight) {
      highestDogWeight = element.size;
      largestDog = element;
    }
  });
  return largestDog;
}

function fatDogs(father, mother, goal) {
  goal = goal ? goal : 100;
  var generation = 0;
  var litter = [];
  var males = [];
  var females = [];
  var largest;

  var fattest = father.size > mother.size ? father.size : mother.size;

  while (fattest < goal) {
    // Breed a new litter and increment generation counter
    litter = breedDogs(father, mother);
    generation++;

    // If the litter contains males use the largest if he is bigger than the current father
    if (some(litter, function(element) { return element.gender === 'male'; })) {
      males = filter(litter, function(element) {
        return element.gender === 'male';
      });
      largest = getLargestDog(males);
      father = largest > father ? largest : father;
    }

    // If the litter contains females use the largest if she is bigger than the current mother
    if (some(litter, function(element) { return element.gender === 'female'; })) {
      females = filter(litter, function(element) {
        return element.gender === 'female';
      }); 
      largest = getLargestDog(females);
      mother = largest > mother ? mother : father;
    }

    fattest = father.size > mother.size ? father.size : mother.size;
  }

  console.log('Generations: ' + generation + '  Weight: ' + fattest);
  return litter;
}


function pureColorDogs(father, mother, pureColor) {
  var generation = 0;
  var litter = [];
  var males = [];  
  var females = [];
  var allSameColor = false;

  var colorOrder = {
    white : ['white', 'black', 'mixed', 'brown'],
    black : ['black', 'brown', 'mixed', 'white'],
    brown : ['brown', 'mixed', 'black', 'white'],
    mixed : ['mixed', 'brown', 'white', 'black']
  }

  preferredColor = colorOrder[pureColor];

  while (!allSameColor) {
    // Breed a new litter and increment generation counter
    litter = breedDogs(father, mother);
    generation++; 

    // If the litter contains males use the one with the best color genes if better than the current father
    if (some(litter, function(element) { return element.gender === 'male'; })) {
      males = filter(litter, function(element) {
        return element.gender === 'male';
      });

      for (var dogs = 0; dogs < males.length; dogs++) {
        if (preferredColor.indexOf(males[dogs].color) < preferredColor.indexOf(father.color)) {
          father = males[dogs];
        }
      }
    }

    // If the litter contains females use the one with the best color genes if better than the current mother
    if (some(litter, function(element) { return element.gender === 'female'; })) {
      females = filter(litter, function(element) {
        return element.gender === 'female';
      });

      for (var dogs = 0; dogs < females.length; dogs++) {
        if (preferredColor.indexOf(females[dogs].color) < preferredColor.indexOf(mother.color)) {
          mother = females[dogs];
        }
      }
    }

    allSameColor = every(litter, function(element) {
      return element.color === pureColor;
    });
  }

  console.log('Generations: ' + generation);
  return litter;
}