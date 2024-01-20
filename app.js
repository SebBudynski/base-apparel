"use strict";

// const hidden = document.querySelector(".hidden");
// const message = document.querySelector(".message");

// console.log(submit);
// console.log(hidden);
// console.log(message);

// submit.addEventListener("click", () => {
//   document.querySelector(".message").classList.toggle("hidden");
// });

const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".message");
const error = document.querySelector(".error");

submit.addEventListener("click", (event) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  const emailValue = emailInput.value.trim();


  if (!isValidEmail) {
    errorMessage.classList.remove("hidden");
    event.preventDefault();
    error.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
  }
});
