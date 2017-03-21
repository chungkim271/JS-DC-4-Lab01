module.exports = function Player( name ) {

  this.username = name
  this.hand = []
  this.showHandLength = function() {
    return this.hand.length
  }
  this.currentCards = []

  this.showCurrentCard = function() {
    return this.currentCards[ this.currentCards.length - 1 ]
  }

  this.showCurrentCardScore = function() {
    var currentCard = this.showCurrentCard()
    return currentCard.score
  }

  this.showCurrentCardTitle = function() {
    var currentCard = this.showCurrentCard()
    return currentCard.title
  }

  this.drawCard = function() {
    var card = this.hand.shift()
    this.currentCards.push( card )
  }

  this.collectWinnings = function( otherPlayer ) {

    this.hand = this.hand.concat( this.currentCards, otherPlayer.currentCards )
    this.currentCards = []
    otherPlayer.currentCards = []

  }

}
