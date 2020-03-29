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
var score = localStorage.getItem("score");
var timeLeft = 60;
var questionNumber = 0;
var name = localStorage.getItem("name");

starterEl.addEventListener("click", function() {
    questionEl.textContent = questions[questionNumber].q;
    var buttonDiv1 = document.createElement("button");
    var buttonDiv2 = document.createElement("button");
    var buttonDiv3 = document.createElement("button");
    var buttonDiv4 = document.createElement("button");
    var a1Correct = false;
    var a2Correct = false;
    var a3Correct = false;
    var a4Correct = false;
    buttonDiv1.setAttribute("id", "a1");
    buttonDiv2.setAttribute("id", "a2");
    buttonDiv3.setAttribute("id", "a3");
    buttonDiv4.setAttribute("id", "a4");
    answerEl.appendChild(buttonDiv1);
    answerEl.appendChild(buttonDiv2);
    answerEl.appendChild(buttonDiv3);
    answerEl.appendChild(buttonDiv4);

    function generateQuestion(questionNumber) {
        buttonDiv1.textContent = questions[questionNumber].a1;
        buttonDiv2.textContent = questions[questionNumber].a2;
        buttonDiv3.textContent = questions[questionNumber].a3;
        buttonDiv4.textContent = questions[questionNumber].a4;

        for(var i = 1; i <= 4; i++) {
            var correctAnswer = questions[questionNumber].correct;
            if(correctAnswer == "a1") {
                a1Correct = true;
            } else if(correctAnswer == "a2") {
                a2Correct = true;
            } else if(correctAnswer == "a3") {
                a3Correct = true;
            } else if(correctAnswer == "a4") {
                a4Correct = true;
            }
        }
    }
    generateQuestion(questionNumber);

    function setScoreBoard() {
        localStorage.setItem("score", score);
        questionEl.textContent = name + " " + score;
    }

    function isCorrect(correctAnswer) {
        if(correctAnswer) {
            score++;
        } else {
            timeLeft-= 2;
        }
        questionNumber++;
        generateQuestion(questionNumber);
    }
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if(timeLeft === 0 || questionNumber == questions.length - 1) {
            clearInterval(timerInterval);
            setScoreBoard();
        }

    }, 1000);

    buttonDiv1.addEventListener("click", isCorrect(a1Correct));
    buttonDiv2.addEventListener("click", isCorrect(a2Correct));
    buttonDiv3.addEventListener("click", isCorrect(a3Correct));
    buttonDiv4.addEventListener("click", isCorrect(a4Correct));
});