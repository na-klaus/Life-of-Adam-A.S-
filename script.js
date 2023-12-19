// script.js

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    var resultDisplay = document.getElementById('result');

    if (selectedOption) {
        var userAnswer = selectedOption.value;

        if (userAnswer === 'a') {
            resultDisplay.textContent = 'Correct!';
        } else {
            resultDisplay.textContent = 'Incorrect. The correct answer is A: Vicegerency on Earth.';
        }
    } else {
        resultDisplay.textContent = 'Please select an answer.';
    }
}
