let a
while (isNaN(a)) {
  a = parseInt(window.prompt("Le nombre de valeur SVP"))
}
let tab = new Array(a)
for (let i = 0; i < a; i++) {
  let b
  while (isNaN(b)) {
    b = parseInt(window.prompt("Une valeur pour la case " + `${i+1}`))
  }
  tab[i]=b
}
document.write(tab)
