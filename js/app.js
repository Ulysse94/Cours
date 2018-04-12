const ciseauxChoice = document.querySelector('.ciseaux')
const papierChoice = document.querySelector('.papier')
const pierreChoice = document.querySelector('.pierre')
const botImage = document.querySelector('.botImage')
const compteur = document.querySelector('.compteur')
let victoire = 0
let defaite = 0
let egalite = 0

ciseauxChoice.addEventListener(
  "click",
  function(){
    papierChoice.style.opacity= ".5";
    pierreChoice.style.opacity= ".5";
    ciseauxChoice.style.opacity= "";
    let botReponse = Math.floor(Math.random() * 3)
    if (botReponse == 0) {
      botImage.src= "images/ciseaux.jpg"
      compteur.innerHTML = 'Egalité'
    }
    else if (botReponse == 1) {
      botImage.src = "images/pierre.jpg"
      compteur.innerHTML = 'Défaite'
    }
    else {
      botImage.src = "images/papier.jpg"
      compteur.innerHTML = 'Victoire'
    }
  })

papierChoice.addEventListener(
  "click",
  function(){
    papierChoice.style.opacity= "";
    ciseauxChoice.style.opacity= ".5";
    pierreChoice.style.opacity= ".5";
    let botReponse = Math.floor(Math.random() * 3)
    if (botReponse == 0) {
      botImage.src = "images/papier.jpg"
      compteur.innerHTML = 'Egalité'
    }
    else if (botReponse == 1) {
      botImage.src= "images/ciseaux.jpg"
      compteur.innerHTML = 'Défaite'
    }
    else {
      botImage.src = "images/pierre.jpg"
      compteur.innerHTML = 'Victoire'
    }
  })

pierreChoice.addEventListener(
  "click",
  function(){
    pierreChoice.style.opacity= "";
    papierChoice.style.opacity= ".5";
    ciseauxChoice.style.opacity= ".5";
    let botReponse = Math.floor(Math.random() * 3)
    if (botReponse == 0) {
      botImage.src = "images/pierre.jpg"
      compteur.innerHTML = 'Egalité'
    }
    else if (botReponse == 1) {
      botImage.src = "images/papier.jpg"
      compteur.innerHTML = 'Défaite'
    }
    else {
      botImage.src= "images/ciseaux.jpg"
      compteur.innerHTML = 'Victoire'
    }
  })
