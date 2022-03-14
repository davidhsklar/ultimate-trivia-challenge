var questionsArr = [
    {
        ask: "Which of the following is true?",
        answerA: "Boolean is a true or false.",
        answerB: "Math.Random will give you a round number",
        answerC: "parseInt changes numbers into strings",
        answerD: "All of the above are false.",
        answerCorrect: "A",
        questionId: 1
    },
    {
        ask: "How do you increase the count by 1?",
        answerA: "i++",
        answerB: "i--",
        answerC: "i++++",
        answerD: "None of the above",
        answerCorrect: "A",
        questionId: 2
    }, {
        ask: "What kind of brackets do you use to signify a empty array?",
        answerA: "Curly Brackets",
        answerB: "Round Brackets",
        answerC: "Square Brackets",
        answerD: "What's an array?",
        answerCorrect: "C",
        questionId: 3
    }, {
        ask: "Where can you store information on users?",
        answerA: "local storage",
        answerB: "session storage",
        answerC: "A storage unit",
        answerD: "A and B",
        answerCorrect: "D",
        questionId: 4
    }, {
        ask: "What does DOM stand for?",
        answerA: "Document Object Model",
        answerB: "Document Object Module",
        answerC: "Document On Main",
        answerD: "Disco Over Motown",
        answerCorrect: "A",
        questionId: 5
    }, {
        ask: "What is an example of camel case?",
        answerA: "thisone",
        answerB: "this.one",
        answerC: "Thisone",
        answerD: "thisOne",
        answerCorrect: "D",
        questionId: 6
    }, {
        ask: "How do you define a function?",
        answerA: "let",
        answerB: "var",
        answerC: "const",
        answerD: "all of the above",
        answerCorrect: "D",
        questionId: 7
    }, {
        ask: "What does appending do?",
        answerA: "moves an element into another",
        answerB: "nothing",
        answerC: "makes a child independent of the parent",
        answerD: "creates an element",
        answerCorrect: "A",
        questionId: 8
    }, {
        ask: "What will console.log(math.random) return?",
        answerA: "a random non-rounded number",
        answerB: "a random rounded number",
        answerC: "a random negative number",
        answerD: "a number that I can easily remember",
        answerCorrect: "A",
        questionId: 9
    }, {
        ask: "What does JSON stand for?",
        answerA: "JavaScript On Notice",
        answerB: "JavaScript Object Notation",
        answerC: "Juicy Steaks Or Not",
        answerD: "JSON isn't real",
        answerCorrect: "B",
        questionId: 10
    },
    
];

//Setting the Variables
var headerContent = document.querySelector("#header");
var pageContent = document.querySelector("#page-content");
var startQuiz = document.querySelector("#start-quiz");
var startQuizDiv = document.querySelector("#start-info");
var getAnswer = document.getElementsByClassName("question-input");
var answerDiv = document.querySelector("#question-container");
var score = 0;
var startTime = 90;
var questionNumber = 1;
var quesIndex = 0;
var scoreArr = [];


//Functions

//Creating General timer

var time = document.createElement("h1");
time.id = "timer-clock";
time.innerText = "90";
headerContent.appendChild(time);

// Creating the countdown of the timer and the style attributes

var countdown = function () {
    secondMarker = startTime--;
    if (secondMarker <= - 1) {
        stopTimer();
        headerContent.querySelector("#timer-clock").removeAttribute("style");
        headerContent.querySelector("#timer-clock").setAttribute("style", "color: blue;");


    } else if (questionNumber > questionsArr.length) {
        clearInterval(timerStart);
        headerContent.querySelector("#timer-clock").removeAttribute("style");
        headerContent.querySelector("#timer-clock").setAttribute("style", "color: blue;");


    } else {
        headerContent.querySelector("#timer-clock").innerText = secondMarker;
        if (secondMarker < 11){
             headerContent.querySelector("#timer-clock").setAttribute("style", "color: white;");
             headerContent.querySelector("#timer-clock").innerText = secondMarker;

        } else {
            headerContent.querySelector("#timer-clock").removeAttribute("style");
            headerContent.querySelector("#timer-clock").innerText = secondMarker;
        };
    };

};

// Defining the timer as a function for DRY purposes

var timer = function () {

    countdown();
};

var createTimer = function () {

    timer();
};


var timerStart = setInterval(countdown, 1300);

// stop timer function

var stopTimer = function () {
    clearInterval(timerStart);
    headerContent.querySelector("#timer-clock").innerText =  "You ran out of time! Score: " + score;
    clearAnswer();
    scoreDisplay();
};




// Start Button
var startButtonHandler = function () {

    clearStart();
    createQuestion();
    createTimer();
    loadScore();

};

// Play again and resetting of quiz

var playAgain = function () {
    location.reload();

};

var clearStart = function(){
    startQuiz.remove(startQuizDiv);
}

var clearAnswer = function(){
    pageContent.removeChild(pageContent.childNodes[1]);
}

