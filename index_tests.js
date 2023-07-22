var expect = chai.expect;

describe(`#dealDeck`,()=>{
  it(`#Should deal 26 cards to each player`,()=>{
   function dealDeck() {
      war.player1.hand = this.deck.splice(0,26);
      war.player2.hand = this.deck.splice(0,26);
    }
    expect(war.player1.hand && war.player2.hand).to.have.lengthOf(26);
  })
})


