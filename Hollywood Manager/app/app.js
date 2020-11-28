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
console.log("hola");
function login(){
    console.log("testando");
    // username = document.getElementById("admin").value;
    // password = document.getElementById("password").value;
    // console.log(username);
    // console.log(password);
    // if(username=="admin" && password=="admin"){
    //     window.location.href="/admin/admin.html";
    // } else {
    //     alert("Incorrect username or password");
    // }
}