let app = new function() {
    this.element = document.getElementById('pFavourites');
    this.favouritePeople = [];

    this.starPeople = function(event) {
        let btn = event.getAttribute("data-key");
        let fav = this.favouritePeople.findIndex(item => item == btn);
        if(fav === -1){
            this.favouritePeople.push(btn);
            event.children[0].style = 'color: #FFDF00;';
        } else {
            this.favouritePeople.splice(fav, 1);
            event.children[0].style = '';
        }
        this.showFavourites();
    };

    this.showFavourites = function (){
        let data = '<h4>Your favourites are </h4>';
        if (this.favouritePeople.length > 0){
            for (i = 0; i < this.favouritePeople.length; i++){
                data += this.favouritePeople[i] + ', ';
            }
        } else {
            data = '';
        }
        return this.element.innerHTML = data.slice(0, -2); 
    };
};


let regLog = new function() {
    // this.edition = document.getElementById('headerFather');
    this.registerUser = [];

    this.register = function(){
        userName = document.getElementById('usernameReg').value;
        userEmail = document.getElementById('emailReg').value;
        userPassword = document.getElementById('passwordReg').value;
    
        registerNewUser = {
            name : userName,
            email : userEmail,
            password : userPassword
          }
        
        this.registerUser.push(JSON.parse(JSON.stringify(registerNewUser)));
    
        document.getElementById('usernameReg').value = null;
        document.getElementById('emailReg').value = null;
        document.getElementById('passwordReg').value = null;
    
        alert("User has been register");
    }



    this.login = function(){
        let userLogin = document.getElementById('admin').value;
        let passwordLogin = document.getElementById('password').value;
        const usernameAdmin = document.getElementById("admin").value;
        const passwordAdmin = document.getElementById("password").value;

        if(usernameAdmin=="admin" && passwordAdmin=="admin"){
            window.open("../admin/admin.html");
        }else if (userLogin==registerNewUser.name && passwordLogin==registerNewUser.password) {
            alert("Usuario logado com sucesso!");
            document.getElementById('people').style.display = 'block';
            document.getElementById('movies').style.display = 'block';
            document.getElementById('studios').style.display = 'block';
            document.getElementById('cinemas').style.display = 'block';
            document.getElementById('openEditProfile').style.display = 'inline-block';
        } 
        else {
            alert("Incorrect username or password");
        }
    }

    this.editUser = function(){
        console.log(userName);
        console.log(userEmail);
        console.log(userPassword);
        let newUsernameEdition = document.getElementById('uEn').value;
        let newUserEmailEdition = document.getElementById('uEe').value;
        let newPasswordEdtion = document.getElementById('uEp').value;
        
        registerNewUser.name = newUsernameEdition;
        registerNewUser.email = newUserEmailEdition;
        registerNewUser.password = newPasswordEdtion;

        console.log(registerNewUser.name);
        console.log(registerNewUser.email);
        console.log(registerNewUser.password);

    }
}

function load (){
    document.getElementById('people').style.display = 'none';
    document.getElementById('movies').style.display = 'none';
    document.getElementById('studios').style.display = 'none';
    document.getElementById('cinemas').style.display = 'none';
    document.getElementById('openEditProfile').style.display = 'none';
}

window.onload = load;

