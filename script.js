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

window.onload = () => {
  wrapper.classList.add("btn-active");
};

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

 const invalidUsername = document.getElementById("username-error");
 const invalidEmail = document.getElementById("email-error");


 

 //User input validation using regex

 //Username validation
 let username = document.getElementById("username");
 let usernameValid = false;
 function validateUsername() {
  username.addEventListener("input", () =>{
    const currentUser = username.value;
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,}$/;
    const valid = usernameRegex.test(currentUser);
    
    if(valid){
      invalidUsername.classList.remove("display-invalid");
      usernameValid = true;
    } else{
      invalidUsername.classList.add("display-invalid");
      usernameValid = false;
    }
   });
 }
 validateUsername();
  
 //Registration Email validation
 let registerEmail = document.getElementById("email-register");
 let regEmailValid = false;
 function validateRegEmail (){
  registerEmail.addEventListener("input", ()=>{
    const invalidEmail = document.getElementById("email-error-r");
    const currentEmail = registerEmail.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(currentEmail);
  
    if(valid){
      invalidEmail.classList.remove("display-invalid");
      regEmailValid = true;
    }
    else{
      invalidEmail.classList.add("display-invalid");
      regEmailValid = false;
    }
  })
 }
 validateRegEmail();
  
  //Registration Password validation
  let registerPassword = document.getElementById("password-register");
  let regPasswordValid = false;
  function validateRegPassword () {
    registerPassword.addEventListener("input", () =>{
      const invalidPassword = document.getElementById("password-error-r");
      const currentPassword = registerPassword.value;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Z][a-zA-Z0-9]{7,}$/;
      const valid = passwordRegex.test(currentPassword);
      
      if(valid){
        invalidPassword.classList.remove("display-invalid");
        regPasswordValid = true;
      } else{
        invalidPassword.classList.add("display-invalid");
        regPasswordValid = false;
      }
     });
  }
  validateRegPassword();
  
  
  
  
  //Login Email validation
  let loginEmail = document.getElementById("email-login");
  let loginEmailValid = false;
  function validateLoginEmail () {
    loginEmail.addEventListener("input", ()=>{
      const invalidEmail = document.getElementById("email-error-l");
      const currentEmail = loginEmail.value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegex.test(currentEmail);
  
      if(valid){
        invalidEmail.classList.remove("display-invalid");
        loginEmailValid = true;
      }
      else{
        invalidEmail.classList.add("display-invalid");
        loginEmailValid = false;
      }
    })
  }
  validateLoginEmail()
  

  // // Login Password Validation
   let loginPassword = document.getElementById("password-login");
  // let loginPasswordValid = false;
  // function validateLoginPassword() {
  //   loginPassword.addEventListener("input", () =>{
  //     const invalidPassword = document.getElementById("password-error-l");
  //     const currentPassword = loginPassword.value;
  //     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Z][a-zA-Z0-9]{7,}$/;
  //     const valid = passwordRegex.test(currentPassword);
      
  //     if(valid){
  //       invalidPassword.classList.remove("display-invalid");
  //       loginPasswordValid = true;
  //     } else{
  //       invalidPassword.classList.add("display-invalid");
  //       loginPasswordValid = false;
  //     }
  //   });
  // }
  // validateLoginPassword();
  

  // Validate terms and conditions checkbox
  let termsConditions = document.getElementById("terms-conditions");
  let checked = false;
  termsConditions.addEventListener("input", () => {
    if(termsConditions){
      checked = true;
      termsConditions.classList.remove("unticked");
    }
    else{
      checked = false;
      }
    })
  


 const loginBtn = document.getElementById("login-btn");
 const registerBtn = document.getElementById("register-btn");

 

//Activate the register button
 registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(usernameValid);
  console.log(regEmailValid);
  console.log(regPasswordValid);
  console.log(checked)

  if (username.value == ""){
    alert("Username cannot be empty");
  }
  if(!usernameValid || !regPasswordValid || !regEmailValid ||!checked){
    alert("One or more of your inputs are incorrect!");
    if (!checked){
      termsConditions.classList.add("unticked");
    }
    return
  }
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
    alert("Registration successful!")
  }
   username.value = "";
   registerEmail.value = "";
   registerPassword.value = "";
   termsConditions.checked = false;
 });

 //Activate the login button
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(loginEmail.value === ""){
      alert("Username cannot be empty");
      return
    }
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
      // localStorage.setItem("name", currentUser.username);
      // localStorage.setItem("email", currentUser.loginEmail);
    }
    else{
      alert("User does not exist!")
    }
    loginEmail.value = "";
    loginPassword.value = "";
   })