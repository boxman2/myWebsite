const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const userInput= loginInput.value;

function loginSubmitter(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, userInput);
  greetingText(userInput)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

function greetingText(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", loginSubmitter)
} else {
  greetingText(savedUsername)
}