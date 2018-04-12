document.write('<h2>Exercice 1</h2>')
let nombre
do
{
  nombre=parseInt(window.prompt('Tape un nombre compris entre 1 et 5'))
  if(isNaN(nombre))
  {
  window.alert("C'est pas ce que je t'ai demandé...")
  }
}
while(nombre<1 || nombre>5 || isNaN(nombre))
document.write(`Merci d'avoir tapé ${nombre}`)
