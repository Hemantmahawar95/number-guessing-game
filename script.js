let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;
  let message = document.getElementById("message");
  let guesses = document.getElementById("guesses");

  if (guess === "") {
    message.innerHTML = "⚠️ Please enter a number!";
    return;
  }

  attempts++;
  guess = parseInt(guess);

  if (guess < randomNumber) {
    message.innerHTML = "📉 Try a larger number!";
  } else if (guess > randomNumber) {
    message.innerHTML = "📈 Try a smaller number!";
  } else {
    message.innerHTML = `🎉 Congratulations! You guessed it in ${attempts} tries!`;
  }

  guesses.innerHTML = `Number of attempts: ${attempts}`;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("guesses").innerHTML = "";
}
