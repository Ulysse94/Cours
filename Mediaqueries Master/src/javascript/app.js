let burger = document.querySelector(".hamburger"), header = document.querySelector(".header__nav")
burger.addEventListener(
  'click',
  function(){
    burger.classList.toggle("is-active")
    header.classList.toggle("is-active")
  }
)
