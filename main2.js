var questions = [{
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheet", "Colorful Style Sheet", "Creative Style Sheet", "Computer Style Sheet"],
    answer: 0
    }, {
    question: "What is the correct CSS syntax for making all the <span> elements bold?",
    options: ["span {text-size: bold}", "span {font-weight: bold}", "<span style='font-size: bold'>", "<span style='text-size: bold'>"],
    answer: 1
    }, {
    question: "How do you add a comment in a CSS file?",
    options: ["/* this is a comment */", "// this is a comment //", "// this is a comment","<!-- this is a comment-->"],
    answer: 0
    }, {
    question: "What property is used to change the text color of an element?",
    options: ["fontcolor:", "Textcolor:", "color:", "font-color:"],
    answer: 2
    }, {
    question: "The # symbol specifies that the selector is?",
    options: ['Class', "Id", "Tag", "First"],
    answer: 1
    }, {
    question: "Which is the correct CSS syntax?",
    options: ["{p:color=black(p}", "p {color: black;}", "{p;color:black}", "p:color=black"],
    answer: 1
    }, {
    question: "Which snippet of CSS is commonly used to center a website horizontally?",
    options: ["site-align: center;", "margin: center;", "margin: auto 0;", "margin: 0 auto;"],
    answer: 3
    }, {
    question: "How do you make a list not display bullet points?",
    options: ["list-style-type: no-bullet", "list: none", "bulletpoints: none", "list-style-type: none"],
    answer: 3
    }, {
    question: "What is the correct CSS syntax to change the font name?",
    options: ["font-name:", "font:", "font-family:", "fontname:"],
    answer: 2
    }, {
    question: "What is the correct Syntax for importing a stylesheet in CSS?",
    options: ["@import url(css/example.css);", "@import-stylesheet url(css/example.css);","import-css url(css/example.css);","@import-style url(css/example.css);"],
    answer: 0
    }, {
    question: "Which HTML attribute is used to define inline CSS styles?",
    options: ["CSS", "Style","ID","Type"],
    answer: 1
    }, {
    question: "How do you make each word in a text start with a capital letter?",
    options: ["text-transform: capitalize", "text-transform: uppercase", "You can't do that with CSS", "text: capitalize"],
    answer: 0
    }, {
    question: "What is the correct CSS syntax for making all the <p> tags font size 14px?",
    options: ["p {14px}", "p {font-size: 14px;}", "p {text-size: 14px;}", "p {font: 14px;}"],
    answer: 2
    }, {
    question: "A declaration is terminated by?",
    options: [". - period", "! - exclamation mark", "; - semi colon", ": - colon"],
    answer: 2
    }, {
    question: "Which CSS property controls the text size?",
    options: ["font-height", "text-size", "font-size", "text-style"],
    answer: 2
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