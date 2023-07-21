//Create the game of war
//Create a deck that is shuffled and give half of each deck to two players
//have the two players compare cards and whoever has the highest gets a point
//whoever has the most points at the end of the game wins 


//create a make deck function that takes all the cards, makes a deck, and then shuffles them
// makeDeck() {
//   for (let x = 0; x < values.length; x++){
//     for (let suit of suits) {
//       let card = new Card(suit, x +1, values[x]);
//       this.cards.push(card);
//     }
//   }
// }

//create a function that deals the shuffled deck to the 2 players


  // dealDeck() {
  //   this.player1.hand = this.deck.splice(0,26);
  //   this.player2.hand = this.deck.splice(0,26);
  // }



//---------------------------------------------------\\
//create suits and values for the cards using arrays
let deck = [];
const suits = ['Hearts','Diamonds','Clubs','Spades'];
const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

let player1TotalPoints = 0;
let player2TotalPoints = 0;

//create a card class to actually form the cards in the decks

class Card {
  constructor(suit,value,face){
    this.suit = suit;
    this.value = value;
    this.face = face;
  }
}



//create a player class that has what number they are and create a 'hand' for each individual player

class Player {
  constructor(num){
    this.name = `Player ${num}`;
    this.hand = [];
    this.point = 0;
  }
}





//create a game class that creates the deck, shuffles the deck, distributes the deck, and starts the game of war and also has the function to end it


class Game {
  constructor(cards) {
    this.deck = [];
    this.makeDeck();
    this.round = 0;
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.dealDeck();
    this.startGame();
    this.endGame();
  }

  makeDeck() {
    for (let x = 0; x < values.length; x++){
      for (let suit of suits) {
        let card = new Card(suit, x +1, values[x]);
        this.deck.push(card);
      }

      for (var i = this.deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
      }
    }
  }

  dealDeck() {
      this.player1.hand = this.deck.splice(0,26);
      this.player2.hand = this.deck.splice(0,26);
    }


//create a function that starts the game and iterates through the 2 arrays to discern who has the higher valued card

//if one of the players has a higher card than the other give that player a point, if it is a draw give zero points.

  startGame() {
    for (let i = 0; i < this.player1.hand.length && this.player2.hand.length; i++){
      let roundCounter = this.round += 1;
      console.log(`ROUND ${roundCounter}.... WAR!`);
      console.log(`Player 1 has played ${this.player1.hand[i].value} of ${this.player1.hand[i].suit}`);
      console.log(`Player 2 has played ${this.player2.hand[i].value} of ${this.player2.hand[i].suit}`);
    if (this.player1.hand[i].value > this.player2.hand[i].value) {
      console.log(`Player 1 has won the round`);
      let player1Total = this.player1.point += 1;
      console.log(`Player 1's total points are now ${player1Total}`);
      
    } else if (this.player1.hand[i].value < this.player2.hand[i].value) {
      console.log(`Player 2 won the round`);
      let player2Total =this.player2.point += 1;
      console.log(`Player 2's points are now ${player2Total}`);
      
    } else {
      console.log(`Seems there was a tie... no points allocated to either`)
    }
    
    }
  }

  //create an end of the game function that adds up all of the points and declares who is the winner. showing the scoreboard and announcing the winner as well.

  endGame() {
    if (this.player1.point > this.player2.point){
      console.log(`PLAYER 1 WINS WITH ${this.player1.point} POINTS ! Sadly Player 2 only had ${this.player2.point}`);
    } else if (this.player1.point < this.player2.point){
      console.log(`PLAYER 2 WINS WITH ${this.player2.point} POINTS ! Sadly Player 1 only had ${this.player1.point}`)
    } else {
      console.log(`ITS A DRAW 😲 Both ended with same number of points !`);
    }
  }
}

let war = new Game();


