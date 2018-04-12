document.write('<h2>Exercice 2</h2>')
let number = parseInt(window.prompt('saisissez un nombre'))
do{
  if (number < 100){
  number =  window.prompt("Plus grand !")
  }
  else if (number > 200){
  number =  window.prompt("Plus petit !")
  }
  else {
  number = window.prompt("ERREUR")
  }
}while (isNaN(number) || (number < 100 || number > 200))
document.write("C'est bon !")
