//Variables:
var questions = [{
        question: "What is the only mammal that can't jump?",
        choices: ["Elephant", "Mouse", "Koala", "Giraffe"],
        answer: 0, //Answer is the index of choices
    },
    {
        question: "How many squares are on a Chess Board?",
        choices: ["52", "56", "64", "72"],
        answer: 2, //Answer is the index of choices
    },
    {
        question: "How many prongs are on a fork?",
        choices: ["2", "3", "4", "5"],
        answer: 2, //Answer is the index of choices
    },
    {
        question: "How many bends are in a Paperclip?",
        choices: ["5", "3", "4", "6"],
        answer: 1, //Answer is the index of choices
    },
    {
        question: "Which is the only U.S. State that only boarders one other State?",
        choices: ["Maine", "Oregon", "Rhode Island", "Florida"],
        answer: 0, //Answer is the index of choices
    }
];

var userChoice = " " ; //User selection
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
    $("#startGameDiv").hide();
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

    if((timeRemaining === -1) && (questionCounter === (questions.length - 1))){
        gameOver();
    }

    else if (timeRemaining === -1) {
        stopTimer()
        unansweredQuestions++;
        $("#timeRemainingDiv").text("Time is up!")
        $("#choicesDiv").text("The answer is: " + chosenQuestion.choices[chosenQuestion.answer])
        setTimeout(nextQuestion, 3000);
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
        //Create button
        var answerButton = $("<div>");
        //Add class to button
        answerButton.addClass("answer-btn");
        //Add text to HTML for each choice
        answerButton.html(chosenQuestion.choices[j]);
        //Assign each choice a value - to be called in Click function
        answerButton.attr("data-value", j);
        //Append choices to html
        $("#choicesDiv").append(answerButton);
    }
};

//Click Function
$("#choicesDiv").on("click", ".answer-btn", function(){
    userChoice = parseInt($(this).attr("data-value"));
    console.log(this); //logs choicesDiv object
    console.log(userChoice); //logs "NaN" ---- WHY???
    console.log(chosenQuestion.choices); //logs choices
    console.log(chosenQuestion.answer); //logs answer index
    //Check and compare answer function
    if(userChoice === chosenQuestion.answer){
        stopTimer();
        correctAnswers++;
        $("#questionDiv").text("You are correct!")
        userChoice = "";
        setTimeout(nextQuestion, 3000);

        if(questionCounter === (questions.length - 1)){
            gameOver();
        }
    }
    else {
        console.log(userChoice)
        stopTimer();
        incorrectAnswers++;
        userChoice = "";
        $("#questionDiv").text("You are incorrect!")
        $("#choicesDiv").text("The answer is: " + chosenQuestion.choices[chosenQuestion.answer])
        setTimeout(nextQuestion, 3000);

        if(questionCounter === (questions.length - 1)){
            gameOver();
        }
    }
})

//Next Question Function
function nextQuestion (){
    $("#choicesDiv").empty()
    questionCounter++; //then use setTimeout to call function
    showQuestions();
    timeRemaining = 5;
    timer()
}
//Game Over Function / Final Standings
function gameOver (){
        stopTimer();
        $("#timeRemainingDiv").empty();
        $("#choicesDiv").empty();
        $("#questionDiv").empty();
        //results
        $("#timeRemainingDiv").text("Game Over!")
        $("#questionDiv").text("Results:")
        $("#choicesDiv").html("Correct answers: " + correctAnswers + "<br>" + "Incorrect answers: " + 
            incorrectAnswers + "<br>" + "Unanswered questions: " + unansweredQuestions + "<br>" + "<br>" +
            "Game will reset in a few moments...")
        console.log("Correct answers: "+ correctAnswers)
        console.log("Incorrect answers: " + incorrectAnswers)
        console.log("Unanswered questions: " + unansweredQuestions)

        setTimeout(resetGame, 5000);
}

//Reset game function
function resetGame (){
    $("#timeRemainingDiv").empty();
    $("#choicesDiv").empty();
    $("#questionDiv").empty();
    questionCounter = 0
    correctAnswers = 0; 
    incorrectAnswers = 0; 
    unansweredQuestions = 0
    timeRemaining = 5
    showQuestions()
    timer()
}
