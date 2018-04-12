let title = document.getElementById('title')
title.innerHTML = "Nouveau titre en js"
title.style.backgroundColor = "#FF9900"
title.style.color = "#FFFFFF"

/*Random Color Start*/
let paragraphe = document.querySelectorAll("p")
for (let i = 0; i < paragraphe.length; i++) {
  paragraphe[i].style.color = generateColor()
}
function generateColor() {
  let color = '#', hexa = '0123456789ABCDEF'
  for (let i = 0; i < 6; i++) {
    let pos = Math.floor(Math.random()*hexa.length)
    color += hexa.charAt(pos)
  }
  return color
}
let colorButton = document.querySelector(".primaryButton")
colorButton.addEventListener(
  'click',
  function()
  {
    title.style.backgroundColor = generateColor()
    title.style.color = generateColor()
  }
)
/*Random Color End*/


let carre = document.getElementsByClassName('carre')
for (let i = 0; i < carre.length; i++) {
  carre[i].style.backgroundColor = generateColor()
  carre[i].addEventListener(
    'click',
    function(){
      carre[i].style.visibility = "hidden"
    }
  )
}
