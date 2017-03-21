

// function declare() {
// 	console.log('my name is ' + this.name)
// }

// // function changeName() {
// // 	return 'badass ' + this.name
// // }

// function Person(name) {
// 	this.name = name
// 	this.declare = declare
// 	this.changeName = function() {
// 		return 'badass ' + this.name
// 	}
// 	return this
// }

// chung = new Person('chung')
// chung.declare()
// chung.name = chung.changeName()
// chung.declare()
// chung.name = chung.changeName()
// chung.declare()

// chung.name = chung.changeName()
// chung.declare()
// console.log(chung)

//chung.declareValue

chung = {
	hand: [{'title':'a'}, {'title':'b'}]
}

console.log(chung.hand[0].title)
console.log(chung.hand.map(function(i) {return i.title}))