document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Function to validate form fields
    function validateForm(form) {
        let isFormValid = true;

        // First Name validation
        const firstNameInput = document.getElementById('signupFirstName');
        const firstNameError = document.getElementById('firstNameError');
        if (firstNameInput && firstNameInput.value.trim().length < 1) {
            firstNameError.style.display = 'block';
            firstNameInput.classList.add('is-invalid');
            firstNameInput.classList.remove('is-valid');
            isFormValid = false;
        } else {
            firstNameError.style.display = 'none';
            firstNameInput.classList.remove('is-invalid');
            firstNameInput.classList.add('is-valid');
        }

        // Last Name validation
        const lastNameInput = document.getElementById('signupLastName');
        const lastNameError = document.getElementById('lastNameError');
        if (lastNameInput && lastNameInput.value.trim().length < 3) {
            lastNameError.style.display = 'block';
            lastNameInput.classList.add('is-invalid');
            lastNameInput.classList.remove('is-valid');
            isFormValid = false;
        } else {
            lastNameError.style.display = 'none';
            lastNameInput.classList.remove('is-invalid');
            if (lastNameInput.value.trim().length > 0) {
                lastNameInput.classList.add('is-valid');
            } else {
                lastNameInput.classList.remove('is-valid');
            }
        }

        // Email validation
        const emailInput = document.getElementById('signupEmail');
        const emailError = document.getElementById('emailError');
        if (emailInput && (emailInput.value === '' || !emailInput.checkValidity())) {
            emailError.style.display = 'block';
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            isFormValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        return isFormValid;
    }

    // Function to store form data
    function storeFormData() {
        sessionStorage.setItem('signupFirstName', document.getElementById('signupFirstName').value);
        sessionStorage.setItem('signupLastName', document.getElementById('signupLastName').value);
        sessionStorage.setItem('signupEmail', document.getElementById('signupEmail').value);

        let selectedLocation = document.querySelector('input[name="signupLocation"]:checked');
        if (selectedLocation) {
            sessionStorage.setItem('selectedSignupLocation', selectedLocation.value);
        }
    }

    // Function to retrieve and set form data
    function retrieveFormData() {
        if (sessionStorage.getItem('signupFirstName')) {
            document.getElementById('signupFirstName').value = sessionStorage.getItem('signupFirstName');
        }
        if (sessionStorage.getItem('signupLastName')) {
            document.getElementById('signupLastName').value = sessionStorage.getItem('signupLastName');
        }
        if (sessionStorage.getItem('signupEmail')) {
            document.getElementById('signupEmail').value = sessionStorage.getItem('signupEmail');
        }

        let storedLocation = sessionStorage.getItem('selectedSignupLocation');
        if (storedLocation) {
            let radioToCheck = document.querySelector(`input[name="signupLocation"][value="${storedLocation}"]`);
            if (radioToCheck) {
                radioToCheck.checked = true;
            }
        }
    }

    // Retrieve and set data when the page loads
    retrieveFormData();

    // Form submission event listener
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (validateForm(form)) {
            storeFormData();
            // Navigate to another page if needed
            window.location.href = './signup2.html';
        }
        form.classList.add('was-validated');
    });
});


