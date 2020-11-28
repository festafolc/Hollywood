let favouritePeople = [];

function starPeople(event) {
    let btn = document.getElementById(event.dataset.key)
    console.log(btn.console.log(event));
}

function register(){
    let registerUser = [];

    let userName = document.getElementById('username').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    let registerNewUser = {
        name : userName,
        email : userEmail,
        password : userPassword
      }
    
    registerUser.push(JSON.parse(JSON.stringify(registerNewUser)));

    document.getElementById('username').value = null;
    document.getElementById('email').value = null;
    document.getElementById('password').value = '';

    alert("User has been register");

    console.log(registerUser);
}