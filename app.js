let isStop = true;

const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");


let ms = 0;
let s = 0;
let m = 0;



function startTimer () {
  if (isStop == true) {
    isStop = false
    timer();
  }
};


function timer (){
  if(isStop == false) {
    ms++;
    setTimeout('timer()',1000)
  }
}

const stopTimer = () => {
  isStop == true;
}


// const timer = () => {
//   if(isStop == false) {
//     console.log("hi");
//     ms++;
//     timer.innerHTML = ms;
//     setTimeout("timer()", 1000);
//   }
// }; 

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);