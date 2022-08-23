  

//fandt via MDN  docs
 /* function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 0 + 1) + 0); //The maximum is inclusive and the minimum is inclusive
}

 var randomNumber = getRandomIntInclusive(0,10); //generer tilfældigt tal

 */
var randomNumber = Math.floor(Math.random()*11); //runder tal op til heltal som er generet tilfældigt ml 1 og 10
  const guess = document.querySelector("button");
  guess.addEventListener('click', guessNumber);
 //en gætte-tæller, tæller hvor mange gange man har forsøgt
  var guessCounter = 0;
  guess.onclick = () => guessCounter++;
  

function guessNumber()
 {
   if (randomNumber == document.querySelector("#tal").value) 
  {
    alert(document.querySelector("#tal").value +" er rigtigt! Du brugte " + guessCounter + " forsøg. Prøv igen med et nyt tal?");
    window.location.reload;
  }
  else if (document.querySelector("#tal").value > randomNumber)
  {
    alert("Øv, " + document.querySelector("#tal").value +" var for højt");
  }
  else 
  {
    alert("Øv, " + document.querySelector("#tal").value +" var for lavt");
  }
  
  }