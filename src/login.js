'use strict';

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");    
    this.passwordInput = document.querySelector("#password");
    this.loginButton = document.querySelector("#login-button");
    //this.messageContainer = document.querySelector(".message-container");
  }
  submit = (event) => {
    event.preventDefault();
    const usersDB = db.getAllUsers();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const user = usersDB.find( (userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    })
    this.showMessage(user);
  }

  showMessage = (user) => {      
    if (user) this.redirect();
  }

  redirect = () => {
    document.querySelector('#success-login').classList.remove('no-display')
    document.querySelector('#forgot').classList.add('no-display')
    setTimeout( ()=> {
        location.assign('index.html')
        document.querySelector('#success-login').classList.add('no-display')
        document.querySelector('#forgot').classList.remove('no-display')
    }, 2500);
  }
}
const login = new Login();
login.loginButton.addEventListener("click", login.submit);
