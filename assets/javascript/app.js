//Variables:
var questions = [{
        question: "Question 1",
        choices: ["W", "X", "Y", "Z"],
        answer: 1 //Answer is the index of choices
    },
    {
        question: "Question 2",
        choices: ["A", "B", "C", "D"],
        answer: 2 //Answer is the index of choices
    },
    {
        question: "Question 3",
        choices: ["E", "F", "G", "H"],
        answer: 3 //Answer is the index of choices
    },
    {
        question: "Question 4",
        choices: ["I", "J", "K", "L"],
        answer: 4 //Answer is the index of choices
    },
    {
        question: "Question 5",
        choices: ["M", "N", "O", "P"],
        answer: 1 //Answer is the index of choices
    }
];

var userChoice = ""; //User selection
var questionCounter = 0; //Question #
var correctAnswers = 0; //# of correct answers
var incorrectAnswers = 0; //# of incorrect answers
var unansweredQuestions = 0; //# of unanswered questions
var timeRemaining = 5; //Timer
var running = false;
var timeInterval;
var chosenQuestion;
var questionCounter = 0;



//Start Game Function

$("#start").click(function () {
    $("#start").hide();
    showQuestions()
    timer()
})


//Timer Function
function timer() {
    if (!running) {
        timeInterval = setInterval(decrement, 1000);
        running = true;
    }
};

function decrement() {
    $("#timeRemainingDiv").text("Time Remaining: " + timeRemaining + " seconds!");
    timeRemaining--;

    if (timeRemaining === -1) {
        stopTimer()
        unansweredQuestions++;
        $("#correctAnswerDiv").text("Time is up!")
    }
}

function stopTimer() {
    running = false;
    clearInterval(timeInterval);
}



//Question Function
function showQuestions() {
    chosenQuestion = questions[questionCounter];
    //show question
    $("#questionDiv").html("Question: <br>" + chosenQuestion.question + "");

    //show choices
    for (var j = 0; j < chosenQuestion.choices.length; j++) {
        var myDiv = $("<div>");
        myDiv.append($("<button>").text(chosenQuestion.choices[j]));
        $("#choicesDiv").append(myDiv);

        //$("#choicesDiv").html("Choices: <br>" + chosenQuestion.choices[j]);
    }
};


//Click Function
$("#choicesDiv").on("click", function(){
    alert("This worked!");

    //Check/Compare Answer Function

    //Show Answer

    //Next Question Function
});



//# of Correct Answers

//# of Incorrect Answers

//# of Unanswered

//Reset Game Function