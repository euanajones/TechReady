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

const cardCreateCont = document.querySelector(".card-creation-container");
const cardIDText = document.getElementById("card-id");
const addCardButton = document.getElementById("add-card-button");
const newQuestionContent = document.getElementById("card-question");
const newAnswerContent = document.getElementById("card-answer");
const createCardButton = document.getElementById("create-card-button");
const cancelCardButton = document.getElementById("cancel-card-button");

function updateQuestion() {
    questionContent.textContent = questions[currentQuestion].question;
    answerContent.textContent = questions[currentQuestion].answer;

    currentQuestionNumber.textContent = String((currentQuestion+1));
    totalQuestionNumber.textContent = String((questions.length));
}

function createQuestion(id, question, answer) {
    let questionObj = {
        id,
        question,
        answer,
    };

    questions.push(questionObj);
    localStorage.setItem(id, JSON.stringify(questionObj));

    return questionObj;
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

addCardButton.addEventListener("click", () => {
    cardCreateCont.classList.toggle("isShown");
})

createCardButton.addEventListener("click", () => {
    createQuestion(currentQuestion+1, newQuestionContent.value, newAnswerContent.value);
    updateQuestion();
    cardCreateCont.classList.toggle("isShown");
})

cancelCardButton.addEventListener("click", () => {
    newQuestionContent.value = "Enter question...";
    newAnswerContent.value = "Enter answer...";
    cardCreateCont.classList.toggle("isShown");
})

createQuestion(
    1,
    "What does Big O notation represent?",
    "Algorithm efficiency or complexity.");
createQuestion(
    2,
    "What makes HTTPS different from HTTP?",
    "HTTPS uses encryption for secure data transfer.");
createQuestion(
    3,
    "What is a REST API used for?",
    "To let systems communicate over HTTP.")
createQuestion(
    4,
    "Why is Git important in development?",
    "It tracks code changes and supports collaboration.");
createQuestion(
    5,
    "What happens in a coding whiteboard interview?",
    "You solve coding problems by writing and explaining code by hand.");

updateQuestion();
