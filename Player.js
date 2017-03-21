function Player(name, hand) {
	// name: string; hand: list of card objects 

	this.name = name
	this.hand = hand || []

	this.draw = function() {
		// outputs first card object from this.hand 
		// couple useful side effects
		// side effect 1: pass this object for the value of card's owner property 
		// side effect 2: delete the above card from this.hand

		card = this.hand[0]
		card.owner = this
		this.hand.splice(0,1)
		card.owner.hand = this.hand

		return(card)	

	} 

	return this 
}

module.exports.Player = Player