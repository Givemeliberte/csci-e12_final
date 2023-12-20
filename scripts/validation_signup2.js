document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", (event) => {
    // Prevent the default form submission
    event.preventDefault();

    let isFormValid = true;

    // Password validation
    const passwordInput = document.getElementById("signupPassword");
    const passwordError = document.getElementById("passwordError");
    // Password length should be at least 6 characters
    if (passwordInput && passwordInput.value.length < 6) {
      passwordError.style.display = "block";
      passwordInput.classList.add("is-invalid");
      isFormValid = false;
    } else {
      passwordError.style.display = "none";
      passwordInput.classList.remove("is-invalid");
    }

    // Confirm Password validation
    const confirmPasswordInput = document.getElementById(
      "signupConfirmPassword"
    );
    const confirmPasswordError = document.getElementById(
      "confirmPasswordError"
    );
    if (
      confirmPasswordInput &&
      confirmPasswordInput.value !== passwordInput.value
    ) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordError.style.display = "block";
      confirmPasswordInput.classList.add("is-invalid");
      isFormValid = false;
    } else if (confirmPasswordInput && confirmPasswordInput.value.length < 6) {
      confirmPasswordError.textContent =
        "Confirm password does not meet requirements.";
      confirmPasswordError.style.display = "block";
      confirmPasswordInput.classList.add("is-invalid");
      isFormValid = false;
    } else {
      confirmPasswordError.style.display = "none";
      confirmPasswordInput.classList.remove("is-invalid");
    }

    // If form is valid, navigate to the next page
    if (isFormValid) {
      // Navigate to confirmation page
      window.location.href = "./thanks.html";
    }

    form.classList.add("was-validated");
  });
});
