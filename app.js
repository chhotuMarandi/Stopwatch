let isStop = true;

const stopwatch = document.getElementById("stopwatch");
const startBtn = document.getElementById("start");


let ms = 0;
let s = 0;
let m = 0;

const start = () => {
  
  if (isStop == true) {
    isStop == false
    ms++;
    timer();
  }
};

const timer = () => {
  if(isStop == false) {
    setInterval(()=>{
      console.log(ms)
    },1000)
  }
};

startBtn.addEventListener('click', start);