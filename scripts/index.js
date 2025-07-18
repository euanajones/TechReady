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

questions.push(createQuestion("Question 1", "Answer 1"));
questions.push(createQuestion("Question 2", "Answer 2"));
questions.push(createQuestion("Question 3", "Answer 3"));
questions.push(createQuestion("Question 4", "Answer 4"));
questions.push(createQuestion("Question 5", "Answer 5"));

updateQuestion();
