'use strict';
/*
document.querySelector(".message").textContent = "Correct Number🎉";

document.querySelector(".number").textContent = "?";

document.querySelector(".score").textContent = 20;
*/

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function (){
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🛑 No Number!";
    } else if (guess == random) {
        document.querySelector(".number").textContent = String(random);
        document.querySelector(".message").textContent = "Correct Number🎉";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = String(highscore);
        }

        //Change CSS on win
        document.body.style.backgroundColor = "#04b32c";
    } else if (score > 1) {
        if (guess < random) {
            document.querySelector(".message").textContent = "🔼 The number is higher.";
            score -= 1;
            document.querySelector(".score").textContent = String(score);
        } else {
            document.querySelector(".message").textContent = "🔽 The number is lower.";
            score -= 1;
            document.querySelector(".score").textContent = String(score);
        }
    } else {
        document.querySelector(".message").textContent = "🧨 You lost.";
        setTimeout(function () {
            refresh();
        }, 2000);
    }
    
});

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".number").textContent = "?";
    random = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    score = 20;
    document.querySelector(".score").textContent = String(score);
    document.body.style.backgroundColor = "#222";
});

function refresh(){
    document.querySelector(".number").textContent = "?";
    const random = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    score = 20;
    document.querySelector(".score").textContent = String(score);
    document.body.style.backgroundColor = "#222";
}

//TODO Add the highscore function.
