var Deck = require('./Deck')
var Card = require('./Card')

module.exports = function Game ( firstPlayer, secondPlayer ) {

  this.play = function() {

    var gameDeck = new Deck

    firstPlayer.hand = gameDeck.dealHand()
    secondPlayer.hand = gameDeck.dealHand()

    var noOneHasWonYet = true
    while ( noOneHasWonYet ) {

      firstPlayer.drawCard()
      secondPlayer.drawCard()

      console.log( 'First Player: ', firstPlayer.showCurrentCardTitle() )
      console.log( 'Second Player: ', secondPlayer.showCurrentCardTitle() )

      if ( firstPlayer.showCurrentCardScore() === secondPlayer.showCurrentCardScore() ) {

        console.log( 'War!!' )

        var war = true
        while ( war ) {

          firstPlayer.drawCard()
          secondPlayer.drawCard()

          console.log( 'First Player: ', firstPlayer.showCurrentCardTitle() )
          console.log( 'Second Player: ', secondPlayer.showCurrentCardTitle() )

          if ( firstPlayer.showCurrentCardScore() === secondPlayer.showCurrentCardScore() ) {

            console.log('War again!!')

          } else if ( firstPlayer.showCurrentCardScore() > secondPlayer.showCurrentCardScore() ) {

            console.log('First player wins this round!')
            firstPlayer.collectWinnings( secondPlayer )
            war = false

          } else {

            console.log('Second player wins this round!')
            secondPlayer.collectWinnings( firstPlayer )
            war = false

          }

        }

      } else if ( firstPlayer.showCurrentCardScore() > secondPlayer.showCurrentCardScore() ) {

        console.log('First player wins this round!')
        firstPlayer.collectWinnings( secondPlayer )

      } else {

        console.log('Second player wins this round!')
        secondPlayer.collectWinnings( firstPlayer )

      }

      console.log( 'First Player has ' + firstPlayer.showHandLength() + ' cards' )
      console.log( 'Second Player has ' + secondPlayer.showHandLength() + ' cards' )
      console.log( 'cards: ', firstPlayer.hand.length + secondPlayer.hand.length )
      console.log( '-----------------------------' )
   
      if ( firstPlayer.showHandLength() === 0 ) {

        console.log( 'Second Player has won!' )
        noOneHasWonYet = false

      } else if ( secondPlayer.showHandLength() === 0 ) {

        console.log( 'First Player has won!' )
        noOneHasWonYet = false

      }

    }

  }
}
