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
      ms = 0;
      sec++;
    }

    if(sec == 60) {
      sec = 0;
      min++;
    }

    if(ms<10){
      ms = "0" + ms;
    }

    if(sec < 10){
      sec = "0" + sec;
    }


    stopwatch.innerHTML = min + " : " + sec + " : " + ms;

    setTimeout('timer()',10)
  }
}

const stopTimer = () => {
  isStop = true;
}

const resetTimer = () => {
  stopwatch.innerHTML = 00;
}


startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);