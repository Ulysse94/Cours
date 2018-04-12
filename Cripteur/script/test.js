let abc="abcdefghijklmnopqrstuvwxyz"
let parameter=parseInt(window.prompt('Donnez le paramètre de cryptage'))
let stc=(window.prompt('Donnez une phrase'))
let sentence=stc.toLowerCase();
let result=""
for(let i=0; i<sentence.length; i++){
  let char=sentence.charAt(i)
  let position=abc.lastIndexOf(char)
  if(position==-1){
    result+=char
  }
  else{
    let newPosition=(position+parameter)%26
    result+=abc.charAt(newPosition)
  }
}
document.write(result)
