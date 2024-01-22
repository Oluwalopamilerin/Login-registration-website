const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn-login-popup");
const close = document.querySelector(".icon-close")

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("btn-active");
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