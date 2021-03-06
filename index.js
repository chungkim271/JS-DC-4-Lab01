//
// import packages
//

var classTable = require('./Table.js')
var classCard = require('./Card.js')
var classPlayer = require('./Player.js')
var prompt = require('prompt')


// 
// set up cards
//

var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
var ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']

var deck = []
for (i=0; i < suits.length; i++) {
	for (j=0; j < ranks.length; j++) {
		deck.push(new classCard.Card(suits[i], ranks[j]))
	}
}

//
// Index each round
//
roundIndex = 0

function shuffle(deck) {
	// input: list of objects
	// outputs a reordred list of the same objects

	newDeck = []
	num = deck.length

	for (i=0; i <num ; i++) {
		randomIndex = Math.floor(Math.random() * deck.length)
		newDeck.push(deck[randomIndex])
		deck.splice(randomIndex, 1)
	}

	return newDeck

}



// 
// Start the prompt 
// 
prompt.start()
  
// 
// Start the game
//
prompt.get(['player1', 'player2'], setUpPlayers)


function setUpPlayers(err, result) {
    
 	player1 = new classPlayer.Player(result.player1)
 	player2 = new classPlayer.Player(result.player2)

 	shuffledDeck = shuffle(deck)

 	player1.hand = shuffledDeck.splice(0, shuffledDeck.length/2)
 	player2.hand = shuffledDeck

 	table = new classTable.Table(null, null)
    
 	startRound(player1, player2, table)
 
 }


 function startRound(player1, player2, table) {


 	//
 	// set a limit for how long this game can be played 
 	//

 	if (roundIndex > 1000000000) {
 	
 		console.log('This game is going on too long!')
 		console.log("Let's call it a night. Good night!")
 		return
 	
 	} else {

 		//
 		// Because of the randomwalk-ish nature of the game,
 		// it could go on forever and cause "maximum call stack size exceeded" error
 		// To prevent it, I call setTimeout every 1000th round 
 		//

 		thousandth = !(roundIndex % 1000)
 		
		console.log(' ')
 		console.log('Round ' + roundIndex++)

	 	if (player1.hand.length==0) {

	 		console.log("The game is over!")
	 		console.log(player2.name + ' is the winner!')

	 	} else if (player2.hand.length==0) {

	 		console.log("The game is over!")
	 		console.log(player1.name + ' is the winner!')

	 	} else {

		 	card1 = player1.draw()
		 	console.log(player1.name + ' draws a ' + card1.title)
		 	card2 = player2.draw()
		 	console.log(player2.name + ' draws a ' + card2.title)

		 	table.cardsOnTheTable = table.cardsOnTheTable.concat([card1, card2])
		 	
		 	if (thousandth) {
 			
 				setTimeout( function() {compareCards(card1, card2, table)}, 0)
		 	
		 	} else {
		 	
		 		compareCards(card1, card2, table)
		 	
		 	}
	
		}
	
	}
 }



 function compareCards(card1, card2, table) {

 	cardsTitles = table.cardsOnTheTable.map(function(x) {return x.title}).join(', ')

 	if (card1.score > card2.score) {

 		card1.owner.hand = card1.owner.hand.concat(table.cardsOnTheTable)
 		table.cardsOnTheTable = []

 		console.log(card1.owner.name + ' wins!')
 		console.log(card1.owner.name + ' takes ' + cardsTitles)
 		console.log(' ')
 		console.log('Now ' + card1.owner.name + ' has ' +
 			card1.owner.hand.map(function(x) {return x.title}).join(', '))
 		console.log(card1.owner.name + ' has ' + card1.owner.hand.length + ' cards')
 		console.log(' ')
 		console.log('Now ' + card2.owner.name + ' has ' +
 			card2.owner.hand.map(function(x) {return x.title}).join(', '))
 		console.log(card2.owner.name + ' has ' + card2.owner.hand.length + ' cards')

 	} else if (card1.score < card2.score) { 

 		card2.owner.hand = card2.owner.hand.concat(table.cardsOnTheTable)
 		table.cardsOnTheTable = []

 		console.log(card2.owner.name + ' wins!')
 		console.log(card2.owner.name + ' takes ' + cardsTitles)
 		console.log(' ')
 		console.log('Now ' + card1.owner.name + ' has ' +
 			card1.owner.hand.map(function(x) {return x.title}).join(', '))
 		console.log(card1.owner.name + ' has ' + card1.owner.hand.length + ' cards')
 		console.log(' ')
 		console.log('Now ' + card2.owner.name + ' has ' +
 			card2.owner.hand.map(function(x) {return x.title}).join(', '))
 		console.log(card2.owner.name + ' has ' + card2.owner.hand.length + ' cards')

 	} else {
 	
 		console.log(card1.title + ' and ' + card2.title + ' have the same score')
 		console.log('This is war!')
 
 	}

 	startRound(card1.owner, card2.owner, table)
 
 }
 