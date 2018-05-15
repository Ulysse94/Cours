addBlock(){
  num = Math.random(4)
  numPiece++
  doBlock(num)
}

doBlock(num){
  switch (num) {
    case 0:
      if (tab[5][29]>0) {
        fail()
      }
      else {
        tab[5][29] = numPiece
      }
      if (tab[5][28]>0) {
        fail()
      }
      else {
        tab[5][28] = numPiece
      }

  }
}








Fall(){
fallBlock = 1
  for (let i = 0; i < 9; i++) {
    for (let j = 1; i < 29; i++) {
      if (tab[i][j] == numPiece) {
        if (tab[i][j-1] != 0 & NumPiece) {
          fallBlock = 0
        }
      }
    }
  }
}
