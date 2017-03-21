var Card = require('./Card')

function Deck() {

  function createDeck() {
    var suits = ['hearts', 'clubs', 'spades', 'diamonds']
    var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

    var cards = []
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        cards.push( new Card( suits[i], ranks[j] ) )
      }
    }

    return cards

  }

  this.cards = createDeck()

  this.dealHand = function ( handLength ) {
    var handLength = handLength || 26 // 52 divided by 2

    var handToReturn = []
    for (var i = 0; i < handLength; i++) {
      var card = this.cards.splice( Math.random() * this.cards.length, 1 )[0]

      handToReturn.push( card )
    }

    return handToReturn
  }

}

module.exports = Deck
