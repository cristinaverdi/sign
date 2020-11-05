"use strict";

class Signup {
    constructor() {
      // store all of the input elements
      this.nameInput = document.querySelector("#user");
      this.passwordInput = document.querySelector("#password");
      this.repeatPasswordInput = document.querySelector("#repeat-password");
      this.emailInput = document.querySelector("#email");
      this.buttonInput = document.querySelector("#signup-button");
      this.errorsWrapper = document.querySelector(".message-container");
    }
  
    // handle the email input
    handleEmailInput = (event) => {
      const emailInput = event.target;
      const email = emailInput.value;
  
      validator.validateValidEmail(email);
      validator.validateUniqueEmail(email);
  
      this.setErrorMessages();
    };
  
    // handle the password input
    handlePasswordInput = (event) => {
      const passwordInput = event.target;
      const repeatPasswordInput = this.repeatPasswordInput;
  
      const password = passwordInput.value;
      const repeatPassword = repeatPasswordInput.value;
  
      validator.validatePassword(password);
      validator.validateRepeatPassword(password, repeatPassword);
  
      this.setErrorMessages();
    };
  
    // handle the repeat-password input
    // password confirmation
    handleRepeatPasswordInput = (event) => {
      const passwordInput = event.target;
      const repeatPasswordInput = this.repeatPasswordInput;
  
      const password = passwordInput.value;
      const repeatPassword = repeatPasswordInput.value;
  
      validator.validatePassword(password);
      validator.validateRepeatPassword(password, repeatPassword);
  
      this.setErrorMessages();
    };
  
    // used to show messages below the Signup form
    setErrorMessages = () => {
  
      // Clear previous messages, so that they don't add up
      this.errorsWrapper.innerHTML = "";
  
      const errorsObj = validator.getErrors();
  
      
      // returns an array of objects values (only error strings)
      const errorStringsArr = Object.values( errorsObj);
  
      errorStringsArr.forEach( (str) => {
        const p = document.createElement('p');
        p.textContent = str;
  
        this.errorsWrapper.appendChild(p);
      })
    }
  
    // handle the sending of the data ( on submit )
    saveData = (event) => {
      event.preventDefault();
      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const password = this.passwordInput.value;
      const newUser = new User(name, email, password);

      db.saveNewUser(newUser);
  
      // empty the form
      this.nameInput.value = "";
      this.emailInput.value = "";
      this.passwordInput.value = "";
    };
  
    addListeners = () => {
      this.emailInput.addEventListener("input", this.handleEmailInput);
      this.passwordInput.addEventListener("input", this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener("click", this.saveData);
    }
  
  }
  
  const signup = new Signup();
  
  // Add event listeners once the page and all the resources are loaded
  
  window.addEventListener('load', signup.addListeners )



class Login {
  constructor() {
    this.userInput = document.querySelector("#user");
    this.passwordInput = document.querySelector("#pass");
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.querySelector("#login-button");
  }


  // handle the login (when user clicks the Login button)
  handleSubmit = (event) => {
    // prevent the reload of the page ( form subit button reloads the page)
    event.preventDefault();

    // get the values from the inputs
    const user = this.userInput.value;       
    const password = this.passInput.value;

    // Get the users from db (localStorage)
    const users = db.getAllUsers();

    // Check the password and email exist in the db (localStorage) - 
    // arr.find() - returns the first element that matches the experssion

    // [ {uros  123},  {sergi  123}, {  tasha   123}   ]

    const user = users.find( function(userObj) {
      if (userObj.email === email &&  userObj.password === password) {
        return true;
      }
    })

    // empty the container so that the messages don't add up
    this.messageContainer.innerHTML = "";
    const p = document.createElement('p');

    // set the message
    if (!user) {
      p.textContent = "Email or password are incorrect!";
    }
    else {
      p.textContent = `Hello ${user.name}!`;
      p.classList.add('correct-message');
      // Redirect to the dashboard page
      this.redirect();
    }

    this.messageContainer.appendChild(p);

  }


  redirect = () => {
    setTimeout( function () {
      location.assign("dashboard.html")
    }, 2000)

    // setTimeout( () => location.assign("dashboard.html"), 2000)

  }

}




const login = new Login();

window.addEventListener('load', function () {

  login.loginButton.addEventListener('click', login.handleSubmit );

} )