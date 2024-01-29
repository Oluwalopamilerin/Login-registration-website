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

 const loginEmail = document.getElementById("email-login");
 const loginPassword = document.getElementById("password-login");
 const username = document.getElementById("username");
 const registerEmail = document.getElementById("email-register");
 const registerPassword = document.getElementById("password-register");



 registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  

  // Create an array to hold every user entry in local storage
  let userRecords = new Array();
  // Check whether the user entry is available in the array; If available, retrieve the details, else return an empty array
  userRecords = JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")): []

  //Check if the email entry is not already in local storage to avoid duplicate mail entries; else, store the details in the array.
  if (userRecords.some((v)=>{
    return v.registerEmail == registerEmail.value
  })){
    alert("Duplicate data");
  }
  else{
    userRecords.push({
      "username":username.value,
      "registerEmail": registerEmail.value,
      "registerPassword": registerPassword.value
    })
    // Store the new user in local storage.
    localStorage.setItem("users", JSON.stringify(userRecords))
  }
 });


  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")): [];

    // Check email and password for login
    if(userRecords.some((v) => {
      return v.registerEmail == loginEmail.value && v.registerPassword == loginPassword.value
    })){
      alert("Login successful!")
      // Retrieve the current user's details
      let currentUser = userRecords.filter((v) => {
       return v.loginEmail == registerEmail.value && v.loginPassword == registerPassword.value
      })[0];

      //Set the user's details for future use
      localStorage.setItem("name", currentUser.username);
      localStorage.setItem("email", currentUser.loginEmail);
    }
    else{
      alert("Login unsuccessful!")
    }
   })