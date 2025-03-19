// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the form and password fields
  const form = document.querySelector("form");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirm-password");

  // Add an event listener for form submission
  form.addEventListener("submit", function (event) {
    // Check if the passwords match
    if (passwordField.value !== confirmPasswordField.value) {
      // If passwords do not match, alert the user and prevent form submission
      alert("Passwords do not match. Please try again.");
      event.preventDefault(); // Prevent the form from being submitted
    }
  });

  // Optional: Real-time password match check during typing
  confirmPasswordField.addEventListener("input", function () {
    // If the passwords do not match, set a custom validation message
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Passwords do not match.");
    } else {
      // If the passwords match, reset the custom validation message
      confirmPasswordField.setCustomValidity("");
    }
  });
});
