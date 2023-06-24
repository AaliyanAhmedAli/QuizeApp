var questions = [{
question: "What does HTML stand for?",
options: ["Hyperlinks andText Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Text Manipulation Language"],
answer: 2
}, {
question: "Who is making the Web standards?",
options: ["Google", "Mozilla", "Microsoft", "The World Wild Web"],
answer: 3
}, {
question: "Choose the correct HTML element for the largest heading:",
options: ["<head>", "<h6>", "<h1>", "<heading>"],
answer: 2
}, {
question: "What is the correct HTML element for inserting a line break?",
options: ["<lb>", "<br>", "<break>", "<LineBreak>"],
answer: 0
}, {
question: "What is the correct HTML for adding a background color?",
options: ['<body bg = "Yellow">', "<background> Yellow <background>", "<body style='background-color:yellow;>", "<bg='yellow'>"],
answer: 0
}, {
question: "Choose the correct HTML element to define important text",
options: ["<i>", "<strong>", "<important>", "<b>"],
answer: 1
}, {
question: "Choose the correct HTML element to define emphasized text",
options: ["<italic>", "<em>", "<i>", "<emphasized>"],
answer: 1
}, {
question: "Which character is used to indicate an end tag?",
options: ["^", "<", "/", "*"],
answer: 1
}, {
question: "How can you open a link in a new tab/browser window?",
options: ["<a href='url'new>", "<a href='url'target='_blank'>", "<a href='url'target=''new", "<a href='url' value='_blank'"],
answer: 1
}, {
question: "Which of these elements are all <table> elements?                                                                                                                                                                                                                                                                                                                                                                                        ",
options: ["<table><head><tfoot>", "<table><tr><td>","<table><tr><tt>","<thead><body><tr>"],
answer: 1
}, {
question: "Inline elements are normally displayed without starting a new line.",
options: ["True", "False"],
answer: 1
}, {
question: "How can you make a numbered list?",
options: ["<ol>", "<ul>", "<dl>", "<list>"],
answer: 0
}, {
question: "How can you make a bulleted list?",
options: ["<ol>", "<ul>", "<dl>", "<list>"],
answer: 1
}, {
question: "What is the correct HTML for making a checkbox?",
options: ["<checkbox>", "<check>", "<input type='Check'>", "<input type='checkbox'>"],
answer: 3
}, {
question: "What is the correct HTML for making a text input field?",
options: ["<input type='text'>", "<input type='textfield'>", "<textinput type='text'>", "<textfield>"],
answer: 0
}];

var currentQuestion = 0;
var score = 0;
var timer;

function startQuiz() {
showQuestion();
startTimer();
}

function showQuestion() {
var questionElement = document.getElementById('question');
var option1Label = document.getElementById('option1Label');
var option2Label = document.getElementById('option2Label');
var option3Label = document.getElementById('option3Label');
var option4Label = document.getElementById('option4Label');

var currentQues = questions[currentQuestion];
questionElement.textContent = currentQues.question;
option1Label.textContent = currentQues.options[0];
option2Label.textContent = currentQues.options[1];
option3Label.textContent = currentQues.options[2];
option4Label.textContent = currentQues.options[3];
}

function checkAnswer() {
var options = document.getElementsByName('options');
var selectedOption;

for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
        selectedOption = i;
        break;
    }
}

if (selectedOption === questions[currentQuestion].answer) {
    score++;
}

currentQuestion++;

if (currentQuestion < questions.length) {
    showQuestion();
} else {
    endQuiz();
}
}

function startTimer() {
var timeLimit = 25 * 60;
var timerElement = document.getElementById('timer');
timerElement.textContent =
    timerElement.textContent = formatTime(timeLimit);

timer = setInterval(function() {
    timeLimit--;
    timerElement.textContent = formatTime(timeLimit);

    if (timeLimit <= 0) {
        endQuiz();
    }
}, 1000);
}

function formatTime(time) {
var minutes = Math.floor(time / 60);
var seconds = time % 60;
return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function endQuiz() {
clearInterval(timer);

var quizCard = document.querySelector('.quiz-card');
quizCard.innerHTML = '<h2>Quiz Completed</h2>' +
    '<p>Your score: ' + score + '/' + questions.length + '</p>';

}
startQuiz();