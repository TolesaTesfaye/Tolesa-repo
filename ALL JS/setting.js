document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const languageSelect = document.getElementById("language");
  const timezoneSelect = document.getElementById("timezone");
  const themeButtons = document.querySelectorAll(".theme-btn");
  const notificationCheckboxes = document.querySelectorAll(
    'input[name="notifications"]'
  );
  const saveButton = document.querySelector(".save-btn");

  // Load saved preferences from localStorage
  const savedSettings = JSON.parse(localStorage.getItem("userSettings")) || {};

  if (savedSettings.language) {
    languageSelect.value = savedSettings.language;
  }
  if (savedSettings.timezone) {
    timezoneSelect.value = savedSettings.timezone;
  }
  if (savedSettings.theme) {
    document.body.classList.add(savedSettings.theme); // Apply saved theme
    // Highlight the active theme button
    document
      .querySelector(`.theme-btn[data-theme="${savedSettings.theme}"]`)
      .classList.add("active");
  }
  if (savedSettings.notifications) {
    savedSettings.notifications.forEach((notification) => {
      document.querySelector(`input[value="${notification}"]`).checked = true;
    });
  }

  // Event listener for language preference change
  languageSelect.addEventListener("change", function () {
    saveSettings();
  });

  // Event listener for timezone preference change
  timezoneSelect.addEventListener("change", function () {
    saveSettings();
  });

  // Event listener for theme change (light/dark)
  themeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedTheme = button.dataset.theme;
      // Remove the current theme
      document.body.classList.remove("light", "dark");
      // Apply the selected theme
      document.body.classList.add(selectedTheme);
      // Highlight the active theme button
      themeButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      saveSettings(); // Save theme preference
    });
  });

  // Event listener for notification preference change
  notificationCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      saveSettings();
    });
  });

  // Save settings function
  function saveSettings() {
    const selectedLanguage = languageSelect.value;
    const selectedTimezone = timezoneSelect.value;
    const selectedTheme = document.body.classList.contains("light")
      ? "light"
      : "dark";
    const selectedNotifications = Array.from(notificationCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const userSettings = {
      language: selectedLanguage,
      timezone: selectedTimezone,
      theme: selectedTheme,
      notifications: selectedNotifications,
    };

    // Save settings to localStorage
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
    console.log("Settings saved:", userSettings); // Optional debug log
  }

  // Optional: Save settings on form submit (to prevent reloading)
  document
    .getElementById("settings-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission (reload)
      saveSettings(); // Save settings when form is submitted
      alert("Settings saved successfully!"); // Optional success message
    });
});
