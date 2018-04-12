let a
while (isNaN(a)) {
  a = parseInt(window.prompt("Le nombre de valeur SVP"))
}
let tab = new Array(a)
for (let i = 0; i < a; i++) {
  let b
  while (isNaN(b)) {
    b = parseInt(window.prompt("Une valeur pour la case " + `${i+1}` + " du tableau 1"))
  }
  tab[i]=b
}
document.write(tab + `</br>`)

let c = a
let tab1 = new Array(c)
for (let i = 0; i < c; i++) {
  let d
  while (isNaN(d)) {
    d = parseInt(window.prompt("Une valeur pour la case " + `${i+1}` + " du tableau 2"))
  }
  tab1[i]=d
}
document.write(tab1 + `</br>`)

let e = a
let tab3 = new Array(e)
for (let i = 0; i < e; i++) {
  tab3[i]=tab[i]+tab1[i]
}
document.write(tab3)
