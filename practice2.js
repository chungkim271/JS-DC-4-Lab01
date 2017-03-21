function Card(suit, rank, owner) {
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
	this.score = scoreboard[this.rank]
	this.owner = owner	
}

Card1 = new Card("heart", "ace")

console.log(Card1)