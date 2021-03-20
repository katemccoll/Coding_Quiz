// Declaring 
var timerElement = document.querySelector(".timer-count");
var startButton = document.getElementById("start-btn");
var infoElement = document.getElementById("info");
var containerElement = document.getElementById("container");
var questionElement = document.getElementById("question");
var answerSectionElement = document.getElementById("answer-section");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var correctElement = document.getElementById("correct");
var wrongElement = document.getElementById("wrong");
var submitInitialsElement = document.getElementById("submit-initials");
var submitButton = document.querySelector("#submit-btn");
var initialsInput = document.querySelector("#initials");
var highscoresElement = document.getElementById("highscores");
var newScoreElement = document.querySelector("#new-score");
var initialsScoreElement = document.querySelector("#initials-score");
var highscoresList = document.querySelector("#highscores-list");
var userScoreForm = document.querySelector("#user-score-form");
var clearButton = document.getElementById("clear-btn");

//  A variable declared in global scope is available to all functions
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var userScores = [];

let shuffledQuestion, currentQuestionIndex;



startButton.addEventListener('click', startGame);

function updateTimer(change) {
    timerCount -= change;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
            // Functions being called to execute
            clearInterval(timer);
            winGame();
        }

    }
    // if timerCount gets to 0, it will clear the timer and call function 'loseGame'
    if (timerCount <= 0) {
        clearInterval(timer);
        loseGame();
    }
}

// Functions are reuseable blocks of code that perform a specific task.
function setTime() {
    // function expression of set interval. Now being set as timer
    timer = setInterval(function () {
        updateTimer(1);

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
    submitInitials();
}


// renders items in a highscore list as <li> elements
function renderList() {
    //  clears list and updates 
    highscoresList.innerHTML = "";
    winCounter.textContent = userScores.length;
    // render a new li for each userScore
    for (var i = 0; i < userScores.length; i++) {
        var userScore = userScores[i];
        var li = document.createElement("li");
        li.textContent = userScore;
        li.setAttribute("data-index", i);
        highscoresList.appendChild(li)
    }

}


//  declaring function setWins
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}


// //  getWins using declaration
// function getScores() {
//     // a variable declared in local scope is only available to that function
//     //  getItem - get the value of winCount from local storage
//     var storedScores = localStorage.getItem("highscores");
//     if (storedScores === null) {
//         winCounter = 0;
//     } else {
//         winCounter = storedWins;
//     }

//     win.textContent = winCounter;
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



function resetState() {
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
    updateTimer(10);

    //  minus 10 seconds from timerCount
    wrongElement.classList.remove("hide");
    setTimeout(function () {
        wrongElement.classList.add("hide");
    }, 500);
    setNextQuestion();
}


function submitInitials() {
    submitInitialsElement.classList.remove("hide");
    newScoreElement.textContent = "Your final score is " + timerCount + ".";
    submitButton.addEventListener('click', highscores);
    userScoreForm.addEventListener("submit", function (event) {
        event.preventDefault();
        //  add submit to form
        var userScoreText = initialsInput.value.trim();
        //  return from function early if left blank
        if (userScoreText === "") {
            return;
        }
        // add new userScoreText to the userScores array, clear the input
        userScores.push(userScoreText);
        initialsInput.value = "";
        // store updated userScores in localStorage, re-render the list
        storeUserScores();
        renderList();

    });
}



function highscores() {
    submitInitialsElement.classList.add("hide");
    highscoresElement.classList.remove("hide");
    //  get stored userScores form local storage
    var storedScores = JSON.parse(localStorage.getItem("userScores"));
    //  if userScores were retrieved from local storage, update the userScores array to it
    if (storedScores !== null) {
        userScores = storedScores;
    }
    // this is a helper function that will render the list to the DOM
    renderList();


}

function storeUserScores() {
    // stringify and set key in localStorage to userScores array
    localStorage.setItem("userScores", JSON.stringify(userScores));
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

