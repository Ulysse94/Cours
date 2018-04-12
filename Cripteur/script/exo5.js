document.write('<h2>Exercice 5</h2>')
let nbre = parseInt(window.prompt("Quel est le nombre à traduire?"))
let tab_binaire = [128, 64, 32, 16, 8, 4, 2, 1]
let tab_vals = [8]
for (let i = 0; i < 8; i++) {
  if ((nbre-tab_binaire[i])>=0) {
    tab_vals[i] = 1
    nbre=nbre-tab_binaire[i]
  }
  else {
    tab_vals[i] = 0
  }
  document.write(`${tab_vals[i]}`)
}
