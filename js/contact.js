import { displayMessage } from "./displayMessage.js";

const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const submitBtn = document.querySelector("button");

// function to check the input value
function validatForm() {
  if (checkValue(fullName.value, 0)) {
    nameError.innerHTML = "";
    fullName.style.border = "2px solid green";
  } else {
    nameError.innerHTML = "Please enter your name";
  }

  if (checkValue(subject.value, 10)) {
    subjectError.innerHTML = "";
    subject.style.border = "2px solid green";
  } else {
    subjectError.innerHTML = "Your subject must be at least 10 characters";
  }

  if (checkEmail(email.value)) {
    emailError.innerHTML = "";
    email.style.border = "2px solid green";
  } else {
    emailError.innerHTML = "Please enter a valid email address";
  }

  if (checkValue(address.value, 25)) {
    addressError.innerHTML = "";
    address.style.border = "2px solid green";
  } else {
    addressError.innerHTML = "Your address must be at least 25 characters";
  }

  if (
    checkValue(fullName.value, 0) &&
    checkValue(subject.value, 10) &&
    checkEmail(email.value) &&
    checkValue(address.value, 25)
  ) {
    submitBtn.disabled = false;
  } else {
   
    submitBtn.disabled = true;
  }
}

fullName.addEventListener("keyup", validatForm);
subject.addEventListener("keyup", validatForm);
email.addEventListener("keyup", validatForm);
address.addEventListener("keyup", validatForm);

form.addEventListener("submit", validatForm);

function checkValue(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const passedEmail = regEx.test(email);
  return passedEmail;
}
