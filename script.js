const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn-login-popup");
const close = document.querySelector(".icon-close");
const menuIcon= document.querySelector(".menu-icon");
const navigationLinks = document.querySelector(".navigation")

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("btn-active");
  navigationLinks.classList.remove("menu-active");
});

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active")
});

close.addEventListener("click", () => {
  wrapper.classList.remove("btn-active")
})

menuIcon.addEventListener("click", () => {
  navigationLinks.classList.toggle("menu-active")
})