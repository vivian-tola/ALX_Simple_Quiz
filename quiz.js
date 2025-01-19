function checkAnswer() {
  // Function body
  const correctAnswer = "4";
  const radioButton = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  const userAnswer = radioButton.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
