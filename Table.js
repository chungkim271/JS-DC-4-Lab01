function Table(index, cardsOnTheTable, players) {
	// roundIndex: number; cardsPlayed: list of objects 

	// table object is created to keep track of rounds and 
	// cards on the table in case of a tie

	this.round = index || null 
	this.cardsOnTheTable = cardsOnTheTable || []
	
	return this 
}

module.exports.Table = Table