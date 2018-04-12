/*
console.log("Hello World");
let a = 1
console.log(a);
let b = 2, c = 3, d
d = b + c
console.log(d);
let e = "1", f =2, g
g = e + f
console.log(g);
*/
/*
let firstname = window.prompt("Votre Prénom?")
let lastname = window.prompt("Votre Nom?")
document.write('<h2> Bienvenue ' + firstname + ' ' + lastname + ' <h2>')

let age = parseInt(window.prompt("Votre Âge?"))
if (isNaN(age) == true) {
  console.log("Réecrire l'âge")
}
else if (age >= 18) {
  console.log("Bienvenue sur le site")
}
else {
  let year = 18 - age
  console.log("Vous n'avez pas l'âge requis, il vous manque ${year} années")
}

let major = window.confirm("Êtes-vous majeur?")
if (major == true) {console.log("Bienvenue sur le site")}
else {console.log("Vous n'avez pas l'âge requis")}


let a = window.prompt("Un nombre SVP")
if (isNaN(a) == true) {
  console.log("Réecrire le nombre")
}
else if (a > 0) {
  console.log("Le nombre est positif")
}
else {
  console.log("Le nombre est negatif")
}


let a = window.prompt("Un nombre SVP"), b = window.prompt("Un autre nombre SVP")
if (isNaN(a)) {
  console.log("Réecrire le nombre")
}
else if (isNaN(b)) {
  console.log("Réecrire l'autre nombre")
}
if (a<0 ^ b<0) {
  console.log("Produit négatif")
}
else {
  console.log("Produit positif")
}

let a = parseInt(window.prompt("Quel est votre âge?"))
let classe
if (isNaN(a) == true || a<0) {
  classe = "Réecrire l'âge'"
}
else if (a<=3) {
  classe = "Bébé"
}
else if (a<=12) {
  classe = "Enfant"
}
else if (a<=18) {
  classe = "Ado"
}
else if (a<=25) {
  classe = "Etudiant"
}
else if (a<=75) {
  classe = "Actif"
}
else {
  classe = "Retraité"
}
console.log(classe)

document.write('<h2>' + "Exercice 5" + '</h2>')

let a = window.prompt("Un nombre SVP"),
  b = window.prompt("Un autre nombre SVP"),
  c = window.prompt("Un dernier nombre SVP"),
  d, e, f
nb1 = parseInt(a)
nb2 = parseInt(b)
nb3 = parseInt(c)
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  document.write("Réecrire le nombre")
} else if ((nb1 <= nb2) && (nb2 <= nb3)) {
  d = a, e = b, f = c
} else if ((nb1 <= nb3) && (nb3 <= nb2)) {
  d = a, e = c, f = b
} else if ((nb2 <= nb1) && (nb1 <= nb3)) {
  d = b, e = a, f = c
} else if ((nb2 <= nb3) && (nb3 <= nb1)) {
  d = b, e = c, f = a
} else if ((nb3 <= nb1) && (nb1 <= nb2)) {
  d = c, e = a, f = b
} else if ((nb3 <= nb2) && (nb2 <= nb1)) {
  d = c, e = b, f = a
}
document.write('<h3>' + d + ' | ' + e + ' | ' + f + ' <h3>')


document.write('<h2>' + "Exercice 6" + '</h2>')

let y = parseInt(window.prompt("Vos nombres de voix")),
  z = parseInt(window.prompt("Total du nombres de voix des concurants"))
x = y + z /* Voix Totale
w = (y / x) * 100
let g = "Vous êtes élu(e) d'office!!",
  p = "Vous n'êtes pas élu(e) d'office, ballotage",
  q = "Pourcentage vos Voix:",
  t = "%",
  ff = "favorable",
  dd = "dé"
document.write('<h3>' + q + " " + auMillieme(w) + t + '</h3>')
if (isNaN(y) || isNaN(z)) {
  console.log("Réecrire le nombre de voix")
} else if (w > 50) {
  document.write('<h3>' + g + '</h3>')
} else if (w > 10) {
  document.write('<h3>' + p + " " + ff + '</h3>')
} else {
  document.write('<h3>' + p + " " + dd + ff + '</h3>')
}

function auMillieme(w) {
  return Math.round(100 * w) / 100;
}

document.write('<h2>' + "Correction Exercice 6" + '</h2>')

let score, score1, score2
do {
  score=parseInt(window.prompt("Renseigner votre score",25))
}while (isNaN()score)
do {
  score=parseInt(window.prompt("Renseigner le score du concurant 1"))
}while (isNaN()score1)
do {
  score=parseInt(window.prompt("Renseigner le score du concurant 2",))
}while (isNaN()score2)
if (score>50) {
  document.write("Vous êtes élu(e) d'office!!")
} else if (score<10 || score1>50 || score2>50) {
  document.write("Vous n'êtes pas élu(e) d'office, ballotage défavorable")
}
else if (score<score1 || score<score2) {
  document.write("Vous n'êtes pas élu(e)")
}
else {
  document.write("Vous n'êtes pas élu(e) d'office, ballotage favorable")
}


let nombre=parseInt(window.prompt('Tape un nombre compris entre 1 et 5'))
if {

}
while(nombre<1 || nombre>5 || isNaN()nombre)
{
  if(isNaN(nombre))
  {
  window.prompt('Pas bon...')
  }
}
document.write(`<h1>Merci d'avoir tapé ` + `${nombre}</h1>`)
*/
/*
let number = parseInt(window.prompt('saisissez un nombre'))
do{
  if (number < 100){
  number =  window.prompt("Plus grand !")
  }
  else if (number > 200){
  number =  window.prompt("Plus petit !")
  }
  else if (isNaN(number)) {
  number = window.prompt("ERREUR")
  }
}while (isNaN(number) || (number < 100 || number > 200))
document.write("bien joué !")
*/

let nombre = parseInt(window.prompt)
