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