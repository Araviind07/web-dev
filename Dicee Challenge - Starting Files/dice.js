
var randomNumber1 = Math.ceil(Math.random() * 6);

var randomDice1 ="images/dice"+ randomNumber1 +".png";
 

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);



var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDice2 = "images/dice"+randomNumber2+".png";



document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


var head = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    head.innerHTML = "Player 1 Wins"
}
else if (randomNumber1 < randomNumber2){
    head.innerHTML = "Player 2 Wins"
}