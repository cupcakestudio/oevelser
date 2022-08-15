const beer = document.querySelector("#beer");
const soda = document.querySelector("#cola");
const beer1 = document.querySelector("#ale_beer");
const soda1 = document.querySelector("#fanta");
const eggnog = document.querySelector("#snaps");

beer.addEventListener('click', checkAlcohol);
soda.addEventListener('click', checkAlcohol);
beer1.addEventListener('click', checkAlcohol);
soda1.addEventListener('click', checkAlcohol);
eggnog.addEventListener('click', checkAlcohol);

//program der tjekker alkohol-indhold
//this == document.querySelector(" ") tjekker om this objekt svarer til en af de givende id'er
// og udskriver henholdvis de rigtige tekster
function checkAlcohol() {
if (this == document.querySelector("#beer") )
{
 console.log(this + " indeholder alkohol");
}
else if (this == document.querySelector("#ale_beer"))
{
 console.log(this + " indeholder alkohol");
}
else if (this == document.querySelector("#snaps"))
{
 console.log(this + " indeholder alkohol");
}
else 
{ 
   console.log(this + " alkoholfri");
}
}
