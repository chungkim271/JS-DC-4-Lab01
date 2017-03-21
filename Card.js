// Constructor for Card Objects

function Card(suit, rank, owner) {
	// suit: string; rank: string; owner: Player object
	scoreMapping = {
		'ace' : 1, 
		'two': 2, 
		'three' : 3,
		'four' : 4, 
		'five' : 5, 
		'six' : 6, 
		'seven' : 7, 
		'eight' : 8, 
		'nine' : 9, 
		'ten' : 10, 
		'jack' : 11, 
		'queen' : 12, 
		'king' : 13
	}

	this.suit = suit
	this.rank = rank
	this.title = rank + ' of ' + suit 
	this.score = scoreMapping[this.rank]
	this.owner = owner || null
}

module.exports.Card = Card