'use strict';

let RandomNumber = Math.trunc(Math.random() * 10) + 1;
let scoreEasy = 10;
let highscore = 0;
//let pleaseselect = (document.querySelector('.mode').textContent =
// 'Please select a difficulty');

// check function
const checkgame = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  //If no selected difficulty
  //if (document.querySelector('.mode').textContent === 'Select a Difficulty'  {

  //}

  // If Correct number
  else if (guess === RandomNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!!';
    document.querySelector('.number').textContent = RandomNumber;
    document.querySelector('body').style.backgroundColor = '#12d11c';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '10rem';

    if (scoreEasy > highscore) highscore = scoreEasy;
    document.querySelector('.highscore').textContent = highscore;
  }
  // If number is too low
  else if (guess < RandomNumber) {
    document.querySelector('.message').textContent = 'Too low👇🏿';
    scoreEasy--;
    document.querySelector('.score').textContent = scoreEasy;
    // If you lost
    if (scoreEasy < 1) {
      document.querySelector('.message').textContent = 'You lost🤣!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      scoreEasy = 1;
    }
  }
  // If number is too high
  else if (guess > RandomNumber) {
    document.querySelector('.message').textContent = 'Too high☝🏿';
    scoreEasy--;
    document.querySelector('.score').textContent = scoreEasy;
  }
  if (scoreEasy < 1) {
    document.querySelector('.message').textContent = 'You lost🤣!';
    document.querySelector('body').style.backgroundColor = '#ff0000';
    scoreEasy = 1;
  }
  if (
    document.querySelector('.mode').textContent === 'Select a Difficulty' &&
    scoreEasy === 0
  ) {
    document.querySelector('.message').textContent =
      'Please select a difficulty';
  }
};

//Reset Function
const easyDiff = function () {
  scoreEasy = 10;
  document.querySelector('.score').textContent = scoreEasy;
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  console.log(scoreEasy, typeof scoreEasy);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.mode').textContent = 'Easy (1-20)';
};

const medDiff = function () {
  scoreEasy = 15;
  document.querySelector('.score').textContent = scoreEasy;
  RandomNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('.mode').textContent = 'Medium (1-50)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  console.log(scoreEasy, typeof scoreEasy);
  document.querySelector('.message').textContent = 'Start guessing...';
};

const hardDiff = function () {
  scoreEasy = 20;
  document.querySelector('.score').textContent = scoreEasy;
  RandomNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.mode').textContent = 'Hard (1-100)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  console.log(scoreEasy, typeof scoreEasy);
  document.querySelector('.message').textContent = 'Start guessing...';
};

document.querySelector('.check').addEventListener('click', checkgame);
// document.querySelector('.again').addEventListener('click', reset);
document.querySelector('.easy').addEventListener('click', easyDiff);
document.querySelector('.medium').addEventListener('click', medDiff);
document.querySelector('.hard').addEventListener('click', hardDiff);
