// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and button
  const form = document.querySelector(".contact-form");
  const submitButton = document.querySelector(".btn-submit");

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple client-side validation (ensure fields are not empty)
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Optionally, validate email format using regex (basic validation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If validation passes, show a success message (you can send data via AJAX if needed)
    alert("Thank you for your message! We will get back to you soon.");

    // Reset the form
    form.reset();
  });
});
