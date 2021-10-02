const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours === 12) {
    clock.innerText = `PM ${hours}:${minutes}`;
  } else if (hours < 12) {
    clock.innerText = `AM ${hours}:${minutes}`;
  } else {
    clock.innerText = `PM ${hours - 12}:${minutes}`;
  }
}

getDate();
setInterval(getDate, 1000);
