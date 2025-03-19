document.addEventListener("DOMContentLoaded", function () {
  const dismissButtons = document.querySelectorAll(".dismiss-btn");
  const notificationList = document.querySelector(".notification-list");

  // Dismiss notification functionality
  dismissButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const notificationItem = button.closest(".notification-item");
      notificationItem.classList.add("fadeOut");

      // Remove the notification after animation
      setTimeout(() => {
        notificationItem.remove();

        // If no notifications left, show empty state message
        if (notificationList.children.length === 0) {
          showEmptyState();
        }
      }, 300);
    });
  });

  // Show empty state if no notifications left
  function showEmptyState() {
    const emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");
    emptyState.innerHTML = "<p>No new notifications.</p>";
    notificationList.appendChild(emptyState);
  }
});
