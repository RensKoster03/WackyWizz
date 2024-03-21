let goblin = document.querySelector('#goblin');

const scoreBoard = document.querySelector("#score");

let score = 100;

let timeLeft = 70;

const timerInterval = setInterval(updateTimer, 1000);

const grunt = new Audio ('assets/grunt.mp3');

const fire = new Audio ('assets/fireball.mp3');

const wizardNoise = ["assets/fireball.mp3", "assets/huah.mp3", "assets/kablamo.mp3", "assets/hiyah.mp3", "assets/huzzah.mp3", "assets/lightning_bolt"]

function wizardSound(){
  const audioIndex = Math.floor(Math.random() * wizardNoise.length);
  const audio = new Audio(wizardNoise[audioIndex]);
  audio.play();
}

function updateTimer() {
  document.getElementById('timer').innerText = timeLeft;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    window.location.href = 'gameover.html';
  }
}

function hitGoblin(){
    score = score - 1;
    scoreBoard.textContent = score;
    goblin.style.left = Math.floor(Math.random() * 1200) + "px"
    goblin.style.top = Math.floor(Math.random() * 300) + "px"
    grunt.play()
    wizardSound()
    if (score <= 0) {
      window.location.href = 'win.html';
    }

}

goblin.addEventListener('click', hitGoblin);


