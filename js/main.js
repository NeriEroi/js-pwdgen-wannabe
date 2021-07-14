// what's your name?

var yourName

yourName = prompt("Potresti dirmi qual è il tuo nome?")

console.log(yourName)


// what's your surname?

var yourSurname

yourSurname = prompt("Potresti dirmi qual è il tuo cognome?")

console.log(yourSurname)


// what's your favourite color?

var yourColor

yourColor = prompt("Potresti dirmi qual è il tuo colore preferito?")

console.log(yourColor)


// What's your age?

var yourAge

yourAge = prompt("Potresti dirmi qual è la tua età?")

console.log(yourAge)


// all four info togheter

document.getElementById("allfourinfo").innerHTML=(yourName + yourSurname + yourColor + yourAge);

