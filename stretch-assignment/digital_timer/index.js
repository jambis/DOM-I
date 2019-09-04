let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");
let digits = document.querySelectorAll(".digit");

let timerObj = null;
let time = 0;

function updateDigits(time) {
  if (time % 10000 == 0) {
    secondTens.textContent = incrementDigit(secondTens.textContent);
    secondOnes.textContent = "0";
    msHundreds.textContent = "0";
    msTens.textContent = "0";
    addRedDigit();
    buttonStart.disabled = false;
  } else if (time % 1000 == 0) {
    secondOnes.textContent = incrementDigit(secondOnes.textContent);
    msHundreds.textContent = "0";
    msTens.textContent = "0";
  } else if (time % 100 == 0) {
    msHundreds.textContent = incrementDigit(msHundreds.textContent);
    msTens.textContent = "0";
  } else {
    msTens.textContent = incrementDigit(msTens.textContent);
  }
}

function incrementDigit(digitString) {
  return (Number(digitString) + 1).toString();
}

function addRedDigit() {
  digits.forEach(digit => digit.classList.add("redDigit"));
}

function removeRedDigit() {
  digits.forEach(digit => digit.classList.remove("redDigit"));
}

function start() {
  time = 0;

  secondTens.textContent = "0";
  secondOnes.textContent = "0";
  msHundreds.textContent = "0";
  msTens.textContent = "0";
  buttonStart.disabled = true;
  removeRedDigit();

  if (!timerObj) {
    timerObj = setInterval(manageTimer, 10);
  }
}

function reset() {
  time = 0;

  secondTens.textContent = "0";
  secondOnes.textContent = "0";
  msHundreds.textContent = "0";
  msTens.textContent = "0";
  buttonStart.disabled = false;
  removeRedDigit();

  if (timerObj) {
    clearTimer();
  }
}

function clearTimer() {
  clearInterval(timerObj);
  timerObj = null;
}

function manageTimer() {
  time += 10;

  time > 10000 ? clearTimer() : updateDigits(time);
}

let buttonStart = document.createElement("button");
let buttonReset = document.createElement("button");
let body = document.querySelector("body");

buttonStart.textContent = "Start Counter";
buttonReset.textContent = "Reset Counter";
body.appendChild(buttonStart);
body.appendChild(buttonReset);
buttonStart.addEventListener("click", function(e) {
  start();
});
buttonReset.addEventListener("click", function(e) {
  reset();
});
