var questions = [
    {q: "a",
     a1: "b",
     a2: "b",
     a3: "b",
     a4: "b", correct: "a1"},
     {q: "c",
     a1: "d",
     a2: "d",
     a3: "d",
     a4: "d", correct: "a4"},
     {q: "e",
     a1: "f",
     a2: "f",
     a3: "f",
     a4: "f", correct: "a2"},
     {q: "g",
     a1: "h",
     a2: "h",
     a3: "h",
     a4: "h", correct: "a1"},
     {q: "i",
     a1: "j",
     a2: "j",
     a3: "j",
     a4: "j", correct: "a3"},
     {q: "k",
     a1: "l",
     a2: "l",
     a3: "l",
     a4: "l", correct: "a4"},
     {q: "m",
     a1: "n",
     a2: "n",
     a3: "n",
     a4: "n", correct: "a2"}];

var questionEl = document.querySelector(".question");
var starterEl = document.querySelector("#starter");
var answerEl = document.querySelector(".answers");
var timeEl = document.querySelector("#time");
var score = 0;
var timeLeft = 60;
var questionNumber = 0;

starterEl.addEventListener("click", function() {
    console.log("clicked!");
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if(timeLeft == 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

    questionEl.textContent = questions[questionNumber].q;
    var buttonDiv1 = document.createElement("button");
    var buttonDiv2 = document.createElement("button");
    var buttonDiv3 = document.createElement("button");
    var buttonDiv4 = document.createElement("button");
    buttonDiv1.textContent = questions[questionNumber].a1;
    buttonDiv2.textContent = questions[questionNumber].a2;
    buttonDiv3.textContent = questions[questionNumber].a3;
    buttonDiv4.textContent = questions[questionNumber].a4;
    answerEl.appendChild(buttonDiv1);
    answerEl.appendChild(buttonDiv2);
    answerEl.appendChild(buttonDiv3);
    answerEl.appendChild(buttonDiv4);

});