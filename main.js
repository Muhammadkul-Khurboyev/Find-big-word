
function findBigWord(word){
  var textArr = word.split(" ");
  var textBig = textArr[0];

  for (i=0; i<textArr.length; i++){
    if (textBig.length < textArr[i].length){
      textBig = textArr[i];
    }
  }
  return console.log(textBig);
}
findBigWord("Lorem ipsum dolor sit amet consectetur adipisicing elit Ab dolorum?");