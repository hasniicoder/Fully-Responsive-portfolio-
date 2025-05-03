document.addEventListener("DOMContentLoaded", () => {
  // Toggle Navigation Menu
  const navToggle = document.querySelector(".fa-bars");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.querySelector(".nav-links").classList.toggle("show");
      navToggle.classList.toggle("show");
    });
  }

  // Social Media Links
  const socialLinks = {
    ".fa-facebook": "https://www.facebook.com/share/15ZoWwkaii/",
    ".fa-github": "https://github.com/hasniicoder",
    "#icon4": "https://www.facebook.com/share/15ZoWwkaii/",
    "#icon5": "https://github.com/hasniicoder",
    "#icon3": "https://www.youtube.com/@CodingZone-w3r"
  };

  Object.entries(socialLinks).forEach(([selector, url]) => {
    const icon = document.querySelector(selector);
    if (icon) {
      icon.addEventListener("click", () => window.open(url, "_blank"));
    }
  });

  // Card Click Event Handling
  const cardLinks = {
    ".first-card": "https://github.com/hasniicoder/To-do-app.git",
    ".third-card": "https://github.com/hasniicoder/Random-color-generator.git",
    ".fourth-card": "https://github.com/hasniicoder/Shilajeet-energy-drink-.git",
    ".fifth-card": "https://github.com/hasniicoder/palindrome-checker.git",
    ".sixth-card": "https://github.com/hasniicoder/RGB-color-generator.git",
    ".seventh-card": "https://www.newoaks.ai/hasnii.khan",
    ".eighth-card": "https://github.com/hasniicoder/counter-application.git",
    ".ninth-card": "https://github.com/hasniicoder/bmi-calculator.git"
  };

  Object.entries(cardLinks).forEach(([selector, url]) => {
    const card = document.querySelector(selector);
    if (card) {
      card.addEventListener("click", () => window.open(url, "_blank"));
    }
  });

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll(".nav-links a");
  if (navLinks) {
    navLinks.forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        const targetDiv = document.querySelector(href);
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
});