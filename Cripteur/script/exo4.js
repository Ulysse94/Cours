document.write('<h2>Exercice 4</h2>')
let nb = parseInt(window.prompt("Saisissez un nombre")), i = 0
if (isNaN(nb)) {
number = window.prompt("ERREUR")
}
while (i<=10) {
  document.write(i + " X " + nb + " = " + i*nb + "</br>")
  i++
}
