"use strict";



// globals

let answer = "";

// greeting

const user = sessionStorage.getItem("user");
document.getElementById("greeting").innerText += " " + user + "!";

// table numbers 2 through 9

const tableNumbers = [2,3,4,5,6,7,8,9];
GenerateQuestion(tableNumbers[Math.floor(Math.random()*tableNumbers.length)]);

// form submit

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let userAnswer = document.getElementById("answer").value;
})

// generate question

function GenerateQuestion(tableNumber){

    // random number for question
    let randomNr = Math.floor(Math.random()*8+2);

    // multiplication (0) or division (1)
    let decision = Math.floor(Math.random()*2);

    // question paragraph
    let question = document.getElementById("question");
    
    if (decision == 0) {
        answer = tableNumber * randomNr;
        question.innerText = randomNr + " x " + tableNumber;
    } else {
        answer = randomNr;
        question.innerText = (randomNr * tableNumber) + " : " + tableNumber;
    }
}

