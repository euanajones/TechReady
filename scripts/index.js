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

let card = document.querySelector(".card");
let cardInner = document.querySelector(".card-inner");

card.addEventListener("click", () => {
    cardInner.classList.toggle("flipped");
});