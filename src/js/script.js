"use strict";

// ELEMENT/S
const formEl = document.querySelector(".main__form");
const inputEl = document.querySelector(".main__input");
const errMessage = document.querySelector(".error-message");

// FUNCTION/S

function addErrMessage() {
	// -- Add error message to the span element
	errMessage.textContent = "Please provide a valid email address";

	// -- Add ".error-input" class to input
	inputEl.classList.add("error-input");
}

function removeErrMessage() {
	// -- Clear error message
	errMessage.textContent = "";

	// -- Remove ".error-input" class from input
	inputEl.classList.remove("error-input");
}

function isValidEmail(email) {
	// -- Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// -- Testing the email, returns true if valid. Else, false
	return emailRegex.test(email);
}

// EVENT LISTTENER/S
formEl.addEventListener("submit", (event) => {
	// -- Prevent default form behavior
	event.preventDefault();

	// -- Check if the email is valid. If not, add error message. If yes, remove error message
	if (!isValidEmail(inputEl.value)) {
		addErrMessage();
	} else {
		removeErrMessage();
	}
});

// -- If use is typing in input, remove error message
inputEl.addEventListener("input", () => {
	removeErrMessage();
});
