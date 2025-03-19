document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const manageSubscriptionsButton = document.querySelector(
    ".btn-large:nth-child(1)"
  );
  const viewInvoicesButton = document.querySelector(".btn-large:nth-child(2)");

  // Stats data
  let activeSubscriptions = 3;
  let nextPayment = 149.99;
  let totalSpent = 899.94;
  let nextPaymentDate = "Jul 15, 2024";

  // Stats section elements
  const activeSubscriptionsElement = document.querySelector(
    ".stat-card:nth-child(1) .stat-value"
  );
  const nextPaymentElement = document.querySelector(
    ".stat-card:nth-child(2) .stat-value"
  );
  const nextPaymentDateElement = document.querySelector(
    ".stat-card:nth-child(2) .stat-sub"
  );
  const totalSpentElement = document.querySelector(
    ".stat-card:nth-child(3) .stat-value"
  );

  // Update stats
  function updateStats() {
    activeSubscriptionsElement.textContent = activeSubscriptions;
    nextPaymentElement.textContent = `$${nextPayment.toFixed(2)}`;
    nextPaymentDateElement.textContent = nextPaymentDate;
    totalSpentElement.textContent = `$${totalSpent.toFixed(2)}`;
  }

  // Mock data changes
  setInterval(() => {
    activeSubscriptions = Math.floor(Math.random() * 10); // Random number between 0 and 10
    nextPayment = (Math.random() * 200).toFixed(2); // Random number between $0 and $200
    totalSpent = (Math.random() * 1000).toFixed(2); // Random number between $0 and $1000

    updateStats();
  }, 5000); // Update stats every 5 seconds for demo purposes

  // Quick Access Button Actions
  manageSubscriptionsButton.addEventListener("click", () => {
    alert("Managing subscriptions...");
    // In a real application, you could navigate to a subscription management page
  });

  viewInvoicesButton.addEventListener("click", () => {
    alert("Viewing invoices...");
    // In a real application, you could navigate to an invoice viewing page
  });

  // Initialize stats on load
  updateStats();
});
