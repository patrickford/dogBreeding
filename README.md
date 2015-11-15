Dog Breeding
============

Let's Make Some Puppies!
------------------------

This repo contains a javascript file that breeds dogs based on the following rules:

Name:
-----
  name = father's name + mother's name + order of birth in litter
  example: father: 'A' and mother: 'B' have 3 puppies:
  [A-B-1], [A-B-2], and [A-B-3]

Gender: 
-------
  Odds of generating a male or female is 50%

Litter Size:
------------
  Smaller dogs have smaller litters than big dogs. Here is our rule:

  Size of Mother   Average Litter

  - < 10 lbs        3 puppies with 10% chance of plus or minus 1
  - 10 to 25 lbs    5 puppies with 10% chance of + or - 1
  - 26 to 50 lbs    7 puppies with 10% chance of + or - 2
  - 51 to 90 lbs    9 puppies with 10% chance of + or - 2

Color:
------
  Parent Color    Genetic Odds

  - Mixed           Mixed 70%, Black 10%, White 10%, Brown 10%,
  - Black           Mixed 10%, Black 60%, White 10%, Brown 20%
  - Brown           Mixed 15%, Black 10%, White 5%,  Brown 70%
  - White           Mixed 10%, Black 10%, White 60%, Brown 20%

  Each parent will contribute a color gene based on the above odds
  They will be combined based on the following genetic dominance traits:
  if father.color = 'black' then there is a 60% chance his colorContribution will be black

  Each parent contributes a color gene
  if colors are the same, puppies are the same color
  if colors are different the order of dominance is: Mixed, Black, Brown, White

Fur:
----
  Dogs can have long or short fur with long fur being dominant.
  If both father and mother have the same length fur so will the puppies.
  If one has long and one has short, puppy will have long fur
  Except for genetic mutations which happen 10% of the time where fur will be random.

Size of dog:
------------
 Puppies will grow to the average size of their father and mother, plus or minus 20%


For developer access to the code:
---------------------------------
- fork this repo to your github account
- clone the repo from your account to your local pc
- create a new branch for your code changes: git checkout -b yourbranch
- commit and push your changes: git push origin yourbranch
- issue a pull request on github for your branch back to this repo