document.write('<h2>Exercice 3</h2>')
let tab_valeur=[ 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let tab_rendue=[0]
let montant = parseFloat(window.prompt("Quel est le montant?"))
for (let i = 0; i < tab_valeur.length; i++) {
  rest=montant%tab_valeur[i]
  tab_rendue[i]=(montant-rest)/tab_valeur[i]
  montant = rest
  if (tab_valeur[i] > 4 ) {
    document.write(`La montant a donner est de ${tab_rendue[i]} billet(s) de ${tab_valeur[i]} € </br>`)
  }
  else if (tab_valeur[i] >= 1 ){
    document.write(`La montant a donner est de ${tab_rendue[i]} pièce(s) de ${tab_valeur[i]} € </br>`)
  }
  else {
    document.write(`La montant a donner est de ${tab_rendue[i]} pièce(s) de ${tab_valeur[i]*100} centimes </br>`)
  }
}
