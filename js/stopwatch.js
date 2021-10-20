const stopwatchBtn = document.querySelector(".stopwatch-btn__form");
const stopwatchBox = document.querySelector(".stopwatch-container");
const todoBox = document.querySelector(".first-column");
let classes1 = stopwatchBox.classList;
let classes2 = todoBox.classList;

function showStopwatch() {
  let result1 = classes1.toggle("hidden");
  let result2 = classes2.toggle("show");
}

stopwatchBtn.addEventListener("click", showStopwatch);

const milisec = 1,
  sec = milisec * 1000,
  min = sec * 60;

let initLaps = function () {
  let lapsContainer = document.getElementById("lapsContainer");
  let ul = document.createElement("ul");
  ul.id = "laps";
  lapsContainer.appendChild(ul);
  let hrContainer = document.createElement("div");
  lapsContainer.appendChild(hrContainer);
  for (let i = 0; i < 8; i++) {
    hrContainer.appendChild(document.createElement("hr"));
  }
};
initLaps();

let topbarTime = document.getElementById("topbarTime");
let hourNow = new Date().getHours(),
  minNow = new Date().getMinutes();
topbarTime.innerText = `${hourNow < 10 ? "0" + hourNow : hourNow}:${
  minNow < 10 ? "0" + minNow : minNow
}`;

function Button(id) {
  this.html = document.getElementById(id);
}
Button.prototype.disappear = function () {
  this.html.style.visibility = "hidden";
};
Button.prototype.appear = function () {
  this.html.style.visibility = "visible";
};
Button.prototype.changecolor = function (color, bgColor) {
  this.html.style.color = color;
  this.html.style.backgroundColor = bgColor;
  this.html.style.border = `2px solid ${bgColor}`;
};

let startbtn = new Button("btn-start"),
  stopbtn = new Button("btn-stop"),
  lapsbtn = new Button("btn-laps"),
  resetbtn = new Button("btn-reset");

let mmin, msec, mmsec, clockText;
let timer = 0,
  lapCount = 0;
let stopWatch = document.getElementById("stopwatch");

function timerf() {
  timer += 10;
  clockText = timeText(mmin, msec, mmsec, timer);
  stopWatch.innerText = clockText;
  changeLap();
}

function timeText(m, s, ms, tm) {
  m = Math.floor(tm / min);
  s = Math.floor((tm % min) / sec);
  ms = Math.floor((tm % sec) / 10);
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}.${
    ms < 10 ? "0" + ms : ms
  }`;
}

function addLap() {
  let ul = document.getElementById("laps");
  let addli = document.createElement("li");
  ul.appendChild(addli);
  addli.id = `lap${lapCount}`;

  let liLeft = document.createElement("span");
  liLeft.id = `lapcount${lapCount}`;
  addli.appendChild(liLeft);

  let liRight = document.createElement("span");
  liRight.id = `lapwatch${lapCount}`;
  liRight.className = "stopwatch-right";
  addli.appendChild(liRight);
  lapCount += 1;
}

let lmin, lsec, lmsec, lapText;
let laptimer = 0;

function lapreset() {
  laptimer = 0;
}
function changeLap() {
  laptimer = lapCount <= 1 ? timer : laptimer + 10;
  lapText = timeText(lmin, lsec, lmsec, laptimer);
  let lapwatch = document.getElementById(`lapwatch${lapCount - 1}`);
  lapwatch.innerText = lapText;
  let lapcnt = document.getElementById(`lapcount${lapCount - 1}`);
  lapcnt.innerText = `Lap ${lapCount}`;
}

function removeLap() {
  let ul2 = document.getElementById("laps");
  let child = ul2.lastElementChild;
  while (child) {
    ul2.removeChild(child);
    child = ul2.lastElementChild;
  }
  let lapsContainer = document.getElementById("lapsContainer");
  child = lapsContainer.lastElementChild;
  while (child) {
    lapsContainer.removeChild(child);
    child = lapsContainer.lastElementChild;
  }
}
addLap();

startbtn.html.onclick = () => {
  let loop = 1;
  let tm = setInterval(timerf, 10);
  startbtn.disappear();
  stopbtn.appear();
  lapsbtn.appear();
  resetbtn.disappear();
  lapsbtn.changecolor("#F5F5F5", "#4D4D4D");
  changeLap();

  stopbtn.html.onclick = function () {
    clearInterval(tm);
    stopbtn.disappear();
    startbtn.appear();
    lapsbtn.disappear();
    resetbtn.appear();

    resetbtn.html.onclick = function () {
      stopWatch.innerText = "00:00.00";
      lapsbtn.changecolor("#A8A8A8", "#303030");
      resetbtn.disappear();
      lapsbtn.appear();
      removeLap();
      initLaps();
      laptimer = 0;
      lapCount = 0;
      timer = 0;
      loop = 0;
      addLap();
    };
  };
  lapsbtn.html.onclick = function () {
    if (loop == 1) {
      addLap();
      lapreset();
      changeLap();
    }
  };
  lapsbtn.html.onmousedown = function () {
    if (loop == 1) {
      lapsbtn.changecolor("#F5F5F5", "#303030");
    }
  };
  lapsbtn.html.onmouseup = function () {
    if (loop == 1) {
      lapsbtn.changecolor("#F5F5F5", "#4D4D4D");
    }
  };
};
