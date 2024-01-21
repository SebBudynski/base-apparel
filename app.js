"use strict";

const submit = document.querySelector(".submit");
const emailInput = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".message");
const errorIcon = document.querySelector(".error-icon");

submit.addEventListener("click", (event) => {
  const emailValue = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);


  if (!isValidEmail) {
    errorMessage.classList.remove("hidden");
    event.preventDefault();
    errorIcon.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
  }
});
