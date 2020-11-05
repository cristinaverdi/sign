"use strict";

class Signup {
    constructor() {
      this.nameInput = document.querySelector("#name-signup");
      this.emailInput = document.querySelector("#email-signup");
      this.passwordInput = document.querySelector("#password-signup");
      this.repeatPasswordInput = document.querySelector("#repeat-password-signup");
      this.buttonInput = document.querySelector("#signup-button");
      //this.errorsWrapper = document.querySelector(".message-container");
    }

    validateEmail = (event) => {
        console.log("email!!!")
        const email = event.target.value;  
        console.log(email)
        validator.validateValidEmail(email);  
        
      const errors = validator.getErrors(); 
        console.log(errors)
       if (!errors.invalidEmailError) {        
        validator.validateUniqueEmail(email);
      }
      //this.setErrorMessages();
      //this.checkButton();
    }

    validatePassword = (event) => {
        console.log('passqoefsaf!')
      const password = event.target.value;
      console.log(password)
      const passwordRepeat = this.repeatPasswordInput.value;
      validator.validatePassword(password);
      validator.validatePasswordRepeat(password, passwordRepeat);
      console.log(validator.getErrors())
      //this.setErrorMessages();
      //this.checkButton();
    }

    handleRepeatPasswordInput = (event) => {
        console.log('repeat passqoefsaf!')

      const passwordRepeat = event.target.value;
      console.log(passwordRepeat)
      const password = this.passwordInput.value;
      validator.validatePassword(password);
      validator.validatePasswordRepeat(password, passwordRepeat);
      //this.setErrorMessages();
      //this.checkButton();
    }

    saveData = (event) => {
      event.preventDefault();
      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const password = this.passwordInput.value;
      const repeatPassword = this.repeatPasswordInput.value;
      const newUser = new User(name, email, password);
      db.saveNewUser(newUser);
      this.nameInput.value = "";
      this.emailInput.value = "";
      this.passwordInput.value = "";
      this.repeatPasswordInput.value = "";
    //   //this.showSuccessMessage();
    //   //this.removeMessages();
      validator.resetValidator();
    //   //this.buttonInput.disabled = true;
    //   //window.location.href="/index.html"
      console.log('Eureeeeekaaa chin!!!')
    }
    
    addListeners = () => {
      console.log('adding!!!')

      this.emailInput.addEventListener("input", this.validateEmail);
      this.passwordInput.addEventListener("input", this.validatePassword);
      this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener("click", this.saveData);
      console.log('uooooo!!!')

    }
    
    // showSuccessMessage = () => {
    //   this.errorsWrapper.innerHTML = "";  
    //   const errorsObj = validator.getErrors();      
    //   const errorsStringsArr = Object.values(errorsObj);  
    //   if (errorsStringsArr.length > 1) {
    //     return;
    //   }
    //   const successMessageP = document.createElement('p');
    //   successMessageP.innerHTML = "La cuenta ha sido creada con exito";  
    //   this.errorsWrapper.appendChild(successMessageP);
    // }
    
    // checkButton = () => {
    //   const errorsObj = validator.getErrors();
    //   const errorsArr = Object.values(errorsObj);  
    //   if(errorsArr.length > 0) {
    //     this.buttonInput.disabled = true;
    //   }
    //   else {
    //     this.buttonInput.disabled = false;
    //   }
    // }
    
    // removeMessages = () => {
    //   setTimeout( () => {
    //     this.errorsWrapper.innerHTML = "";
    //   }, 2000)
    // }
    
    // setErrorMessages = () => {     
    //   this.errorsWrapper.innerHTML = "";     
    //   const errorsObj = validator.getErrors(); 
    //   const errorsStringsArr = Object.values(errorsObj);
    //   errorsStringsArr.forEach( (errorStr) => {
    //     const errorMessageP = document.createElement('p');
    //     errorMessageP.innerHTML = errorStr;
    //     this.errorsWrapper.appendChild(errorMessageP);
    //   })
    // }
  }
  
  let signup = new Signup();
  console.log("caquita")
  window.addEventListener("load", signup.addListeners);
