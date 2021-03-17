var timerElement = document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
// var nextButton = document.querySelector("next-btn");
var infoElement = document.getElementById("info");
var containerElement = document.getElementById("container");
var questionElement = document.getElementById("question");
var answerSectionElement = document.getElementById("answer-section");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var userScoreElement


var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


let shuffledQuestions, currentQuestionIndex;



startButton.addEventListener('click', startGame);

function setTime() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
                setTime(displayScore)
            }

        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }

    }, 1000);
}


function startGame() {
    console.log("Start");
    startButton.classList.add("hide");
    infoElement.classList.add("hide");
    shuffledQuestion = quiz.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    containerElement.classList.remove("hide");
    setNextQuestion();
    timerCount = 75;
    isWin = false;
    setTime();
}


function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

function setLosses() {
    localStorage.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}


function getWins() {
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }

    win.textContent = winCounter;
}

function getLosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}
// var shuffleQuestion = "";
// for (var i = 0; i < question; i++) {
//     var shuffleIndex = Math.floor(Math.random() )
// }

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(multiChoiceQuestion) {
    questionElement.innerText = multiChoiceQuestion.question;
    multiChoiceQuestion.choices.forEach(choice => {
        var button = document.createElement("button");
        button.innerText = choice;
        if (choice === multiChoiceQuestion.answer) {
            button.addEventListener("click", correctAnswer);
        } else {
            button.addEventListener("click", wrongAnswer);

        }
        answerSectionElement.appendChild(button);
    });
}

function displayScore() {

}

function resetState() {
    // nextButton.classList.add("hide");
    while (answerSectionElement.firstChild) {
        answerSectionElement.removeChild(answerSectionElement.firstChild);
    }
}

function correctAnswer() {
    console.log("correct");
    setNextQuestion();
}

function wrongAnswer() {
    console.log("wrong");
    timerCount -= 10;
    setNextQuestion();


}


var quiz = [
    {
        "question": "Commonly used data types DO NOT include:",
        "choices": ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        "answer": "3. Alerts"
    }, {
        "question": "The condition is an if / else statement is enclosed within _____.",
        "choices": ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        "answer": "2. curly brackets"
    }, {
        "question": "Arrays in JavaScript can be used to store _____.",
        "choices": ["1. number and strings", "2. other arrays", "3. booleans", "4. all the above"],
        "answer": "4. all the above"
    }, {
        "question": "String values must be enclosed withing _____ when being assigned to variables.",
        "choices": ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        "answer": "3. quotes"
    }, {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices": ["1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console.log"],
        "answer": "4. console.log"
    }
]



// function shuffle(array) {
//     var temporaryValue, randomIndex;
//     var currentIndex = array.length;
//     while (currentIndex > 1) {
//         randomIndex - Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;

//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//     return array;
// }