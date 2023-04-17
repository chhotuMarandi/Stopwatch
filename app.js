let isStop = true;

const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


let ms = 0;
let sec = 0;
let min = 0;



function startTimer () {
  if (isStop == true) {
    isStop = false
    timer();
  }
};


function timer (){
  
  ms = parseInt(ms);
  sec = parseInt(sec);
  min = parseInt(min);

  if(isStop == false) {
    ms++;
    

    if(ms == 100) {
      sec++;
      ms = 0;
    }

    if(sec == 60) {
      min++;
      sec = 0;
    }

    if(ms<10){
      ms = "0" + ms;
    }

    if(sec < 10){
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }


    stopwatch.innerHTML = min + " : " + sec + " : " + ms;

    setTimeout('timer()',6.9)
  }
}

const stopTimer = () => {
  isStop = true;
}

const resetTimer = () => {
  isStop = true;
  ms = 0;
  sec = 0;
  min = 0;
  stopwatch.innerHTML = "00 : 00 : 00";

}


startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);