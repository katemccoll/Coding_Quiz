// Declaring 
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
var correctElement = document.getElementById("correct");
var wrongElement = document.getElementById("wrong");
var submitScoreElement = document.getElementsByClassName("submit-score")

//  A variable declared in global scope is available to all functions
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;


let shuffledQuestion, currentQuestionIndex;



startButton.addEventListener('click', startGame);

// Functions are reuseable blocks of code that perform a specific task.
function setTime() {
    // function expression of set interval. Now being set as timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                // Functions being called to execute
                clearInterval(timer);
                winGame();
                setTime(displayScore)
            }

        }
        // if timerCount gets to 0, it will clear the timer and call function 'loseGame'
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }

    }, 1000);
}

// Declaring function Start Game, will execute when called.
function startGame() {
    // When function is called, it will print Start
    console.log("Start");
    // Adding hide class to below variables
    startButton.classList.add("hide");
    infoElement.classList.add("hide");
    shuffledQuestion = quiz.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    containerElement.classList.remove("hide");
    // function being called to execute
    setNextQuestion();
    timerCount = 75;
    isWin = false;
    // calling setTime function
    setTime();
}

function stopGame() {
    containerElement.classList.add("hide");
    clearInterval(timer);
}

//  declaring function setWins
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}
//  Declaring function setLosses
function setLosses() {
    localStorage.textContent = loseCounter;
    // sets the value of loseCount in local storage
    localStorage.setItem("loseCount", loseCounter);
}

//  getWins using declaration
function getWins() {
    // a variable declared in local scope is only available to that function
    //  getItem - get the value of winCount from local storage
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }

    win.textContent = winCounter;
}

//  getLosses using function declaration
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
    if (currentQuestionIndex === shuffledQuestion.length) {
        console.log("stopGame");
        stopGame();
        return;
    }
    //  being called with parameter of shuffled questions from list of questions left
    showQuestion(shuffledQuestion[currentQuestionIndex]);
    //  need to make it choose from questions left over
    currentQuestionIndex++;
    // no more = stopgame
    // use shuffledQuestion and currentQuestionIndex to determine when the game is done.

}

//  Functions can take parameters- this one is multiChoiceQuestion
function showQuestion(multiChoiceQuestion) {
    questionElement.innerText = multiChoiceQuestion.question;
    //  calls function for each array element
    multiChoiceQuestion.choices.forEach(choice => {
        // creates a button element
        var button = document.createElement("button");
        button.innerText = choice;
        // Depending on which answer the user chooses, if they choose correctly, it will call correct answer. Else it will call wrong answer.
        if (choice === multiChoiceQuestion.answer) {
            // Attaches event handler to the document
            button.addEventListener("click", correctAnswer);
        } else {
            // adding click event
            button.addEventListener("click", wrongAnswer);

        }
        //  appends the button to answerSectionElement
        answerSectionElement.appendChild(button);
    });
}

function displayScore() {

}

function resetState() {
    // nextButton.classList.add("hide");
    while (answerSectionElement.firstChild) {
        //  removes the firstChild from list
        answerSectionElement.removeChild(answerSectionElement.firstChild);
    }
}


function correctAnswer() {
    // logs correct
    console.log("correct");
    //  calls function
    correctElement.classList.remove("hide");
    setTimeout(function () {
        correctElement.classList.add("hide");
    }, 2000);
    setNextQuestion();

}

function wrongAnswer() {
    console.log("wrong");
    //  minus 10 seconds from timerCount
    timerCount -= 10;
    wrongElement.classList.remove("hide");
    setTimeout(function () {
        wrongElement.classList.add("hide");
    }, 500);
    setNextQuestion();


}

//  global scope
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

