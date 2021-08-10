const colorsData = require("./colors-data");
const randomInteger = require("./random-generator");

const body = document.querySelector("body");
const startBtn = document.querySelector("button");
const stopBtn = startBtn.nextElementSibling;

let timerId = null;

startBtn.style.cursor = "pointer";
stopBtn.style.cursor = "not-allowed";
stopBtn.setAttribute("disabled", true);

const onStartClick = () => {
  console.log("click on start");

  timerId = setInterval(changeBgc, 1000);

  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");

  startBtn.style.cursor = "not-allowed";
  stopBtn.style.cursor = "pointer";
};

const onStopClick = () => {
  console.log("click on stop");
  clearInterval(timerId);

  stopBtn.setAttribute("disabled", true);
  startBtn.removeAttribute("disabled");

  startBtn.style.cursor = "pointer";
  stopBtn.style.cursor = "not-allowed";
};

const changeBgc = () => {
  const randomIndex = randomInteger(0, colorsData.length - 1);
  body.style.backgroundColor = colorsData[randomIndex];
};

startBtn.addEventListener("click", onStartClick);
stopBtn.addEventListener("click", onStopClick);
