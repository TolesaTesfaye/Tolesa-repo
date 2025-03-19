document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    // Check if passwords match
    if (passwordField.value !== confirmPasswordField.value) {
      alert("Passwords do not match. Please try again.");
      event.preventDefault(); // Prevent form submission
    }
  });

  // Optional: Real-time password match check
  confirmPasswordField.addEventListener("input", function () {
    if (passwordField.value !== confirmPasswordField.value) {
      confirmPasswordField.setCustomValidity("Passwords do not match.");
    } else {
      confirmPasswordField.setCustomValidity("");
    }
  });
});
