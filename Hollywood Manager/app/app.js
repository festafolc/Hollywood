function register(){
    function User(username, password){
        this.username = username;
        this.password = password;
    }
    let getUsername = document.getElementById("username").value;
    let getPassword = document.getElementById("password").value;

    newUser = new User(getUsername, getPassword);
    add();
}

let dataBase = [];
function add(){
    dataBase.push(newUser);
    console.log(dataBase);
}

function login(){
    const username = document.getElementById("admin").value;
    const password = document.getElementById("password").value;
    if(username=="admin" && password=="admin"){
        location.href="/admin/admin.html";
    } else {
        alert("Incorrect username or password");
    }
}