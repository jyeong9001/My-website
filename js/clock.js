const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const miliseconds = String(date.getMilliseconds()).padStart(3, "0");
  if (hours === 12) {
    clock.innerText = `PM ${hours}:${minutes}:${seconds}:${miliseconds}`;
  } else if (hours < 12) {
    clock.innerText = `AM ${hours}:${minutes}:${seconds}:${miliseconds}`;
  } else {
    clock.innerText = `PM ${hours - 12}:${minutes}:${seconds}:${miliseconds}`;
  }
}

getDate();
setInterval(getDate, 10);
