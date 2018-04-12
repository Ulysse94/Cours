let questions = document.querySelectorAll("article h2")
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener(
    'click',
    function(){
      //Si la question sur laquelle on clique est déjà la question en cours
      if (document.querySelector('.current') != null) {
        //On lui enlève la classe current
        document.querySelector('.current').classList.remove("current")
      }
      else { // Dans le cas ou ce n'est pas la question en cours
        //On regarde si l'on a déjà une question en cours
        if (this.parentNode.classList.contains('current')) {
          //Si oui, on referme cette question
          this.parentNode.classList.remove('current')
        }
        //Enfin, on ouvre la question en cours
        this.parentNode.classList.add('current')
      }
    }
  )
}
