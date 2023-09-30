// store all the timers
let arr = [];
arr.push("timer");
let myInterval;
let i = 65;
let l;
// console.log(arr[0]);
function startTimer() {
    myInterval = setInterval(myTimer, 1000);
}
function myTimer() {
  let element = document.getElementById(arr[0]).innerText;
  let time = element.split(":");
  let hour = parseInt(time[0]);
  let min = parseInt(time[1]);
  let second = parseInt(time[2]);
  let i = 0;
  let totalSecond = hour * 60 * 3600 + min * 60 + second;
  if (totalSecond == 1) {
    myStopFunction();
    return;
  }
  if (totalSecond > 1) {
    if (second < 1) {
      min -= 1;
      second = 60;
    }
    if (min < 0) {
      hour -= 1;
      min = 59;
    }
    second--;
    totalSecond--;

    document.getElementById(arr[0]).innerHTML = hour + ":" + min + ":" + second;
  }
}

function myStopFunction() {
  clearInterval(myInterval);
}

// lets add the timer
function addTimer() {
  let container = document.getElementById("parent");
  let card = document.createElement("div");
  card.contentEditable = true;
  card.style.display = "flex";
  card.style.width = "30vw";
  card.style.height = "5vh";
  card.style.top = "132px";
  card.style.borderRadius = "20px";
  card.style.marginLeft = "5vw";
  card.style.marginTop = "20px";
  card.style.alignItems = "center";
  card.style.justifyContent = "space-between";
  card.style.paddingInline = "30px";
  card.style.boxSizing = "border-box";
  card.style.padding = "20px";
  card.style.backgroundColor = "#34344a";
  card.id = "card" + String.fromCharCode(i);
  console.log(card.id);
  arr.push(card.id);
  i++;
  container.appendChild(card);

  let h4 = document.createElement("h4");
  h4.innerText = "Set Time";
  h4.style.color = "white";
  card.appendChild(h4);

  let timer = document.createElement("div");
  timer.innerText = "00:00:00";
  timer.style.color = "white";
  timer.style.backgroundColor = "#34344a";
  timer.id = "timer";
  card.appendChild(timer);

  let btn = document.createElement("button");
  btn.innerText = "Set";
  btn.addEventListener("click", startTimer);
  btn.style.borderRadius = "10%";
  btn.style.backgroundColor = "#f0f757";
  btn.style.width = "80px";
  btn.style.height = "30px";
  btn.style.border = "none";
  card.appendChild(btn);
}
