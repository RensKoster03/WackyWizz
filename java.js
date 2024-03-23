const goblin = document.querySelector('#goblin');
let wizard = document.querySelector(".wizard")

const scoreBoard = document.querySelector("#score");
let score = 100;

let timeLeft = 70;
const timerInterval = setInterval(updateTimer, 1000);

const grunt = new Audio ('assets/grunt.mp3');
const wizardNoise = ["assets/fireball.mp3", "assets/huah.mp3", "assets/kablamo.mp3", "assets/hiyah.mp3", "assets/huzzah.mp3", "assets/lightning_bolt.mp3"]
// randomizer van wizardgeluiden
function wizardSound(){
  const audioIndex = Math.floor(Math.random() * wizardNoise.length);
  const audio = new Audio(wizardNoise[audioIndex]);
  audio.play();
}
// timer 
function updateTimer() {
  document.getElementById('timer').innerText = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    window.location.href = 'gameover.html';
  }
}
// updaten van hp 
function scoreGoblin(){
    score = score - 1;
    scoreBoard.textContent = score;
    if (score <= 0) {
      window.location.href = 'win.html';
    }
    if (score <= 60) {
      goblin.src = 'assets/goblinhurt1.png'
    }
    if (score <= 20) {
      goblin.src = 'assets/goblinhurt2.png'
    }
}
// Wizard animatie
function changeWiz() {
  wizard.src = 'assets/wizard_cast.png'
  setTimeout(() => {
    wizard.src = 'assets/thewizard.png'
  }, 300);
}
// verplaatsen van goblin over de map
function tpGoblin() {
  goblin.style.left = Math.floor(Math.random() * 1200) + "px"
  goblin.style.top = Math.floor(Math.random() * 200) + "px"
}
// geluid bij klikken
function hitAudio() {
  grunt.play()
  wizardSound()
}

goblin.addEventListener('click', scoreGoblin);

goblin.addEventListener('click', tpGoblin)

goblin.addEventListener('click', hitAudio)

goblin.addEventListener('click', changeWiz)

// Bronnen gebruikt:
// https://pngimg.com/image/83360
// https://copilot.microsoft.com
// https://www.youtube.com/watch?v=icU0IPfv_-o
// https://www.youtube.com/watch?v=-9EF4gDvfto