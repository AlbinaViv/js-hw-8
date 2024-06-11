import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("[name='email']");
const messageEl = document.querySelector("[name='message']");

const LS_KEY = "feedback-form-state";

formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("input", throttle(handleInput, 500));

if (localStorage.getItem(LS_KEY)) {
  const text = JSON.parse(localStorage.getItem(LS_KEY));
  emailEl.value = text.email;
  messageEl.value = text.message;

  console.log(text);
}

const info = {};
console.log(info);

localStorage.getItem(LS_KEY);

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (!email || !message) {
    return alert("Всі поля повинні бути заповнені!");
  }

  localStorage.removeItem(LS_KEY);

  form.reset();
}

function handleInput(e) {
  info[e.target.name] = e.target.value;
  console.log(info);
  localStorage.setItem(LS_KEY, JSON.stringify(info));
}

// formEl.on("timeupdate", throttle(onPlay, 500));
