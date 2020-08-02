
// first dice roll
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + [randomNumber1] + ".png");

// second dice roll
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + [randomNumber2] + ".png");

//determine winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Won!!"; 

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won 🎉!"; 

} else{
    document.querySelector("h1").innerHTML = "Draw!"; 
}