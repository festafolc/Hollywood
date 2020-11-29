//Manage favourites lists
let app = new function() {
    this.element = document.getElementById('pFavourites');
    this.elementCinemas = document.getElementById('pFavouritesCinemas');
    this.favouritePeople = [];
    this.favouriteCinemas = [];

    //Favourite People
    this.starPeople = function(event) {
        let btn = event.getAttribute("data-key");
        let fav = this.favouritePeople.findIndex(item => item == btn);
        if(fav === -1){
            this.favouritePeople.push(btn);
            event.children[0].style = 'color: #FFDF00;'; //Star button is gold
        } else {
            this.favouritePeople.splice(fav, 1);
            event.children[0].style = ''; //Star button back to original color
        }
        this.showFavourites();
    };

    //Display favourite people list on the html document
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

    //Favourite cinemas
    this.starCinemas = function(ev) {
        let btnCinema = ev.getAttribute("data-key");
        let favCinemas = this.favouriteCinemas.findIndex(item => item == btnCinema);
        if(favCinemas === -1){
            this.favouriteCinemas.push(btnCinema);
            ev.children[0].style = 'color: #FFDF00;'; //Star button is gold
        } else {
            this.favouriteCinemas.splice(favCinemas, 1);
            ev.children[0].style = ''; //Star button back to original color
        }
        this.showFavouritesCinemas();
    };

    //Display favourite cinemas list on the html document
    this.showFavouritesCinemas = function (){
        let dataCinemas = '<h4>Your favourites cinemas are </h4>';
        if (this.favouriteCinemas.length > 0){
            for (i = 0; i < this.favouriteCinemas.length; i++){
                dataCinemas += this.favouriteCinemas[i] + ', ';
            }
        } else {
            dataCinemas = '';
        }
        return this.elementCinemas.innerHTML = dataCinemas.slice(0, -2); 
    };
};

//Register user and login
let regLog = new function() {
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
    
        alert("User has been registered ");
    }

    this.login = function(){
        let userLogin = document.getElementById('admin').value;
        let passwordLogin = document.getElementById('password').value;

        if(userLogin=="admin" && passwordLogin=="admin"){
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

        document.getElementById('admin').value = null;
        document.getElementById('password').value = null;
    }

    //Edit user profile
    this.editUser = function(){
        console.log(userName);
        console.log(userEmail);
        console.log(userPassword);
        let newUsernameEdition = document.getElementById('uEn').value;
        let newUserEmailEdition = document.getElementById('uEe').value;
        let newPasswordEdtion = document.getElementById('uEp').value;
        
        //Update new values for the user
        registerNewUser.name = newUsernameEdition;
        registerNewUser.email = newUserEmailEdition;
        registerNewUser.password = newPasswordEdtion;

        console.log(registerNewUser.name);
        console.log(registerNewUser.email);
        console.log(registerNewUser.password);

        alert("Changes has been saved successfully");
        document.getElementById('uEn').value = null;
        document.getElementById('uEe').value = null;
        document.getElementById('uEp').value = null;

    }
}

//Sections are display 'none' when open app
function load (){
    document.getElementById('people').style.display = 'none';
    document.getElementById('movies').style.display = 'none';
    document.getElementById('studios').style.display = 'none';
    document.getElementById('cinemas').style.display = 'none';
    document.getElementById('openEditProfile').style.display = 'none';
}

window.onload = load;