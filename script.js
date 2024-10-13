// Start with DOMContentLoaded Event:

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('DOM fully loaded and parsed');
});

// Form Selection:

const form = document.getElementById('registration-form');

// Feedback Division Selection:

const feedbackDiv = document.getElementById('form-feedback');

// Form Submission and Event Prevention
// 1.Form Submission Event Listener

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server

    // You can add your validation logic here
    console.log('Form submission prevented for client-side validation.');
});

// Input Retrieval and Trimming
//  1. Retrieve User Inputs:
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

// Validation Logic
// 1.Initialize Validation Variables:

let isValid = true; // Track the overall validation status
const messages = []; // Store validation error messages

// 2 .Username Validation:
if (username.length < 3) {
    isValid = false; // Set isValid to false
    messages.push('Username must be at least 3 characters long.'); // Add error message
}

// 3 . Email Validation:
if (!email.includes('@') || !email.includes('.')) {
    isValid = false; // Set isValid to false
    messages.push('Email must contain both "@" and "." characters.'); // Add error message
}

// 4 Password Validation:
if (password.length < 8) {
    isValid = false; // Set isValid to false
    messages.push('Password must be at least 8 characters long.'); // Add error message
}

// Displaying Feedback
// Feedback Display Logic
// Make feedbackDiv visible
feedbackDiv.style.display = "block"; 

if (isValid) {
    feedbackDiv.textContent = "Registration successful!"; // Success message
    feedbackDiv.style.color = "#28a745"; // Green color
} else {
    feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br>
    feedbackDiv.style.color = "#dc3545"; // Red color
}