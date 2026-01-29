const correctElement = document.querySelector('.counter .correct');
const incorrectElement = document.querySelector('.counter .incorrect');

if (!correctElement || !incorrectElement) {
    console.error('unable to find elements')
}

function showAnswer(e) {
    const button = e.target;
    const parentQuestion = button.closest(`.question`)
    const answer = parentQuestion.querySelector(`.answer`)

    answer.hidden = false;
}

function questionAnswerListener(e) {
    const button = e.target;

    const isCorrect = button.classList.contains('button-correct')
    const isinorrect = button.classList.contains('button-incorrect')
    const parentQuestion = button.closest(`.question`)
    const answer = parentQuestion.querySelector(`.answer`)
    //Todo disable á takka
    const incorrectButton = parentQuestion.querySelector(".button-incorrect");
    const correctButton = parentQuestion.querySelector(".button-correct");

    console.log(button.parentQuestion)

    if (!correctElement) {
        throw new Error('Missing correct Element')
    }

    if (isCorrect) {
        const currentCorrectText = correctElement?.textContent;
        const currentCorrect = Number.parseInt(currentCorrectText ?? '0');

        const updatedCorrect = currentCorrect + 1;

        correctElement.textContent = updatedCorrect.toString();
        incorrectButton.disabled = true;
        correctButton.disabled = true;

    } else if (isinorrect){
        const currentIncorrectText = incorrectElement?.textContent;
        const currentIncorrect = Number.parseInt(currentIncorrectText ?? '0');

        const updatedInCorrect = currentIncorrect + 1;

        incorrectElement.textContent = updatedInCorrect.toString();
        incorrectButton.disabled = true;
        correctButton.disabled = true;

    } else {
        answer.hidden = false;

    }

}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener('click', questionAnswerListener)
}