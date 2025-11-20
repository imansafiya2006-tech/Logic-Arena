let randomNumber =Math.floor(Math.random() * 50) + 1;
let attempts = 0;
const maxAttempts = 3;

const guessInput = document.getElementById("guessInput");
const submitBtn = document .getElementById("submitBtn");
const feedback =document .getElementById("feedback");
const attemptsDisplay =document .getElementById("attempts");
const resetBtn =document .getElementById("resetBtn")

