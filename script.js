const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn-login-popup");
const btnPopupBig = document.querySelector(".btn-login-popup-big");
const close = document.querySelector(".icon-close");
const menuIcon= document.querySelector(".menu-icon");
const navigationLinks = document.querySelector(".navigation");

const closeSidebar = document.querySelector(".sidebar-close");
const sideBar = document.querySelector(".nav-links.sidebar");
const registerNav = document.querySelector(".btn-register-popup");
const registerNavBig = document.querySelector(".btn-register-popup-big");
const loginForm = document.querySelector(".form-box.login");


btnPopup.addEventListener("click", () => {
   wrapper.classList.add("btn-active");
   wrapper.classList.remove("register-active");
   sideBar.classList.remove("active-sidebar");
  //  navigationLinks.classList.remove("menu-active");
 });

 btnPopupBig.addEventListener("click", () =>  {
  wrapper.classList.add("btn-active");
  wrapper.classList.remove("register-active");
  
 })

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("register-active");
  });

  loginLink.addEventListener("click", () => {
   wrapper.classList.remove("register-active")
 });

  close.addEventListener("click", () => {
   wrapper.classList.remove("btn-active")
 });

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("active-sidebar");
  wrapper.classList.remove("btn-active")
  //  navigationLinks.classList.toggle("menu-active")
});

 closeSidebar.addEventListener("click", () => {
  sideBar.classList.remove("active-sidebar");
 });

 registerNav.addEventListener("click", () => {
  wrapper.classList.add("btn-active");
  wrapper.classList.add("register-active");
  sideBar.classList.remove("active-sidebar");
 });

 registerNavBig.addEventListener("click", () => {
  wrapper.classList.add("btn-active");
  wrapper.classList.add("register-active");
 });


 const loginBtn = document.getElementById("login-btn");
 const registerBtn = document.getElementById("register-btn");