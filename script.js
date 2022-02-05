'use strict';
// ELEMENTS
const CHECK_BUTTON = document.querySelector('.check');
const MESSAGE = document.querySelector('.message');
const PLR_GUESS = document.querySelector('.guess');
const HIDDEN_NUMBER = document.querySelector('.number');
const SCORE = document.querySelector('.score');
const HIGHSCORE = document.querySelector('.highscore');
const AGAIN_BUTTON = document.querySelector('.again');
const BODY = document.querySelector('body');

// VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(HIGHSCORE.textContent);

function decreaseScore() {
  score--;
  SCORE.textContent = score;

  if (score === 0) {
    CHECK_BUTTON.disabled = true;
    MESSAGE.textContent = "😔 No more tries... Press 'Again' to play!";
  }
}

CHECK_BUTTON.addEventListener('click', e => {
  const guess = Number(PLR_GUESS.value);

  if (!guess) {
    MESSAGE.textContent = '⛔ Please specify a number first!';
    return;
  } else if (guess > secretNumber) {
    MESSAGE.textContent = '📈 You guessed too high!';
    decreaseScore();
  } else if (guess < secretNumber) {
    MESSAGE.textContent = '📉 You guessed too low!';
    decreaseScore();
  } else {
    MESSAGE.textContent = '✔ Correct!';
    HIDDEN_NUMBER.textContent = secretNumber;

    BODY.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      HIGHSCORE.textContent = highscore;
    }
  }
});

AGAIN_BUTTON.addEventListener('click', e => {
  score = 20;
  SCORE.textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  HIDDEN_NUMBER.textContent = '?';
  MESSAGE.textContent = 'Start guessing...';
  PLR_GUESS.value = 1;
  CHECK_BUTTON.disabled = false;
  BODY.style.backgroundColor = '#222';
});
