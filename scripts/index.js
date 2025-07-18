let questions = [];
let currentQuestion = 0;

const questionContent = document.getElementById('question-content');
const answerContent = document.getElementById('answer-content');

const currentQuestionNumber = document.getElementById('current-question');
const totalQuestionNumber = document.getElementById('total-question');

const card = document.querySelector(".card");
const cardInner = document.querySelector(".card-inner");

const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

function updateQuestion() {
    questionContent.textContent = questions[currentQuestion].question;
    answerContent.textContent = questions[currentQuestion].answer;

    currentQuestionNumber.textContent = String((currentQuestion+1));
    totalQuestionNumber.textContent = String((questions.length));
}

function createQuestion(question, answer) {
    return {
        question,
        answer,
    };
}

card.addEventListener("click", () => {
    cardInner.classList.toggle("flipped");
});

nextButton.addEventListener("click", () => {
   if (currentQuestion < questions.length - 1) currentQuestion++;
   updateQuestion();
})

prevButton.addEventListener("click", () => {
    if (currentQuestion > 0) currentQuestion--;
    updateQuestion();
})

questions.push(createQuestion(
    "What does Big O notation represent?",
    "Algorithm efficiency or complexity.")
);
questions.push(createQuestion(
    "What makes HTTPS different from HTTP?",
    "HTTPS uses encryption for secure data transfer.")
);
questions.push(createQuestion(
    "What is a REST API used for?",
    "To let systems communicate over HTTP."));
questions.push(createQuestion(
    "Why is Git important in development?",
    "It tracks code changes and supports collaboration.")
);
questions.push(createQuestion(
    "What happens in a coding whiteboard interview?",
    "You solve coding problems by writing and explaining code by hand.")
);

updateQuestion();
