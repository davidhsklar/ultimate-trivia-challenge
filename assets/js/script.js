var questionsArr = [
    {
        ask: "Which of the following is not a valid data type?",
        answerA: "Boolean",
        answerB: "Number",
        answerC: "String",
        answerD: "All of the above are valid.",
        answerCorrect: "D",
        questionId: 1
    },
    {
        ask: "Which of the keywords is not a binding in Javascript?",
        answerA: "const",
        answerB: "let",
        answerC: "means",
        answerD: "var",
        answerCorrect: "C",
        questionId: 2
    }, {
        ask: "What does the -- operator do?",
        answerA: "Decrement",
        answerB: "Increment",
        answerC: "Multiply",
        answerD: "Subtract",
        answerCorrect: "A",
        questionId: 3
    }, {
        ask: "How many times will 'for (var i =0; i <12; i++)' loop?",
        answerA: "12",
        answerB: "11",
        answerC: "0",
        answerD: "infinite",
        answerCorrect: "A",
        questionId: 4
    }, {
        ask: "What does the % operator do?",
        answerA: "Decrement",
        answerB: "Divide",
        answerC: "Multiply",
        answerD: "Division Remainder",
        answerCorrect: "D",
        questionId: 5
    }, {
        ask: "For console.log( 1 + '1' ); what will be displayed in the console?",
        answerA: "2",
        answerB: "11",
        answerC: "1 + '1'",
        answerD: "undefined",
        answerCorrect: "B",
        questionId: 6
    }, {
        ask: "What does the logical operator ||  mean?",
        answerA: "and",
        answerB: "and/or",
        answerC: "or",
        answerD: "if",
        answerCorrect: "C",
        questionId: 7
    }, {
        ask: "Which binding will propogate CONST or VAR?",
        answerA: "CONST",
        answerB: "They both will",
        answerC: "Neither will",
        answerD: "VAR",
        answerCorrect: "D",
        questionId: 8
    }, {
        ask: "Which of the follwing is in camel case notation?",
        answerA: "this-One",
        answerB: "this_One",
        answerC: "thisOne",
        answerD: "this.One",
        answerCorrect: "C",
        questionId: 9
    }, {
        ask: "In the following function which is a parameter?  'function myFunction (a,b){math.floor(a-b);};'",
        answerA: "math",
        answerB: "b",
        answerC: "floor",
        answerD: "(a-b)",
        answerCorrect: "B",
        questionId: 10
    }, {
        ask: "Which type of value does 'if(!myVar){};' check for?",
        answerA: "All types",
        answerB: "Number",
        answerC: "Boolean",
        answerD: "The type of data has nothing to do with this.",
        answerCorrect: "C",
        questionId: 11
    }, {
        ask: "What is another name for Javascript?",
        answerA: "Java",
        answerB: "ECMAScript",
        answerC: "Netscape",
        answerD: "Java++",
        answerCorrect: "B",
        questionId: 12
    }, {
        ask: "Which operator is a true equality check?",
        answerA: "===",
        answerB: "==",
        answerC: "=",
        answerD: "!=",
        answerCorrect: "A",
        questionId: 13
    },  {
        ask: "Which is not a type of loop?",
        answerA: "for",
        answerB: "while",
        answerC: "do...while",
        answerD: "All of the above are loops",
        answerCorrect: "D",
        questionId: 14
    }, {
        ask: "Which of the following is not an event that can be listened for?",
        answerA: "click",
        answerB: "keyup",
        answerC: "volumeup",
        answerD: "submit",
        answerCorrect: "C",
        questionId: 15
    }
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

var countdown = function () {
    secondMarker = startTime--;
    if (secondMarker <= - 1) {
        stopTimer();
        headerContent.querySelector("#timer-clock").removeAttribute("style");
        headerContent.querySelector("#timer-clock").setAttribute("style", "color: navy;");


    } else if (questionNumber > questionsArr.length) {
        clearInterval(timerStart);
        headerContent.querySelector("#timer-clock").removeAttribute("style");
        headerContent.querySelector("#timer-clock").setAttribute("style", "color: navy;");


    } else {
        headerContent.querySelector("#timer-clock").innerText = "time" + secondMarker;
        if (secondMarker < 11){
             headerContent.querySelector("#timer-clock").setAttribute("style", "color: red;");
             headerContent.querySelector("#timer-clock").innerText = "time" + secondMarker;

        } else {
            headerContent.querySelector("#timer-clock").removeAttribute("style");
            headerContent.querySelector("#timer-clock").innerText = "" + secondMarker;
        };
    };

};

var timer = function () {

    countdown();
};

    var createTimer = function () {

        var time = document.createElement("h1");
        time.id = "timer-clock";
        time.innerText = "1:30";
        headerContent.appendChild(time);
    
        timer();
    };

    var stopTimer = function () {
        clearInterval(timerStart);
        headerContent.querySelector("#timer-clock").innerText =  "You ran out of time! Score: " + score;
        clearAnswer();
        scoreDisplay();
    };

    
    var timerStart = setInterval(countdown, 1300);
    


//Start Button
var startButtonHandler = function () {

    clearStart();
    createQuestion();
    createTimer();
    loadScore();

};

var againButtonHandler = function () {
    location.reload();

};

var clearStart = function(){
    startQuiz.remove(startQuizDiv);
}

var clearAnswer = function(){
    pageContent.removeChild(pageContent.childNodes[1]);
}

var createQuestion = function (){
    var questionMaker = document.createElement("div");
    questionMaker.className = 'question-container';
    questionMaker.id = 'question-container';
    questionMaker.setAttribute ("data-question-id", questionsArr[quesIndex].questionId);
    questionMaker.innerHTML = "<h3 class='question'>" + questionsArr[quesIndex].ask + "</h3>";
    pageContent.appendChild(questionMaker);


    //Answers
    var form = document.createElement ("form");
    form.id = 'endCheck';
    form.classname = 'answer-box'
    form.innerHTML = "<input type='radio' class ='question-radio' id='A'  value ='A' name ='thisNameVar' checked><label class='question-content' for='A'>A - " + questionsArr[quesIndex].answerA + "</label><br>" +
    "<input type='radio' class ='question-radio' id='B'  value='B' name ='thisNameVar' checked><label class='question-content' for='B'>B - " + questionsArr[quesIndex].answerB + "</label><br>" +
    "<input type='radio' class ='question-radio' id='C' value='C' name ='thisNameVar' checked><label class='question-content' for='C'>C - " + questionsArr[quesIndex].answerC + "</label><br>" +
    "<input type='radio' class ='question-radio' id='D' value='D' name ='thisNameVar' checked><label class='question-content' for='D'>D - " + questionsArr[quesIndex].answerD + "</label><br>";
    questionMaker.appendChild(form);
    

    //Submit Button
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

var createScore = function () {
    var scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.id = "score-box";
    pageContent.appendChild(scoreBox);
    var again = document.querySelector("#score-box");
    pageContent.addEventListener("click", againButtonHandler);


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

var saveScore = function () {
    console.log(scoreArr);
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
};

var sortScore = function (a, b) {
    if (a.score < b.score) {
        return 1;
    } else if (a.score > b.score) {
        return -1;
    } else {
        return 0;
    }
};

var loadScore = function () {
    var gotScores = localStorage.getItem("scoreArr", scoreArr);
    scoreArr = JSON.parse(gotScores);

    if (!gotScores) {
        var firstScoreArr = [
            {
                initials: "",
                score: 0
            }
        ];

        scoreArr = firstScoreArr;
        saveScore();
    } else {

        // console.log(scoreArr.sort(sortScore));
        sortedScores = scoreArr.sort(sortScore);
        scoreArr = sortedScores;
        console.log(scoreArr);
        return scoreArr;
    }
};



var scoreDisplay = function () {
    var Initials = prompt("Game over! Enter your initials. For example 'DMH'.");
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
                headerContent.querySelector("#timer-clock").setAttribute("style", "color: red;");
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



//Event Listeners
startQuizDiv.addEventListener("click", startButtonHandler);
pageContent.addEventListener("submit", submitButtonHandler);