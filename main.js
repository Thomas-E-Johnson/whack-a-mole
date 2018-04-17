const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;

function randomTime(min, max) {
  //math.random gives a number between 0 and 1
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Same hole dude!');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//timestamp 6:19
