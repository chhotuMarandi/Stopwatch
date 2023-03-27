let second = 0;
let miliSecond = 0;



const seconds = document.getElementById("seconds");
const miliSeconds = document.getElementById("mili-seconds");
const buttons = document.querySelectorAll(".btn");
// console.log(seconds)


function startTimer() {

}

function stopTimer() {

}

function resetTimer () {
  
}

function secondTimer(){
  setInterval(() => {
    seconds.innerHTML = second;
    second++;
  }, 1000);
}

function miliSecondTimer (){
  setInterval(() => {
    miliSeconds.innerHTML = miliSecond;
    miliSecond++;
  }, 100);
}

if (miliSeconds.innerHTML == 100) {
  secondTimer();
}

// miliSecondTimer();
// secondTimer();

for (let buttons of btn) {
  console.log(btn)
}

