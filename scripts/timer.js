let time_str = '15:00';
let original, time;
let stop = true;

const ChangeTime = () => {
  time_str = document.getElementById('timeInput').value;
  original = Number(time_str.split(":")[0]) * 60 + Number(time_str.split(":")[1] === undefined ? 0 : time_str.split(":")[1]);
  time = original;
  updateTimer();
}

const Start = () => {
  const timer = () => {
    setTimeout(() => {
      if(!stop) {
        if (time > 0) {
          time--;
          updateTimer();
          timer();
        } else {
          confirm("Time is over!!!");
          ChangeTime();
          stop = true;
        }
      }
    }, 1000);
  }

  if(stop) {
    stop = false;
    timer();
  } else {
    stop = true;
  }
}

const Stop = () => {
  ChangeTime();
  stop = true;
}

const updateTimer = () => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  document.getElementById('minutes').innerHTML= zeroPad(minutes, 2);
  document.getElementById('seconds').innerHTML = zeroPad(seconds, 2);
}

const zeroPad = (num, places) => String(num).padStart(places, '0');

document.addEventListener("DOMContentLoaded", ChangeTime);