let abc ="abcdefghijklmnopqrstuvwxyz"
let result = ""
let phrase = window.prompt("Entrer une phrase")
phrase = phrase.toLowerCase();
let decal
do {
decal = parseInt(window.prompt("Entrer une clé de décalage"))
} while (isNaN(decal));
for (let i = 0; i < phrase.length; i++) {
  let lettre = phrase.charAt(i)
  let index = abc.lastIndexOf(lettre)
  if (index == -1) {
    result += lettre
  }
  else {
    let newPosition = (index + decal)%26
    result += abc.charAt(newPosition)
  }
}
document.write(result)
