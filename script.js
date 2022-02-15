var randomNumberPlayerOne = Math.floor(Math.random() * 6) + 1;
var randomNumberPlayerTwo = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "/images/dice" + randomNumberPlayerOne + ".png");
document.querySelector(".img2").setAttribute("src", "/images/dice" + randomNumberPlayerTwo + ".png");

if (randomNumberPlayerOne > randomNumberPlayerTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
} else if (randomNumberPlayerOne < randomNumberPlayerTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

function refreshPage() {
    window.location.reload();
}