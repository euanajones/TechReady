function createQuestion(question, answer) {
    return {
        question,
        answer,
    };
}

let testQuestion = createQuestion(
    "This is a test question",
    "This is a test answer"
);

console.log(testQuestion);

let cardSide = document.getElementById("card-side");
let questionText = document.getElementById("question-text");

let card = document.getElementById("card");

cardSide.textContent = "Question";
questionText.textContent = testQuestion.question;

card.addEventListener("click", () => {
    questionText.textContent = testQuestion.answer
});