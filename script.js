let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;
const maxAttempts = 3;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 50) {
    feedback.textContent = "please enter a number between 1 and 50!";
    feedback.style.color = "red";
    return;
  }
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts} / ${maxAttempts}`;
  if (userGuess === randomNumber) {
    feedback.textContent = "🏆 you win!";
    feedback.style.color = "green";
    submitBtn.disabled = true;
  } else if (attempts >= maxAttempts) {
    feedback.textContent = `😞 You lose! The number was ${randomNumber}.`;
    feedback.style.color = "red";
    submitBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "yellow";
  } else {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "orange";
  }

  guessInput.value = "";
  guessInput.focus();
}
function resetGame() {
  randomNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 0;
  attemptsDisplay.textContent = `Attempts: 0 / ${maxAttempts}`;
  feedback.textContent = "";
  submitBtn.disabled = false;
  guessInput.value = "";
  guessInput.focus();
}
submitBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
