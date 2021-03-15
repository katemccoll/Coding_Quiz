// Timer
var timerEl = document.getElementById('countdown');

var startButton = document.getElementById('start-btn');
// var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);



var timeLeft = 75;

// function countdown() {
//     var timeLeft = 75;
//     var timeInterval = setInterval(function () {
//         if (timeLeft > 5) {
//             timerEl.textContent = "Time: " + timeLeft;
//             timeLeft--;
//         } else if (timeLeft < 5) {
//             timerEl.textContent = "Time: " + timeLeft;
//             timeLeft--;
//             // Change it to Red
//         } else {
//             timerEl.textContent = " ";
//             clearInterval(timeInterval);
//             displayMessage();

//         }
//     }, 1000);
// }

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

setTime();

// function countDown() {
//     clearInterval(this.countDown);
//     this.countDown = setInterval(this.decrement, 1000);
//     question.counter = 75;
// }



function startGame() {
    console.log("Start");
    startButton.classList.add("hide");
    shuffledQuestion = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

// var shuffleQuestion = "";
// for (var i = 0; i < question; i++) {
//     var shuffleIndex = Math.floor(Math.random() )
// }

function setNextQuestion() {
    // resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        // answerButtonsElement.appendChild(button)
    });
}

// function resetState() {
//     nextButton.classList.add("hide");
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//     }
// }

function selectAnswer() {

}




var question = [
    {
        "question": "Commonly used data types DO NOT include:",
        "answer": ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        "correct": "3. Alerts"
    }, {
        "question": "The condition is an if / else statement is enclosed within _____.",
        "answer": ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        "correct": "2. curly brackets"
    }, {
        "question": "Arrays in JavaScript can be used to store _____.",
        "answer": ["1. number and strings", "2. other arrays", "3. booleans", "4. all the above"],
        "correct": "4. all the above"
    }, {
        "question": "String values must be enclosed withing _____ when being assigned to variables.",
        "answer": ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        "correct": "3. quotes"
    }, {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "answer": ["1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console.log"],
        "correct": "4. console.log"
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