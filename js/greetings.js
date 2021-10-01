const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
}

function paintGreeting(event) {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${event}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
