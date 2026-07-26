const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll(".main-navigation a");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

const dropdown = document.querySelector(".nav-dropdown");
const dropdownButton = document.querySelector(".nav-dropdown-button");

function closeDropdown() {
  if (!dropdown || !dropdownButton) return;
  dropdown.classList.remove("open");
  dropdownButton.setAttribute("aria-expanded", "false");
}

if (dropdown && dropdownButton) {
  dropdownButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) closeDropdown();
  });
}

const currentYear = document.getElementById("current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const newsCards = document.querySelectorAll("[data-modal]");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
let activeModal = null;
let lastFocusedElement = null;

function openNewsModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  activeModal = modal;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  const closeButton = modal.querySelector(".news-modal-close");
  if (closeButton) closeButton.focus();
}

function closeNewsModal() {
  if (!activeModal) return;
  activeModal.classList.remove("open");
  activeModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
  if (lastFocusedElement) lastFocusedElement.focus();
  activeModal = null;
}

newsCards.forEach((card) => {
  card.addEventListener("click", () => openNewsModal(card.dataset.modal));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openNewsModal(card.dataset.modal);
    }
  });
});

modalCloseButtons.forEach((button) => button.addEventListener("click", closeNewsModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNewsModal();
    closeDropdown();
  }
});
