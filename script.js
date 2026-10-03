let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;


const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const playAgainBtn =document.getElementById("tryAgainBtn");

function checkGuess() {
    const guess = Number(guessInput.value);

    if (guessInput.value === "" || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attemptCount++;
    attemptsDisplay.textContent = "Attempts: " + attemptCount;

    if (guess > secretNumber) {
        feedback.textContent = "Too high!";
    } else if (guess < secretNumber) {
        feedback.textContent = "Too low!";
    } else {
        feedback.textContent = "Correct! You got it in " + attemptCount + " attempts.";
        guessBtn.disables = true;
    }

    guessInput.value = "";
    guessInput.focus();
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    attemptsDisplay.textContent = "Attempts: 0";
    feedback.textContent = "";
    guessInput.value = "";
    guessBtn.disabled = false;
    guessInput.focus();
}

guessBtn.addEventListener("click", checkGuess);
playAgainBtn.addEventListener("click", resetGame);