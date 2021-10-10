const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const dating = document.querySelector("#dating");
const todoForm = document.querySelector(".todo-container");

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
  todoForm.classList.remove("hidden");
  dating.classList.remove("hidden");
  greeting.innerText = `Welcome ${event}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
