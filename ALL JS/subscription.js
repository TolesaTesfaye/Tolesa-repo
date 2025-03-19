document.addEventListener("DOMContentLoaded", () => {
  // Get all the subscribe buttons
  const subscribeButtons = document.querySelectorAll(".btn");

  // Loop through each button and add an event listener
  subscribeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const planName = event.target
        .closest(".plan")
        .querySelector("h3").textContent;
      alert(`You have successfully subscribed to the ${planName}!`);
    });
  });
});
