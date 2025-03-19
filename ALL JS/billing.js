// Function to format the card number input
function formatCardNumber(input) {
  let cardNumber = input.value.replace(/\D/g, ""); // Remove non-numeric characters
  cardNumber = cardNumber.substring(0, 16); // Limit to 16 digits

  // Add spaces after every 4 digits
  let formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

  input.value = formattedCardNumber;

  // Update the card preview
  document.getElementById("preview-card-number").textContent =
    formattedCardNumber || "XXXX XXXX XXXX XXXX";
}

// Function to validate numeric input (for CVV)
function validateNumericInput(input) {
  let value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
  input.value = value.substring(0, 3); // Limit to 3 digits

  // Update the CVV preview
  document.getElementById("preview-cvv").textContent = value || "CVV";
}

// Function to update the expiry date preview
function updateExpiryDate(input) {
  document.getElementById("preview-expiry-date").textContent =
    input.value || "MM/YY";
}

// Add event listener for the expiry date input
document.getElementById("expiry-date").addEventListener("input", function () {
  updateExpiryDate(this);
});

// Form submission handler (you can customize this as needed)
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Here you can add validation for card number, expiry date, CVV, etc.
    const cardNumber = document
      .getElementById("card-number")
      .value.replace(/\s+/g, "");
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Check if all fields are filled
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all fields.");
      return;
    }

    // Here, you can send the payment data to your server
    console.log("Payment submitted", { cardNumber, expiryDate, cvv });

    // For now, just show a success message
    alert("Payment successful!");
  });
