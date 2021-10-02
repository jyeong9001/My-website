const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("img/${chosenImage}")`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundSize = "cover";

// const bgImage = document.createElement("div");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
