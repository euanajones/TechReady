let questions = [];
let masteredQuestions = [];
let currentQuestion = 0;

localStorage.clear()

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

const masterButton = document.getElementById("master-button");
const masteryPercentText = document.getElementById("mastery-percent");
const masteryBar = document.getElementById("mastery-progress");

if (!localStorage.getItem("globalID")) {
    localStorage.setItem("globalID", "1");
}

function getNextID() {
    const currentID = Number(localStorage.getItem("globalID"));
    localStorage.setItem("globalID", String(currentID + 1));
    return currentID;
}

function updateQuestion() {
    questionContent.textContent = questions[currentQuestion].question;
    answerContent.textContent = questions[currentQuestion].answer;

    currentQuestionNumber.textContent = String((currentQuestion+1));
    totalQuestionNumber.textContent = String((questions.length));

    const masteryPercent = calcMastery();

    masteryPercentText.textContent = String(masteryPercent);
    masteryBar.style.background = `linear-gradient(to right, var(--secondary-color) ${masteryPercent}%, 
    var(--text-color) ${masteryPercent}%)`;
}

function masterQuestion() {
    const question = questions[currentQuestion];

    masteredQuestions.push(question);
    questions.splice(currentQuestion, 1);

    currentQuestion--;

    updateQuestion();
}

function createQuestion(question, answer) {
    let newID = getNextID();

    let questionObj = {
        id: newID,
        question,
        answer,
    };

    questions.push(questionObj);
    localStorage.setItem(String(newID), JSON.stringify(questionObj));

    return questionObj;
}

function calcMastery() {
    let totalQuestions = questions.length + masteredQuestions.length;
    let numOfMasterQuestions = masteredQuestions.length;

    return Math.round((numOfMasterQuestions / totalQuestions) * 100);
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
    cardIDText.innerText = localStorage.getItem("globalID");
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

masterButton.addEventListener("click", () => {
    masterQuestion();
})

createQuestion(
    "What does Big O notation represent?",
    "Algorithm efficiency or complexity.");
createQuestion(
    "What makes HTTPS different from HTTP?",
    "HTTPS uses encryption for secure data transfer.");
createQuestion(
    "What is a REST API used for?",
    "To let systems communicate over HTTP.")
createQuestion(
    "Why is Git important in development?",
    "It tracks code changes and supports collaboration.");
createQuestion(
    "What happens in a coding whiteboard interview?",
    "You solve coding problems by writing and explaining code by hand.");

updateQuestion();
