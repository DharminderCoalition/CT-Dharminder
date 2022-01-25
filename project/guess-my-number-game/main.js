"use strict";
let secretNumber= Math.trunc(Math.random()*20+1)
let score=20;
let highscore=0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess || guess >20) {
    document.querySelector(".message").textContent = 'Plear enter valid Number';
  }
  else if(guess===secretNumber){
    document.querySelector(".message").textContent = 'WOW Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor="#60b347";
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
  }
}
else if(guess !== secretNumber){
    if (score > 1) {
        document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number is low' : 'Number is high';
        score--;
        document.querySelector('.score').textContent = score;
      }else {
       document.querySelector('.message').textContent = 'Gamr over!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor="#ff0000";
      }
}
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing Again';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
