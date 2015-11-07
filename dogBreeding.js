function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

function makeDeck() {
  var deck = [];
  var suits = ["Club", "Diamond", "Heart", "Spade"];

  for (var rank = 1; rank < 14; rank++) {
    for (var suit = 0; suit < suits.length; suit++) {
      deck.push(new Card(rank, suits[suit]))
    }
  }
  return deck;
}

function shuffle(cards) {
  var temp;
  var random;
// shuffle the cards into a random order
  for (var i = 0; i < cards.length; i++) {
    temp = cards[i];
    random = Math.floor(Math.random() * cards.length);
    cards[i] = cards[random];
    cards[random] = temp;
  }
  return cards;
}

function dealHand(deck) {
  var hand = [];
  shuffle(deck);
  // hand = two cards from top of deck
  for(var i = 0; i < 2; i++) {
    hand.push(deck.shift());
  }
  return hand;
}

// function dealRound(players, deck) {
//   shuffle(deck);

//   for(var i = 0; i < players.length; i++) {
//     table.push
//   }
//   // order is: player, player, player..., then dealer
//   // console log each card
//   // output = round = { dealer : [card1, card2],
//   //                    players: [[card1, card2], [card1, card2]]}
// }

function scoreHand(hand) {
  var scores = [0];
  for (var card = 0; card < hand.length; card++) {
    if (hand[card].rank >= 2 && hand[card].rank <= 10) {
      for (var score = 0; score < scores.length; score++) {
        scores[score] += hand[card].rank;
      }
    } else {
    if (hand[card].rank >= 11 && hand[card].rank <= 13) {
      for (var score = 0; score < scores.length; score++) { 
        scores[score] += 10;
      } 
    } else {
    if (hand[card].rank === 1) {
      if (scores.length = 1) {
        scores[0] += 11;
        scores.push(scores[0] + 1);
      } else {
        for (var score = 0; score < scores.length; score++) { 
          scores[score] += 1;
        }
      }
    }
  }
}


