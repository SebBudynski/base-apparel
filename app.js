"use strict";

const submit = document.querySelector(".submit");
const hidden = document.querySelector(".hidden");
const message = document.querySelector(".message");

console.log(submit);
console.log(hidden);
console.log(message);

submit.addEventListener("click", () => {
  document.querySelector(".message").classList.toggle("hidden");
});