// Creating the questions

var createQuestion = function (){
    var questionMaker = document.createElement("div");
    questionMaker.className = 'question-container';
    questionMaker.id = 'question-container';
    questionMaker.setAttribute ("data-question-id", questionsArr[quesIndex].questionId);
    questionMaker.innerHTML = "<h3 class='question'>" + questionsArr[quesIndex].ask + "</h3>";
    pageContent.appendChild(questionMaker);

// Creating the answers

    var form = document.createElement ("form");
    form.id = 'endCheck';
    form.classname = 'answer-box'
    form.innerHTML = "<input type='radio' class ='question-radio' id='A'  value ='A' name ='thisNameVar' checked><label class='question-content' for='A'>A - " + questionsArr[quesIndex].answerA + "</label><br>" +
    "<input type='radio' class ='question-radio' id='B'  value='B' name ='thisNameVar' checked><label class='question-content' for='B'>B - " + questionsArr[quesIndex].answerB + "</label><br>" +
    "<input type='radio' class ='question-radio' id='C' value='C' name ='thisNameVar' checked><label class='question-content' for='C'>C - " + questionsArr[quesIndex].answerC + "</label><br>" +
    "<input type='radio' class ='question-radio' id='D' value='D' name ='thisNameVar' checked><label class='question-content' for='D'>D - " + questionsArr[quesIndex].answerD + "</label><br>";
    questionMaker.appendChild(form);
    

// Submit your quiz button

    var submitButtonDiv = document.createElement("div");
    submitButtonDiv.className = "btn-container";
    form.appendChild(submitButtonDiv);

    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.type = "submit";
    submitButton.value = "Submit";
    submitButtonDiv.appendChild(submitButton);
    return questionMaker;

};

// Creating the user scores

var createScore = function () {
    var scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.id = "score-box";
    pageContent.appendChild(scoreBox);
    var again = document.querySelector("#score-box");
    pageContent.addEventListener("click", playAgain);


    var scoreBanner = document.createElement("h2")
    scoreBanner.className = "score-banner";
    scoreBanner.innerText = "High Scores";
    scoreBox.appendChild(scoreBanner);

    var buttonDiv = document.createElement("div");
    buttonDiv.id = "refresh-btn";
    buttonDiv.innerHTML = ("<button>Take Quiz Again</button>");
    pageContent.appendChild(buttonDiv);

    for (var i = 0; i < scoreArr.length; i++) {
        var score = document.createElement("ol");
        score.innerText = ((i + 1) + ". " + scoreArr[i].initials + "......." + scoreArr[i].score);
        scoreBox.appendChild(score);
    };
};


//  Saving the score

var saveScore = function () {
    console.log(scoreArr);
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
};

// Sorting high scores from high to low

var sortScore = function (a, b) {
    if (a.score < b.score) {
        return 1;
    } else if (a.score > b.score) {
        return -1;
    } else {
        return 0;
    }
};

// Loading the score into the score table to display to player

var loadScore = function () {
    var getScores = localStorage.getItem("scoreArr", scoreArr);
    scoreArr = JSON.parse(getScores);

    if (!getScores) {
        var firstScoreArr = [
            {
                initials: "",
                score: 0
            }
        ];

        scoreArr = firstScoreArr;
        saveScore();
    } else {
        sortedScores = scoreArr.sort(sortScore);
        scoreArr = sortedScores;
        console.log(scoreArr);
        return scoreArr;
    }
};


// Displaying the score

var scoreDisplay = function () {
    var Initials = prompt("Game over! Enter your initials.");
    Initials = Initials.toUpperCase();

    var scoreDataObj = {
        initials: Initials,
        score: score,
    };

   
    scoreArr.push(scoreDataObj);
    sortedScores = scoreArr.sort(sortScore);
    scoreArr = sortedScores;
    saveScore();
    createScore();
    return Initials;
};

// Answer submit button and time penalty functions

var submitButtonHandler = function (event) {
    event.preventDefault();
    var checkedOrNot = document.getElementsByName("thisNameVar");
    checkedOrNot.forEach(radio => {
        if (radio.checked) {
            var userAnswer = radio.value;
            if (userAnswer === questionsArr[quesIndex].answerCorrect) {
                score++;

            } else {
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                startTime--;
                headerContent.querySelector("#timer-clock").setAttribute("style", "color: white;");
                headerContent.querySelector("#timer-clock").innerText = ":" + (secondMarker-1) + "(-10)";
            }
        }
    });


    quesIndex++;
    questionNumber++;

    if (questionNumber > questionsArr.length) {
        clearAnswer();
        headerContent.querySelector("#timer-clock").innerText =  " You answered all questions! Score: " + score;
        // clearInterval(timerStart);
        scoreDisplay();
    } else {
        clearAnswer();
        createQuestion();
    };


};



// Event Listeners

startQuizDiv.addEventListener("click", startButtonHandler);
pageContent.addEventListener("submit", submitButtonHandler);