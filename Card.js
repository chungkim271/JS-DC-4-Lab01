// Constructor for Card Objects

function Card(suit, rank, owner) {
	// suit: string; rank: string; owner: Player object
	scoreMapping = {
		'Ace' : 1, 
		'Two': 2, 
		'Three' : 3,
		'Four' : 4, 
		'Five' : 5, 
		'Six' : 6, 
		'Seven' : 7, 
		'Eight' : 8, 
		'Nine' : 9, 
		'Ten' : 10, 
		'Jack' : 11, 
		'Queen' : 12, 
		'King' : 13
	}

	this.suit = suit
	this.rank = rank
	this.title = rank + ' of ' + suit 
	this.score = scoreMapping[this.rank]
	this.owner = owner || null
}

module.exports.Card = Card