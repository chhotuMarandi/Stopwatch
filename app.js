let second = 0;
let miliSecond = 0;

const seconds = document.getElementById("seconds");
const miliSeconds = document.getElementById("mili-seconds");
// console.log(seconds)


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

