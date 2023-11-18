// store all the timers
let i = 0, j = 0;
let audio, interval;
function startTimer(event) {
  playAudioAlert(event);
  j++;
  interval = setInterval(() => {
    let btn = event.id;
    event.innerText = "Delete";
    let child = document.getElementById(btn);
    let parent = child.parentNode;
    let timer = document.getElementById("-" + btn);
    let time = timer.innerText;
    const timeArr = time.split(":");
    let hour = parseInt(timeArr[0]) * 3600;
    let minute = parseInt(timeArr[1]) * 60;
    let second = parseInt(timeArr[2]);
    let totalTimeInSecond = hour + minute + second;
    totalTimeInSecond--;
    if (totalTimeInSecond == 0) {
      parent.removeChild(parent.childNodes[0]);
      parent.removeChild(parent.childNodes[1]);
      parent.removeChild(parent.childNodes[2]);
      audio.pause();
      parent.style.backgroundColor = "yellow";
      parent.innerHTML = `<h3>Timer Is Up !!</h3><button type="button" class="btn btn-secondary" style = "color : white; background-color : black">Stop</button>`;
      clearInterval(interval);
    }
    let curHour = parseInt(totalTimeInSecond / 3600);
    let curMinute = parseInt((totalTimeInSecond % 3600) / 60);
    let curSecond = totalTimeInSecond % 60;
    timer.innerText = curHour + " : " + curMinute + " : " + curSecond;
  }, 1000);
  if (j == 2) {
    let btn = event.id;
    let child = document.getElementById(btn);
    let parent = child.parentNode;
    parent.remove(0);
    audio = null;
    clearInterval(interval);
    return;
  }
}

// lets add the timer
function addTimer() {
  i++;
  let container = document.getElementById("parent");
  let card = document.createElement("div");
  card.id = "card";
  let cardId = "-" + i;
  let buttonId = i + "";

  card.innerHTML = `<h4>Set Time</h4>
  <div class="timer"  contenteditable="true" id = ${cardId} >00:00:00</div>
  <button onclick="startTimer(this)" id = ${buttonId}>Set</button>`;
  container.appendChild(card);
}
function playAudioAlert(event) {
  if (event.innerText != "Delete") {
    audio = new Audio("./timerMusic.mp3"); // Replace with the path to your audio file
    audio.play();
  } else {
    audio = null;
  }
}
addTimer();
